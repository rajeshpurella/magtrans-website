"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavLink as NavLinkType } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: readonly NavLinkType[];
  getLinkHref: (link: NavLinkType) => string;
  onCloseAll: () => void;
}

export function MobileMenu({
  isOpen,
  navLinks,
  getLinkHref,
  onCloseAll,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="lg:hidden bg-white border-t border-zinc-200 shadow-sm"
        >
          <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-0">
            {navLinks
              .filter((l) => !l.mega)
              .map((link) => (
                <li key={link.label}>
                  <Link
                    href={getLinkHref(link)}
                    className="flex items-center min-h-[48px] py-3 px-1 text-base text-zinc-900 font-medium hover:text-emerald-600 transition-colors"
                    onClick={onCloseAll}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/products"
                className="flex items-center min-h-[48px] py-3 px-1 text-base text-zinc-900 font-medium hover:text-emerald-600 transition-colors"
                onClick={onCloseAll}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="flex items-center min-h-[48px] py-3 px-1 text-base text-zinc-900 font-medium hover:text-emerald-600 transition-colors"
                onClick={onCloseAll}
              >
                Industries
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center w-full min-h-[48px] px-6 py-3 rounded-full bg-emerald-600 text-white text-base font-semibold hover:bg-emerald-700 transition-all duration-200"
                onClick={onCloseAll}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

