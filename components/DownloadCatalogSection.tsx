"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING } from "@/lib/constants";

const CATALOG_PATH = "/catalog/product-catalog.pdf";

export default function DownloadCatalogSection() {
  return (
    <section className={`bg-emerald-600 ${SECTION_PADDING}`}>
      <motion.div
        {...fadeUp}
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Download Product Catalog
        </h2>
        <p className="mt-3 text-emerald-100 text-base max-w-xl mx-auto">
          Explore our complete portfolio of magnetic testing systems, cryogenic cooling solutions and precision measurement equipment in a single, shareable PDF.
        </p>
        <Link
          href={CATALOG_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center min-h-[44px] gap-2 rounded-full bg-white text-emerald-700 px-6 py-3 font-semibold hover:bg-emerald-50 transition-colors duration-300"
        >
          <Download className="w-5 h-5" />
          Download Catalog
        </Link>
      </motion.div>
    </section>
  );
}
