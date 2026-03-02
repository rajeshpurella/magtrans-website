"use client";

import { motion } from "framer-motion";
import { Gauge, Flame, TestTube2, Radio } from "lucide-react";

const domains = [
  {
    icon: Gauge,
    title: "Heat Flux & Instrumentation",
    items: ["Signal Conditioning Amplifiers", "Thermogage"],
  },
  {
    icon: Flame,
    title: "HT Solutions",
    items: ["Industrial and Laboratory", "Industrial Ovens"],
  },
  {
    icon: TestTube2,
    title: "Laboratory Equipment",
    items: ["Laminar Air Flow Stations", "Bio Safety Cabinets", "Fume Hoods"],
  },
  {
    icon: Radio,
    title: "Geophysical Research",
    items: ["Proton Precession Systems"],
  },
];

export default function AdvancedMeasurement() {
  return (
    <section
      id="advanced-measurement"
      className="py-28 bg-zinc-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-primary text-3xl sm:text-4xl uppercase tracking-tight">
            Advanced Measurement & Research
          </h2>
          <p className="mt-4 text-primary/80 text-lg">
            Heat flux, thermal solutions, laboratory systems and geophysical instrumentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, i) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl border border-primary/5 p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <domain.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-primary text-base uppercase tracking-tight">
                  {domain.title}
                </h3>
              </div>
              <ul className="space-y-2 text-primary/80 text-sm">
                {domain.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
