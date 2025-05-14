// @/app/seo-tools/actions.ts
"use server";

import { seoContentGeneration, type SeoContentGenerationInput, type SeoContentGenerationOutput } from "@/ai/flows/seo-content-generation";
import { z } from "zod";

const SeoFormSchema = z.object({
  pageTitle: z.string().min(1, "Page title is required."),
  pageContent: z.string().min(1, "Page content is required."),
  focusKeywords: z.string().min(1, "Focus keywords are required."),
});

export type SeoFormState = {
  message?: string | null;
  errors?: {
    pageTitle?: string[];
    pageContent?: string[];
    focusKeywords?: string[];
    ai?: string[];
  } | null;
  output?: SeoContentGenerationOutput | null;
};

export async function generateSeoContentAction(
  prevState: SeoFormState,
  formData: FormData
): Promise<SeoFormState> {
  const validatedFields = SeoFormSchema.safeParse({
    pageTitle: formData.get("pageTitle"),
    pageContent: formData.get("pageContent"),
    focusKeywords: formData.get("focusKeywords"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      output: null,
    };
  }

  const inputData: SeoContentGenerationInput = validatedFields.data;

  try {
    const result = await seoContentGeneration(inputData);
    if (result) {
      return {
        message: "SEO content generated successfully!",
        errors: null,
        output: result,
      };
    } else {
      return {
        message: "AI generation failed to produce output.",
        errors: { ai: ["The AI model did not return any content."] },
        output: null,
      };
    }
  } catch (error) {
    console.error("Error calling seoContentGeneration flow:", error);
    let errorMessage = "An unexpected error occurred during AI content generation.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      message: "Error generating SEO content.",
      errors: { ai: [errorMessage] },
      output: null,
    };
  }
}
