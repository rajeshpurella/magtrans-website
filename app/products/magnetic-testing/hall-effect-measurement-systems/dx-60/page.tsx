import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DX-60 Hall Effect Measurement Instrument | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "DX-60 Hall effect measurement instrument for determining carrier concentration, mobility, resistivity and Hall coefficient of semiconductor and related materials using an electromagnet-based system.",
};

export default function DX60HallEffectMeasurementInstrumentPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Hall Effect Measurement System
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-60 Hall Effect Measurement Instrument
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Electromagnet-based Hall effect instrument for precise measurement of carrier
            concentration, mobility, resistivity and Hall coefficient in semiconductor and
            functional materials.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-60 Hall effect measurement instrument provides a controlled magnetic
            field environment and integrated electrical measurement chain for
            characterising semiconductor samples. By combining a variable electromagnet
            with precision current and voltage sourcing, the system enables accurate
            determination of carrier concentration, Hall mobility, resistivity and Hall
            coefficient.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            With automated calculation of transport parameters and support for I–V and BV
            curve measurements, the DX-60 is well suited for university laboratories,
            research institutes and industrial R&amp;D teams studying the electrical
            properties of semiconductor and low-dimensional materials.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Variable electromagnet providing up to 1200 mT at 10 mm pole pitch.</li>
              <li>
                High-precision current and voltage measurement for stable Hall and
                resistivity data.
              </li>
              <li>
                Wide carrier concentration measurement range from 10³ cm⁻³ to 10²³ cm⁻³.
              </li>
              <li>Resistivity range from 10⁻⁷ Ω·cm to 10¹² Ω·cm.</li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Software-driven calculation of Hall and magnetoresistance parameters.</li>
              <li>I–V and BV curve measurement capability.</li>
              <li>One-button automatic measurement after conditions are configured.</li>
              <li>Measurement results exportable to Excel for further processing.</li>
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
                  <td className="px-4 py-2 text-zinc-700">Magnetic field strength</td>
                  <td className="px-4 py-2 text-zinc-700">
                    1200 mT @ 10 mm, 750 mT @ 20 mm, 520 mT @ 30 mm
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
                    50 nA – 50 mA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Current source resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.0001 µA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Voltage range</td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±3 V</td>
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
                    Up to 10 mm × 10 mm
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

