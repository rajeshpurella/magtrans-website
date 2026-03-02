"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxSectionProps {
  imageUrl: string;
  imageAlt?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxSection({
  imageUrl,
  imageAlt = "",
  children,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [40, -40]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/85" />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
