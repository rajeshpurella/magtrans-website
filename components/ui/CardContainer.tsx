import type { ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export interface CardContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  interactive?: boolean;
}

export function CardContainer({
  children,
  className,
  as: Component = "article",
  interactive,
}: CardContainerProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-zinc-100 bg-white/90 shadow-sm",
        "transition-shadow transition-transform duration-200",
        interactive && "hover:shadow-md hover:-translate-y-0.5",
        "backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </Component>
  );
}

