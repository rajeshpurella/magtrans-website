"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CORE_DOMAINS = [
  {
    title: "Process Cooling",
    href: "/products/process-cooling",
    image: "/products/process-cooling/process-cooling-hero.png",
    tagline: "Industrial liquid, air and modular cooling platforms.",
    bullets: ["Stabilise critical process temperatures.", "Engineered for 24/7 industrial duty."],
  },
  {
    title: "Magnetic Testing",
    href: "/products/magnetic-testing",
    image:
      "/products/magnetic-testing/magnetic-testing-hero.png",
    tagline: "High-precision magnetic characterisation systems.",
    bullets: ["Hall, VSM and advanced magnetometry.", "From lab R&D to production QA lines."],
  },
  {
    title: "Cryogenic Systems",
    href: "/products/cryogenic-systems",
    image: "/products/cryogenic-systems/Closed-cycle Cryostat.png",
    tagline: "4 K and ultra-low temperature platforms.",
    bullets: ["Closed‑cycle and liquid nitrogen cryostats.", "Built for demanding research environments."],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function CoreDomains() {
  return (
    <SectionShell
      id="products"
      background="white"
      aria-label="Core engineering domains"
    >
      <div className="mb-10 md:mb-14 flex justify-center">
        <SectionHeader
          title="Core Engineering Domains"
          subtitle="Three pillars of precision engineering—process cooling, magnetic testing and cryogenic platforms—presented as immersive, future-ready systems."
        />
      </div>

      <motion.div
        className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {CORE_DOMAINS.map((domain) => (
          <motion.div
            key={domain.title}
            variants={itemVariants}
            className="flex-1 flex items-center justify-center"
          >
            <Link
              href={domain.href}
              className="group block w-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-[380px] md:max-w-[420px] h-[260px] md:h-[320px] overflow-hidden flex items-center justify-center">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  fill
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

                <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-emerald-500/60 group-hover:ring-offset-0 transition-[box-shadow,ring] duration-300 ease-in-out shadow-[0_0_0_rgba(16,185,129,0)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.28)]" />

                <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3 text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] text-emerald-400 uppercase mb-2">
                      Domain
                    </p>
                    <h3 className="font-montserrat text-xl md:text-2xl font-semibold tracking-tight">
                      {domain.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-zinc-200 leading-relaxed">
                      {domain.tagline}
                    </p>
                  </div>
                  <ul className="mt-1 space-y-1.5 text-xs md:text-sm text-zinc-200/90">
                    {domain.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-emerald-300 group-hover:text-emerald-200 transition-colors mt-2">
                    Explore Domain
                    <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
