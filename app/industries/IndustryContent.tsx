"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import type { Industry } from "@/lib/industries-data";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

const ease = [0.4, 0, 0.2, 1] as const;

export default function IndustryContent({ industry }: { industry: Industry }) {
  return (
    <>
      <section className="bg-white pt-32 pb-20 border-b border-zinc-200">
        <div className={CONTAINER_CLASS}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-emerald-600 text-sm font-medium mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              All Industries
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              {industry.title}
            </h1>
            <p className="mt-4 text-zinc-600 text-lg max-w-3xl">
              {industry.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`${SECTION_PADDING} bg-zinc-50`}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-zinc-600 leading-relaxed max-w-3xl">
              {industry.shortDescription}
            </p>
            <Link
              href="/industries"
              className="mt-10 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Industries
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
