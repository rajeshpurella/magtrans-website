"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroHeading, heroSubtitle, heroCta } from "@/lib/animations";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1920&q=80";

export default function PremiumHero() {
  const containerRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  useEffect(() => {
    const duration = 10000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      setScale(1 + 0.1 * t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Magnetic Testing Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          {...heroHeading}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-5xl mx-auto"
        >
          Engineering precision.
          <br />
          <span className="text-accent">Industrial impact.</span>
        </motion.h1>
        <motion.p
          {...heroSubtitle}
          className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          Integrated solutions in process cooling, magnetics, cryogenics and advanced laboratory systems.
        </motion.p>
        <motion.div
          {...heroCta}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/products"
            className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-accent text-primary font-semibold hover:scale-105 transition-all duration-300"
          >
            Explore Solutions
          </Link>
          <Link
            href="/#contact"
            className="inline-flex justify-center items-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white hover:text-primary transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="/#about"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="block w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-current"
            />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
