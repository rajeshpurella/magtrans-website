import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012H DC Hysteresis Graph Test System | Hard Magnetic Materials | MAGTRANS Systems",
  description:
    "DX-2012H BH loop tracer for measuring Br, Hcb, Hcj and BHmax of permanent magnets. Ferrite, AlNiCo, NdFeB, SmCo. Conforms to GB/T 3217-92, GB 11209-89, IEC 404-5.",
};

export default function DX2012HBHTracerPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012H DC Hysteresis Graph Test System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Hard Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            BH loop tracer for measuring remanence, coercive force and maximum
            magnetic energy product of permanent magnetic materials including
            ferrite, AlNiCo, NdFeB and samarium cobalt.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/hard-magnetic/dx-2012h-bh-tracer.png"
              alt="DX-2012H DC Hysteresis Graph Test System"
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
            DX-2012H DC Hysteresis Graph Test System is a BH loop tracer designed
            to measure the magnetic properties of permanent magnetic materials.
            The system measures important magnetic parameters including remanence
            (Br), coercive force (Hcb), intrinsic coercive force (Hcj) and maximum
            magnetic energy product (BHmax).
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            It is suitable for testing various permanent magnetic materials such
            as ferrite, Alnico, NdFeB and samarium cobalt. The system can
            automatically generate BH hysteresis loops and demagnetization curves
            for accurate analysis of magnetic performance.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012H system conforms to China National Standards{" "}
            <strong>GB/T 3217-92</strong>, <strong>GB 11209-89</strong>, and
            international standard <strong>IEC 404-5</strong>.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Automatic measurement of saturation hysteresis loops</li>
            <li>
              Measurement of important magnetic parameters including Br, Hcb, Hcj
              and BHmax
            </li>
            <li>
              Automatic demagnetization curve measurement for rare-earth permanent
              magnets
            </li>
            <li>
              Suitable for ferrite, rubber magnets, AlNiCo, NdFeB and SmCo
              materials
            </li>
            <li>
              Supports multiple sample shapes including ring, square, tile and
              irregular samples
            </li>
            <li>Computer-controlled testing and data processing system</li>
            <li>
              Optional high-temperature measurement up to <strong>220°C</strong>
            </li>
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
            The system automatically measures magnetic parameters such as:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Saturation magnetization (Js)</li>
            <li>Remanence (Br)</li>
            <li>Coercive force (HcB)</li>
            <li>Intrinsic coercive force (HcJ)</li>
            <li>Maximum magnetic energy product (BHmax)</li>
            <li>Recoil permeability (µrec)</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Rare-earth permanent magnet materials can be measured in the second
            quadrant to obtain parameters such as{" "}
            <strong>Br, HcB, HcJ, Hk(H90) and BHmax</strong>.
          </p>
        </div>
      </section>

      {/* MAIN SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Main Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Measurement Type</td>
                  <td className="px-4 py-2 text-zinc-700">
                    BH Hysteresis Loop Measurement
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Materials Tested</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Ferrite, AlNiCo, NdFeB, SmCo
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Parameters Measured</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Js, Br, HcB, HcJ, (BH)max
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sample Shapes</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Ring, square, tile and irregular shapes
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Standards</td>
                  <td className="px-4 py-2 text-zinc-700">
                    GB/T 3217-92, GB 11209-89, IEC 404-5
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature Option</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Up to 220°C with heating system
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MEASUREMENT SYSTEM DESIGN */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement System Design
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012H system uses multiple sensing methods to achieve high
            accuracy measurements:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              <strong>B-coil + Fluxmeter</strong> to measure magnetic induction
            </li>
            <li>
              <strong>J-coil + Fluxmeter</strong> to measure magnetic polarization
            </li>
            <li>
              <strong>Hall magnetometer</strong> to measure magnetic field
              intensity
            </li>
            <li>Software correction to reduce Hall probe nonlinear error</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Within the magnetic field range of <strong>0 – 2.4 Tesla</strong>,
            nonlinear error can be controlled within <strong>±0.2%</strong>.
          </p>
        </div>
      </section>

      {/* SOFTWARE FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Software Features
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012H measurement software provides a visual and easy-to-use
            interface.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Compatible with Windows operating systems</li>
            <li>Automatic control and intelligent test identification</li>
            <li>Real-time monitoring of sampling waveform and instrument status</li>
            <li>Automatic calculation of magnetic parameters</li>
            <li>Export of test results to <strong>Excel format</strong></li>
            <li>Simultaneous display of multiple curve diagrams</li>
            <li>Print preview and automatic report generation</li>
            <li>
              Test reports can be exported as <strong>JPG image files</strong>
            </li>
          </ul>
          <p className="text-sm font-semibold text-zinc-900">
            Test reports include:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic hysteresis loop curves</li>
            <li>Demagnetization curves</li>
            <li>Test conditions and sample parameters</li>
            <li>Magnetic performance results</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Permanent magnet material testing</li>
            <li>Magnetic materials research and development</li>
            <li>Quality control of permanent magnets</li>
            <li>Academic research laboratories</li>
            <li>Industrial magnet production testing</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
