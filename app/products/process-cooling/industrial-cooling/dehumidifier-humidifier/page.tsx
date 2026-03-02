import type { Metadata } from "next";
import Image from "next/image";
import ContextBackLink from "@/app/components/ContextBackLink";

export const metadata: Metadata = {
  title: "Dehumidifier / Humidifier | Industrial Cooling | MAGTRANS Systems",
  description:
    "Industrial dehumidification and humidification systems to maintain controlled process environments.",
  alternates: {
    canonical:
      "/products/process-cooling/industrial-cooling/dehumidifier-humidifier",
  },
};

const IMAGE_BASE = "/products/dehumidifier-humidifier";

type SeriesModel = {
  name: string;
  image: string;
};

type Section = {
  title: string;
  description?: string;
  models: SeriesModel[];
  features: string[];
  capacity: string[];
  applications?: string[];
  advantages?: string[];
  technicalHighlights?: string[];
};

const SECTIONS: Section[] = [
  {
    title: "Industrial Dehumidifier Series",
    models: [
      {
        name: "MRDH-60 L/D",
        image: `${IMAGE_BASE}/industrial-dehumidifier-mrdh-60ld.avif`,
      },
      {
        name: "MRDH-138 L/D",
        image: `${IMAGE_BASE}/industrial-dehumidifier-mrdh-138ld.avif`,
      },
      {
        name: "MRDH-7 KH",
        image: `${IMAGE_BASE}/industrial-dehumidifier-mrdh-7kh.avif`,
      },
      {
        name: "MRDH-16 KH",
        image: `${IMAGE_BASE}/industrial-dehumidifier-mrdh-16kh.avif`,
      },
    ],
    features: [
      "Panasonic compressor – high efficiency & low energy consumption",
      "Larger water accumulation area",
      "Sensor with ±1% RH humidity control accuracy",
      "Large air volume, low noise operation",
      "360° universal wheels – easy mobility",
      "Water tank / external drainage option",
      "G4 efficiency filters",
    ],
    capacity: [
      "2.5 L/H to 384 L/D",
      "High efficiency rotary scroll compressors",
      "Eco-friendly R410a refrigerant",
    ],
  },
  {
    title: "Desiccant Rotor Dehumidifier Series",
    models: [
      {
        name: "MDDH-100 m³/hr",
        image: `${IMAGE_BASE}/desiccant-rotor-dehumidifier-mddh-100.avif`,
      },
      {
        name: "MDDH-200 m³/hr",
        image: `${IMAGE_BASE}/desiccant-rotor-dehumidifier-mddh-200.avif`,
      },
      {
        name: "MDDH-600 m³/hr",
        image: `${IMAGE_BASE}/desiccant-rotor-dehumidifier-mddh-600.avif`,
      },
      {
        name: "MDDH-700 m³/hr",
        image: `${IMAGE_BASE}/desiccant-rotor-dehumidifier-mddh-700.avif`,
      },
    ],
    features: [
      "Sweden Proflute brand silica gel desiccant rotor – larger dehumidification capacity",
      "Capable of operating at lower dew points (7°C)",
      "Wider temperature operating range (10°C to 20°C)",
      "PTC heater – energy saving",
      "High temperature warning protection",
      "1% precise humidity control",
    ],
    capacity: [
      "100 m³/hr to 1100 m³/hr",
      "Silica gel desiccant rotor",
      "German Rosen blower",
    ],
  },
  {
    title: "Ultrasonic Humidifier Series",
    models: [
      {
        name: "MUHD-3KG/H",
        image: `${IMAGE_BASE}/ultrasonic-humidifier-muhd-3kg.avif`,
      },
      {
        name: "MUHD-12KG/H",
        image: `${IMAGE_BASE}/ultrasonic-humidifier-muhd-12kg.avif`,
      },
      {
        name: "MUHD-18KG/H",
        image: `${IMAGE_BASE}/ultrasonic-humidifier-muhd-18kg.avif`,
      },
      {
        name: "MUHD-48KG/H",
        image: `${IMAGE_BASE}/ultrasonic-humidifier-muhd-48kg.avif`,
      },
    ],
    features: [
      "Special design for areas with limited water supply",
      "Intelligent and accurate humidity control using integrated mist module",
      "Stable and easy maintenance",
      "Fog droplet diameter: 1–10 μm",
      "Maximum RH reaches 99%",
      "Durable, easy to operate and maintain",
      "High airflow rate",
    ],
    capacity: [
      "3 kg/hr to 48 kg/hr",
      "Mist outlet diameter: 110–160 mm",
    ],
  },
  {
    title: "Ceiling Dehumidifier Series",
    description:
      "Ceiling-mounted dehumidifiers are specially designed for large industrial spaces, warehouses, indoor pools, manufacturing units, and storage facilities where floor space is limited. These systems ensure uniform humidity control while saving valuable ground area.",
    models: [
      {
        name: "MCDH-26L/D",
        image: `${IMAGE_BASE}/ceiling-dehumidifier-mcdh-26ld.avif`,
      },
      {
        name: "MCDH-90L/D",
        image: `${IMAGE_BASE}/ceiling-dehumidifier-mcdh-90ld.avif`,
      },
      {
        name: "MCDH-168L/D",
        image: `${IMAGE_BASE}/ceiling-dehumidifier-mcdh-168ld.avif`,
      },
      {
        name: "MCDH-480L/D",
        image: `${IMAGE_BASE}/ceiling-dehumidifier-mcdh-480ld.avif`,
      },
    ],
    features: [],
    capacity: [],
    applications: [
      "Warehouses & storage facilities",
      "Indoor swimming pools",
      "Manufacturing plants",
      "Pharmaceutical storage",
      "Food processing areas",
    ],
    advantages: [
      "Ceiling suspended installation",
      "Space-saving industrial design",
      "Uniform air distribution",
      "Continuous drainage system",
      "Industrial-grade durability",
      "Low noise operation",
    ],
    technicalHighlights: [
      "Capacity range: 26 L/D to 480 L/D",
      "Coverage area up to 600 m²",
      "Automatic humidity control (10%–90% RH)",
      "Built-in pump for condensate drainage",
      "LED control panel",
      "Double-layer nylon filtration system",
    ],
  },
];

function SectionBlock({ section, index }: { section: Section; index: number }) {
  const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";

  return (
    <section className={`py-16 border-b border-gray-200 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-wide uppercase">
            {section.title}
          </h2>
          <div className="mt-3 h-px w-16 bg-emerald-600 mx-auto" />
        </div>

        {section.description && (
          <p className="max-w-3xl mx-auto text-sm text-gray-700 leading-relaxed mb-10">
            {section.description}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center mb-10">
          {section.models.map((model) => (
            <div
              key={model.name}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-full max-w-[220px] h-[200px] bg-white">
                <Image
                  src={model.image}
                  alt={model.name}
                  width={220}
                  height={220}
                  className="object-contain h-[200px] w-full"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700 text-center">
                {model.name}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-sm text-gray-700">
          {section.features.length > 0 && (
            <>
              <h4 className="font-semibold mb-3">Features</h4>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {section.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {section.capacity.length > 0 && (
            <>
              <h4 className="font-semibold mb-3">Capacity</h4>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {section.capacity.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {section.applications && section.applications.length > 0 && (
            <>
              <h4 className="font-semibold mb-3">Applications</h4>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {section.applications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {section.advantages && section.advantages.length > 0 && (
            <>
              <h4 className="font-semibold mb-3">Key Advantages</h4>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {section.advantages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {section.technicalHighlights &&
            section.technicalHighlights.length > 0 && (
              <>
                <h4 className="font-semibold mb-3">Technical Highlights</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {section.technicalHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
        </div>
      </div>
    </section>
  );
}

export default function IndustrialDehumidifierHumidifierPage() {
  return (
    <main className="bg-white">
      <header className="py-16 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700 mb-3">
            Industrial Cooling
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Dehumidifier / Humidifier
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Industrial humidity control solutions for process and storage
            environments.
          </p>
          <ContextBackLink />
        </div>
      </header>

      {SECTIONS.map((section, index) => (
        <SectionBlock key={section.title} section={section} index={index} />
      ))}
    </main>
  );
}
