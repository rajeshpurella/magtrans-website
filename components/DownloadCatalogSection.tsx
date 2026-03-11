"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING } from "@/lib/constants";

const CATALOG_PATH = "/catalog/product-catalog.pdf";

export default function DownloadCatalogSection() {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 py-24 md:py-28`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
      <motion.div
        {...fadeUp}
        className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Download Product Catalog
        </h2>
        <p className="mt-4 text-lg text-emerald-50 leading-relaxed max-w-2xl mx-auto">
          Explore our complete portfolio of magnetic testing systems, cryogenic cooling solutions and precision measurement equipment in a single, shareable PDF.
        </p>
        <Link
          href={CATALOG_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.02]"
        >
          <Download className="w-5 h-5" />
          Download Catalog
        </Link>
      </motion.div>
    </section>
  );
}
