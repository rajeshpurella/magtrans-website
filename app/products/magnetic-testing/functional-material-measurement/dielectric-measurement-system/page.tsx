import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Dielectric Measurement System | Functional Material Measurement | MAGTRANS Systems",
  description:
    "High and low temperature dielectric temperature spectrum measurement system for insulating materials with extended breakdown and TSDC measurement capabilities.",
};

export default function DielectricMeasurementSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Dielectric Measurement System
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The high and low temperature dielectric temperature spectrum measurement system is
            mainly used for electrical testing of insulating materials at different temperatures and
            frequencies, with extended capabilities for breakdown testing and thermally stimulated
            depolarization current (TSDC) measurements.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The system supports continuous and high-speed measurements under different measurement
            conditions and measurement modes, providing a flexible platform for characterising
            dielectric behaviour across a wide operating range.
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
                src="/products/functional-material-measurement/dielectric-measurement-system/Dielectric Measurement System.png"
                alt="Dielectric Measurement System"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Measurement Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Measurement Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature range</td>
                    <td className="px-4 py-3">-185 ~ 600°C</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Sample size</td>
                    <td className="px-4 py-3">φ &lt; 25 mm, d &lt; 4 mm</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature control accuracy</td>
                    <td className="px-4 py-3">±0.25°C</td>
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
                    <td className="px-4 py-3">Aluminum nitride ceramic</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Test frequency</td>
                    <td className="px-4 py-3">20 Hz ~ 10 MHz</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Low temperature refrigeration</td>
                    <td className="px-4 py-3">Liquid nitrogen</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Heating method</td>
                    <td className="px-4 py-3">DC electrode heating</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Test function</td>
                    <td className="px-4 py-3">Dielectric temperature spectrum, frequency spectrum</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cooling method</td>
                    <td className="px-4 py-3">Water cooling</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Data transmission</td>
                    <td className="px-4 py-3">RS-232</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Input voltage</td>
                    <td className="px-4 py-3">110 ~ 220 V</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Equipment size</td>
                    <td className="px-4 py-3">180 mm × 210 mm × 50 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Features - Grid Harmonics */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Eliminate the impact of grid harmonics on collection accuracy
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Power grid harmonics are high-order harmonic components that exist in electrical power
              systems in addition to the fundamental voltage and current. These harmonics are
              generated by nonlinear loads where the relationship between current and voltage is
              nonlinear, resulting in non-sinusoidal current waveforms and harmonic generation.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Harmonics can seriously interfere with electrical equipment such as communication
              systems, computer systems, processing machinery and testing instruments. Most heating
              systems use AC heating wires powered by a 50 Hz sine wave, which can introduce
              additional noise into sensitive measurements.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              To reduce interference caused by power frequency and harmonics, Dexinmag instruments
              use DC heating technology. Additional filtering techniques are also applied to further
              reduce harmonic influence, greatly improving measurement accuracy for dielectric
              characterisation.
            </p>
          </div>

          {/* Features - Measurement Wire Impedance */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Eliminate the influence of measurement wire impedance and internal shielding in
              high-temperature environments
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Transmission lines are affected by their materials and structural properties. When
              transmitting high-frequency signals, the ratio between voltage and current along the
              conductor can change, and impedance mismatches may introduce measurement errors.
              Impedance-matched measurement cables are therefore required during the measurement
              process.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Measurement cables themselves also have impedance and high-frequency response
              characteristics, so shortening the measurement wires improves accuracy. In
              high-temperature environments, measurement wires cannot be fully shielded and are
              usually only insulated. Due to temperature changes, the resistance of high-temperature
              wires increases, and passage through ceramics or refractory materials introduces
              additional capacitance into the measurement path.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              To minimise these effects, the system adopts a three-electrode measurement method that
              provides better shielding performance and reduces the influence of lead impedance and
              stray capacitance on the measured dielectric properties.
            </p>
          </div>

          {/* Features - Sample Temperature and Electrodes */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Optimize sample temperature measurement methods and measurement electrodes
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Based on the parallel-plate electrode measurement principle, the electrode used for
              measurement should be as small as possible to reduce stray capacitance and the
              influence of surrounding space. A conductive layer is sputtered onto the sample
              surface to create a precise, well-defined electrode geometry.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Since different materials have different thermal expansion coefficients, temperature
              measured by a thermocouple placed near the sample may differ slightly from the actual
              sample temperature. Using a reference sample during measurement allows more accurate
              determination of the true sample temperature and improves correlation between thermal
              and dielectric data.
            </p>
          </div>

          {/* Operational Software */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Operational Software</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The test system software platform is developed using the LabVIEW system. It meets
              various testing requirements for functional materials and provides high stability and
              operational safety, including power-off data protection so that test data and images
              can be saved and restored after unexpected interruptions.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The software is compatible with Windows XP, Windows 7 and Windows 10. Key features
              include a multilingual interface (Chinese / English), real-time monitoring of system
              testing status, legend management using status icons, user permission management,
              fault alarm functions and customizable test report generation with export to Excel and
              PDF formats.
            </p>
          </div>

          {/* Software Compatibility */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Software Compatibility</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The dielectric measurement system is compatible with multiple impedance analysis
              instruments, enabling flexible hardware configurations and protection of existing
              investments:
            </p>
            <div className="grid gap-4 md:grid-cols-3 text-sm text-zinc-700 leading-relaxed">
              <div className="space-y-1">
                <h3 className="font-semibold text-zinc-900">Keysight</h3>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>E4990</li>
                  <li>E4991</li>
                  <li>E4980A</li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-zinc-900">Wayne Kerr</h3>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>6500B</li>
                  <li>6530</li>
                  <li>4235</li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-zinc-900">Tonghui</h3>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>2983</li>
                  <li>2838</li>
                  <li>2851</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

