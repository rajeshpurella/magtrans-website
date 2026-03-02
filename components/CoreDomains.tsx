"use client";

import { motion } from "framer-motion";
import { ThermometerSnowflake, Magnet, Snowflake } from "lucide-react";

const domains = [
  {
    icon: ThermometerSnowflake,
    title: "Process Cooling",
    description:
      "Liquid, industrial and air cooling; value-added cooling solutions; cooling towers, air dryers, dehumidifiers and humidifiers for process stability and climate control.",
  },
  {
    icon: Magnet,
    title: "Magnetic Testing",
    description:
      "Hall effect measurement, VSM, hard and soft magnetic materials, cemented carbides, magneto-optic Kerr effect, field mappers, shielding devices and functional material measurement systems.",
  },
  {
    icon: Snowflake,
    title: "Cryogenic Systems",
    description:
      "Closed-cycle and liquid nitrogen cryostats, 4K systems and ultra-low temperature solutions for research and industrial applications.",
  },
];

export default function CoreDomains() {
  return (
    <section
      id="products"
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
            Core Engineering Domains
          </h2>
          <p className="mt-4 text-primary/80 text-lg">
            Process cooling, magnetics and cryogenics—engineered for precision and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, i) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl border border-primary/5 p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <domain.icon className="w-6 h-6" />
                </div>
                <h3 className="font-montserrat font-bold text-primary text-lg uppercase tracking-tight">
                  {domain.title}
                </h3>
              </div>
              <p className="text-primary/80 leading-relaxed">
                {domain.description}
              </p>
              <div className="mt-4 h-0.5 w-0 bg-accent group-hover:w-16 transition-all duration-300 rounded-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
