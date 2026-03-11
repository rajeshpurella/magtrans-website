"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroButton {
  label: string;
  href: string;
}

interface IndustryHeroProps {
  categoryLabel: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCta: HeroButton;
  secondaryCta?: HeroButton;
}

export default function IndustryHero({
  categoryLabel,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
}: IndustryHeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[75vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-black">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover scale-[1.02]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <div className="border-l-4 border-emerald-600 pl-6">
            <span className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4 inline-block">
              {categoryLabel}
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] text-white">
              {title}
            </h1>

            <p className="text-zinc-200 mt-6 text-base md:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 transition-all duration-200"
            >
              {primaryCta.label}
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center min-h-[44px] rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 backdrop-blur-md transition-all duration-200"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

