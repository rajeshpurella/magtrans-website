"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Safari & older browsers
      // eslint-disable-next-line deprecation/deprecation
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        // eslint-disable-next-line deprecation/deprecation
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Industrial engineering background"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <video
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-industrial-factory-machinery-47798/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0 z-[2]"
          style={{ backgroundColor: "rgba(10, 31, 68, 0.75)" }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-montserrat font-bold text-white uppercase tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Engineering Precision.
            <br />
            <span className="text-accent">Powering Industrial Cooling & Magnetics.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Integrated Engineering Solutions in Process Cooling, Magnetics, Cryogenics & Advanced Laboratory Systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Explore Solutions
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          className="block w-10 h-16 rounded-full border-2 border-white/50 flex items-start justify-center pt-2 hover:border-white transition-colors"
          aria-label="Scroll to about"
        >
          <span className="w-1.5 h-4 bg-white/70 rounded-full animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
