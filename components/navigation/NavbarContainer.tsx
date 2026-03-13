"use client";

import { useEffect, useState, type ReactNode } from "react";

interface NavbarContainerProps {
  children: ReactNode;
}

export function NavbarContainer({ children }: NavbarContainerProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled ? "backdrop-blur-md bg-white/90 shadow-sm" : "bg-white"
      }`}
    >
      {children}
    </header>
  );
}

