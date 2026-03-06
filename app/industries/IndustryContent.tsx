"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight } from "lucide-react";
import type { Industry } from "@/lib/industries-data";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

const ease = [0.4, 0, 0.2, 1] as const;

export default function IndustryContent({ industry }: { industry: Industry }) {
  if (industry.slug === "aerospace") {
    return <AerospaceIndustryPage industry={industry} />;
  }

  if (industry.slug === "research-labs") {
    return <ResearchLabsIndustryPage industry={industry} />;
  }

  if (industry.slug === "energy-sector") {
    return <EnergySectorIndustryPage industry={industry} />;
  }

  if (industry.slug === "manufacturing") {
    return <ManufacturingIndustryPage industry={industry} />;
  }

  if (industry.slug === "universities") {
    return <UniversitiesIndustryPage industry={industry} />;
  }

  if (industry.slug === "defense") {
    return <DefenseIndustryPage industry={industry} />;
  }

  return (
    <>
      <section className="bg-white pt-32 pb-20 border-b border-zinc-200">
        <div className={CONTAINER_CLASS}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-emerald-600 text-sm font-medium mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              All Industries
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              {industry.title}
            </h1>
            <p className="mt-4 text-zinc-600 text-lg max-w-3xl">
              {industry.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`${SECTION_PADDING} bg-zinc-50`}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-zinc-600 leading-relaxed max-w-3xl">
              {industry.shortDescription}
            </p>
            <Link
              href="/industries"
              className="mt-10 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Industries
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function DefenseIndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center overflow-hidden">
        <Image
          src="/products/industries/defense/defense.png"
          alt="Industry background"
          fill
          priority={false}
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_35%] scale-105 animate-slowZoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
          <div className="max-w-3xl animate-fadeUp">
            <span className="text-green-400 tracking-widest uppercase text-sm font-medium">
              Defense
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-3xl">
              Ruggedized Precision Systems for Defense &amp; Strategic Applications
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              MAGTRANS delivers high-reliability cooling, magnetic testing and instrumentation
              systems engineered for demanding defense environments and mission-critical operations.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="#defense-solutions"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Explore Defense Solutions
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                Request Confidential Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – DEFENSE SECTOR CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Defense Sector Challenges
            </h2>
            <p className="mt-4 text-zinc-600 text-base md:text-lg leading-relaxed">
              Defense applications require uncompromising system stability, rugged construction and
              precision performance under extreme operational conditions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Extreme environmental durability",
              "High electromagnetic stability",
              "Secure and reliable instrumentation",
              "Precision validation under harsh conditions",
              "Mission-critical reliability",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – OUR DEFENSE SOLUTIONS */}
      <section id="defense-solutions" className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Our Defense Solutions
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Rugged Cooling Systems",
                text: "Thermal management systems built for harsh and mobile environments.",
              },
              {
                title: "Magnetic Testing & Shielding",
                text: "High-accuracy magnetic field measurement and shielding solutions for sensitive equipment.",
              },
              {
                title: "Secure Instrumentation",
                text: "Reliable monitoring systems designed for strategic applications.",
              },
              {
                title: "Custom Defense Integration",
                text: "Tailored engineering solutions aligned with defense standards and operational requirements.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px]"
              >
                <h3 className="text-2xl font-semibold text-zinc-900">{card.title}</h3>
                <p className="mt-3 text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – RELATED PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Related Products
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/products/thermal-control-units",
                name: "Rugged Thermal Control Units",
                description: "Thermal control solutions engineered for mobile and harsh deployments.",
              },
              {
                href: "/products/high-end-gaussmeters",
                name: "High-Sensitivity Gaussmeters",
                description: "Precision magnetic field instruments suitable for defense qualification tasks.",
              },
              {
                href: "/products/magnetic-field-mapping-systems",
                name: "Magnetic Shielding Systems",
                description: "Systems that characterise and mitigate magnetic interference for sensitive assets.",
              },
              {
                href: "/products/magnetic-field-mapping-systems",
                name: "Field Monitoring Equipment",
                description: "Portable and fixed monitoring solutions for operational environments.",
              },
              {
                href: "/products/instrumentation-modules",
                name: "Custom Instrumentation Modules",
                description: "Application-specific instrumentation platforms for strategic programs.",
              },
            ].map((product) => (
              <Link key={product.href + product.name} href={product.href} className="flex flex-col">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px] flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-zinc-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 text-lg leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – APPLICATIONS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Applications
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Defense R&D laboratories",
              "Avionics and radar testing",
              "Naval system validation",
              "Strategic equipment calibration",
              "EMI/EMC analysis",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY CHOOSE MAGTRANS FOR DEFENSE? */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Why Choose MAGTRANS for Defense?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "High-reliability engineering",
              "Rugged system design",
              "Precision measurement capability",
              "Confidential project handling",
              "Long-term technical partnership",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <p className="text-sm md:text-base text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Partner with MAGTRANS for mission-ready precision systems built for defense
              excellence.
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-xl">
              Engage with our defense applications team to specify solutions aligned with your
              operational, qualification and deployment requirements.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            Speak to Our Defense Team
          </Link>
        </div>
      </section>
    </>
  );
}

function AerospaceIndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center overflow-hidden">
        <Image
          src="/products/industries/aerospace/aerospace.png"
          alt="Industry background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_30%] scale-105 animate-slowZoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
          <div className="max-w-3xl animate-fadeUp">
            <span className="text-green-400 tracking-widest uppercase text-sm font-medium">
              Aerospace
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-3xl">
              Precision Engineering Systems for Aerospace Applications
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              MAGTRANS delivers advanced cooling, magnetic testing and instrumentation solutions
              that support aerospace R&amp;D, validation and production environments.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Request Consultation
              </Link>
              <Link
                href="#aerospace-products"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                View Aerospace Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – INDUSTRY CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Aerospace Engineering Demands
            </h2>
            <p className="mt-4 text-zinc-600 text-base md:text-lg leading-relaxed">
              Aerospace systems demand uncompromising accuracy, environmental stability and
              repeatable testing under extreme operational conditions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Extreme temperature simulation",
              "Magnetic field interference testing",
              "High reliability validation",
              "Component-level precision measurement",
              "Environmental qualification",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – OUR AEROSPACE SOLUTIONS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Our Aerospace Solutions
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              MAGTRANS combines domain expertise with proven technologies to deliver integrated
              solutions for aerospace laboratories, environmental test facilities and production
              lines.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Cooling & Cryogenic Systems",
                text: "Precision thermal control for component testing and environmental simulation.",
              },
              {
                title: "Magnetic Testing Systems",
                text: "High accuracy Gaussmeters, magnetic field mapping and shielding solutions.",
              },
              {
                title: "Instrumentation & Measurement",
                text: "Advanced data acquisition and monitoring systems for aerospace validation labs.",
              },
              {
                title: "Custom Integration",
                text: "Tailored systems designed to meet aerospace-specific compliance and performance standards.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px]"
              >
                <h3 className="text-2xl font-semibold text-zinc-900">{card.title}</h3>
                <p className="mt-3 text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – RELATED PRODUCTS */}
      <section id="aerospace-products" className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Related Products</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Explore representative MAGTRANS systems commonly configured for aerospace projects.
          </p>
          <ul className="space-y-6 text-lg text-gray-800">
            <li>
              <span className="font-semibold">Cryogenic Test Systems</span> – Low-temperature
              platforms for component and material characterisation.
            </li>
            <li>
              <span className="font-semibold">Magnetic Field Mapping Systems</span> – High-resolution
              mapping for payloads, enclosures and test fixtures.
            </li>
            <li>
              <span className="font-semibold">High-End Gaussmeters</span> – Precision field
              measurement for qualification and troubleshooting.
            </li>
            <li>
              <span className="font-semibold">Thermal Control Units</span> – Closed-loop thermal
              conditioning for chambers and test rigs.
            </li>
            <li>
              <span className="font-semibold">Instrumentation Modules</span> – Signal conditioning
              and data acquisition modules for aerospace labs.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 – APPLICATIONS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Aerospace Applications
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Satellite component testing",
              "Avionics validation",
              "Propulsion system R&D",
              "Environmental simulation chambers",
              "Magnetic interference analysis",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY CHOOSE MAGTRANS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Why Choose MAGTRANS for Aerospace?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Indigenous engineering expertise",
              "Custom-built solutions",
              "Calibration & after-sales support",
              "Industry-grade precision",
              "Pan-India technical service",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <p className="text-sm md:text-base text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Ready to enhance your aerospace testing capabilities?
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-xl">
              Speak with our application engineering team to configure a solution that fits your
              mission profile and qualification roadmap.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

function ResearchLabsIndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center overflow-hidden">
        <Image
          src="/products/industries/research-labs/research-labs.png"
          alt="Industry background"
          fill
          priority={false}
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_40%] scale-105 animate-slowZoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
          <div className="max-w-3xl animate-fadeUp">
            <span className="text-green-400 tracking-widest uppercase text-sm font-medium">
              Research Labs
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-3xl">
              Advanced Cryogenic &amp; Magnetic Characterisation Systems for Research Laboratories
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              MAGTRANS provides high-precision cooling, magnetic measurement and instrumentation
              systems designed for R&amp;D institutions, innovation centers and advanced research
              facilities.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="#research-solutions"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Explore Research Solutions
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                Request Technical Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – RESEARCH CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Research Challenges
            </h2>
            <p className="mt-4 text-zinc-600 text-base md:text-lg leading-relaxed">
              Scientific discovery demands precision, stability and adaptable systems capable of
              supporting complex experimental requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Ultra-low temperature environments",
              "Stable magnetic field measurement",
              "Noise-free instrumentation",
              "High repeatability and accuracy",
              "Flexible experimental setups",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – OUR SOLUTIONS */}
      <section id="research-solutions" className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Our Solutions for Research Laboratories
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              MAGTRANS works closely with research teams to configure systems that match specific
              experimental goals, infrastructure constraints and future scalability needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Cryogenic Systems",
                text: "Low-temperature platforms for material science, superconductivity and advanced physics experiments.",
              },
              {
                title: "Magnetic Characterisation Systems",
                text: "High-sensitivity magnetic measurement and mapping solutions.",
              },
              {
                title: "Instrumentation & Data Acquisition",
                text: "High-resolution monitoring and real-time data capture systems.",
              },
              {
                title: "Custom Experimental Integration",
                text: "Modular systems tailored for university and private research labs.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px]"
              >
                <h3 className="text-2xl font-semibold text-zinc-900">{card.title}</h3>
                <p className="mt-3 text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – RELATED PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Related Products
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Explore representative MAGTRANS systems frequently deployed in research laboratories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/products/cryogenic-test-systems",
                name: "Cryogenic Measurement Systems",
                description: "Low-temperature measurement platforms for sensitive experiments.",
              },
              {
                href: "/products/magnetic-field-mapping-systems",
                name: "Magnetic Field Mapping Systems",
                description: "Detailed spatial mapping of magnetic fields in experimental setups.",
              },
              {
                href: "/products/high-end-gaussmeters",
                name: "High-End Gaussmeters",
                description: "Precision magnetic field measurement for laboratory applications.",
              },
              {
                href: "/products/instrumentation-modules",
                name: "Data Acquisition Systems",
                description: "Scalable instrumentation modules for multi-channel data capture.",
              },
              {
                href: "/products/thermal-control-units",
                name: "Thermal Controllers",
                description: "Closed-loop temperature control for cryostats and experimental rigs.",
              },
            ].map((product) => (
              <Link key={product.href} href={product.href} className="flex flex-col">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px] flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-zinc-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 text-lg leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – APPLICATIONS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Applications
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Material science research",
              "Superconducting material testing",
              "Magnetic material analysis",
              "Nanotechnology studies",
              "Advanced physics experiments",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY MAGTRANS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Why MAGTRANS for Research Labs?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Precision-focused engineering",
              "Custom lab integration",
              "Scalable systems",
              "Technical support & calibration",
              "Designed for academic and industrial R&D",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <p className="text-sm md:text-base text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Partner with MAGTRANS to power your next scientific breakthrough.
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-xl">
              Connect with our application engineering team to design systems that align with your
              laboratory&apos;s research roadmap.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </>
  );
}

function UniversitiesIndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center overflow-hidden">
        <Image
          src="/products/industries/universities/universities.png"
          alt="Industry background"
          fill
          priority={false}
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_35%] scale-105 animate-slowZoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
          <div className="max-w-3xl animate-fadeUp">
            <span className="text-green-400 tracking-widest uppercase text-sm font-medium">
              Universities
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-3xl">
              Advanced Laboratory &amp; Measurement Solutions for Academic Institutions
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              MAGTRANS supports universities and technical institutes with precision laboratory
              equipment, magnetic measurement systems and research-grade instrumentation for
              teaching and advanced study.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="#university-solutions"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Explore Academic Solutions
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                Request Lab Setup Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – ACADEMIC CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Academic Challenges
            </h2>
            <p className="mt-4 text-zinc-600 text-base md:text-lg leading-relaxed">
              Modern academic institutions require flexible, durable and precise laboratory systems
              to support both foundational teaching and advanced research.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Reliable lab equipment for teaching",
              "Research-grade precision systems",
              "Safe and stable cooling solutions",
              "Modular setups for multiple experiments",
              "Cost-effective yet high-performance systems",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – OUR UNIVERSITY SOLUTIONS */}
      <section id="university-solutions" className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Our University Solutions
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              MAGTRANS collaborates with academic stakeholders to build laboratories that are
              intuitive for students while offering the performance required for cutting-edge
              research.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Teaching Laboratory Systems",
                text: "User-friendly magnetic and thermal systems designed for academic demonstrations and practical sessions.",
              },
              {
                title: "Research-Grade Instrumentation",
                text: "High-precision measurement systems for postgraduate and doctoral research.",
              },
              {
                title: "Cryogenic & Thermal Platforms",
                text: "Controlled temperature environments for material and physics labs.",
              },
              {
                title: "Custom Lab Setup",
                text: "Complete laboratory planning and system integration support.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px]"
              >
                <h3 className="text-2xl font-semibold text-zinc-900">{card.title}</h3>
                <p className="mt-3 text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – RELATED PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Related Products
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Representative MAGTRANS products commonly configured for university teaching and
              research laboratories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/products/high-end-gaussmeters",
                name: "Laboratory Gaussmeters",
                description: "Precision magnetic field instruments for instructional and research use.",
              },
              {
                href: "/products/magnetic-field-mapping-systems",
                name: "Magnetic Field Demonstration Kits",
                description: "Systems that visualise and quantify magnetic fields for classroom learning.",
              },
              {
                href: "/products/cryogenic-test-systems",
                name: "Cryogenic Test Units",
                description: "Compact low-temperature platforms for material and physics experiments.",
              },
              {
                href: "/products/instrumentation-modules",
                name: "Instrumentation Modules",
                description: "Modular signal conditioning and measurement building blocks for labs.",
              },
              {
                href: "/products/data-monitoring-systems",
                name: "Data Monitoring Systems",
                description: "Centralised monitoring for multi-channel laboratory experiments.",
              },
            ].map((product) => (
              <Link key={product.href} href={product.href} className="flex flex-col">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px] flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-zinc-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 text-lg leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – APPLICATIONS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Applications
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Physics department labs",
              "Engineering research centers",
              "Material science departments",
              "Electronics & instrumentation labs",
              "PhD research projects",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY MAGTRANS FOR UNIVERSITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Why MAGTRANS for Universities?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Academic-focused solutions",
              "Easy integration into existing labs",
              "Training & technical support",
              "Long-term reliability",
              "India-based engineering & service",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <p className="text-sm md:text-base text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Empower your students and researchers with precision-engineered laboratory systems.
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-xl">
              Our team works with academic leaders to design laboratory infrastructures that support
              both curriculum delivery and frontier research.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            Speak to Our Academic Team
          </Link>
        </div>
      </section>
    </>
  );
}

function ManufacturingIndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center overflow-hidden">
        <Image
          src="/products/industries/manufacturing/manufacturing.png"
          alt="Industry background"
          fill
          priority={false}
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_45%] scale-105 animate-slowZoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
          <div className="max-w-3xl animate-fadeUp">
            <span className="text-green-400 tracking-widest uppercase text-sm font-medium">
              Manufacturing
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-3xl">
              Precision Cooling &amp; Quality Assurance Systems for Industrial Manufacturing
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              MAGTRANS delivers advanced thermal control, magnetic testing and instrumentation
              systems that enhance production efficiency, process stability and product quality.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="#manufacturing-solutions"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Explore Manufacturing Solutions
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                Request Technical Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – MANUFACTURING CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Manufacturing Challenges
            </h2>
            <p className="mt-4 text-zinc-600 text-base md:text-lg leading-relaxed">
              Manufacturing operations require robust, repeatable and precise systems that maintain
              quality standards while supporting high-volume production.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Continuous process cooling",
              "Stable thermal control",
              "Accurate magnetic field validation",
              "High uptime and reliability",
              "Real-time monitoring & instrumentation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – OUR MANUFACTURING SOLUTIONS */}
      <section id="manufacturing-solutions" className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Our Manufacturing Solutions
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              MAGTRANS partners with industrial teams to implement systems that improve process
              control, reduce variability and support stringent quality requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Process Cooling Systems",
                text: "High-efficiency thermal management systems for industrial production lines.",
              },
              {
                title: "Magnetic Quality Assurance",
                text: "Magnetic field verification and measurement for component consistency.",
              },
              {
                title: "Instrumentation & Monitoring",
                text: "Real-time data acquisition and system performance tracking.",
              },
              {
                title: "Custom Industrial Integration",
                text: "Tailored system design to match factory environments and workflow.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px]"
              >
                <h3 className="text-2xl font-semibold text-zinc-900">{card.title}</h3>
                <p className="mt-3 text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – RELATED PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Related Products
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Explore representative MAGTRANS systems deployed across industrial manufacturing
              environments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/products/process-cooling/industrial-cooling",
                name: "Industrial Cooling Units",
                description: "Process cooling solutions engineered for continuous-duty production.",
              },
              {
                href: "/products/magnetic-field-mapping-systems",
                name: "Magnetic Field Measurement Systems",
                description: "Systems for validating magnetic performance of components and assemblies.",
              },
              {
                href: "/products/high-end-gaussmeters",
                name: "Gaussmeters for QA",
                description: "Precision gaussmeters for in-line and offline quality checks.",
              },
              {
                href: "/products/thermal-control-units",
                name: "Thermal Monitoring Systems",
                description: "Closed-loop temperature monitoring for equipment and processes.",
              },
              {
                href: "/products/instrumentation-modules",
                name: "Data Acquisition Modules",
                description: "Modular platforms for capturing key process and quality parameters.",
              },
            ].map((product) => (
              <Link key={product.href} href={product.href} className="flex flex-col">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px] flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-zinc-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 text-lg leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – APPLICATIONS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Applications
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Automotive component manufacturing",
              "Electronics production",
              "Precision metal fabrication",
              "Magnet manufacturing",
              "Industrial R&D units",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY CHOOSE MAGTRANS FOR MANUFACTURING? */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Why Choose MAGTRANS for Manufacturing?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Reliable industrial-grade systems",
              "Custom-built integration",
              "Reduced downtime",
              "Long operational lifespan",
              "Pan-India service support",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <p className="text-sm md:text-base text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Improve efficiency and maintain quality with precision-engineered manufacturing
              systems.
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-xl">
              Work with our industrial applications team to configure cooling, magnetic testing and
              instrumentation systems aligned to your production goals.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            Contact Our Industrial Team
          </Link>
        </div>
      </section>
    </>
  );
}

function EnergySectorIndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center overflow-hidden">
        <Image
          src="/products/industries/energy-sector/energy-sector.png"
          alt="Industry background"
          fill
          priority={false}
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_40%] scale-105 animate-slowZoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-white">
          <div className="max-w-3xl animate-fadeUp">
            <span className="text-green-400 tracking-widest uppercase text-sm font-medium">
              Energy Sector
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-3xl">
              Thermal &amp; Instrumentation Systems for Energy Generation and Distribution
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              MAGTRANS provides precision cooling, magnetic measurement and monitoring solutions
              designed to enhance performance, reliability and safety in power generation and
              energy infrastructure.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="#energy-solutions"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Explore Energy Solutions
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                Request Project Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – ENERGY SECTOR CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Energy Sector Challenges
            </h2>
            <p className="mt-4 text-zinc-600 text-base md:text-lg leading-relaxed">
              Power plants and energy infrastructure demand robust systems capable of operating
              under extreme thermal and electrical conditions while maintaining consistent
              performance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Stable thermal management",
              "Continuous performance monitoring",
              "Magnetic interference control",
              "High reliability under heavy loads",
              "Long-term operational stability",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – OUR ENERGY SOLUTIONS */}
      <section id="energy-solutions" className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Our Energy Solutions
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Thermal Management Systems",
                text: "Advanced cooling systems for generators, transformers and power electronics.",
              },
              {
                title: "Magnetic Measurement Systems",
                text: "Monitoring magnetic fields in high-power environments to ensure stability and safety.",
              },
              {
                title: "Instrumentation & Monitoring",
                text: "Real-time data logging, system diagnostics and performance analysis.",
              },
              {
                title: "Custom Energy Integration",
                text: "Tailored systems designed for energy generation, transmission and research facilities.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px]"
              >
                <h3 className="text-2xl font-semibold text-zinc-900">{card.title}</h3>
                <p className="mt-3 text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – RELATED PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Related Products
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/products/thermal-control-units",
                name: "Thermal Control Units",
                description: "Precision thermal management platforms for power equipment and test rigs.",
              },
              {
                href: "/products/high-end-gaussmeters",
                name: "High-End Gaussmeters",
                description: "Accurate magnetic field diagnostics for high-power environments.",
              },
              {
                href: "/products/magnetic-field-mapping-systems",
                name: "Magnetic Field Monitoring Systems",
                description: "Continuous monitoring of magnetic conditions around critical assets.",
              },
              {
                href: "/products/instrumentation-modules",
                name: "Data Acquisition Systems",
                description: "High-channel count data logging for grid and plant infrastructure.",
              },
              {
                href: "/products/process-cooling/industrial-cooling",
                name: "Industrial Cooling Platforms",
                description: "Cooling solutions engineered for heavy-duty energy sector applications.",
              },
            ].map((product) => (
              <Link key={product.href} href={product.href} className="flex flex-col">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 min-h-[260px] flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-zinc-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 text-lg leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – APPLICATIONS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Applications
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Power generation plants",
              "Renewable energy facilities",
              "Transformer testing labs",
              "Grid monitoring systems",
              "Energy R&D centers",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-sm md:text-base text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY CHOOSE MAGTRANS FOR ENERGY? */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Why Choose MAGTRANS for Energy?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Industrial-grade reliability",
              "High-performance cooling",
              "Accurate magnetic diagnostics",
              "Custom engineering solutions",
              "Strong technical support network",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <p className="text-sm md:text-base text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FINAL CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Enhance reliability and performance across your energy infrastructure with
              precision-engineered systems.
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-xl">
              Our engineering team helps utilities and energy operators specify and implement
              solutions that support long-term, stable operation.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            Contact Our Energy Experts
          </Link>
        </div>
      </section>
    </>
  );
}

