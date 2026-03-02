"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "Make in India", description: "Class 1 & Class 2 Supplier" },
  { name: "Quality Certified", description: "State-of-the-art systems" },
  { name: "International Standards", description: "Global tech sourcing" },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications & Recognition
          </h2>
          <p className="mt-4 text-primary/80 text-lg">
            Trusted partner for national and international manufacturers. Make in India Class 1 and Class 2 supplier for foreign companies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-light-bg border-2 border-primary/10 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                <span className="font-montserrat font-bold text-2xl text-primary/40 group-hover:text-accent">
                  {cert.name.charAt(0)}
                </span>
              </div>
              <p className="mt-4 font-montserrat font-semibold text-primary">
                {cert.name}
              </p>
              <p className="text-sm text-primary/70">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
