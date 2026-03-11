"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

export default function ClientLogosSection() {
  return (
    <section className={`bg-white ${SECTION_PADDING} border-t border-zinc-100`}>
      <div className={CONTAINER_CLASS}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 mb-8 sm:mb-10 md:mb-12"
        >
          Trusted by Research Institutions & Industry
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {ORGANISATIONS.map((org) => (
            <motion.div
              key={org.name}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
