import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-320HC Coercive Force Meter (Coercimeter) | Soft Magnetic Materials | MAGTRANS Systems",
  description:
    "DX-320HC coercive force meter with zero-flux detection sensor for high-precision coercivity measurement of soft magnetic materials and components.",
};

export default function DX320HCCoercimeterPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-320HC Coercive Force Meter (Coercimeter)
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Soft Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            High-precision coercive force meter with vibration sample zero-flux
            detection sensor for testing coercivity of soft magnetic materials and
            components.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/soft-magnetic/coercimeter-dx320hc.png"
              alt="DX-320HC Coercive Force Meter (Coercimeter)"
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
            DX-320HC Coercive Force Meter adopts a{" "}
            <strong>vibration sample zero-flux detection sensor</strong>, providing
            high sensitivity and measurement accuracy for coercivity testing of
            magnetic materials.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system supports both <strong>stand-alone operation</strong> through
            the front panel and <strong>computer-controlled testing</strong> through
            measurement software.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            DX-320HC integrates advanced signal processing technologies such as ARM
            control systems, digital filtering algorithms and intelligent magnetic
            field control to ensure high test efficiency and reliable measurement
            results.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              High-precision coercivity measurement using zero-flux detection sensor
            </li>
            <li>Stand-alone panel operation or PC software control</li>
            <li>Intelligent dynamic signal amplification and digital processing</li>
            <li>High-resolution magnetic field measurement</li>
            <li>Fast measurement with advanced signal processing algorithms</li>
            <li>Stable and accurate magnetic field generation</li>
          </ul>
        </div>
      </section>

      {/* APPLICATION FIELDS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">Application Fields</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-320HC coercimeter is used for measuring the coercivity of various
            soft magnetic materials and components.
          </p>

          {/* Magnetic Materials */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Materials
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Electrical pure iron</li>
              <li>Silicon steel sheets</li>
              <li>Iron-nickel alloys</li>
              <li>Martensitic stainless steel</li>
              <li>Semi-hard magnetic materials</li>
            </ul>
          </div>

          {/* Magnetic Components */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Components
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Relays</li>
              <li>Solenoid valves</li>
              <li>Magnetic heads</li>
              <li>Leakage switch protectors</li>
              <li>Magnetic labels</li>
            </ul>
          </div>

          {/* Supported Sample Shapes */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Supported Sample Shapes
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Strips</li>
              <li>Sheets</li>
              <li>Rods</li>
              <li>Special-shaped components</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEST CAPABILITIES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Test Capabilities
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
                  <td className="px-4 py-2 text-zinc-700">Test Range</td>
                  <td className="px-4 py-2 text-zinc-700">0.5 – 10000 A/m</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sample Size</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Φ45 mm × 150 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Measurement Resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0.01 A/m</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Test Duration</td>
                  <td className="px-4 py-2 text-zinc-700">1 – 2 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICABLE STANDARDS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Applicable Standards
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system complies with international and national magnetic testing
            standards:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              <strong>GB/T 3656</strong> – Method of measurement of the coercivity
              of electromagnetic pure iron and soft magnetic alloys
            </li>
            <li>
              <strong>GB/T 13888</strong> – Measurement of coercivity of magnetic
              materials in open magnetic circuits
            </li>
            <li>
              <strong>IEC 60404-7</strong> – Measurement of coercivity of magnetic
              materials in open magnetic circuits
            </li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT SOFTWARE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Software
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The measurement software provides comprehensive testing and data
            management functions.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Measurement data export to Excel format</li>
            <li>Automatic display of measurement graphs</li>
            <li>Demagnetization curve display after testing</li>
            <li>
              Data table including ID, batch number, tester and notes
            </li>
            <li>
              Automatic qualification judgement with preset tolerance range
            </li>
            <li>Query function based on time or parameter search</li>
          </ul>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Technical Specifications
          </h2>

          {/* Working Environment */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Working Environment
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
                    <td className="px-4 py-2 text-zinc-700">Input Power</td>
                    <td className="px-4 py-2 text-zinc-700">
                      Single-phase 200 – 240V, 20A, 50Hz
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Total Power</td>
                    <td className="px-4 py-2 text-zinc-700">About 2500 W</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Temperature</td>
                    <td className="px-4 py-2 text-zinc-700">23 ± 5 ℃</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Humidity</td>
                    <td className="px-4 py-2 text-zinc-700">30 – 75 % RH</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Thermal Balance Time
                    </td>
                    <td className="px-4 py-2 text-zinc-700">10 minutes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Magnetic Interference
                    </td>
                    <td className="px-4 py-2 text-zinc-700">Must be avoided</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* System Parameters */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              System Parameters
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
                    <td className="px-4 py-2 text-zinc-700">
                      Maximum Magnetic Field
                    </td>
                    <td className="px-4 py-2 text-zinc-700">150 kA/m</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Current Precision</td>
                    <td className="px-4 py-2 text-zinc-700">
                      &lt;0.1% of current range
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Current Stability
                    </td>
                    <td className="px-4 py-2 text-zinc-700">
                      Better than 0.05%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Magnetic Field Resolution
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.01 A/m</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Measurement Range
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.5 – 1000 A/m</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Accuracy</td>
                    <td className="px-4 py-2 text-zinc-700">±2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                    <td className="px-4 py-2 text-zinc-700">
                      Better than ±0.5%
                    </td>
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
            <li>Magnetic component testing</li>
            <li>Electrical steel production quality control</li>
            <li>Industrial magnetic material inspection</li>
            <li>University and research laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

