import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DX-1000H High Temperature Hall Measurement Setup | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "DX-1000H high temperature Hall measurement setup combining precision electromagnet, bipolar power supply and high-temperature vacuum system for transport property measurements up to 773K.",
};

export default function DX1000HHighTemperatureHallMeasurementSetupPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Hall Effect Measurement System
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-1000H High Temperature Hall Measurement Setup
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            High temperature Hall measurement setup for characterising carrier transport
            properties of semiconductor materials under controlled magnetic field and
            temperature up to elevated temperatures.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-1000H high temperature Hall measurement setup integrates a precision
            electromagnet, bipolar constant current power supply, high-resolution voltage
            acquisition and a high-temperature vacuum chamber. Together with a dedicated
            Hall sample fixture, the system enables measurement of carrier concentration,
            Hall mobility, resistivity and Hall coefficient over a broad temperature
            range.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Automated control software coordinates the electromagnet supply, gauss meter,
            temperature controller and current source to perform fully automated Hall
            measurements. Bulk and sheet carrier concentration, mobility, resistivity,
            Hall coefficient and magnetoresistance can be evaluated as functions of
            temperature and magnetic field, providing a comprehensive picture of
            high-temperature transport behaviour.
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
                High precision electromagnet with up to ~2 T field at 10 mm pole spacing
                and defined uniform region.
              </li>
              <li>
                Bipolar constant current power supply with smooth zero crossing and
                four-quadrant operation for inductive magnet loads.
              </li>
              <li>
                Integrated constant current source, matrix switching and microvoltmeter
                for Hall and resistivity measurements.
              </li>
              <li>
                High temperature vacuum chamber and thermostat for measurements up to
                typically 773 K.
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Software-controlled acquisition of Hall coefficient, carrier concentration,
                mobility, resistivity and magnetoresistance.
              </li>
              <li>
                I–V and I–R curve measurement capability with temperature and field
                sweeps.
              </li>
              <li>
                Support for continuous temperature scans with defined temperature steps.
              </li>
              <li>
                Measurement results exportable to Excel for post-processing and
                reporting.
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
                    ~10⁸ cm⁻³ – 10²³ cm⁻³ (typical)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Mobility</td>
                  <td className="px-4 py-2 text-zinc-700">
                    1 – 10⁶ cm²/V·s
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resistivity range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ≈ 5 × 10⁻⁴ – 10⁸ Ω·cm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resistance range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    10 mΩ – 100 GΩ
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Hall coefficient range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±1 × 10⁻⁵ – ±1 × 10¹⁰ cm³/C (application dependent)
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
                    ≈ 2 T @ 10 mm, 1.3 T @ 20 mm, 1.0 T @ 30 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Field uniformity</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ~1% over 10 mm diameter at 60 mm spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnet weight</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 110 kg (including bracket and wheels)
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
                    Smooth zero crossing, four-quadrant operation for inductive loads
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Current stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Better than ±25 ppm/h (standard), ±5 ppm/h (high stability)
                  </td>
                </tr>

                {/* Constant Current Source & Measurement */}
                <tr className="bg-zinc-50/50">
                  <td
                    colSpan={2}
                    className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase"
                  >
                    Constant Current Source &amp; Measurement
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
                    High Temperature Thermostat
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Approx. 4 K – 773 K (configuration dependent) with ≈0.1 K control
                    resolution
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
              High temperature transport studies of semiconductor and functional
              materials.
            </li>
            <li>
              Evaluation of Hall coefficient, carrier concentration and mobility as a
              function of temperature and magnetic field.
            </li>
            <li>
              Device and material reliability investigations under elevated temperature
              conditions.
            </li>
            <li>
              Research and advanced teaching experiments on electrical transport
              phenomena.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

