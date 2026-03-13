import type { ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export interface KpiStatProps {
  value: ReactNode;
  label: string;
  helperText?: string;
  className?: string;
}

export function KpiStat({ value, label, helperText, className }: KpiStatProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
        {value}
      </div>
      <div className="text-sm sm:text-base font-medium text-zinc-600">
        {label}
      </div>
      {helperText ? (
        <div className="text-xs sm:text-sm text-zinc-500">{helperText}</div>
      ) : null}
    </div>
  );
}

