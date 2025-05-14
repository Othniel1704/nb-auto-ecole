import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";

export interface Testimonial {
  name: string;
  date?: string;
  text: string;
  rating?: number; // Optional rating from 1 to 5
  course?: string; // Optional course taken
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col bg-secondary hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex-grow flex flex-col">
        <MessageSquare className="h-8 w-8 text-primary mb-4" />
        <p className="text-muted-foreground italic mb-4 flex-grow">&quot;{testimonial.text}&quot;</p>
        <div className="mt-auto">
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          {testimonial.course && <p className="text-sm text-primary">{testimonial.course}</p>}
          {testimonial.date && <p className="text-xs text-muted-foreground">{testimonial.date}</p>}
          {testimonial.rating && (
            <div className="flex mt-2">
              {Array(5).fill(0).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonial.rating! ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
