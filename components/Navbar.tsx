"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import SearchModal from "./SearchModal";
import { NAV_LINKS, type NavLink as NavLinkType } from "@/lib/constants";
import { NavbarContainer } from "@/components/navigation/NavbarContainer";
import { NavLinks } from "@/components/navigation/NavLinks";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import MegaMenu from "@/components/navigation/MegaMenu";

const HOVER_DELAY_MS = 150;

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industriesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";

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

  const getLinkHref = (link: NavLinkType) => {
    if (link.href.startsWith("/#")) return link.href;
    return link.href;
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setIndustriesOpen(false);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <NavbarContainer>
      <nav className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 h-20 md:h-24 flex items-center justify-between">
        <Link
          href="/"
          className="flex-shrink-0 flex items-center gap-3 mr-6 lg:mr-8"
          onClick={closeAll}
        >
          <Image
            src="/products/images/logo/magtranslogo.png"
            alt="MAGTRANS logo"
            width={160}
            height={40}
            className="h-10 md:h-12 w-auto"
            priority
          />
          <span className="uppercase whitespace-nowrap text-[11px] md:text-xs tracking-widest text-zinc-700 font-medium">
            Systems Private Limited
          </span>
        </Link>

        <NavLinks
          isHome={isHome}
          productsOpen={productsOpen}
          industriesOpen={industriesOpen}
          onProductsEnter={handleProductsEnter}
          onProductsLeave={handleProductsLeave}
          onIndustriesEnter={handleIndustriesEnter}
          onIndustriesLeave={handleIndustriesLeave}
          onNavigate={closeAll}
          onOpenSearch={() => setSearchOpen(true)}
        />

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-zinc-900"
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className="hidden lg:block relative">
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

      <MobileMenu
        isOpen={isMobileOpen}
        navLinks={NAV_LINKS}
        getLinkHref={(link) => getLinkHref(link)}
        onCloseAll={closeAll}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </NavbarContainer>
  );
}
