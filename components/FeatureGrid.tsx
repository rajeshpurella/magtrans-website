"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function FeatureGrid({
  features,
  columns = 3,
  className = "",
}: FeatureGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <motion.div
      {...staggerContainer}
      className={`grid gap-10 ${gridClass} ${className}`}
    >
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          {...staggerItem}
          className="rounded-2xl bg-white border border-zinc-200 shadow-sm p-6 sm:p-8 md:p-10 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          {feature.icon && (
            <div className="mb-4 text-emerald-600">{feature.icon}</div>
          )}
          <h3 className="text-lg font-semibold text-zinc-900 tracking-tight">
            {feature.title}
          </h3>
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
