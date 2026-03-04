import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012SD Soft Magnetic Materials DC Measuring System | MAGTRANS Systems",
  description:
    "DX-2012SD DC measuring system for soft magnetic materials. Automatically measures magnetization curves, hysteresis loops and static magnetic parameters under DC excitation.",
};

export default function DX2012SDSoftMagneticDCPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012SD Soft Magnetic Materials DC Measuring System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Soft Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Comprehensive DC magnetic property measurement system for soft
            magnetic materials, providing automatic magnetization curves,
            hysteresis loops and static magnetic parameters.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/soft-magnetic/soft-magnetic-dc-system-dx2012sd.png"
              alt="DX-2012SD Soft Magnetic Materials DC Measuring System"
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
            DX-2012SD Soft Magnetic Materials DC Measuring System is a
            comprehensive magnetic testing instrument designed for measuring the{" "}
            <strong>DC magnetic properties of soft magnetic materials</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system automatically measures the{" "}
            <strong>basic magnetization curve</strong>,{" "}
            <strong>hysteresis loop</strong> and related magnetic parameters under
            DC excitation conditions. It provides accurate measurement of important
            static magnetic parameters such as permeability, coercivity and
            magnetic induction.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012SD system is widely used in{" "}
            <strong>research laboratories, universities and industrial magnetic
            material testing applications</strong>.
          </p>
        </div>
      </section>

      {/* APPLICABLE STANDARDS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Applicable Standards
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012SD testing system complies with major international and
            national standards:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              <strong>GB/T 13012-2008</strong> – Measurement method of DC magnetic
              properties of soft magnetic materials
            </li>
            <li>
              <strong>GJB 937-90</strong> – Measurement method of permeability of
              weak magnetic materials
            </li>
            <li>
              <strong>SJ/T 10281-91</strong> – Calculation of effective parameters
              of magnetic components
            </li>
            <li>
              <strong>IEC 60404-4</strong> – Measurement of DC magnetic properties
              of soft magnetic materials
            </li>
            <li>
              <strong>IEC 60404-7</strong> – Measurement of coercivity of magnetic
              materials in open magnetic circuits
            </li>
          </ul>
        </div>
      </section>

      {/* HARDWARE FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Hardware Features
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Automatic demagnetization of closed-circuit samples using
              low-frequency AC demagnetization
            </li>
            <li>
              Frequency below <strong>10 Hz</strong> ensures repeatable initial
              permeability measurement
            </li>
            <li>
              Impact method testing for magnetization curve and permeability curve
            </li>
            <li>
              Measurement of static hysteresis loop return line and related
              parameters
            </li>
            <li>
              Supports scanning measurement methods for open solenoid systems
            </li>
            <li>
              Stable magnetic measurement performance with high precision hardware
              design
            </li>
          </ul>
        </div>
      </section>

      {/* SOFTWARE FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Software Features
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012SD measurement software provides powerful data analysis and
            management functions.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Automatic data calculation and span coefficient correction</li>
            <li>
              Compatible with Windows operating systems such as{" "}
              <strong>WinXP, Windows 7, Windows 8</strong>
            </li>
            <li>Displays waveform signals I(t) and B(t)</li>
            <li>
              Displays B-H hysteresis loop, magnetization curve and permeability
              curve
            </li>
            <li>Supports hysteresis loop cluster analysis</li>
            <li>Automatic saving and management of test data files</li>
            <li>
              Database file system for convenient data storage and retrieval
            </li>
            <li>
              Test reports can be exported to <strong>Excel format</strong>
            </li>
            <li>Supports both Chinese and English interface</li>
            <li>Print preview and report customization features</li>
            <li>
              Ability to export test reports as <strong>JPG image files</strong>
            </li>
            <li>Supports most printer models</li>
          </ul>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Technical Specifications
          </h2>

          {/* Excitation Current Source */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Excitation Current Source
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-200 text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                      Model
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                      Power Supply
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                      Output Range
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                      Current Range
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                      Stability
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                      Resolution
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                      Accuracy
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">350VA</td>
                    <td className="px-4 py-2 text-zinc-700">
                      220V ±10%, 5A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">±35V / 10A</td>
                    <td className="px-4 py-2 text-zinc-700">
                      0.01A – 10A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.05%</td>
                    <td className="px-4 py-2 text-zinc-700">0.1mA</td>
                    <td className="px-4 py-2 text-zinc-700">0.10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">500VA</td>
                    <td className="px-4 py-2 text-zinc-700">
                      220V ±10%, 5A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">±50V / 10A</td>
                    <td className="px-4 py-2 text-zinc-700">
                      0.01A – 10A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.05%</td>
                    <td className="px-4 py-2 text-zinc-700">0.1mA</td>
                    <td className="px-4 py-2 text-zinc-700">0.10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">1000VA</td>
                    <td className="px-4 py-2 text-zinc-700">
                      220V ±10%, 10A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">±50V / 20A</td>
                    <td className="px-4 py-2 text-zinc-700">
                      0.02A – 20A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.05%</td>
                    <td className="px-4 py-2 text-zinc-700">0.2mA</td>
                    <td className="px-4 py-2 text-zinc-700">0.10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">2000VA</td>
                    <td className="px-4 py-2 text-zinc-700">
                      380V ±10%, 20A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">±50V / 40A</td>
                    <td className="px-4 py-2 text-zinc-700">
                      40mA – 40A
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.05%</td>
                    <td className="px-4 py-2 text-zinc-700">0.4mA</td>
                    <td className="px-4 py-2 text-zinc-700">0.10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Acquisition Module - AD Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">AD Section</h3>
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
                    <td className="px-4 py-2 text-zinc-700">±5V</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">AD Converter</td>
                    <td className="px-4 py-2 text-zinc-700">16-bit</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Sampling Speed</td>
                    <td className="px-4 py-2 text-zinc-700">
                      2000 – 20000 channels/sec
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Input Impedance</td>
                    <td className="px-4 py-2 text-zinc-700">1 MΩ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Accuracy</td>
                    <td className="px-4 py-2 text-zinc-700">±0.1% FSR</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Resolution</td>
                    <td className="px-4 py-2 text-zinc-700">16 bit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Acquisition Module - DA Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">DA Section</h3>
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
                    <td className="px-4 py-2 text-zinc-700">Converter</td>
                    <td className="px-4 py-2 text-zinc-700">
                      Two-channel 16-bit DA
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Output Voltage</td>
                    <td className="px-4 py-2 text-zinc-700">±5V</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Accuracy</td>
                    <td className="px-4 py-2 text-zinc-700">±0.1%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Resolution</td>
                    <td className="px-4 py-2 text-zinc-700">16 bit</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Output Speed</td>
                    <td className="px-4 py-2 text-zinc-700">
                      2000 – 4000 times/sec
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Electronic Integrator */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Electronic Integrator
            </h3>
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
                    <td className="px-4 py-2 text-zinc-700">Power Requirement</td>
                    <td className="px-4 py-2 text-zinc-700">±12V</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Magnetic Flux Range
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.25 – 20 mWb</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Resolution</td>
                    <td className="px-4 py-2 text-zinc-700">0.0001 mWb</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Accuracy</td>
                    <td className="px-4 py-2 text-zinc-700">0.5%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Drift</td>
                    <td className="px-4 py-2 text-zinc-700">0.001 mWb/min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Soft magnetic material research</li>
            <li>Magnetic material characterization laboratories</li>
            <li>Industrial magnetic material testing</li>
            <li>University research and development</li>
            <li>Magnetic component manufacturing quality control</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

