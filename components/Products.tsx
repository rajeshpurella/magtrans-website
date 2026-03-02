"use client";

import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  Magnet,
  Wind,
  Gauge,
  TestTube,
  Snowflake,
} from "lucide-react";

const products = [
  {
    icon: ThermometerSnowflake,
    title: "Process Cooling Systems",
    description:
      "State-of-the-art industrial cooling and refrigeration solutions for climate simulation and process stability. German-engineered reliability for demanding applications.",
  },
  {
    icon: Magnet,
    title: "Magnetic & Cryogenic Systems",
    description:
      "Advanced magnetic materials and low-temperature cryogenic systems for research and industrial applications. Precision equipment for superconductivity and testing.",
  },
  {
    icon: Gauge,
    title: "Testing & Measurement",
    description:
      "Testing, measurement instruments and systems for quality assurance and R&D. Trusted testing and proven performance across 60+ applications.",
  },
  {
    icon: Wind,
    title: "Climate Simulation",
    description:
      "Climate simulation systems and environmental testing chambers for aerospace, automotive and materials testing. Decades of expertise in refrigeration technology.",
  },
  {
    icon: TestTube,
    title: "Laboratory Solutions",
    description:
      "Laboratory cooling, cryogenics and measurement solutions for scientific and industrial labs. Nimble structure with impenetrable customer support.",
  },
  {
    icon: Snowflake,
    title: "Cryogenic Equipment",
    description:
      "Low-temperature cryogenic equipment and systems for cutting-edge research and industrial applications. Innovation-driven solutions with strong after-sales support.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-28 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-primary text-3xl sm:text-4xl uppercase tracking-tight">
            Our Products & Solutions
          </h2>
          <p className="mt-4 text-primary/80 text-lg">
            Robust, future-ready solutions backed by expertise across process cooling, magnetics and cryogenics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl border border-primary/5 p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <product.icon className="w-6 h-6" />
                </div>
                <h3 className="font-montserrat font-bold text-primary text-lg uppercase tracking-tight">
                  {product.title}
                </h3>
              </div>
              <p className="text-primary/80 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 h-0.5 w-0 bg-accent group-hover:w-16 transition-all duration-300 rounded-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
