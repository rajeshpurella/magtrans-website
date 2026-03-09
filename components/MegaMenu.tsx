"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { megaMenu } from "@/lib/animations";
import { PRODUCTS_MEGA, INDUSTRIES_MEGA } from "@/lib/constants";

type MegaMenuType = "products" | "industries";

interface MegaMenuProps {
  type: MegaMenuType;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const barClass =
  "backdrop-blur-md bg-white/95 border-b border-zinc-200 shadow-xl";

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
              <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 py-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                  <div className="shrink-0">
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
                      Engineering Domains
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5 max-w-xs lg:pr-10 lg:border-r lg:border-zinc-200">
                    {PRODUCTS_MEGA.map((item) => (
                      <Link
                        key={item.slug}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between gap-3 rounded-md px-4 py-2 text-[15px] font-medium text-zinc-800 hover:text-emerald-600 hover:bg-zinc-50 transition-all duration-200"
                      >
                        <span>{item.title}</span>
                        <ChevronRight className="w-4 h-4 shrink-0 text-emerald-600 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                  <div className="shrink-0 lg:w-64 lg:pt-0.5">
                    <p className="text-sm text-zinc-500 leading-relaxed">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 py-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                <div className="shrink-0">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
                    Industries We Serve
                  </p>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-1 lg:pr-10 lg:border-r lg:border-zinc-200">
                  {INDUSTRIES_MEGA.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between gap-3 rounded-md px-4 py-2 text-[15px] font-medium text-zinc-800 hover:text-emerald-600 hover:bg-zinc-50 transition-all duration-200"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 shrink-0 text-emerald-600 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="shrink-0 lg:w-64 lg:pt-0.5">
                  <p className="text-sm text-zinc-500 leading-relaxed">
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
