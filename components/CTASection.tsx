"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className={`${SECTION_PADDING} bg-white`}>
      <div className={CONTAINER_CLASS}>
        <motion.div
          {...fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-zinc-600 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryHref}
              className="inline-flex justify-center items-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all duration-300"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex justify-center items-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-zinc-300 text-zinc-900 font-semibold hover:bg-zinc-100 transition-all duration-300"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
