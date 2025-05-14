// use server'

/**
 * @fileOverview This file defines a Genkit flow for generating SEO-optimized content.
 *
 * - seoContentGeneration - A function that generates SEO content for a given page.
 * - SeoContentGenerationInput - The input type for the seoContentGeneration function.
 * - SeoContentGenerationOutput - The return type for the seoContentGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SeoContentGenerationInputSchema = z.object({
  pageTitle: z.string().describe('The title of the page.'),
  pageContent: z.string().describe('The main content of the page.'),
  focusKeywords: z.string().describe('The focus keywords for the page.'),
});
export type SeoContentGenerationInput = z.infer<typeof SeoContentGenerationInputSchema>;

const SeoContentGenerationOutputSchema = z.object({
  metaDescription: z.string().describe('The SEO-optimized meta description for the page.'),
  keywords: z.string().describe('Relevant keywords for the page.'),
  titleTag: z.string().describe('The SEO-optimized title tag for the page.'),
});
export type SeoContentGenerationOutput = z.infer<typeof SeoContentGenerationOutputSchema>;

export async function seoContentGeneration(input: SeoContentGenerationInput): Promise<SeoContentGenerationOutput> {
  return seoContentGenerationFlow(input);
}

const seoContentPrompt = ai.definePrompt({
  name: 'seoContentPrompt',
  input: {schema: SeoContentGenerationInputSchema},
  output: {schema: SeoContentGenerationOutputSchema},
  prompt: `You are an SEO expert. Generate SEO-optimized content for the following page, including a meta description, relevant keywords, and an optimized title tag.

Page Title: {{{pageTitle}}}
Page Content: {{{pageContent}}}
Focus Keywords: {{{focusKeywords}}}

Instructions:

*   The meta description should be concise and engaging, enticing users to click on the search result.
*   The keywords should be highly relevant to the page content and focus keywords.
*   The title tag should be optimized for both search engines and user readability.
`,
});

const seoContentGenerationFlow = ai.defineFlow(
  {
    name: 'seoContentGenerationFlow',
    inputSchema: SeoContentGenerationInputSchema,
    outputSchema: SeoContentGenerationOutputSchema,
  },
  async input => {
    const {output} = await seoContentPrompt(input);
    return output!;
  }
);
