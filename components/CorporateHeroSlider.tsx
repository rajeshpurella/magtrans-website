"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
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
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-white"
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
              className="absolute inset-0 origin-center bg-cover bg-center bg-no-repeat"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.1,
                ease: EASE_ENTERPRISE,
              }}
              style={{
                willChange: "transform",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-black/65 via-black/40 to-transparent pointer-events-none"
          aria-hidden
        />
      </div>

      {/* Content - left aligned */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24">
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
                className="inline-block uppercase tracking-widest text-xs bg-black/60 px-3 py-1 rounded"
              >
                <p className="text-white uppercase tracking-widest">
                  {slide.subtitle}
                </p>
              </motion.div>
              <motion.h1
                variants={textVariants}
                initial="enter"
                animate="center"
                transition={stagger.heading.transition}
                className="mt-4 text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg"
              >
                {slide.title}
                {slide.titleLine2 != null && (
                  <>
                    <br />
                    {slide.titleLine2}
                  </>
                )}
              </motion.h1>
              <motion.p
                variants={textVariants}
                initial="enter"
                animate="center"
                transition={stagger.description.transition}
                className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-sm"
              >
                {slide.description}
              </motion.p>
              <motion.div
                variants={textVariants}
                initial="enter"
                animate="center"
                transition={stagger.buttons.transition}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button
                  type="button"
                  onClick={() => router.push(slide.href)}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-300"
                >
                  Explore Domain
                </button>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
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
