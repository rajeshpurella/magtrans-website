import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "High & Low Temperature Hall Effect Test System | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "High and low temperature Hall effect test system with precision electromagnet, bipolar power supply, cryostat and automated software for transport property measurements from 77K to 470K.",
};

export default function HighLowTemperatureHallEffectTestSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Hall Effect Measurement System
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            High &amp; Low Temperature Hall Effect Test System
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Temperature-controlled Hall effect test system for measuring carrier transport
            properties from cryogenic to elevated temperatures under precision magnetic
            fields.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
          <p className="text-base text-zinc-700 leading-relaxed">
            The high and low temperature Hall effect test system combines a precision
            electromagnet, bipolar constant-current power supply, high-resolution voltage
            acquisition, and a vacuum cryostat to characterise semiconductor materials
            across a wide temperature range. It enables accurate determination of carrier
            concentration, Hall mobility, resistivity and Hall coefficient under
            well-defined magnetic field and temperature conditions.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Automated control software calculates bulk and sheet carrier concentration,
            mobility, resistivity, Hall coefficient and magnetoresistance in real time,
            and supports I–V, R–T and R–H curve acquisition. The system is suited for
            research laboratories investigating temperature-dependent transport behaviour
            in semiconductors, complex oxides and advanced functional materials.
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
                High-precision electromagnet with up to 2 T field at 10 mm pole gap and
                controlled uniformity.
              </li>
              <li>
                Bipolar constant current power supply with smooth zero-crossing and
                four-quadrant operation for inductive loads.
              </li>
              <li>
                Integrated constant current source, matrix switching and microvoltmeter
                for Hall and resistivity measurements.
              </li>
              <li>
                High-precision gauss meter and probe assembly for closed-loop field
                control.
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                High and low temperature vacuum vessels supporting measurements from 77K
                to 470K.
              </li>
              <li>
                Automated calculation of bulk and sheet carrier concentration, mobility,
                resistivity and Hall coefficient.
              </li>
              <li>
                I–V and I–R curve capability and temperature- or field-dependent scans of
                transport parameters.
              </li>
              <li>
                Measurement data exportable to Excel for archiving and further analysis.
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
                  <td className="px-4 py-2 text-zinc-700">Resistance range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    10 mΩ – 6 MΩ
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall voltage</td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.1 µV – 30 V
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
                  <td className="px-4 py-2 text-zinc-700">Pole diameter</td>
                  <td className="px-4 py-2 text-zinc-700">100 mm</td>
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
                    Uniformity ~1% over 10 mm diameter at 60 mm spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnet weight</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 210 kg (including bracket and wheels)
                  </td>
                </tr>

                {/* Bipolar Power Supply */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Bipolar Constant Current Power Supply
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Output current / voltage</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±10 A, ±80 V (approx. 800 W)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Operation</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Four-quadrant operation, smooth zero crossing, suitable for inductive
                    loads
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Current stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Better than ±25 ppm/h (standard), ±5 ppm/h (high stability)
                  </td>
                </tr>

                {/* Constant Current Source & Test Table */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Constant Current Source &amp; Test Table
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Current source range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±50 nA – ±50 mA, adjustable, resolution 0.1 nA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Voltage acquisition range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.1 µV – 30 V, accuracy ~0.01%
                  </td>
                </tr>

                {/* Gauss Meter */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    High Precision Gauss Meter
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Accuracy / range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±0.30% of reading, 0–3 T range, 0.01 mT resolution
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Probe &amp; interface</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ≈1 mm-thick probe, RS‑232 interface with data acquisition software
                  </td>
                </tr>

                {/* Temperature System */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    High &amp; Low Temperature Thermostat
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 77 K – 470 K, adjustment step ~0.1 K
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Cryostat &amp; control</td>
                  <td className="px-4 py-2 text-zinc-700">
                    High/low temperature vacuum vessels with dedicated thermostat and
                    vacuum pump
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
              Semiconductor materials requiring temperature-dependent transport
              characterisation.
            </li>
            <li>
              Low- and high-resistance materials including metals, oxides and compound
              semiconductors.
            </li>
            <li>
              Studies of Hall coefficient, carrier concentration and magnetoresistance as
              a function of temperature and field.
            </li>
            <li>
              University and research laboratory experiments on advanced functional
              materials.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

