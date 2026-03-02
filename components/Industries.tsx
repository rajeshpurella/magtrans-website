"use client";

import { motion } from "framer-motion";
import {
  Plane,
  FlaskConical,
  GraduationCap,
  Factory,
  Zap,
  Shield,
} from "lucide-react";

const applications = [
  { icon: Plane, label: "Aerospace" },
  { icon: FlaskConical, label: "Research Labs" },
  { icon: GraduationCap, label: "Universities" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Zap, label: "Energy Sector" },
  { icon: Shield, label: "Defense" },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-28 bg-primary scroll-mt-20"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-white text-3xl sm:text-4xl uppercase tracking-tight">
            Applications Served
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            From aerospace and defense to research labs, universities, manufacturing and energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {applications.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 rounded-lg border border-white/10 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(47,128,237,0.2)] transition-all duration-300"
            >
              <item.icon className="w-10 h-10 text-white/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
              <span className="mt-3 text-white/90 text-sm font-medium text-center group-hover:text-white">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
