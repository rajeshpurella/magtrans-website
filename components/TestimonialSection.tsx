"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonial: Testimonial;
}

export default function TestimonialSection({
  title,
  subtitle,
  testimonial,
}: TestimonialSectionProps) {
  return (
    <section className={`${SECTION_PADDING} bg-zinc-50`}>
      <div className={CONTAINER_CLASS}>
        {(title || subtitle) && (
          <motion.div
            {...fadeUp}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
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
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <p className="text-xl md:text-2xl text-zinc-700 italic leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <p className="font-medium text-zinc-900">{testimonial.author}</p>
              {testimonial.role && (
                <p className="text-sm text-zinc-600 mt-1">{testimonial.role}</p>
              )}
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
