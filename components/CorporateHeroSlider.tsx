 "use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "@/lib/hero-slides";

const ROTATING_DOMAINS = [
  "Magnetic Testing Systems",
  "Cryogenic Cooling Solutions",
  "Advanced Measurement Systems",
];
const ROTATE_INTERVAL_MS = 3000;

const SLIDE_DURATION_MS = 6000;
const PROGRESS_TICK_MS = 50;

export default function CorporateHeroSlider() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
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
  }, [currentIndex, goNext]);

  const slide = HERO_SLIDES[currentIndex];
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRotatingIndex((i) => (i + 1) % ROTATING_DOMAINS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  // Preload all hero images once to avoid flicker on first transition
  useEffect(() => {
    HERO_SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] overflow-hidden bg-black"
    >
      {/* Background layers: premium crossfade with subtle scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((bgSlide, index) => (
          <motion.div
            key={bgSlide.image}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgSlide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={false}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              scale: currentIndex === index ? 1.03 : 1,
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 6, ease: "linear" },
            }}
          />
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent z-10 pointer-events-none"
          aria-hidden
        />
      </div>

      {/* Content - left aligned */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block uppercase tracking-widest text-xs bg-black/60 px-3 py-1 rounded">
              <p className="text-white uppercase tracking-widest">
                {slide.subtitle}
              </p>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-white drop-shadow-lg">
              {slide.title}
              {slide.titleLine2 != null && (
                <>
                  <br />
                  {slide.titleLine2}
                </>
              )}
            </h1>
            <div className="mt-2 min-h-[2rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={rotatingIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="text-base md:text-lg text-emerald-200 font-medium drop-shadow-sm"
                >
                  {ROTATING_DOMAINS[rotatingIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed drop-shadow-sm">
              {slide.description}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => router.push(slide.href)}
                className="inline-flex justify-center items-center min-h-[44px] px-6 py-3 rounded-full bg-emerald-600 text-white text-base font-semibold hover:bg-emerald-700 transition-all duration-200"
              >
                Explore Domain
              </button>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center min-h-[44px] px-6 py-3 rounded-full border border-white/40 text-white text-base font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots - active emerald-600 wider, inactive zinc-400 - 44px touch target */}
      <div className="relative z-10 flex justify-center gap-2 py-6">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-all duration-300"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 block ${
                i === currentIndex
                  ? "w-8 bg-emerald-600"
                  : "w-1.5 bg-zinc-400 hover:bg-zinc-500"
              }`}
            />
          </button>
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

      {/* Scroll indicator - static, no bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <a
          href="/#about"
          className="flex flex-col items-center gap-2 text-white/80 drop-shadow-md pointer-events-auto"
          aria-label="Scroll down"
        >
          <span className="block w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
            <span className="w-1.5 h-2 rounded-full bg-current" />
          </span>
        </a>
      </div>
    </section>
  );
}
