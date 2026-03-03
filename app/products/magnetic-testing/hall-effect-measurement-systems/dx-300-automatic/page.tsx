import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DX-300 Automatic Hall Effect Test System | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "DX-300 automatic Hall effect test system integrating electromagnet, precision current and voltage measurement, micro‑probe station and software for automated Hall and transport characterisation.",
};

export default function DX300AutomaticHallEffectTestSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Hall Effect Measurement System
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-300 Automatic Hall Effect Test System
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Automated Hall effect test system combining an electromagnet, precision
            electrical instrumentation and micro‑probe station for transport measurements
            on semiconductor wafers and devices.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-300 automatic Hall effect test system integrates a variable‑field
            electromagnet, power supply, high‑precision constant current source,
            high‑resolution voltmeter and source meter with a matrix card, Hall sample
            holder, three‑dimensional micro‑probe station, television microscope and
            dedicated system software. This architecture allows automated probing of
            samples and accurate measurement of Hall effect and resistivity parameters.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Measurement software automatically calculates bulk and sheet carrier
            concentration, mobility, resistivity, Hall coefficient and magnetoresistance,
            and can generate I–V and related curves. The system is suited for wafer‑level
            characterisation and device‑focused R&amp;D where repeatability, automation
            and reduced manual wiring are essential.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Automated Hall effect and resistivity measurement with software‑driven
                parameter calculation.
              </li>
              <li>
                Integrated electromagnet, constant current source, voltmeter, source
                meter and matrix card for flexible test configurations.
              </li>
              <li>
                Three‑dimensional micro‑probe station and television microscope for
                precise contact positioning on wafers and devices.
              </li>
              <li>
                Measurement of bulk and sheet carrier concentration, Hall coefficient,
                mobility, resistivity and magnetoresistance.
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Variable electromagnet providing up to ~1 T Hall test field at 20 mm pole
                spacing with defined uniformity.
              </li>
              <li>
                Automated I–V and related curve acquisition with data export for further
                analysis.
              </li>
              <li>
                Suitable for semiconductor, low‑resistance and high‑resistance materials
                as well as P‑type and N‑type characterisation.
              </li>
              <li>
                System supplied with standard Hall reference samples and ohmic contact
                kit.
              </li>
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
                    0.1 – 10⁸ cm²/V·s
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resistivity range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    10⁻⁵ – 10⁷ Ω·cm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resistance range</td>
                  <td className="px-4 py-2 text-zinc-700">Material‑dependent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall voltage</td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.01 µV – ±3 V
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall coefficient</td>
                  <td className="px-4 py-2 text-zinc-700">
                    10⁻⁵ – 10²⁷ cm³/C
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Test method</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Van der Pauw / Hall bar arrangements depending on fixture
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Typical repeatability better than ~3% over three measurements
                  </td>
                </tr>

                {/* Magnetic System */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Magnetic Field Environment
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnet type</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Variable‑field electromagnet (vertical field)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Typical magnetic field strengths
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    1070 mT @ 20 mm, 678 mT @ 30 mm, 500 mT @ 40 mm, 378 mT @ 50 mm, 293
                    mT @ 60 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall test field</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ≥ 1 T at 20 mm pole spacing (typical Hall test condition)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Uniformity</td>
                  <td className="px-4 py-2 text-zinc-700">≈ 1% over defined area</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Field stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Typical 24‑hour stability better than ~0.3 G at 5000 G
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
                  <td className="px-4 py-2 text-zinc-700">Current source range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    50 nA – 50 mA, resolution ~0.0001 µA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Measuring voltage range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    0 – ±3 V, resolution ~0.0001 mV
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
                  <td className="px-4 py-2 text-zinc-700">Maximum sample size</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Up to 6‑inch wafers (depending on fixture)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Cabinet dimensions</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 600 × 600 × 1000 mm (electronics cabinet)
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
            <li>
              Wafer‑level transport characterisation for semiconductor research and
              device development.
            </li>
            <li>
              Hall coefficient, carrier concentration and mobility evaluation under
              variable magnetic fields.
            </li>
            <li>
              Comparative studies of low‑ and high‑resistance materials and P‑/N‑type
              structures.
            </li>
            <li>
              Teaching and research laboratories requiring automated, probe‑based Hall
              measurements.
            </li>
          </ul>
        </div>
      </section>

      {/* SYSTEM CONFIGURATION SUMMARY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            DX-300 System Configuration (Summary)
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>DXSBV‑100 vertical‑field electromagnet and matching high‑precision supply.</li>
            <li>DX‑320 Hall measurement module with constant current source and switching.</li>
            <li>High‑precision gauss meter with probe and bracket.</li>
            <li>Three‑dimensional micro‑motion probe platform with tungsten pressure needles.</li>
            <li>Television microscope and HD camera for contact visualisation.</li>
            <li>Electronics cabinet, PC, software, manuals, reference samples and ohmic contact kit.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

