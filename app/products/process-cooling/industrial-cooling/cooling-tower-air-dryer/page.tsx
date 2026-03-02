import type { Metadata } from "next";
import Image from "next/image";
import ContextBackLink from "@/app/components/ContextBackLink";
import {
  coolingTowerAirDryer,
  type CoolingTowerSectionItem,
} from "@/lib/cooling-tower-air-dryer-data";

export const metadata: Metadata = {
  title: "Cooling Tower & Air Dryer | Industrial Cooling | MAGTRANS Systems",
  description:
    "Cooling tower and air dryer systems that stabilise utility conditions for industrial plants.",
  alternates: {
    canonical:
      "/products/process-cooling/industrial-cooling/cooling-tower-air-dryer",
  },
};

function ContentSection({
  section,
  index,
}: {
  section: CoolingTowerSectionItem;
  index: number;
}) {
  const contentParagraphs = section.content
    ? section.content.split(/\n\n+/).filter((p) => p.trim())
    : [];
  const hasContent =
    contentParagraphs.length > 0 ||
    section.features.length > 0 ||
    section.applications.length > 0 ||
    section.components.length > 0;
  const hasImage = Boolean(section.image);
  const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";

  return (
    <section className={`py-16 border-b border-gray-200 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {section.title}
        </h2>

        {!hasContent && !hasImage ? null : hasImage && hasContent ? (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex justify-center items-center w-full max-w-[500px]">
                <Image
                  src={section.image!}
                  alt={section.title}
                  width={500}
                  height={400}
                  className="object-contain w-full max-h-[380px]"
                />
              </div>
            </div>
            <div className="space-y-4">
              {contentParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed whitespace-pre-line"
                >
                  {p.trim()}
                </p>
              ))}
              {section.features.length > 0 && (
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                  {section.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.applications.length > 0 && (
                <>
                  <h4 className="text-sm font-semibold text-gray-900 mt-4">
                    Applications
                  </h4>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                    {section.applications.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {section.components.length > 0 && (
                <>
                  <h4 className="text-sm font-semibold text-gray-900 mt-4">
                    Components
                  </h4>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                    {section.components.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ) : hasImage ? (
          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex justify-center items-center w-full max-w-[500px]">
              <Image
                src={section.image!}
                alt={section.title}
                width={500}
                height={400}
                className="object-contain w-full max-h-[380px]"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl">
            {contentParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-gray-700 leading-relaxed whitespace-pre-line"
              >
                {p.trim()}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function IndustrialCoolingTowerAirDryerPage() {
  const { title, sections } = coolingTowerAirDryer;

  return (
    <main className="bg-white">
      <header className="py-16 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700 mb-3">
            Industrial Cooling
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Cooling towers and refrigeration-type air dryers for stable
            temperature and moisture conditions in plant utilities.
          </p>
          <ContextBackLink />
        </div>
      </header>

      {sections.map((section, index) => (
        <ContentSection key={section.title} section={section} index={index} />
      ))}
    </main>
  );
}
