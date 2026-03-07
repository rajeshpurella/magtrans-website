"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-14 sm:py-16 md:py-24 bg-zinc-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-montserrat font-bold text-primary text-3xl sm:text-4xl uppercase tracking-tight">
            Partner With MAGTRANS Engineering Experts
          </h2>
          <p className="mt-6 text-primary/80 text-lg">
            Discuss your process cooling, magnetics, cryogenic or laboratory requirements with our team.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Explore Domains
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
