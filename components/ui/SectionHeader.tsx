import type { ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SectionHeaderAlign = "left" | "center";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: SectionHeaderAlign;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <header
      className={cn(
        "flex flex-col gap-3 sm:gap-4 max-w-3xl",
        alignment,
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-emerald-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

