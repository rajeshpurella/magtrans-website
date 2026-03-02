import Link from "next/link";
import CorporateHeroSlider from "@/components/CorporateHeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureGrid from "@/components/FeatureGrid";
import StatsCounterSection from "@/components/StatsCounterSection";
import NewsletterSection from "@/components/NewsletterSection";
import Contact from "@/components/Contact";
import { productDomains } from "@/lib/products-data";
import { INDUSTRIES_WITH_DESCRIPTIONS } from "@/lib/constants";
import { ThermometerSnowflake, Magnet, Snowflake, Building2 } from "lucide-react";

const CORE_DOMAINS = productDomains.slice(0, 3).map((d, i) => ({
  title: d.title,
  description: d.shortDescription,
  icon: [ThermometerSnowflake, Magnet, Snowflake][i],
}));

const STATS = [
  { value: 45, suffix: "+", label: "Years Engineering Experience" },
  { value: 60, suffix: "+", label: "Applications Served" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Global Partners" },
];

export default function Home() {
  return (
    <>
      <CorporateHeroSlider />

      <AnimatedSection
        id="about"
        title="Integrated engineering solutions"
        subtitle="Process cooling, magnetics, cryogenics and advanced laboratory systems—engineered for precision and reliability."
        className="bg-zinc-50 scroll-mt-20"
      >
        <p className="text-base text-zinc-600 leading-relaxed max-w-3xl mx-auto text-center">
          MAGTRANS Systems brings together over 45 years of experience in testing, measurement and cooling systems. We supply state-of-the-art solutions from renowned national and international manufacturers for Indian industry and research.
        </p>
      </AnimatedSection>

      <AnimatedSection
        id="domains"
        title="Core engineering domains"
        subtitle="Precision systems across three foundational areas."
        className="bg-white scroll-mt-20"
      >
        <FeatureGrid
          features={CORE_DOMAINS.map((d) => ({
            title: d.title,
            description: d.description,
            icon: d.icon ? <d.icon className="w-8 h-8" /> : undefined,
          }))}
          columns={3}
        />
      </AnimatedSection>

      <AnimatedSection
        id="industries"
        title="Industries We Serve"
        subtitle="Delivering precision systems across critical industrial and research sectors."
        className="bg-zinc-50 scroll-mt-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_WITH_DESCRIPTIONS.map((item) => (
            <Link
              key={item.slug}
              href={`/industries/${item.slug}`}
              className="rounded-2xl bg-white/90 border border-zinc-100 p-8 hover:shadow-md hover:border-zinc-200 transition-all duration-300 text-center block"
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
          ))}
        </div>
      </AnimatedSection>

      <StatsCounterSection
        stats={STATS}
        title="Why MAGTRANS"
        subtitle="Decades of expertise, global technology sourcing and dedicated after-sales support."
      />

      <NewsletterSection />

      <Contact />
    </>
  );
}
