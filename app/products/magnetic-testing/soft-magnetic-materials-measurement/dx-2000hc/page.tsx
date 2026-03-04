import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2000HC Economical Soft Magnetic Coercivity Measurement System | MAGTRANS Systems",
  description:
    "DX-2000HC automatic system for measuring coercivity (Hc) of soft magnetic materials using a simulated impact method with electronic integration and computer control.",
};

export default function DX2000HCSoftMagneticCoercivityPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2000HC Economical Soft Magnetic Coercivity Measurement System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Soft Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Automatic coercivity measurement system for soft magnetic materials
            using a simulated impact method with electronic integration and
            computer control.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/soft-magnetic/soft-magnetic-coercivity-dx2000hc.png"
              alt="DX-2000HC Economical Soft Magnetic Coercivity Measurement System"
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
            DX-2000HC Economical Soft Magnetic Coercivity Measurement System is an
            automatic magnetic testing device designed for measuring the{" "}
            <strong>coercivity (Hc) of soft magnetic materials</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system adopts the <strong>simulated impact method</strong>{" "}
            combined with computer control technology, A/D and D/A conversion, and
            electronic integration. It replaces the traditional impact
            galvanometer used in classical measurement systems.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Compared with traditional methods, the DX-2000HC system provides{" "}
            <strong>
              higher measurement accuracy, faster testing speed, better
              repeatability and reduced human error
            </strong>
            , making it suitable for laboratory research and industrial magnetic
            material testing.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system complies with several national and international magnetic
            testing standards.
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
            The DX-2000HC measurement system complies with:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              <strong>GB3657-83</strong> – Measurement method for magnetic
              materials
            </li>
            <li>
              <strong>SJ/T13888-2009</strong> – Measurement method of coercivity
            </li>
            <li>
              <strong>IEC 60404-7</strong> – Measurement of coercivity of magnetic
              materials in open magnetic circuits
            </li>
          </ul>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Automatic measurement of <strong>coercivity (Hc)</strong> for soft
              magnetic materials
            </li>
            <li>
              Computer controlled simulated impact measurement method
            </li>
            <li>
              Electronic integrator replaces traditional impact galvanometer
            </li>
            <li>High measurement accuracy and fast testing speed</li>
            <li>Excellent repeatability and stability</li>
            <li>Automatic zero adjustment before measurement</li>
            <li>Software-controlled automatic test process</li>
            <li>Simple operation with minimal operator training required</li>
          </ul>
        </div>
      </section>

      {/* TEST SAMPLE INFORMATION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Test Sample Information
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Supported Materials
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Soft magnetic ferrite</li>
              <li>Permalloy</li>
              <li>Amorphous magnetic materials</li>
              <li>Nanocrystalline magnetic materials</li>
              <li>Iron powder cores</li>
              <li>Electrical pure iron</li>
              <li>Silicon steel sheets</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Supported Sample Shapes
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Bar / rod shaped samples</li>
              <li>Sheet shaped samples</li>
              <li>L-shaped samples</li>
              <li>U-shaped samples</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              Testing is performed using{" "}
              <strong>open circuit solenoid measurement systems</strong>{" "}
              consisting of the sample, magnetizing coil (N1) and measuring coil
              (N2).
            </p>
          </div>
        </div>
      </section>

      {/* MEASUREMENT CAPABILITIES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Capabilities
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2000HC system can measure:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Coercivity <strong>Hc</strong>
            </li>
            <li>Basic magnetization curve</li>
            <li>Magnetic characteristic parameters of soft magnetic materials</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magnetic field intensity is determined by measuring the magnetizing
            current, with <strong>magnetic field locking accuracy up to 0.1%</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magnetic flux density is measured using an{" "}
            <strong>
              electronic integrator with automatic zero correction and stability
              adjustment
            </strong>
            .
          </p>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Technical Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    350VA
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    500VA
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    1000VA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Input Power</td>
                  <td className="px-4 py-2 text-zinc-700">
                    AC 200–240V, 50/60Hz
                  </td>
                  <td className="px-4 py-2 text-zinc-700">AC 200–240V</td>
                  <td className="px-4 py-2 text-zinc-700">AC 200–240V</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Output Power
                  </td>
                  <td className="px-4 py-2 text-zinc-700">350VA</td>
                  <td className="px-4 py-2 text-zinc-700">500VA</td>
                  <td className="px-4 py-2 text-zinc-700">1000VA</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Output Voltage
                  </td>
                  <td className="px-4 py-2 text-zinc-700">±35V</td>
                  <td className="px-4 py-2 text-zinc-700">±50V</td>
                  <td className="px-4 py-2 text-zinc-700">±50V</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Output Current
                  </td>
                  <td className="px-4 py-2 text-zinc-700">10A</td>
                  <td className="px-4 py-2 text-zinc-700">10A</td>
                  <td className="px-4 py-2 text-zinc-700">20A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GENERAL SYSTEM SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            General System Specifications
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
                  <td className="px-4 py-2 text-zinc-700">Display</td>
                  <td className="px-4 py-2 text-zinc-700">TFT True Color LCD</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Dimensions</td>
                  <td className="px-4 py-2 text-zinc-700">510 × 490 × 230 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Weight</td>
                  <td className="px-4 py-2 text-zinc-700">30 – 40 kg</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Operating Temperature
                  </td>
                  <td className="px-4 py-2 text-zinc-700">23 ±15 °C</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Humidity</td>
                  <td className="px-4 py-2 text-zinc-700">20 – 80 % RH</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Thermal Equilibrium Time
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
      </section>

      {/* MEASUREMENT SYSTEM PARAMETERS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement System Parameters
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
                  <td className="px-4 py-2 text-zinc-700">Current Stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Better than 0.05%
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Current Resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    &lt;0.003% of current range
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Flux Range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    2, 4, 10, 20 mWb
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Fluxmeter Sensitivity
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0.05 µWb</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">A/D Conversion</td>
                  <td className="px-4 py-2 text-zinc-700">
                    24-bit high precision
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">D/A Conversion</td>
                  <td className="px-4 py-2 text-zinc-700">16-bit dual channel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MEASUREMENT ACCURACY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Accuracy
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            When measuring pure iron bar samples according to{" "}
            <strong>GB/T13888-2009</strong>:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Coercivity Uncertainty
                  </td>
                  <td className="px-4 py-2 text-zinc-700">2% ±2 A/m</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">1.5% ±1 A/m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SOFTWARE FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Software Features
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            DX-2000HC measurement software provides automated testing and data
            management functions.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Supports <strong>Windows XP, Windows 7 and Windows 10</strong>
            </li>
            <li>Automatic measurement and data processing</li>
            <li>Automatic zero calibration before testing</li>
            <li>
              Measurement results stored in <strong>text format files</strong>
            </li>
            <li>
              Data files can be viewed using <strong>Excel, Word or Notepad</strong>
            </li>
            <li>User-friendly interface for easy operation</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Soft magnetic material research laboratories</li>
            <li>Magnetic component quality inspection</li>
            <li>Electrical steel testing</li>
            <li>Magnetic material manufacturing industries</li>
            <li>University research and development laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

