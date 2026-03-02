 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import type { ProductDomain } from "@/lib/products-data";
import BackButton from "@/app/components/BackButton";

export default function DomainLayout({ domain }: { domain: ProductDomain }) {
  return (
    <>
      <section className="bg-white pt-32 pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="mt-4 text-zinc-600 text-lg max-w-3xl">
              {domain.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-8">
              Products & Systems
            </h2>
            <ul className="space-y-4">
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
                      className="flex items-center gap-3 text-zinc-700"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                      <Link
                        href={`/products/${domain.slug}/${child.slug}`}
                        className="inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <span>{child.title}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
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
                    className="flex items-center gap-3 text-zinc-700"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-10">
              <BackButton />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
