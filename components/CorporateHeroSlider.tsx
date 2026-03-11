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
      className="relative w-full min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] overflow-hidden"
    >
      {/* Background Image with fade */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" aria-hidden />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            {slide.title}
            {slide.titleLine2 != null && (
              <>
                <br />
                {slide.titleLine2}
              </>
            )}
          </h1>

          <div className="mt-10 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => router.push(slide.href)}
              className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full text-base font-medium text-white"
            >
              Explore Domain
            </button>
            <Link
              href="/contact"
              className="border border-white/40 px-8 py-4 rounded-full text-base font-medium text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30">
        <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center items-start">
          <span className="mt-2 w-1 h-2 bg-emerald-500 rounded-full animate-scroll" />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-6 bg-emerald-500"
                : "w-2 bg-white/40 hover:bg-white/70"
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
