import type { Metadata } from "next";
import Image from "next/image";
import ContextBackLink from "@/app/components/ContextBackLink";

export const metadata: Metadata = {
  title: "Value Added Cooling Solutions | Industrial Cooling | MAGTRANS Systems",
  description:
    "Value added industrial cooling solutions engineered around specific process and equipment requirements.",
  alternates: {
    canonical:
      "/products/process-cooling/industrial-cooling/value-added-cooling",
  },
};

type ValueAddedSectionProps = {
  title: string;
  image: string;
  alt: string;
  description: string;
  body: string[];
  featuresTitle: string;
  features: string[];
};

const VALUE_ADDED_IMAGE_CLASS =
  "w-full h-full object-cover rounded-[12px] shadow-md transition-transform duration-300 ease-out group-hover:scale-[1.03]";

function ValueAddedSection({
  title,
  image,
  alt,
  description,
  body,
  featuresTitle,
  features,
}: ValueAddedSectionProps) {
  return (
    <section className="py-20 bg-[#f8f9fa] border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
          <div className="relative w-full overflow-hidden rounded-[12px] bg-zinc-100 border border-zinc-200 shadow-md group">
            <Image
              src={image}
              alt={alt}
              width={640}
              height={480}
              className={VALUE_ADDED_IMAGE_CLASS}
            />
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                {title}
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
                {description}
              </p>
              {body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                {featuresTitle}
              </h3>
              <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                {features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndustrialValueAddedCoolingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="py-20 border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700">
            Industrial Cooling
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Value Added Cooling Solutions
          </h1>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl">
            Engineered cooling solutions that combine chillers, heat exchangers,
            controls and digital technologies to match specific industrial
            processes and thermal loads.
          </p>
          <ContextBackLink />
        </div>
      </section>

      {/* Section 1 – Cold Rooms / Cold Storage */}
      <ValueAddedSection
        title="Cold Rooms / Cold Storage"
        image="/products/Value%20Added%20Cooling%20Solutions/Cold%20RoomsCold%20Storage.png"
        alt="Cold rooms and cold storage industrial cooling solution"
        description="MAGTRANS offers custom-engineered cold rooms and cold storage solutions designed to maintain reliable temperature-controlled environments across industrial, pharmaceutical, food processing and research applications."
        body={[
          "These modular systems are constructed using high-performance insulated PUF panels and precision refrigeration units to ensure stable temperature control, energy efficiency and long-term durability.",
          "Our cold storage solutions can be customised for various temperature ranges, including chilled storage, deep freezer applications and process-specific temperature requirements.",
          "Each system is engineered for optimal thermal insulation, minimal energy loss and compliance with industrial quality standards.",
        ]}
        featuresTitle="Key Features"
        features={[
          "Modular PUF insulated panel construction",
          "Energy-efficient refrigeration systems",
          "Digital temperature monitoring and control",
          "Customisable dimensions and storage layouts",
          "Hygienic and corrosion-resistant interiors",
          "Suitable for industrial and commercial applications",
        ]}
      />

      {/* Section 2 – Heat Exchanger System */}
      <ValueAddedSection
        title="Heat Exchanger System"
        image="/products/Value%20Added%20Cooling%20Solutions/Heat%20Exchanger%20System.png"
        alt="Industrial heat exchanger cooling system"
        description="MAGTRANS Heat Exchanger Systems are engineered for efficient thermal transfer in demanding industrial environments, effectively removing excess process heat and maintaining stable operating temperatures."
        body={[
          "Each solution is customised to match specific process loads, flow conditions and temperature requirements while maintaining high energy efficiency and long-term operational reliability.",
          "These systems are well suited to applications where safe, consistent thermal management is critical to product quality and equipment life.",
        ]}
        featuresTitle="Ideal Applications"
        features={[
          "Industrial process cooling",
          "Hydraulic and lubrication systems",
          "Power electronics cooling",
          "Data center and equipment heat management",
          "Any process requiring efficient heat rejection",
        ]}
      />

      {/* Section 3 – IoT-Enabled Cooling Solutions */}
      <ValueAddedSection
        title="IoT-Enabled Cooling Solutions"
        image="/products/Value%20Added%20Cooling%20Solutions/IOT%20Solution.jpg"
        alt="IoT-enabled industrial cooling solution with remote monitoring"
        description="MAGTRANS IoT-enabled cooling solutions provide intelligent remote monitoring, diagnostics and performance optimisation for industrial cooling systems."
        body={[
          "Through secure cloud connectivity, our systems offer real-time visibility into operational parameters, system health and energy performance. This enables proactive maintenance, reduced downtime and improved operational efficiency.",
          "Advanced gateway communication and controller integration allow remote monitoring from anywhere, supporting data-driven decision-making and predictive maintenance strategies.",
        ]}
        featuresTitle="Key Features"
        features={[
          "Real-time remote monitoring",
          "Cloud-based data logging and analytics",
          "Intelligent gateway integration",
          "RS485 / Modbus communication support",
          "Performance alerts and fault diagnostics",
          "Energy consumption tracking",
          "Secure internet connectivity",
        ]}
      />
    </main>
  );
}

