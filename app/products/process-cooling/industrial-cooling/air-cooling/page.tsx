import type { Metadata } from "next";
import Image from "next/image";
import ContextBackLink from "@/app/components/ContextBackLink";
import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Air Cooling | Industrial Cooling | MAGTRANS Systems",
  description:
    "Air-cooled industrial cooling systems for process and equipment heat rejection.",
  alternates: {
    canonical: "/products/process-cooling/industrial-cooling/air-cooling",
  },
  openGraph: {
    title: "Air Cooling | Industrial Cooling | MAGTRANS Systems",
    description:
      "Air-cooled industrial cooling systems for process and equipment heat rejection.",
    images: ["/products/air-cooling/vertical.jpg"],
  },
};

export default function IndustrialAirCoolingPage() {
  return (
    <ProductPageTemplate
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        {
          label: "Process Cooling",
          href: "/products/process-cooling",
        },
        {
          label: "Industrial Cooling",
          href: "/products/process-cooling/industrial-cooling",
        },
        { label: "Air Cooling" },
      ]}
      hero={{
        categoryLabel: "Industrial Cooling",
        name: "Air Cooling Systems",
        tagline:
          "Industrial-grade air cooling for electrical panels, industrial cabinets and data centres, engineered for stable thermal performance and energy efficiency.",
        imageSrc: "/products/air-cooling/vertical.jpg",
        imageAlt: "Industrial air cooling systems",
        primaryCtaHref: "/#contact",
        primaryCtaLabel: "Discuss Air Cooling",
        secondaryCtaHref: "/#contact",
        secondaryCtaLabel: "Request Brochure",
      }}
      overview={{
        heading: "Air Cooling for Industrial Panels and Data Centres",
        paragraphs: [
          "MAGTRANS air cooling solutions are designed for electrical panels, industrial cabinets and data centre environments where reliable heat rejection is critical for uptime.",
          "Panel-mounted and ductable configurations maintain dust‑free, humidity‑controlled conditions inside cabinets, while inverter‑based systems adapt to varying heat loads and ambient temperatures to improve efficiency.",
        ],
        highlights: [
          "Compact panel air conditioners for control cabinets",
          "Inverter panel systems with up to 50% energy savings",
          "Dedicated data centre cooling configurations",
        ],
      }}
      features={[
        {
          title: "Compact Panel Air Conditioners",
          description:
            "Vertical and ductable units engineered to protect sensitive electrical components in control panels and cabinets.",
        },
        {
          title: "Inverter Panel Cooling",
          description:
            "Inverter-driven panel air conditioners that modulate capacity to match dynamic heat loads and ambient conditions.",
        },
        {
          title: "Data Centre Cooling Systems",
          description:
            "In-rack and in-row cooling solutions that deliver conditioned air directly to high-density server loads.",
        },
      ]}
      applications={[
        "Electrical panel and control cabinet cooling",
        "Industrial automation and drives",
        "Data centre rack and row-level cooling",
      ]}
      images={[
        "/products/air-cooling/vertical.jpg",
        "/products/air-cooling/ductable.jpg",
        "/products/air-cooling/inverter-panel-air-conditioner.jpg",
        "/products/air-cooling/inrack.png",
      ]}
    >
      {/* Original detailed sections preserved below */}
      {/* Hero context backlink */}
      <section className="py-6 border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ContextBackLink />
        </div>
      </section>

      {/* Section 1 – Compact Panel Air Conditioner */}
      <section className="py-20 border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700">
              Compact Panel Air Conditioner · Series: Nano Chill
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
              Compact Panel Air Conditioner
            </h2>
            <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed">
              The control panels of most automated machines contain highly
              sophisticated and sensitive electrical components such as drives,
              PLCs, thyristors and transformers that generate heat. If this heat
              is not properly removed, it can lead to component failure and
              reduced equipment life.
            </p>
            <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
              Additionally, control cabinets must remain dust-free and protected
              against humidity to ensure operational safety and reliability.
            </p>
            <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
              Werner Finley offers panel air conditioners that efficiently
              remove heat from cabinets while maintaining dust-free and
              humidity-protected conditions. With over three decades of
              engineering expertise, the designs are optimised to suit diverse
              industrial requirements.
            </p>
            <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
              A new range of inverter panel air conditioners has also been
              developed to handle varying load and ambient conditions, helping
              customers achieve up to 50% energy savings.
            </p>
          </header>

          {/* Variants – Vertical */}
          <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center bg-white rounded-2xl border border-zinc-200 px-6 py-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200">
              <Image
                src="/products/air-cooling/vertical.jpg"
                alt="Vertical Compact Panel Air Conditioner"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-contain p-6"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Vertical
                </h3>
                <p className="mt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
                  Vertical panel-mounted air conditioners designed for compact
                  control cabinets and electrical panels.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Features
                </h4>
                <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                  <li>Eco-friendly R134a / R407c refrigerant</li>
                  <li>High efficiency reciprocating / scroll compressors</li>
                  <li>
                    Air condenser designed to operate up to 50°C ambient
                    temperature
                  </li>
                  <li>High air throw fans</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Variants – Ductable */}
          <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center bg-white rounded-2xl border border-zinc-200 px-6 py-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200">
              <Image
                src="/products/air-cooling/ductable.jpg"
                alt="Ductable Compact Panel Air Conditioner"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-contain p-6"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Ductable
                </h3>
                <p className="mt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
                  Ductable configurations that allow conditioned air to be
                  routed to specific zones within complex panel layouts.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Features
                </h4>
                <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                  <li>Eco-friendly R134a / R407c refrigerant</li>
                  <li>High efficiency reciprocating / scroll compressors</li>
                  <li>
                    Air condenser designed to operate up to 50°C ambient
                    temperature
                  </li>
                  <li>High air throw fans</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Section 2 – Inverter Panel Air Conditioner */}
      <section className="py-20 border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200">
            <Image
              src="/products/air-cooling/inverter-panel-air-conditioner.jpg"
              alt="Inverter Panel Air Conditioner"
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-contain p-6"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                Inverter Panel Air Conditioner
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
                Inverter-based panel air conditioners that adapt to varying heat
                loads and ambient conditions, providing higher efficiency and
                tighter temperature control for electrical cabinets.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Features</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                <li>Eco-friendly R134a / R407c refrigerant</li>
                <li>
                  Air condenser designed to operate up to 50°C ambient
                  temperature
                </li>
                <li>High air throw fans</li>
                <li>Rated ambient temperature 35°C</li>
                <li>
                  Protects against humidity and keeps electrical cabinets dust
                  free
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Capacity Range
              </h3>
              <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                <li>DC Inverter Panel Mount: 0.56 – 0.9 TR</li>
                <li>Vertical: 0.2 – 1 TR</li>
                <li>Ductable: 0.3 – 3 TR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Data Center Cooling Systems */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700">
              Data Center Cooling Systems · Series: Nano Chill
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
              Data Center Cooling Systems
            </h2>
            <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed">
              Efficient cooling is critical for maintaining data center
              performance. Temperature control plays a vital role in preventing
              server malfunction and ensuring optimal operational efficiency.
            </p>
            <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
              Improper cooling can result in system failures and excessive
              energy costs. Our solutions ensure consistent environmental
              control while optimising energy usage.
            </p>
            <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
              Werner Finley has been delivering high-efficiency, reliable data
              center cooling systems for over a decade. Continuous innovation
              enables adaptation to the evolving requirements of modern data
              centers.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center bg-white rounded-2xl border border-zinc-200 px-6 py-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200">
              <Image
                src="/products/air-cooling/inrack.png"
                alt="In-Rack Data Center Cooling Unit"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-contain p-6"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  In Rack
                </h3>
                <p className="mt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
                  Rack-level cooling systems that deliver conditioned air
                  directly where the heat is generated, improving thermal
                  performance and energy efficiency.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Features
                </h4>
                <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                  <li>Eco-friendly R134a / R407c refrigerant</li>
                  <li>High efficiency rotary / scroll compressors</li>
                  <li>Inverter technology</li>
                  <li>Rated ambient temperature 40°C</li>
                  <li>High reliability variable speed fans</li>
                  <li>Intelligent controller with RS485 interface</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Capacity Range
                </h4>
                <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                  <li>In-rack: 3.5 – 10.5 kW</li>
                  <li>In-row: 20 – 30 kW</li>
                  <li>Rack mount: 0.7 – 5.5 kW</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </ProductPageTemplate>
  );
}

