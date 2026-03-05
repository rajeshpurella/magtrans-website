import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Insulation Resistance Tester | Functional Material Measurement | MAGTRANS Systems",
  description:
    "High temperature insulation resistance tester with infrared reflection furnace for precise resistance and resistivity measurements of insulating and functional materials.",
};

export default function InsulationResistanceTesterPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Insulation Resistance Tester
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The high temperature insulation resistance tester uses the parallel plate method design
            principle and a unique resistance test system to improve fixture anti-interference
            capability, repeatability and stability, delivering significantly enhanced measurement
            accuracy.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            It is suitable for product testing and research on the electrical properties of new
            functional materials, and is designed according to GB/T 10518-2006 and relevant ASTM
            standards, with comprehensive safety and data protection mechanisms for reliable
            operation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Hero Image */}
          <div className="border border-zinc-200 bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center">
              <Image
                src="/products/functional-material-measurement/insulation-resistance-tester/Insulation Resistance Tester.png"
                alt="Insulation Resistance Tester"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Overview */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The high temperature insulation resistance tester uses the parallel plate method
              design principle for measurement. Using a unique resistance test system, the
              anti-interference ability of the fixture is improved, providing better repeatability
              and stability with significantly improved measurement accuracy.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              This system can be used for product testing and research on the electrical properties
              of new functional materials. The high-temperature insulation resistance tester
              (infrared reflector furnace) is designed according to the standard{" "}
              <strong>
                GB/T 10518-2006 Test Method for Resistance and Resistivity of Insulating Materials
                at High Temperature
              </strong>{" "}
              and also refers to the American ASTM standard.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Multiple safety protection designs are implemented to ensure safe operation under
              abnormal conditions such as over-voltage, over-current and over-temperature. The
              system also includes a data protection mechanism that safely stores measurement data
              even in the event of computer errors or power interruptions, allowing original test
              data to be restored after restart.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                Multifunctional infrared reflection furnace allowing electrical testing in high
                temperature, vacuum and atmospheric environments.
              </li>
              <li>
                Platinum measurement wires reduce signal attenuation and improve measurement
                accuracy.
              </li>
              <li>
                Equipped with a water cooling device for faster cooling and higher efficiency.
              </li>
              <li>
                Supports uniform temperature rise and step temperature rise measurement modes.
              </li>
              <li>
                Imported temperature sensor and PID automatic temperature control for high
                accuracy.
              </li>
              <li>
                Near-infrared heating provides uniform sample heating with no induced current.
              </li>
              <li>
                10-inch imported touch screen with integrated mechanical structure design for higher
                stability and reliability.
              </li>
              <li>
                Imported high-frequency test cables with stronger anti-interference ability and
                higher data acquisition accuracy.
              </li>
              <li>99 alumina ceramic insulation with platinum electrode clamp.</li>
              <li>
                Dexinmag control analysis software compatible with functional testing platform
                systems.
              </li>
            </ul>
          </div>

          {/* Measured Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Measured Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature range</td>
                    <td className="px-4 py-3">RT – 800°C (max: 1650°C)</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Sample size</td>
                    <td className="px-4 py-3">φ &lt; 25 mm, d &lt; 4 mm</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature control accuracy</td>
                    <td className="px-4 py-3">±1°C</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Electrode material</td>
                    <td className="px-4 py-3">Platinum</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature rising slope</td>
                    <td className="px-4 py-3">10°C/min (adjustable)</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Clamp auxiliary material</td>
                    <td className="px-4 py-3">99 alumina ceramic</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Resistance</td>
                    <td className="px-4 py-3">1 × 10¹⁶ Ω</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Insulating material</td>
                    <td className="px-4 py-3">99 alumina ceramic</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Resistivity</td>
                    <td className="px-4 py-3">1 × 10³ – 10¹⁶ Ω·cm</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Data transmission</td>
                    <td className="px-4 py-3">4 USB interfaces</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Input voltage</td>
                    <td className="px-4 py-3">110 – 220 V</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Equipment size</td>
                    <td className="px-4 py-3">600 × 500 × 350 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Advantage */}
          <div className="space-y-6 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Eliminate the influence of network harmonics on acquisition accuracy
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              During measurement of ultra-high resistance and weak signals, input bias current and
              leakage current may cause measurement errors. In addition, many high-frequency and
              high-power devices such as frequency converters introduce harmonic interference in the
              power grid.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Dexinmag&apos;s anti-interference module combined with advanced test analysis
              technology achieves measurement resolution up to{" "}
              <strong>1 fA (10⁻¹⁵ A)</strong>. This allows precise testing of semiconductors,
              functional materials and nano-devices.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/functional-material-measurement/insulation-resistance-tester/Eliminate the influence of network harmonics on acquisition accuracy.png"
                alt="Eliminate the influence of network harmonics on acquisition accuracy"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Automatic Averaging Function */}
          <div className="space-y-6 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Automatic Averaging Function
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Automatic averaging detects current changes and averages them automatically without
              changing measurement settings. This function eliminates deviations caused by unstable
              contact or excessive charging current response.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The current input port uses a large-diameter triaxial connector with a three-layer
              coaxial structure: the inner conductor is connected to GUARD (COM), and the outer
              shield is connected to GND. This design improves anti-interference capability and
              reliability during high-voltage testing.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/functional-material-measurement/insulation-resistance-tester/Automatic averaging function to eliminate irregular input, stronger data processing and internal masking.png"
                alt="Automatic averaging function and anti-interference data processing"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Heating Method */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Heating Method</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Most domestic high-temperature heating methods use tubular furnaces or muffle
              furnaces, which heat the furnace body using heating wires or silicon carbon rods,
              resulting in slow heating and cooling speeds and uneven temperature distribution.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Dexinmag has developed a paraboloid infrared reflection furnace with high
              reflectivity and high-precision heating capability. Advantages include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>High-speed heating</li>
              <li>Wide uniform heating zone</li>
              <li>High-speed cooling</li>
              <li>Quartz tube protection to prevent atmospheric contamination</li>
              <li>Support for vacuum and high-purity gas heating environments</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system can be configured as a uniform high-speed heating furnace, temperature
              slope furnace or stage heating furnace.
            </p>
          </div>

          {/* High Speed Heating and Cooling */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              High Speed Heating and Cooling
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              High-energy infrared lamps and gold-coated reflectors allow rapid heating to high
              temperatures. The furnace can also include water cooling systems and gas cooling
              devices, enabling rapid cooling and improving testing efficiency.
            </p>
          </div>

          {/* Temperature Control */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Temperature Control</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The infrared gold-plated focusing furnace combined with a temperature controller
              allows precise sample temperature control. The system provides accurate temperature
              holding, adjustable cooling rate and stable temperature maintenance at any set point.
            </p>
          </div>

          {/* Heating and Cooling in Different Environments */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Heating and Cooling in Different Environments
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system supports heating and cooling in vacuum environments, atmospheric
              environments and low-temperature environments using high-purity inert gases. Quartz
              glass structures allow infrared radiation to be delivered effectively to heating and
              cooling chambers.
            </p>
          </div>

          {/* Operational Software */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Operational Software</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system software platform is developed using LabVIEW, providing stable and safe
              operation with automatic saving of power-off data, image data storage and recovery.
              It is compatible with Windows XP, Windows 7 and Windows 10.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Additional functions include a multilingual interface (Chinese / English), system
              status monitoring, legend and status management, user permission management, fault
              alarm system and customizable test report generation with export to Excel and PDF
              formats.
            </p>
          </div>

          {/* Application Scenarios */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Application Scenarios</h2>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/functional-material-measurement/insulation-resistance-tester/Application scenarios.png"
                alt="Application scenarios for insulation resistance tester"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

