"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDER_IMAGES = [
  "/products/functional-material-measurement/fts-1.png",
  "/products/functional-material-measurement/fts-2.png",
  "/products/functional-material-measurement/fts-3.png",
  "/products/functional-material-measurement/fts-4.png",
  "/products/functional-material-measurement/fts-5.png",
  "/products/functional-material-measurement/fts-6.png",
] as const;

export default function FerroelectricSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () => {
    setIndex((current) => (current - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % SLIDER_IMAGES.length);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-6 mb-12 border border-zinc-200">
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center">
        <Image
          src={SLIDER_IMAGES[index]}
          alt="Ferroelectric test system configuration"
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-contain"
        />
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 shadow-md px-3 py-1.5 rounded-full border border-zinc-200 text-lg leading-none hover:bg-zinc-50 transition"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 shadow-md px-3 py-1.5 rounded-full border border-zinc-200 text-lg leading-none hover:bg-zinc-50 transition"
        aria-label="Next image"
      >
        ›
      </button>

      <div className="mt-3 flex justify-center gap-1.5">
        {SLIDER_IMAGES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full ${
              i === index ? "bg-emerald-600" : "bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

