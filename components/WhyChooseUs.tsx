"use client";

import { motion } from "framer-motion";
import { Award, Gauge, Globe, Headphones } from "lucide-react";

const strengths = [
  {
    icon: Award,
    title: "45+ Years Engineering Experience",
    text: "Decades of expertise in process cooling, magnetics and cryogenics for Indian industry and research.",
  },
  {
    icon: Gauge,
    title: "Precision Testing & Measurement",
    text: "State-of-the-art magnetic, thermal and cryogenic measurement systems for quality and R&D.",
  },
  {
    icon: Globe,
    title: "Global Technology Sourcing",
    text: "Access to leading national and international manufacturers and proven technology partners.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    text: "Dedicated technical support and service to keep your systems running at peak performance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-28 bg-white scroll-mt-20"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-primary text-3xl sm:text-4xl uppercase tracking-tight">
            Why MAGTRANS
          </h2>
          <p className="mt-4 text-primary/80 text-lg">
            Engineering expertise, precision instrumentation and long-term partnership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-light-bg rounded-lg border border-primary/5 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit group-hover:bg-accent group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-montserrat font-bold text-primary text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-primary/80 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
