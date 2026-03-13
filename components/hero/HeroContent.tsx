"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroHeading, heroSubtitle, heroCta } from "@/lib/animations";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

interface HeroContentProps {
  title: string;
  description: string;
  primaryHref: string;
  secondaryHref: string;
}

export function HeroContent({
  title,
  description,
  primaryHref,
  secondaryHref,
}: HeroContentProps) {
  const prefersReducedMotion = useReducedMotion();

  const Heading = prefersReducedMotion ? "h1" : motion.h1;
  const Description = prefersReducedMotion ? "p" : motion.p;
  const CtaWrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 flex flex-col items-start text-left gap-0">
      <div className="max-w-xl space-y-3">
        <Heading
          {...(!prefersReducedMotion ? heroHeading : {})}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
        >
          {title}
        </Heading>
        <Description
          {...(!prefersReducedMotion ? heroSubtitle : {})}
          className="mt-3 text-sm sm:text-base md:text-lg text-white/95 max-w-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
        >
          {description}
        </Description>
        <CtaWrapper
          {...(!prefersReducedMotion ? heroCta : {})}
          className="mt-5 flex flex-wrap justify-start gap-4"
        >
          <PrimaryButton href={primaryHref}>Explore Domain</PrimaryButton>
          <SecondaryButton href={secondaryHref}>Contact Us</SecondaryButton>
        </CtaWrapper>
      </div>
    </div>
  );
}

