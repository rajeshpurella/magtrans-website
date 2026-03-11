"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CorporateHeroSlider from "@/components/CorporateHeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureGrid from "@/components/FeatureGrid";
import StatsCounterSection from "@/components/StatsCounterSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import CertificationsSection from "@/components/CertificationsSection";
import CaseStudySection from "@/components/CaseStudySection";
import DownloadCatalogSection from "@/components/DownloadCatalogSection";
import Contact from "@/components/Contact";
import CoreDomains from "@/components/CoreDomains";
import { INDUSTRIES_WITH_DESCRIPTIONS } from "@/lib/constants";
import { Building2 } from "lucide-react";

const STATS = [
  { value: 45, suffix: "+", label: "Years Engineering Experience" },
  { value: 60, suffix: "+", label: "Applications Served" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Global Partners" },
];

const industriesContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const industriesItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <CorporateHeroSlider />

      <section
        id="about"
        className="py-12 md:py-16 bg-zinc-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                Integrated engineering solutions
              </h2>
              <p className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed">
                Process cooling, magnetics, cryogenics and advanced laboratory systems—engineered for
                precision and reliability.
              </p>
              <div className="mt-6 space-y-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  MAGTRANS Systems Private Limited brings together over 45 years of experience in testing,
                  measurement and cooling systems for research laboratories and industrial applications.
                </p>
                <p>
                  We provide precision engineering systems sourced from leading national and international
                  technology partners, combining proven products with application engineering, commissioning
                  and through-life support.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <CoreDomains />
      </AnimatedSection>

      <section
        id="industries"
        className="py-12 md:py-16 bg-zinc-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                Industries We Serve
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Delivering precision systems across critical industrial and research sectors.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={industriesContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {INDUSTRIES_WITH_DESCRIPTIONS.map((item) => (
                <motion.div key={item.slug} variants={industriesItem}>
                  <Link
                    href={`/industries/${item.slug}`}
                    className="rounded-2xl bg-white/90 border border-zinc-100 p-6 sm:p-8 md:p-8 hover:shadow-md hover:border-zinc-200 transition-all duration-300 text-center block"
                  >
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-100 text-zinc-600">
                        <Building2 className="w-6 h-6" />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 tracking-tight">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-600 leading-relaxed max-w-sm mx-auto">
                      {item.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <StatsCounterSection
          stats={STATS}
          title="Why MAGTRANS"
          subtitle="Decades of expertise, global technology sourcing and dedicated after-sales support."
        />
      </AnimatedSection>

      <AnimatedSection>
        <ClientLogosSection />
      </AnimatedSection>

      <AnimatedSection>
        <CertificationsSection />
      </AnimatedSection>

      <AnimatedSection>
        <CaseStudySection />
      </AnimatedSection>

      <AnimatedSection>
        <DownloadCatalogSection />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
