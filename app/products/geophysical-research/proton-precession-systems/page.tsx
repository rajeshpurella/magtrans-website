"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURE_CARDS = [
  {
    title: "INSTANT RESULTS",
    description: "Real-time visualization. No external data loggers required.",
  },
  {
    title: "NO NEED FOR TUNING",
    description: "Zero tuning required. Works straight out of the box.",
  },
  {
    title: "NO NEED FOR SENSOR ALIGNMENT",
    description: "Advanced toroidal sensor eliminates alignment requirements.",
  },
  {
    title: "EXTREMELY PRECISE",
    description: "Accurate and reliable readings under all conditions.",
  },
  {
    title: "EXTREMELY SENSITIVE",
    description: "Detects even the smallest magnetic field variations.",
  },
  {
    title: "LIGHTWEIGHT & WATERPROOF",
    description: "Weighs just over 1 kg. Tested up to 30 meters underwater.",
  },
];

const APPLICATIONS = [
  {
    title: "Geophysical Surveys",
    text: "Detecting rock discontinuities, voids, and magnetic anomalies.",
  },
  {
    title: "Archaeological Research",
    text: "Mapping buried structures, ancient walls, and trenches.",
  },
  {
    title: "Metal Detection",
    text: "Locating ferromagnetic objects such as pipelines, unexploded ordnance, or buried metals.",
  },
  {
    title: "Underwater Surveys",
    text: "Operates effectively in marine and underwater environments.",
  },
];

export default function ProtonPrecessionSystemsPage() {
  return (
    <main className="bg-white">
      {/* SECTION 1 – FULL SCREEN HERO */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                AtomicX Proton Magnetometer – Advanced Magnetometer for Geophysical & Archaeological
                Surveys in India
              </h1>

              <h2 className="text-xl text-orange-400 font-semibold mt-6">
                No Coil Tuning – Plug & Play Design
              </h2>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                AtomicX Proton Magnetometer is a next-generation nuclear magnetic resonance
                magnetometer designed for geophysical surveys, archaeological exploration, mineral
                prospecting, and metal detection across India. Built with a highly sensitive 0.1 nT
                toroidal sensor and advanced digital signal processing algorithms, the AtomicX
                delivers exceptional accuracy for detecting and mapping subsurface magnetic
                anomalies.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[450px] lg:h-[600px]">
              <Image
                src="/products/geophysical-research/proton-precession-systems/atomicx-proton-magnetometer.png"
                alt="AtomicX Proton Magnetometer"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – VERSATILE APPLICATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-12 text-center"
          >
            Versatile Applications
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPLICATIONS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors"
              >
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – NO COIL TUNING (IMAGE LEFT / TEXT RIGHT) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src="/products/geophysical-research/proton-precession-systems/atomicx-proton.png"
                  alt="AtomicX Proton System"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain rounded-xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4 order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                No Coil Tuning – Plug & Play Design
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Unlike conventional magnetometers that require sensor coil tuning or recalibration,
                the AtomicX Proton Magnetometer features a zero-tuning design. It instantly adapts
                to magnetic field variations of up to tens of thousands of nanotesla without
                affecting measurement accuracy. No recalibration needed between survey sites —
                simply power on and start surveying.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – SENSOR TECHNOLOGY */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6">
              Toroidal Sensor – No Orientation Required
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              The toroidal sensor design eliminates the need for alignment with the Earth&apos;s
              magnetic poles. Operators can move freely in any direction without worrying about
              sensor orientation, making the system ideal for dynamic fieldwork and challenging
              terrains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 – WORKS ANYWHERE */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6">
              Works Anywhere on Earth
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              With its wide operating range, AtomicX functions reliably under nearly all magnetic
              field conditions found on Earth — from high-altitude regions to coastal plains —
              delivering consistent performance without manual adjustment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 – FEATURE HIGHLIGHT CARDS (Dark Background) */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-14 text-center"
          >
            Key Features
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl bg-zinc-800/80 border border-zinc-700/50 p-6 shadow-xl shadow-black/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-sm font-bold tracking-wider text-emerald-400 mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – BIG CENTERED PRODUCT IMAGE */}
      <section className="py-24 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-[500px] md:h-[600px]"
          >
            <Image
              src="/products/geophysical-research/proton-precession-systems/atomick1.png"
              alt="AtomicX Proton Magnetometer"
              fill
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-contain transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
