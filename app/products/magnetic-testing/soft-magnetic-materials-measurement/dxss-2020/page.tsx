import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXSS-2020 Magnetostrictive Materials Measuring System | MAGTRANS Systems",
  description:
    "DXSS-2020 multi-parameter system for measuring magnetostrictive and magnetic properties under AC and DC magnetic fields, including B-H curves, magnetostriction, impedance and magnetic flux.",
};

export default function DXSS2020MagnetostrictiveSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXSS-2020 Magnetostrictive Materials Measuring System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Soft &amp; Magnetostrictive Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Multi-parameter measurement platform for analysing magnetostrictive
            and magnetic properties under AC and DC magnetic fields, including
            B-H curves, magnetostriction, impedance and magnetic flux changes.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/soft-magnetic/magnetostrictive-measuring-system-dxss2020.png"
              alt="DXSS-2020 Magnetostrictive Materials Measuring System"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            DXSS-2020 Magnetostrictive Materials Measuring System is a
            multi-parameter magnetic measurement system designed for analysing the
            magnetic and magnetostrictive properties of materials under both{" "}
            <strong>AC and DC magnetic fields</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system integrates multiple testing instruments including
            electromagnets, Helmholtz coils, fluxmeters, strain gauges and
            impedance measurement units to provide a complete magnetic property
            analysis platform.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            It is capable of measuring a wide range of magnetic parameters
            including <strong>B-H curves, magnetostriction coefficients, impedance
            characteristics and magnetic flux changes</strong>, making it suitable
            for advanced research and industrial testing of magnetostrictive
            materials.
          </p>
        </div>
      </section>

      {/* SYSTEM COMPONENTS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Components
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DXSS-2020 system consists of the following major components:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Electromagnet</li>
            <li>Electromagnet power supply</li>
            <li>Fluxmeter</li>
            <li>Gaussmeter</li>
            <li>Strain gauge</li>
            <li>Helmholtz coil</li>
            <li>Impedance tester</li>
            <li>Audio frequency power supply</li>
            <li>Data acquisition system</li>
            <li>Pressure bag</li>
            <li>Computer control system</li>
            <li>Laser printer</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT CAPABILITIES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Capabilities
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can measure magnetic properties under both AC and DC
            magnetic field conditions. Measured parameters include:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              DC magnetization curve <strong>Bdc–Hdc</strong>
            </li>
            <li>
              AC magnetization curve <strong>Bac–Hac</strong>
            </li>
            <li>
              Magnetostriction characteristics{" "}
              <strong>λdc–Hdc</strong> and <strong>λac–Hac</strong>
            </li>
            <li>
              Impedance vs frequency <strong>Zac–f</strong>
            </li>
            <li>
              Coercivity <strong>Hcb</strong> and <strong>Hcj</strong>
            </li>
            <li>
              Remanence <strong>Br</strong>
            </li>
            <li>
              Maximum magnetic energy product <strong>BHmax</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* MAGNETIC FIELD MEASUREMENT SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Field Measurement Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    DC Magnetic Field Range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.5 kOe – 32 kOe
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    DC Magnetic Field Resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0.1 Oe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    AC Magnetic Field Range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">320 Oe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    AC Magnetic Field Resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0.01 Oe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* STRAIN MEASUREMENT RANGE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Strain Measurement Range
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Full Scale Strain Ranges
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    32000 με – 320 με
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Highest Resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0.01 με</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MAGNETIC FLUX MEASUREMENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Flux Measurement
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Flux Range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">32 mWb</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resolution</td>
                  <td className="px-4 py-2 text-zinc-700">0.001 mWb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AUDIO FREQUENCY POWER SUPPLY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Audio Frequency Power Supply
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Frequency Range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    30 Hz – 10 kHz
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Output Power
                  </td>
                  <td className="px-4 py-2 text-zinc-700">500 W</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base text-zinc-700 leading-relaxed">
            The audio frequency power supply works together with the impedance
            measurement unit to determine parameters such as incremental
            permeability <strong>µ33</strong>, piezomagnetic coefficient{" "}
            <strong>d33</strong>, elastic coefficient <strong>S33</strong> and
            electromechanical coupling coefficient <strong>K33</strong>.
          </p>
        </div>
      </section>

      {/* HELMHOLTZ COIL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Helmholtz Coil Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Inner Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">Ø50 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Outer Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">Ø115 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Inner Separation</td>
                  <td className="px-4 py-2 text-zinc-700">14 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Outer Separation</td>
                  <td className="px-4 py-2 text-zinc-700">66 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Uniformity
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±1% (within Ø20 mm × 20 mm region)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magnetic field strength at the coil center:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>≥ 80 Oe at 30 Hz – 1 kHz</li>
            <li>≥ 50 Oe at 1.1 kHz – 10 kHz</li>
          </ul>
        </div>
      </section>

      {/* ELECTROMAGNET SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Electromagnet Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Model</td>
                  <td className="px-4 py-2 text-zinc-700">SB-100 Electromagnet</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Pole Face Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">Ø60 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field (10 mm Gap)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">≥ 20 kOe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field (100 mm Gap)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">≥ 2 kOe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ELECTROMAGNET POWER SUPPLY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Electromagnet Power Supply
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Input Voltage</td>
                  <td className="px-4 py-2 text-zinc-700">380V (three-phase)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Output Voltage
                  </td>
                  <td className="px-4 py-2 text-zinc-700">500V DC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Output Power
                  </td>
                  <td className="px-4 py-2 text-zinc-700">2.0 kW</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Current Stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Better than 5 × 10⁻³
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetostrictive material research</li>
            <li>Smart materials development</li>
            <li>Magnetic sensor development</li>
            <li>University research laboratories</li>
            <li>Magnetic materials testing institutes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

