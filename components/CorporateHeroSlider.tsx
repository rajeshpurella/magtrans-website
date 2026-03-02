"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "@/lib/hero-slides";

const SLIDE_DURATION_MS = 4000;
const PROGRESS_TICK_MS = 50;
const EASE_ENTERPRISE = [0.4, 0, 0.2, 1] as const; // cubic-bezier(0.4,0,0.2,1)

// Mount-only animations (transform + opacity); no scroll trigger
const textVariants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const stagger = {
  label: { transition: { duration: 0.6, ease: EASE_ENTERPRISE, delay: 0.1 } },
  heading: { transition: { duration: 0.85, ease: EASE_ENTERPRISE, delay: 0.2 } },
  description: { transition: { duration: 0.7, ease: EASE_ENTERPRISE, delay: 0.35 } },
  buttons: { transition: { duration: 0.6, ease: EASE_ENTERPRISE, delay: 0.5 } },
};

export default function CorporateHeroSlider() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const elapsedRef = useRef(0);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    elapsedRef.current = 0;
    setProgress(0);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % HERO_SLIDES.length);
    elapsedRef.current = 0;
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    progressIntervalRef.current = setInterval(() => {
      elapsedRef.current += PROGRESS_TICK_MS;
      const p = Math.min(100, (elapsedRef.current / SLIDE_DURATION_MS) * 100);
      setProgress(p);
      if (elapsedRef.current >= SLIDE_DURATION_MS) {
        goNext();
      }
    }, PROGRESS_TICK_MS);
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [isPaused, currentIndex, goNext]);

  const slide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background: mount zoom-out (1.05 → 1), transform-only */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_ENTERPRISE }}
            style={{ willChange: "opacity" }}
          >
            <motion.div
              className="absolute inset-0 origin-center"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.1,
                ease: EASE_ENTERPRISE,
              }}
              style={{ willChange: "transform" }}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? undefined : "lazy"}
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/25 to-black/10 pointer-events-none"
          aria-hidden
        />
      </div>

      {/* Content - left aligned, max-w-2xl, extra left padding on desktop */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto w-full px-6 pl-6 md:pl-16 lg:pl-24">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: EASE_ENTERPRISE }}
              style={{ willChange: "transform, opacity" }}
            >
              <motion.div
                variants={textVariants}
                initial="enter"
                animate="center"
                transition={stagger.label.transition}
                className="inline-block bg-black/30 px-3 py-1 rounded backdrop-blur-sm drop-shadow-md"
              >
                <p className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
                  {slide.subtitle}
                </p>
              </motion.div>
              <motion.h1
                variants={textVariants}
                initial="enter"
                animate="center"
                transition={stagger.heading.transition}
                className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white drop-shadow-lg"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                variants={textVariants}
                initial="enter"
                animate="center"
                transition={stagger.description.transition}
                className="mt-4 text-gray-200 text-base leading-relaxed drop-shadow-sm"
              >
                {slide.description}
              </motion.p>
              <motion.div
                variants={textVariants}
                initial="enter"
                animate="center"
                transition={stagger.buttons.transition}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <button
                  type="button"
                  onClick={() => router.push(slide.href)}
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  Explore Domain
                </button>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full border-2 border-zinc-300 text-zinc-900 font-semibold hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots - active emerald-600 wider, inactive zinc-400 */}
      <div className="relative z-10 flex justify-center gap-2 py-6">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-8 bg-emerald-600"
                : "w-1.5 bg-zinc-400 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>

      {/* Progress bar - anchored to bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="h-0.5 w-full bg-zinc-200 overflow-hidden">
          <motion.div
            className="h-full w-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-[0_0_12px_rgba(16,185,129,0.4)] origin-left"
            style={{ scaleX: progress / 100 }}
            transition={{ duration: PROGRESS_TICK_MS / 1000, ease: "linear" }}
          />
        </div>
      </div>

      {/* Scroll indicator - mount animation, transform + opacity only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: EASE_ENTERPRISE }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <a
          href="/#about"
          className="flex flex-col items-center gap-2 text-white/80 drop-shadow-md pointer-events-auto"
          aria-label="Scroll down"
        >
          <span className="block w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-current animate-bounce"
            />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
