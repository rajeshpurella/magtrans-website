import type { ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SectionBackground = "white" | "muted" | "dark" | "transparent";

export interface SectionShellProps {
  children: ReactNode;
  id?: string;
  background?: SectionBackground;
  className?: string;
  innerClassName?: string;
  "aria-label"?: string;
}

const bgMap: Record<SectionBackground, string> = {
  white: "bg-white",
  muted: "bg-zinc-50",
  dark: "bg-zinc-900 text-white",
  transparent: "",
};

export function SectionShell({
  children,
  id,
  background = "white",
  className,
  innerClassName,
  "aria-label": ariaLabel,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "w-full",
        bgMap[background],
        "py-12 sm:py-16 md:py-20",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 sm:px-8 lg:px-10",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

