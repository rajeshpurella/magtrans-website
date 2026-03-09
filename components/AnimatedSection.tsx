"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

interface AnimatedSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function AnimatedSection({
  id,
  title,
  subtitle,
  children,
  className = "",
  noPadding,
}: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={`${noPadding ? "" : SECTION_PADDING} ${className}`}
    >
      <div className={CONTAINER_CLASS}>
        {(title || subtitle) && (
          <motion.div
            {...fadeUp}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
          >
            {title && (
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
