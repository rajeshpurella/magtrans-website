"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

const CASE_STUDY = {
  title: "Precision Magnetic Characterization for Research Institute",
  description:
    "MAGTrans supplied and integrated a complete Hall effect and VSM measurement suite for a national research laboratory, enabling accurate characterisation of novel semiconductor and magnetic materials for advanced device development.",
  result: "Reduced measurement cycle time by 40% with automated workflows and improved repeatability for multi-sample campaigns.",
  ctaHref: "/products/magnetic-testing",
  ctaLabel: "Explore magnetic testing",
};

export default function CaseStudySection() {
  return (
    <section className={`bg-white ${SECTION_PADDING} border-t border-zinc-100`}>
      <div className={CONTAINER_CLASS}>
        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 md:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-4">
            Featured Engineering Case Study
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            {CASE_STUDY.title}
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            {CASE_STUDY.description}
          </p>
          <div className="mt-6 flex flex-wrap items-start gap-3 rounded-xl bg-white border border-zinc-200 p-4">
            <Target className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-zinc-900">Result / Impact</p>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                {CASE_STUDY.result}
              </p>
            </div>
          </div>
          <Link
            href={CASE_STUDY.ctaHref}
            className="mt-8 inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
          >
            {CASE_STUDY.ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
