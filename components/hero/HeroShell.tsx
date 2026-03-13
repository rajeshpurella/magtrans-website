"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface HeroShellProps {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  overlay?: ReactNode;
}

export function HeroShell({
  id,
  imageSrc,
  imageAlt,
  children,
  overlay,
}: HeroShellProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      className="relative w-full overflow-hidden min-h-[calc(100vh-80px)] flex items-start"
    >
      <motion.div
        key={imageSrc}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0"
        aria-hidden
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-105 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/25 via-slate-900/10 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full">{children}</div>

      {overlay ? (
        <div className="absolute inset-0 z-20">{overlay}</div>
      ) : null}
    </section>
  );
}

