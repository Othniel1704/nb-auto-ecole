import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12", centered && "text-center", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold text-foreground mb-2", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-muted-foreground max-w-2xl", centered && "mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
