import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DX-50 Hall Effect Measurement System | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "DX-50 Hall effect measurement system for characterising carrier concentration, mobility, resistivity and Hall coefficient of semiconductor materials using an electromagnet-based platform.",
};

export default function DX50HallEffectMeasurementSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Hall Effect Measurement System
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-50 Hall Effect Measurement System
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Electromagnet-based Hall measurement system for determining carrier
            concentration, mobility, resistivity and Hall coefficient in semiconductor and
            related materials.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-50 Hall effect measurement system combines a variable electromagnet,
            precision current source and high-resolution voltmeter with a dedicated Hall
            sample holder and standard reference samples. It is designed to extract key
            transport parameters including carrier concentration, Hall mobility,
            resistivity and Hall coefficient under well-controlled magnetic field and
            current conditions.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Measurement control and data reduction are handled by system software that
            automates parameter calculation and supports I–V and BV curve acquisition.
            This makes the DX-50 suitable for university teaching labs, research
            institutes and industrial R&amp;D environments where reliable, repeatable Hall
            measurements are required.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Electromagnet-based Hall effect system with configurable pole spacing.</li>
              <li>
                Integrated high-precision constant current source and high-resolution
                voltmeter.
              </li>
              <li>
                Wide carrier concentration measurement range from 10³ cm⁻³ to 10²³ cm⁻³.
              </li>
              <li>Resistivity range from 10⁻⁷ Ω·cm to 10¹² Ω·cm.</li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Automatic software calculation of Hall and resistivity parameters.</li>
              <li>I–V and BV curve measurement capability.</li>
              <li>One-button automatic measurement after test conditions are set.</li>
              <li>Measurement results exportable to Excel for further analysis.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900 text-center">
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
                    10³ cm⁻³ – 10²³ cm⁻³
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Mobility</td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.1 cm²/V·s – 10⁸ cm²/V·s
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resistivity range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    10⁻⁷ Ω·cm – 10¹² Ω·cm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall voltage</td>
                  <td className="px-4 py-2 text-zinc-700">1 µV – 3 V</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall coefficient</td>
                  <td className="px-4 py-2 text-zinc-700">
                    10⁻⁵ – 10²⁷ cm³/C
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
                  <td className="px-4 py-2 text-zinc-700">Variable electromagnet</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic field strength (typical)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    1070 mT @ 10 mm, 687 mT @ 20 mm, 500 mT @ 30 mm, 378 mT @ 40 mm, 293
                    mT @ 50 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Field uniformity</td>
                  <td className="px-4 py-2 text-zinc-700">≈ 1% over defined area</td>
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
                  <td className="px-4 py-2 text-zinc-700">Current source range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±0.1 nA – ±1000 mA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Current source resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.001 µA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Voltage range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±10 nV – ±200 V
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Voltage measurement resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.0001 mV
                  </td>
                </tr>

                {/* Physical / Mechanical */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Physical / Mechanical
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sample size</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Up to 30 mm × 30 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Cabinet dimensions</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 600 × 600 × 1000 mm
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Semiconductor materials for transport-property characterisation.</li>
            <li>Low resistance materials such as metals and conductive oxides.</li>
            <li>High resistance materials including semi-insulating compounds.</li>
            <li>P-type and N-type materials for conductivity type verification.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

