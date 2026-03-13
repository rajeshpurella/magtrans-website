"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface ProductDomainCardProps {
  slug: string;
  title: string;
  shortDescription: string;
}

const GRADIENT_BY_SLUG: Record<string, string> = {
  "process-cooling": "from-emerald-700 to-teal-800",
  "magnetic-testing": "from-slate-700 to-slate-900",
  "cryogenic-systems": "from-cyan-800 to-blue-900",
  "heat-flux-instrumentation": "from-amber-700 to-orange-800",
  "ht-solutions": "from-amber-700 to-orange-800",
  "laboratory-equipment": "from-violet-700 to-indigo-800",
  "geophysical-research": "from-sky-700 to-blue-800",
  default: "from-zinc-600 to-zinc-800",
};

export default function ProductDomainCard({
  slug,
  title,
  shortDescription,
}: ProductDomainCardProps) {
  const [imageError, setImageError] = useState(false);

  const imageSrc = `/products/${slug}/${slug}-hero.png`;
  const href = `/products/${slug}`;
  const gradient = GRADIENT_BY_SLUG[slug] ?? GRADIENT_BY_SLUG.default;

  return (
    <div className="group h-full flex flex-col rounded-2xl border border-zinc-100 bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-300">
      <div className="w-full h-[220px] bg-zinc-50 flex items-center justify-center p-4 overflow-hidden">
        {imageError ? (
          <div
            className={`h-full w-full rounded-lg bg-gradient-to-br ${gradient}`}
            aria-hidden
          />
        ) : (
          <Image
            src={imageSrc}
            alt={`${title} product domain hero image`}
            width={320}
            height={220}
            className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-6">
        <h3 className="text-xl font-semibold text-zinc-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 min-h-[3.75rem]">
          {shortDescription}
        </p>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 text-emerald-700 font-medium hover:text-emerald-800 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
        >
          View Products
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

