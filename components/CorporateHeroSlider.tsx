"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HERO_SLIDES } from "@/lib/hero-slides";

const SLIDE_DURATION_MS = 6000;

export default function CorporateHeroSlider() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % HERO_SLIDES.length);
  }, []);

  const handleScrollClick = useCallback(() => {
    if (typeof window === "undefined") return;
    const target =
      document.getElementById("about") ??
      document.querySelector("main section:nth-of-type(2)");
    if (target && "scrollIntoView" in target) {
      (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goNext();
    }, SLIDE_DURATION_MS);

    return () => clearInterval(id);
  }, [goNext, currentIndex]);

  const slide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-[calc(100vh-80px)] flex items-start"
    >
      {/* Background image layer */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-105 contrast-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/25 via-slate-900/10 to-transparent"
          aria-hidden
        />
      </motion.div>

      {/* Content - top aligned, left positioned */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 flex flex-col items-start text-left gap-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl space-y-3"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
              {slide.title}
            </h1>

            {slide.description && (
              <p className="mt-3 text-sm sm:text-base md:text-lg text-white/95 max-w-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
                {slide.description}
              </p>
            )}

            <div className="mt-5 flex flex-wrap justify-start gap-4">
              <button
                type="button"
                onClick={() => router.push(slide.href)}
                className="bg-emerald-600 hover:bg-green-700 px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Domain
              </button>
              <Link
                href="/contact"
                className="relative z-20 border border-white/70 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-md px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer"
        onClick={handleScrollClick}
        role="button"
        aria-label="Scroll to content"
      >
        <div className="w-6 h-10 border border-emerald-400 bg-white/15 rounded-full flex justify-center items-start shadow-lg">
          <span className="mt-2 w-1 h-2 bg-emerald-400 rounded-full animate-scroll" />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`transition-all duration-300 ${
              currentIndex === index
                ? "w-6 h-2 rounded-full bg-emerald-400"
                : "w-2 h-2 rounded-full bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-40">
        <div
          key={currentIndex}
          className="h-full bg-emerald-500 animate-slide-progress"
        />
      </div>
    </section>
  );
}
