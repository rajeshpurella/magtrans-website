"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const counters = [
  { value: 45, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Applications Served" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Global Partners" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = value / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 bg-light-bg scroll-mt-20"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-primary text-3xl sm:text-4xl uppercase tracking-tight">
              About Us
            </h2>
            <p className="mt-4 text-primary/90 text-lg leading-relaxed">
              Precision Meets Performance. MAGTrans Systems Private Limited brings together over 45 years of experience in providing solutions for Testing, Measurement and Cooling Instruments and Systems for Indian customers.
            </p>
            <p className="mt-4 text-primary/90 text-lg leading-relaxed">
              Our company is known for supplying state-of-the-art systems and solutions renowned for their reliability and precision. MAGTrans has also ventured into Advanced Magnetic Materials and Low-temperature Cryogenics, supporting cutting-edge research and industrial applications across India.
            </p>
            <p className="mt-4 text-primary/90 text-lg leading-relaxed">
              We continue to offer quality products and systems from renowned national and international manufacturers, staying committed to innovation, performance, and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {counters.map((item, i) => (
              <div
                key={item.label}
                className="bg-white rounded-lg shadow-md p-6 border border-primary/5"
              >
                <div className="font-montserrat font-bold text-4xl sm:text-5xl text-accent">
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    inView={isInView}
                  />
                </div>
                <p className="mt-2 text-primary/80 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
