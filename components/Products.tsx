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
      className="py-12 md:py-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <h2 className="font-montserrat font-semibold text-2xl md:text-3xl tracking-tight text-primary">
            Our Products & Solutions
          </h2>
          <p className="mt-4 text-primary/80 text-base md:text-lg leading-relaxed">
            Robust, future-ready solutions backed by expertise across process cooling, magnetics and cryogenics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white border border-zinc-200 border-l-4 border-emerald-600 p-8 transition-all duration-200 hover:bg-zinc-50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/5 text-primary">
                  <product.icon className="w-6 h-6" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold tracking-tight text-primary text-left">
                  {product.title}
                </h3>
              </div>
              <p className="text-primary/80 text-base leading-relaxed text-left">
                {product.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
