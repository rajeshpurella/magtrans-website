"use client";

import { motion } from "framer-motion";
import { Award, FlaskConical, Handshake } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

const BADGES = [
  {
    icon: Award,
    title: "ISO Certified",
    description: "Quality management systems meeting international standards.",
  },
  {
    icon: FlaskConical,
    title: "Research Lab Collaborations",
    description: "Partnering with leading research institutions worldwide.",
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    description: "Trusted by manufacturers and industrial clients.",
  },
];

export default function CertificationsSection() {
  return (
    <section className={`bg-zinc-50 ${SECTION_PADDING}`}>
      <div className={CONTAINER_CLASS}>
        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {BADGES.map((badge) => (
            <motion.div
              key={badge.title}
              {...staggerItem}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                <badge.icon className="w-7 h-7" />
              </span>
              <h3 className="text-lg font-semibold text-zinc-900 tracking-tight">
                {badge.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed max-w-xs">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
