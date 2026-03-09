import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "DX-1000L Low Temperature Hall Effect System | MAGTRANS Systems",
  description:
    "DX-1000L low temperature Hall effect system with precision electromagnet, bipolar supply and cryostat for transport measurements down to cryogenic temperatures.",
};

export default function DX1000LLowTemperatureHallEffectTestSystemPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "DX-1000L Low Temperature Hall Effect Test System",
            image: [
              "https://www.magtrans.in/products/magnetic-testing/hall-effect-measurement-systems/dx-1000l.avif",
            ],
            description:
              "DX-1000L low temperature Hall effect system with precision electromagnet, bipolar supply and cryostat for transport measurements down to cryogenic temperatures.",
            brand: {
              "@type": "Organization",
              name: "MAGTRANS Systems",
            },
            category:
              "Magnetic testing – low temperature Hall effect measurement system",
            url:
              "https://www.magtrans.in/products/magnetic-testing/hall-effect-measurement-systems/dx-1000l",
          }),
        }}
      />
      {/* HERO */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Hall Effect Measurement System
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            DX-1000L Low Temperature Hall Effect Test System
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Low temperature Hall effect test system for characterising carrier transport
            properties of semiconductor materials under controlled magnetic field and
            temperature down to cryogenic levels.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-4">
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-1000L low temperature Hall effect test system integrates a precision
            electromagnet, bipolar constant current power supply, high‑resolution voltage
            acquisition and a cryogenic vacuum vessel. In combination with a dedicated
            Hall sample fixture and temperature controller, it enables accurate
            determination of carrier concentration, mobility, resistivity and Hall
            coefficient at temperatures from liquid‑nitrogen region down to 4 K, depending
            on configuration.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Automated software coordinates the electromagnet supply, gauss meter,
            thermostat and constant current source to perform fully automated Hall
            measurements. Bulk and sheet carrier concentration, mobility, resistivity,
            Hall coefficient and magnetoresistance can be evaluated as a function of both
            temperature and magnetic field, supporting advanced research on low‑temperature
            transport phenomena.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Precision electromagnet with high field capability and controlled
                uniformity region.
              </li>
              <li>
                Bipolar constant current power supply enabling smooth current reversal and
                four‑quadrant operation for inductive loads.
              </li>
              <li>
                Integrated constant current source, matrix switching and microvoltmeter
                for Hall and resistivity tests.
              </li>
              <li>
                Cryostat and temperature controller supporting low temperature operation
                with fine temperature resolution.
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Automated calculation of bulk and sheet carrier concentration, mobility,
                resistivity and Hall coefficient.
              </li>
              <li>
                I–V and I–R curve measurement and temperature‑dependent scans of key
                transport parameters.
              </li>
              <li>Support for a range of semiconductor and functional materials.</li>
              <li>
                Measurement results exportable to common data formats for detailed
                analysis.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 text-center">
            Technical Specifications
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {/* Measurement Parameters */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Measurement Parameters
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Carrier concentration</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ≈ 5 × 10¹² – 5 × 10²⁰ cm⁻³ (typical)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Mobility</td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.1 – 10⁸ cm²/V·s
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resistivity range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ≈ 5 × 10⁻⁵ – 5 × 10² Ω·cm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resistance range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    10 mΩ – 6 MΩ
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall coefficient range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±1 × 10⁻² – ±1 × 10⁶ cm³/C (application dependent)
                  </td>
                </tr>

                {/* Magnetic System */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Magnetic System
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnet type</td>
                  <td className="px-4 py-2 text-zinc-700">High precision electromagnet</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Maximum magnetic field</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ≈ 2 T @ 10 mm, 1.3 T @ 20 mm, 1.0 T @ 30 mm (typical)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Field uniformity</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ~1% over 10 mm diameter at 60 mm spacing
                  </td>
                </tr>

                {/* Electrical System */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Electrical System
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sample current range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 0.05 µA – 50 mA, 0.1 nA adjustment
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Measuring voltage range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.1 µV – 30 V
                  </td>
                </tr>

                {/* Temperature System */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Temperature Environment
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature adjustment</td>
                  <td className="px-4 py-2 text-zinc-700">Resolution ≈ 0.1 K</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 78 K – 325 K or 4 K – 325 K (configuration dependent)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            Applications
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Low temperature transport studies of semiconductor and functional materials.
            </li>
            <li>
              Evaluation of Hall coefficient, carrier concentration and mobility as a
              function of temperature and magnetic field.
            </li>
            <li>
              Investigations of quantum transport and low‑temperature conduction
              mechanisms.
            </li>
            <li>
              Advanced teaching and research experiments on electrical transport in
              cryogenic environments.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            Related Pages
          </h2>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-700 list-disc list-inside">
            <li>
              <Link
                href="/products/magnetic-testing/hall-effect-measurement-systems"
                className="text-emerald-700 hover:underline"
              >
                Hall Effect Measurement Systems category
              </Link>
            </li>
            <li>
              <Link
                href="/products/magnetic-testing"
                className="text-emerald-700 hover:underline"
              >
                Magnetic Testing domain overview
              </Link>
            </li>
            <li>
              <Link
                href="/industries/research-labs"
                className="text-emerald-700 hover:underline"
              >
                Research Labs industry
              </Link>
            </li>
            <li>
              <Link
                href="/industries/aerospace"
                className="text-emerald-700 hover:underline"
              >
                Aerospace industry
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

