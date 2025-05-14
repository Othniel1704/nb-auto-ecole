"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { generateSeoContentAction, type SeoFormState } from "@/app/seo-tools/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const initialState: SeoFormState = {
  message: null,
  errors: null,
  output: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        "Generate SEO Content"
      )}
    </Button>
  );
}

export function SeoForm() {
  const [state, formAction] = useFormState(generateSeoContentAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors && state.output) {
      toast({ title: "Success!", description: state.message, variant: "default" });
    } else if (state.message && state.errors) {
      toast({ title: "Error", description: state.message, variant: "destructive" });
      // Log specific errors
      if (state.errors.pageTitle) console.error("Page Title Error:", state.errors.pageTitle.join(", "));
      if (state.errors.pageContent) console.error("Page Content Error:", state.errors.pageContent.join(", "));
      if (state.errors.focusKeywords) console.error("Focus Keywords Error:", state.errors.focusKeywords.join(", "));
      if (state.errors.ai) console.error("AI Error:", state.errors.ai.join(", "));
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>AI-Powered SEO Content Generator</CardTitle>
          <CardDescription>
            Enter page details to generate optimized meta descriptions, keywords, and title tags.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pageTitle">Page Title</Label>
              <Input id="pageTitle" name="pageTitle" placeholder="Enter the title of your page" />
              {state.errors?.pageTitle && (
                <p className="text-sm text-destructive">{state.errors.pageTitle.join(", ")}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="pageContent">Page Content</Label>
              <Textarea
                id="pageContent"
                name="pageContent"
                placeholder="Paste or write the main content of your page here."
                className="min-h-[150px]"
              />
              {state.errors?.pageContent && (
                <p className="text-sm text-destructive">{state.errors.pageContent.join(", ")}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="focusKeywords">Focus Keywords</Label>
              <Input
                id="focusKeywords"
                name="focusKeywords"
                placeholder="e.g., driving school Vigneux, permis B, code de la route"
              />
              {state.errors?.focusKeywords && (
                <p className="text-sm text-destructive">{state.errors.focusKeywords.join(", ")}</p>
              )}
            </div>
            {state.errors?.ai && (
                <p className="text-sm text-destructive">{state.errors.ai.join(", ")}</p>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.output && (
        <Card className="w-full max-w-2xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Generated SEO Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="generatedTitleTag" className="font-semibold">Optimized Title Tag:</Label>
              <Input id="generatedTitleTag" readOnly value={state.output.titleTag} className="mt-1 bg-muted" />
            </div>
            <div>
              <Label htmlFor="generatedMetaDescription" className="font-semibold">Meta Description:</Label>
              <Textarea id="generatedMetaDescription" readOnly value={state.output.metaDescription} className="mt-1 bg-muted min-h-[100px]" />
            </div>
            <div>
              <Label htmlFor="generatedKeywords" className="font-semibold">Keywords:</Label>
              <Textarea id="generatedKeywords" readOnly value={state.output.keywords} className="mt-1 bg-muted min-h-[80px]" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
