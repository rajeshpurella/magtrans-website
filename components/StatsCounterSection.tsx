"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatsCounterSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = value / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [value, inView]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounterSection({
  stats,
  title,
  subtitle,
}: StatsCounterSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionShell
      background="muted"
      aria-label={title || "Key statistics"}
    >
      <section ref={ref}>
        {(title || subtitle) && (
          <motion.div
            {...staggerItem}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <SectionHeader
              title={title ?? "Key statistics"}
              subtitle={subtitle}
            />
          </motion.div>
        )}
        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              {...staggerItem}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-emerald-600">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <p className="mt-2 text-sm text-zinc-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SectionShell>
  );
}
