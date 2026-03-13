"use client";

import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { NAV_LINKS, type NavLink as NavLinkType } from "@/lib/constants";

interface NavLinksProps {
  isHome: boolean;
  productsOpen: boolean;
  industriesOpen: boolean;
  onProductsEnter: () => void;
  onProductsLeave: () => void;
  onIndustriesEnter: () => void;
  onIndustriesLeave: () => void;
  onNavigate: () => void;
  onOpenSearch: () => void;
}

const HOVER_UNDERLINE =
  "absolute bottom-0 left-0 h-px bg-emerald-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] w-full";

function getLinkHref(link: NavLinkType, isHome: boolean) {
  if (isHome && link.href.startsWith("/#")) return link.href;
  return link.href;
}

export function NavLinks({
  isHome,
  productsOpen,
  industriesOpen,
  onProductsEnter,
  onProductsLeave,
  onIndustriesEnter,
  onIndustriesLeave,
  onNavigate,
  onOpenSearch,
}: NavLinksProps) {
  return (
    <>
      <ul className="hidden lg:flex items-center gap-10">
        {NAV_LINKS.map((link) => {
          if (link.mega === "products") {
            return (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={onProductsEnter}
                onMouseLeave={onProductsLeave}
              >
                <Link
                  href="/products"
                  className="relative inline-flex items-center gap-1 py-2 text-zinc-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-medium group"
                  onClick={onNavigate}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onProductsEnter();
                    }
                    if (event.key === "Escape") {
                      onProductsLeave();
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={productsOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className={HOVER_UNDERLINE} />
                </Link>
              </li>
            );
          }
          if (link.mega === "industries") {
            return (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={onIndustriesEnter}
                onMouseLeave={onIndustriesLeave}
              >
                <Link
                  href="/industries"
                  className="relative inline-flex items-center gap-1 py-2 text-zinc-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-medium group"
                  onClick={onNavigate}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onIndustriesEnter();
                    }
                    if (event.key === "Escape") {
                      onIndustriesLeave();
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={industriesOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      industriesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className={HOVER_UNDERLINE} />
                </Link>
              </li>
            );
          }
          return (
            <li key={link.label}>
              <Link
                href={getLinkHref(link, isHome)}
                className="relative inline-block py-2 text-zinc-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-medium group"
                onClick={onNavigate}
              >
                {link.label}
                <span className={HOVER_UNDERLINE} />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:flex items-center gap-4">
        <button
          type="button"
          aria-label="Search"
          onClick={onOpenSearch}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-zinc-600 hover:text-zinc-900 transition-colors duration-300"
        >
          <Search className="w-5 h-5" />
        </button>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-full bg-emerald-600 text-white text-base font-semibold hover:bg-emerald-700 transition-all duration-200"
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
}

