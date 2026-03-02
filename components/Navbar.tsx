"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import MegaMenu from "./MegaMenu";
import SearchModal from "./SearchModal";
import { NAV_LINKS } from "@/lib/constants";

const HOVER_DELAY_MS = 150;

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industriesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearProductsDelay = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
      productsTimeoutRef.current = null;
    }
  };

  const clearIndustriesDelay = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
      industriesTimeoutRef.current = null;
    }
  };

  const handleProductsEnter = () => {
    clearIndustriesDelay();
    setIndustriesOpen(false);
    productsTimeoutRef.current = setTimeout(() => setProductsOpen(true), HOVER_DELAY_MS);
  };

  const handleProductsLeave = () => {
    clearProductsDelay();
    productsTimeoutRef.current = setTimeout(() => setProductsOpen(false), HOVER_DELAY_MS);
  };

  const handleIndustriesEnter = () => {
    clearProductsDelay();
    setProductsOpen(false);
    industriesTimeoutRef.current = setTimeout(() => setIndustriesOpen(true), HOVER_DELAY_MS);
  };

  const handleIndustriesLeave = () => {
    clearIndustriesDelay();
    industriesTimeoutRef.current = setTimeout(() => setIndustriesOpen(false), HOVER_DELAY_MS);
  };

  const closeAll = () => {
    clearProductsDelay();
    clearIndustriesDelay();
    setProductsOpen(false);
    setIndustriesOpen(false);
    setIsMobileOpen(false);
  };

  const getLinkHref = (link: (typeof NAV_LINKS)[number]) => {
    if (link.href.startsWith("/#")) return link.href;
    return link.href;
  };

  const headerBg = isScrolled
    ? "bg-white shadow-sm border-b border-zinc-200/80"
    : "bg-white/80 backdrop-blur-md border-b border-zinc-200";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ease-in-out ${headerBg}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex-shrink-0 flex items-center gap-3"
          onClick={closeAll}
        >
          <Image
            src="/products/images/logo/magtranslogo.png"
            alt="MAGTRANS logo"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="text-[10px] md:text-[11px] text-zinc-600 tracking-[0.18em] uppercase whitespace-nowrap leading-none">
            Systems Private Limited
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            if (link.mega === "products") {
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  <Link
                    href="/products"
                    className="relative inline-flex items-center gap-1 py-2 text-zinc-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-medium group"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                    <span className="absolute bottom-0 left-0 h-px bg-emerald-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] w-full" />
                  </Link>
                </li>
              );
            }
            if (link.mega === "industries") {
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleIndustriesEnter}
                  onMouseLeave={handleIndustriesLeave}
                >
                  <Link
                    href="/industries"
                    className="relative inline-flex items-center gap-1 py-2 text-zinc-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-medium group"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                    <span className="absolute bottom-0 left-0 h-px bg-emerald-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] w-full" />
                  </Link>
                </li>
              );
            }
            return (
              <li key={link.label}>
                <Link
                  href={isHome ? getLinkHref(link) : link.href}
                  className="relative inline-block py-2 text-zinc-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-medium group"
                  onClick={closeAll}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px bg-emerald-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] w-full" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors duration-300"
          >
            <Search className="w-5 h-5" />
          </button>
          <SearchModal
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
          />
          <Link
            href="/#contact"
            onClick={closeAll}
            className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-zinc-900"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className="hidden lg:block">
          <MegaMenu
            type="products"
            isOpen={productsOpen}
            onClose={closeAll}
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
          />
          <MegaMenu
            type="industries"
            isOpen={industriesOpen}
            onClose={closeAll}
            onMouseEnter={handleIndustriesEnter}
            onMouseLeave={handleIndustriesLeave}
          />
        </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-zinc-200"
          >
            <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {NAV_LINKS.filter((l) => !l.mega).map((link) => (
                <li key={link.label}>
                  <Link href={getLinkHref(link)} className="block py-3 text-zinc-900 font-medium hover:text-emerald-600 transition-colors" onClick={closeAll}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="block py-3 text-zinc-900 font-medium hover:text-emerald-600 transition-colors" onClick={closeAll}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="block py-3 text-zinc-900 font-medium hover:text-emerald-600 transition-colors" onClick={closeAll}>
                  Industries
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors"
                  onClick={closeAll}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
