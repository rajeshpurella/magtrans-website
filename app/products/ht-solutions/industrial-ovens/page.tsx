import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Ovens & Furnaces | HT Solutions | MAGTRANS Systems",
  description:
    "Precision laboratory and industrial ovens, refrigerated air dryers and high-temperature furnaces for controlled heating, drying and thermal processing.",
};

export default function IndustrialOvensPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Industrial Ovens",
            image: [
              "https://www.magtrans.in/products/ht-solutions/industrial-ovens/Industrial%20Ovens.png",
            ],
            description:
              "Precision laboratory and industrial ovens, refrigerated air dryers and high-temperature furnaces for controlled heating, drying and thermal processing.",
            brand: {
              "@type": "Organization",
              name: "MAGTRANS Systems",
            },
            category: "HT solutions – industrial ovens and furnaces",
            url:
              "https://www.magtrans.in/products/ht-solutions/industrial-ovens",
          }),
        }}
      />
      {/* HERO */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            HT Solutions
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Industrial Ovens
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-12">
          {/* Section 1 */}
          <div className="space-y-4 max-w-4xl">
            <p className="text-base text-zinc-700 leading-relaxed">
              Laboratory and Industrial ovens Series offered a range of precision electric ovens.
              They are designed for low temperature thermal treatment such as drying, heating and
              thermal testing in an air-flow assisted environment.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Our ovens are available with optional NABL calibration of the temperature controller
              and thermocouple as a system or also with a 3-point or 5-point thermal survey of the
              chamber volume.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/ht-solutions/industrial-ovens/Industrial Ovens.png"
                alt="Industrial Ovens"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Standard Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Standard Features
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Capacity – 4 Liter to 14000 Liters</li>
              <li>
                Temperature uniformity throughout the chamber with forced air convection
              </li>
              <li>Temperature range up to 500°C</li>
              <li>Digital PID temperature controller</li>
              <li>Safety controller for over-temperature protection</li>
              <li>
                Tubular Heaters/Nichrome are used as a heating element inside the oven for better
                uniformity
              </li>
            </ul>
          </div>

          {/* Section 2: Refrigerated Air Dryers */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Refrigerated Air Dryers
            </h2>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/ht-solutions/industrial-ovens/Refrigerated Air Dryers.png"
                alt="Refrigerated Air Dryers"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="space-y-4 max-w-4xl">
              <p className="text-base text-zinc-700 leading-relaxed">
                Microwave furnaces represent a system that combines free radiating heating
                elements with a microwaves field. Key advantages include greater energy
                efficiency, faster sample heating, more uniform heating and improves material
                properties.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                A refrigerated air dryer removes moisture from compressed air by cooling it,
                condensing the water, and draining it out. This prevents rust, corrosion, and
                product damage, ensuring clean, dry air for applications in pharma, food,
                electronics, automotive, paint shops, packaging, and general manufacturing.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                With capacities from 15 CFM to 2000+ CFM and pressures up to 35 Bar, they offer
                reliable dew point control (+3 °C to +10 °C), use eco-friendly refrigerants, and
                feature automatic drains for low-maintenance, efficient operation.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white max-w-2xl">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Parameter</th>
                    <th className="px-4 py-3 font-semibold">Average Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Flow Rate</td>
                    <td className="px-4 py-3">15 CFM – 2000 CFM</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Dew Point</td>
                    <td className="px-4 py-3">+3 °C to +10 °C</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Pressure Capacity</td>
                    <td className="px-4 py-3">7–35 Bar</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Inlet Temp Tolerance</td>
                    <td className="px-4 py-3">Up to 45 °C</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power Supply</td>
                    <td className="px-4 py-3">220 V / 415 V</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Refrigerants</td>
                    <td className="px-4 py-3">R-134a, R-410a, R-22</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Compressor Type</td>
                    <td className="px-4 py-3">Scroll / Reciprocating</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Control System</td>
                    <td className="px-4 py-3">Digital / PID</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Body Material</td>
                    <td className="px-4 py-3">Mild Steel (SS optional)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Industrial Furnaces */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Industrial Furnaces
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Industrial Bottom Loading Furnace is suitable for 1600°C as well as 1800°C
              application. The Industrial Bottom Loading Furnace is a kind of user friendly
              operating system that comes with smooth bottom lifting arrangement.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The Industrial Bottom Loading is widely used for firing and sintering of advanced
              ceramics and high temperature glass melting application.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Industrial Bottom Loading Furnace offers high temperature accuracy in a range of
              ±1°C
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/ht-solutions/industrial-ovens/Industrial Furnaces.png"
                alt="Industrial Furnaces"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white max-w-2xl">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Maximum Temperature</td>
                    <td className="px-4 py-3">1200 /1400°C/1600°C/1800°C</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Insulation</td>
                    <td className="px-4 py-3">
                      Multiple Layers of High Temperature Fiber Insulation Boards Ensure Minimum
                      Heat Loss
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Bottom Lifting Arrangement</td>
                    <td className="px-4 py-3">
                      Bottom Lifting Plate Fitted with Dc Motor Ensures Smooth Lifting & Lowering
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Bottom Lifting Arrangement</td>
                    <td className="px-4 py-3">
                      Bottom Lifting Plate Fitted with Dc Motor Ensures Smooth Lifting & Lowering
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-0 pt-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Related Pages
            </h2>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-700 list-disc list-inside">
              <li>
                <Link
                  href="/products/ht-solutions"
                  className="text-emerald-700 hover:underline"
                >
                  HT Solutions domain
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/manufacturing"
                  className="text-emerald-700 hover:underline"
                >
                  Manufacturing industry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
