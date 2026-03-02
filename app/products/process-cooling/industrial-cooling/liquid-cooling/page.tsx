import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContextBackLink from "@/app/components/ContextBackLink";

export const metadata: Metadata = {
  title: "Liquid Cooling Systems | Process Cooling | MAGTRANS Systems",
  description:
    "Liquid cooling systems for industrial and laboratory applications, including air-cooled, water-cooled, oil, coolant, inverter and modular chillers.",
  alternates: {
    canonical:
      "/products/process-cooling/industrial-cooling/liquid-cooling",
  },
};

type ProductSectionProps = {
  title: string;
  image: string;
  description: string;
  features: string[];
  capacity: string;
  capacityDetail?: string;
  capacityChartLink: string;
};

function ProductSection({
  title,
  image,
  description,
  features,
  capacity,
  capacityDetail,
  capacityChartLink,
}: ProductSectionProps) {
  const hasImage = Boolean(image);

  return (
    <section className="py-16 border-t border-zinc-200 first:border-t-0">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={
            hasImage
              ? "grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center"
              : "max-w-4xl mx-auto"
          }
        >
          {hasImage && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-contain p-6"
              />
            </div>
          )}

          <div
            className={
              hasImage
                ? "space-y-5"
                : "space-y-5"
            }
          >
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                {title}
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-zinc-900">Key Features</h3>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-sm text-zinc-700 leading-relaxed">
                {features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="flex-1 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800">
                <p className="font-semibold text-zinc-900">Capacity Range</p>
                <p className="mt-1">{capacity}</p>
                {capacityDetail && (
                  <p className="mt-1 text-zinc-600">{capacityDetail}</p>
                )}
              </div>
            </div>

            <div>
              <a
                href={capacityChartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
              >
                View Capacity Chart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCTS: ProductSectionProps[] = [
  {
    title: "Air Cooled Chiller",
    image: "/products/Air Cooled Chiller.png",
    description:
      "Compact air-cooled chillers engineered for reliable and energy-efficient industrial cooling where space is at a premium and ambient conditions are demanding.",
    features: [
      "Rated ambient temperature: 35°C",
      "High-efficiency rotary / scroll compressors",
      "Condenser operates up to 50°C ambient temperature",
      "Reliable global brand pumps",
      "With / Without pump configuration options",
      "Intelligent controller with RS485 communication",
      "Eco-friendly R410A refrigerant",
    ],
    capacity: "1.0 TR to 5 TR",
    capacityDetail: "Three-phase power supply with multiple configuration variants.",
    capacityChartLink: "https://wernerfinley.com/water-chiller-aircooled.html",
  },
  {
    title: "Water Cooled Chiller",
    image: "",
    description:
      "High-capacity water-cooled chillers using premium stainless steel components and efficient compressors for demanding industrial cooling duties.",
    features: [
      "Condenser operates up to 50°C ambient temperature",
      "Insulated SS 304 reservoir",
      "All wetted parts manufactured from SS 304",
      "SS 316 plate brazed heat exchanger",
      "With / Without pump configuration options",
      "Intelligent controller with RS485 interface",
    ],
    capacity: "1.0 TR to 30 TR",
    capacityDetail:
      "Eco-friendly R410A refrigerant. Cooling tower water at 32°C, media temperature 15°C, redundancy from 10 TR.",
    capacityChartLink: "https://wernerfinley.com/water-chiller-aircooled.html",
  },
  {
    title: "Oil Chillers",
    image: "/products/OIL CHILLERS.png",
    description:
      "Oil chillers for maintaining hydraulic oil temperature in industrial processes and power packs, protecting oil properties and extending system life.",
    features: [
      "Condenser designed for up to 50°C ambient",
      "Fin & tube / micro-channel heat exchangers",
      "Low noise indoor-friendly design",
      "Reliable pumps from global manufacturers",
      "Shell & Coil / SS coil evaporators",
      "Microprocessor-based intelligent controller",
    ],
    capacity: "0.5 TR to 10 TR",
    capacityDetail: "Typical refrigerants: R134a / R407C.",
    capacityChartLink: "https://wernerfinley.com/compact-coolant-chillers.html",
  },
  {
    title: "Coolant Chillers",
    image: "/products/COOLANT CHILLERS.png",
    description:
      "Coolant chillers for machine tools, grinding machines, VMCs, welding and metal cutting applications, ensuring stable coolant temperature for productivity and accuracy.",
    features: [
      "Condenser designed to operate up to 50°C ambient",
      "Fin & tube / micro-channel heat exchanger options",
      "Low noise performance for indoor environments",
      "Reliable pumps for continuous operation",
      "Shell & Coil / SS evaporators",
      "Microprocessor-based intelligent controller",
    ],
    capacity: "0.5 TR to 10 TR",
    capacityDetail: "Typical refrigerants: R134a / R407C.",
    capacityChartLink: "https://wernerfinley.com/compact-coolant-chillers.html",
  },
  {
    title: "Inverter Chillers (Eco Chill Series)",
    image: "/products/INVERTER CHILLERS.png",
    description:
      "Inverter-driven chillers that leverage DC inverter technology to follow varying cooling loads, reducing energy consumption and supporting Industry 4.0 integration.",
    features: [
      "Condenser designed for up to 50°C ambient",
      "Insulated SS 304 reservoir",
      "SS 304 wetted parts for corrosion resistance",
      "SS 316 plate heat exchanger",
      "With / Without pump configurations",
      "RS485 communication interface",
    ],
    capacity: "1.0 TR to 30 TR",
    capacityDetail: "Typical refrigerant: R410A.",
    capacityChartLink: "https://wernerfinley.com/inverter-coolant-chillers.html",
  },
  {
    title: "Coolant Chillers (Eco Chill Series)",
    image: "/products/COOLANT CHILLERS2.png",
    description:
      "Eco Chill coolant chillers for applications that demand high accuracy in coolant temperature control alongside the energy savings of inverter technology.",
    features: [
      "Condenser designed to operate up to 50°C ambient temperature",
      "High efficiency fin & tube / micro-channel heat exchanger",
      "Low noise level for indoor installation",
      "Reliable pumps from globally renowned manufacturers",
      "High efficiency Shell & Coil / SS coil evaporators",
      "Microprocessor-based intelligent controller",
    ],
    capacity: "0.5 TR to 10 TR",
    capacityDetail: "High efficiency scroll compressors with eco-friendly R134a / R407C refrigerant.",
    capacityChartLink: "https://wernerfinley.com/inverter-coolant-chillers.html",
  },
  {
    title: "Modular Chillers (Air Cooled)",
    image: "/products/MODULAR CHILLERS.png",
    description:
      "Air-cooled modular chillers for scalable installations requiring low noise, lower operating cost and wide capacity coverage.",
    features: [
      "Operates up to 48°C ambient temperature",
      "SS 304 wetted parts for process reliability",
      "SS 316 plate heat exchanger",
      "Media temperature range 5°C to 20°C",
      "Lower operating cost and reduced noise levels",
    ],
    capacity: "21.5 TR, 44 TR, 52 TR, 115 TR",
    capacityDetail: "Typical refrigerant: R410A.",
    capacityChartLink: "https://wernerfinley.com/modular-aircooled.html",
  },
  {
    title: "Modular Chillers (Water Cooled – Eco Chill)",
    image: "/products/MODULAR CHILLERS2.png",
    description:
      "Water-cooled modular chillers tailored for scalable industrial expansion where future load growth and redundancy are key design drivers.",
    features: [
      "Condenser designed to operate up to 50°C ambient",
      "Shell & Tube condenser for efficient heat rejection",
      "SS 304 wetted parts",
      "Cooling tower inlet temperature up to 32°C",
      "Designed for capacity scalability and easy installation",
    ],
    capacity: "50.5 TR, 75 TR",
    capacityDetail: "Typical refrigerant: R410A.",
    capacityChartLink: "https://wernerfinley.com/modular-watercooled.html",
  },
];

export default function LiquidCoolingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Liquid Cooling Systems
          </h1>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl mx-auto">
            Industrial liquid cooling solutions covering compact air-cooled and
            water-cooled chillers, oil and coolant chillers, inverter technology
            and modular systems for scalable plant expansion.
          </p>
          <ContextBackLink />
        </div>
      </section>

      {/* Compact Water Chillers Intro */}
      <section className="py-16 bg-[#f8fafc] border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl">
            <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700">
              Compact Water Chillers · Series: NANO CHILL
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Compact process cooling for constrained footprints
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Werner Finley compact water chillers are designed to cater to a
              wide range of applications. The range combines a compact
              mechanical design with industrial-grade performance, optimised for
              shop floors where space is limited.
            </p>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Leveraging water&apos;s strong physical and chemical cooling
              properties, these systems remove unwanted process heat efficiently
              across multiple industrial sectors while supporting the latest
              energy-saving technologies.
            </p>
          </div>

        </div>
      </section>

      {/* Product sections */}
      {PRODUCTS.map((product) => (
        <ProductSection key={product.title} {...product} />
      ))}
    </main>
  );
}


