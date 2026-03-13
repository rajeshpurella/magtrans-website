"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Factory, Thermometer, Gauge } from "lucide-react";
import {
  INDUSTRIES_MEGA,
  PRODUCTS_MEGA,
  PRODUCTS_MEGA_STRUCTURED,
} from "@/lib/constants";
import { megaMenu } from "@/lib/animations";

type MegaMenuType = "products" | "industries";

interface MegaMenuProps {
  type: MegaMenuType;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const BAR_CLASS =
  "backdrop-blur-md bg-white/95 border-b border-zinc-200 shadow-xl";

export default function MegaMenu({
  type,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  if (!isOpen) return null;

  if (type === "products") {
    return (
      <AnimatePresence>
        <motion.div
          initial={megaMenu.initial}
          animate={megaMenu.animate}
          exit={megaMenu.exit}
          transition={megaMenu.transition}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-0 right-0 top-full z-50"
        >
          <div className={BAR_CLASS}>
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 py-8 lg:py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {/* Column 1: Product domains */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
                    Product Domains
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {PRODUCTS_MEGA.slice(0, 6).map((item) => (
                      <Link
                        key={item.slug}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start justify-between gap-3 rounded-md px-4 py-2 text-[15px] font-medium text-zinc-800 hover:text-emerald-600 hover:bg-zinc-50 transition-all duration-200"
                      >
                        <span className="flex-1 min-w-0">
                          {item.title}
                          <span className="block text-xs font-normal text-zinc-500 truncate">
                            {item.description}
                          </span>
                        </span>
                        <ChevronRight className="w-4 h-4 shrink-0 text-emerald-600 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Key systems */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
                    Key Systems
                  </p>
                  <div className="space-y-3">
                    {PRODUCTS_MEGA_STRUCTURED.map((category) => (
                      <div key={category.label} className="rounded-lg bg-zinc-50/70 p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Gauge className="w-4 h-4 text-emerald-600" />
                          <p className="text-xs font-semibold text-zinc-800 uppercase tracking-wide">
                            {category.label}
                          </p>
                        </div>
                        <ul className="space-y-1.5">
                          {category.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between gap-2 rounded-md px-3 py-1.5 text-xs text-zinc-700 hover:text-emerald-600 hover:bg-white transition-colors"
                              >
                                <span className="truncate">{item.label}</span>
                                <ChevronRight className="w-3 h-3 shrink-0 text-emerald-500" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Applications / Industries */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
                    Applications &amp; Industries
                  </p>
                  <div className="space-y-3">
                    {INDUSTRIES_MEGA.slice(0, 6).map((item) => (
                      <Link
                        key={item.slug}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-3 rounded-md px-4 py-2 text-[15px] text-zinc-800 hover:text-emerald-600 hover:bg-zinc-50 transition-all duration-200"
                      >
                        <Factory className="w-4 h-4 text-zinc-500 group-hover:text-emerald-600" />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    ))}
                    <p className="text-xs text-zinc-500 leading-relaxed px-1">
                      Precision systems engineered for industrial manufacturers and
                      research laboratories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Industries mega menu
  return (
    <AnimatePresence>
      <motion.div
        initial={megaMenu.initial}
        animate={megaMenu.animate}
        exit={megaMenu.exit}
        transition={megaMenu.transition}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute left-0 right-0 top-full z-50"
      >
        <div className={BAR_CLASS}>
          <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 py-8 lg:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
                  Industries We Serve
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  From aerospace and defence to materials research and advanced
                  manufacturing.
                </p>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INDUSTRIES_MEGA.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] text-zinc-800 hover:text-emerald-600 hover:bg-zinc-50 transition-all duration-200"
                  >
                    <Thermometer className="w-4 h-4 text-zinc-500 group-hover:text-emerald-600" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

