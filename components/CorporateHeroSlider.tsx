"use client";

import { useState, useEffect, useCallback } from "react";
import { HERO_SLIDES } from "@/lib/hero-slides";
import { HeroShell } from "@/components/hero/HeroShell";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroControls } from "@/components/hero/HeroControls";

const SLIDE_DURATION_MS = 6000;

export default function CorporateHeroSlider() {
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
    <HeroShell
      id="home"
      imageSrc={slide.image}
      imageAlt={slide.title}
      overlay={
        <>
          <HeroControls
            currentIndex={currentIndex}
            totalSlides={HERO_SLIDES.length}
            onSelectSlide={goToSlide}
            onScrollClick={handleScrollClick}
            showScrollIndicator={false}
          />
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 z-30">
            <div
              key={currentIndex}
              className="h-full bg-emerald-500 animate-slide-progress"
            />
          </div>
        </>
      }
    >
      <HeroContent
        title={slide.title}
        description={slide.description}
        primaryHref={slide.href}
        secondaryHref="/contact"
      />
    </HeroShell>
  );
}
