"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { megaMenu } from "@/lib/animations";
import {
  PRODUCTS_MEGA,
  INDUSTRIES_MEGA,
  PRODUCTS_MEGA_COLUMNS,
} from "@/lib/constants";

type MegaMenuType = "products" | "industries";

interface MegaMenuProps {
  type: MegaMenuType;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const barClass =
  "bg-white border-b border-zinc-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)]";

export default function MegaMenu({
  type,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  if (type === "products") {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={megaMenu.initial}
            animate={megaMenu.animate}
            exit={megaMenu.exit}
            transition={megaMenu.transition}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="absolute left-0 right-0 top-full z-50"
          >
            <div className={barClass}>
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                  <div className="shrink-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Engineering Domains
                    </p>
                  </div>
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-1">
                    {PRODUCTS_MEGA_COLUMNS.map((col, colIndex) => (
                      <ul key={colIndex} className="space-y-0">
                        {col.map((index) => {
                          const item = PRODUCTS_MEGA[index];
                          if (!item) return null;
                          return (
                            <li key={item.slug}>
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="group flex items-center gap-2 py-3 text-zinc-800 hover:text-emerald-600 transition-colors duration-200 text-base font-medium"
                              >
                                <span>{item.title}</span>
                                <ChevronRight className="w-4 h-4 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ))}
                  </div>
                  <div className="shrink-0 lg:w-64 lg:pt-0.5">
                    <p className="text-sm text-zinc-500 leading-snug">
                      Precision systems engineered for industrial and research
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={megaMenu.initial}
          animate={megaMenu.animate}
          exit={megaMenu.exit}
          transition={megaMenu.transition}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-0 right-0 top-full z-50"
        >
          <div className={barClass}>
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                <div className="shrink-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Industries We Serve
                  </p>
                </div>
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-1">
                  {INDUSTRIES_MEGA.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-2 py-3 text-zinc-800 hover:text-emerald-600 transition-colors duration-200 text-base font-medium"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="shrink-0 lg:w-64 lg:pt-0.5">
                  <p className="text-sm text-zinc-500 leading-snug">
                    Delivering precision engineering systems across critical
                    sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
