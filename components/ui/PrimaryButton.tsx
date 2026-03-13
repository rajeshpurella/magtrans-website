import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariantElement = "button" | "link";

export interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

export function PrimaryButton({
  href,
  iconLeft,
  iconRight,
  children,
  className,
  fullWidth,
  target,
  rel,
  ...buttonProps
}: PrimaryButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-full px-6 py-3 text-sm sm:text-base font-medium",
    "bg-emerald-600 text-white",
    "hover:bg-emerald-700 focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    "transition-all duration-200",
    fullWidth ? "w-full" : "",
    className,
  );

  const content = (
    <>
      {iconLeft ? <span className="shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="shrink-0">{iconRight}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} {...buttonProps}>
      {content}
    </button>
  );
}

