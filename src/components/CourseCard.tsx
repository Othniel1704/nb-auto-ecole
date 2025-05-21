
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// This interface is for the props the CourseCard component itself receives.
// It's a summary/view model of the more detailed Course data.
export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  imageHint?: string;
  price: string; // This will be the summary price like "À partir de X€" or "Selon prestation"
  ageRequirement?: string;
  // If you want to show a few key features directly on the card:
  // features?: string[]; // Example: pass first 3 features of the main package
}

interface CourseCardProps {
  course: Course;
  className?: string; // Added className prop for animation
}

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <Card className={cn(
      "flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out",
      className // Apply className for animations
    )}>
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={course.imageUrl}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={course.imageHint || "driving lesson"}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{course.title}</CardTitle>
        <CardDescription>{course.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* 
          If you decide to pass a few key features to display on the card:
          {course.features && course.features.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Points clés :</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-0.5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        */}
        {course.ageRequirement && <p className="text-sm text-muted-foreground mb-2"><strong>Âge requis :</strong> {course.ageRequirement}</p>}
        <p className="text-2xl font-bold text-accent">{course.price}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          {/* Link to the detailed pricing page, potentially with an anchor to the specific course/package */}
          <Link href={`/formations-tarifs#${course.id}`}>Voir les détails & S&apos;inscrire</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
