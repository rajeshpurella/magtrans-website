 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import type { ProductDomain } from "@/lib/products-data";

export default function DomainLayout({ domain }: { domain: ProductDomain }) {
  return (
    <>
      <section className="bg-white pt-24 md:pt-28 pb-12 md:pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-emerald-600 text-sm font-medium mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              All Products
            </Link>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              {domain.title}
            </h1>
            <p className="mt-4 text-zinc-600 text-base leading-relaxed max-w-3xl">
              {domain.intro}
            </p>
            <p className="mt-4 text-zinc-600 text-sm leading-relaxed max-w-3xl">
              Commonly deployed in{" "}
              <Link
                href="/industries/aerospace"
                className="text-emerald-700 hover:underline"
              >
                aerospace
              </Link>
              ,{" "}
              <Link
                href="/industries/manufacturing"
                className="text-emerald-700 hover:underline"
              >
                manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/industries/energy-sector"
                className="text-emerald-700 hover:underline"
              >
                energy sector
              </Link>{" "}
              projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 transition-all duration-200"
              >
                Talk to a Product Specialist
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-8">
              Products & Systems
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {domain.subProducts.map((item, i) => {
                const child = domain.children?.find(
                  (c) => c.title.toLowerCase() === item.toLowerCase()
                );

                if (child) {
                  return (
                    <motion.li
                      key={child.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="group bg-white border border-zinc-200 border-l-4 border-emerald-600 p-8 transition-all duration-200 hover:bg-zinc-50 text-zinc-700"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-zinc-900">
                            {child.title}
                          </h3>
                        </div>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <Link
                          href={`/products/${domain.slug}/${child.slug}`}
                          className="inline-flex items-center gap-1 font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors"
                        >
                          <span>Explore</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.li>
                  );
                }

                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="group bg-white border border-zinc-200 border-l-4 border-emerald-600 p-8 transition-all duration-200 hover:bg-zinc-50 text-zinc-700"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-900">
                          {item}
                        </h3>
                      </div>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
