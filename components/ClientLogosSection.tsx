"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

const ORGANISATIONS = [
  { name: "HAL", logo: "/logos/hal.png" },
  { name: "DRDO", logo: "/logos/drdo.png" },
  { name: "BHEL", logo: "/logos/bhel.png" },
  { name: "NTPC", logo: "/logos/ntpc.png" },
  { name: "MIDHANI", logo: "/logos/midhani.png" },
  { name: "ECIL", logo: "/logos/ecil.png" },
  { name: "BHU", logo: "/logos/bhu.png" },
  { name: "Eugia Pharma", logo: "/logos/eugia.png" },
  { name: "Azista", logo: "/logos/azista.png" },
  { name: "Tata Advanced Systems", logo: "/logos/tata-advancedsystems.png" },
];

export default function ClientLogosSection() {
  return (
    <section className={`bg-white ${SECTION_PADDING} border-t border-zinc-100`}>
      <div className={CONTAINER_CLASS}>
        <motion.h2
          {...fadeUp}
          className="text-center text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 mb-8 sm:mb-10 md:mb-12"
        >
          Trusted by Research Institutions & Industry
        </motion.h2>
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10"
        >
          {ORGANISATIONS.map((org) => (
            <div
              key={org.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={200}
                  height={100}
                  className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <p className="text-xs font-medium text-zinc-600 text-center">
                {org.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
