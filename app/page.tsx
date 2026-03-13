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
import Contact from "@/components/Contact";
import CoreDomains from "@/components/CoreDomains";
import { INDUSTRIES_WITH_DESCRIPTIONS } from "@/lib/constants";
import { Building2 } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardContainer } from "@/components/ui/CardContainer";

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

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MAGTRANS Systems Private Limited",
  url: "https://magtrans.in",
  logo: "https://magtrans.in/products/images/logo/magtranslogo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "3-6-369/A/10, Flat No.1, Srinilayam, Street No.1, Himayathnagar",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500029",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 93921 23094",
      contactType: "sales",
      email: "sales@magtrans.in",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/magtrans-systems-private-limited/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <CorporateHeroSlider />

      <SectionShell id="about" background="muted" aria-label="About MAGTRANS">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center">
            <SectionHeader
              title="Integrated engineering solutions"
              subtitle="Process cooling, magnetics, cryogenics and advanced laboratory systems—engineered for precision and reliability."
            />
            <div className="mt-6 space-y-4 text-base text-zinc-600 leading-relaxed max-w-3xl">
              <p>
                MAGTRANS Systems Private Limited brings together over 45 years of
                experience in testing, measurement and cooling systems for
                research laboratories and industrial applications.
              </p>
              <p>
                We provide precision engineering systems sourced from leading
                national and international technology partners, combining proven
                products with application engineering, commissioning and
                through-life support.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </SectionShell>

      <AnimatedSection>
        <CoreDomains />
      </AnimatedSection>

      <SectionShell
        id="industries"
        background="muted"
        aria-label="Industries we serve"
      >
        <AnimatedSection>
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="flex justify-center">
              <SectionHeader
                title="Industries We Serve"
                subtitle="Delivering precision systems across critical industrial and research sectors."
              />
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
                  <Link href={`/industries/${item.slug}`}>
                    <CardContainer className="h-full text-center px-6 sm:px-8 py-6 sm:py-8">
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
                    </CardContainer>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </SectionShell>

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
        <Contact />
      </AnimatedSection>
    </>
  );
}
