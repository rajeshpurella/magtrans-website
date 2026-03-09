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
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative w-full aspect-[4/3] bg-white">
        <div className="flex h-full w-full items-center justify-center p-6">
          {imageError ? (
            <div
              className={`h-full w-full rounded-t-2xl bg-gradient-to-br ${gradient}`}
              aria-hidden
            />
          ) : (
            <Image
              src={imageSrc}
              alt={`${title} product domain hero image`}
              width={800}
              height={600}
              className="max-h-full max-w-full object-contain object-center rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold text-zinc-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
          {shortDescription}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-green-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
        >
          View Products
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

