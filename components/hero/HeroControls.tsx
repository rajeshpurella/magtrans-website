"use client";

import { useCallback } from "react";

interface HeroControlsProps {
  currentIndex: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
  onScrollClick: () => void;
  showScrollIndicator?: boolean;
}

export function HeroControls({
  currentIndex,
  totalSlides,
  onSelectSlide,
  onScrollClick,
  showScrollIndicator = true,
}: HeroControlsProps) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onSelectSlide((index + 1) % totalSlides);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onSelectSlide((index - 1 + totalSlides) % totalSlides);
      }
    },
    [onSelectSlide, totalSlides],
  );

  return (
    <>
      {/* Scroll Indicator (optional) */}
      {showScrollIndicator ? (
        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer"
          onClick={onScrollClick}
          role="button"
          aria-label="Scroll to content"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onScrollClick();
            }
          }}
        >
          <div className="w-6 h-10 border border-emerald-400 bg-white/15 rounded-full flex justify-center items-start shadow-lg">
            <span className="mt-2 w-1 h-2 bg-emerald-400 rounded-full animate-scroll" />
          </div>
        </div>
      ) : null}

      {/* Navigation dots */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2"
        role="tablist"
        aria-label="Hero slides"
      >
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = currentIndex === index;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 ${
                isActive
                  ? "w-[18px] h-2 rounded-full bg-emerald-400"
                  : "w-2 h-2 rounded-full bg-white/60 hover:bg-white"
              }`}
              onClick={(event) => {
                event.stopPropagation();
                onSelectSlide(index);
              }}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          );
        })}
      </div>
    </>
  );
}

