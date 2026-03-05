import type { Metadata } from "next";
import Image from "next/image";
import LaserDopplerSlider from "./LaserDopplerSlider";

export const metadata: Metadata = {
  title: "DXLV-03 Fiber Laser Doppler Vibrometer | Functional Material Measurement | MAGTRANS Systems",
  description:
    "DXLV-03 fiber laser Doppler vibrometer integrating advanced optical testing and digital signal processing for high‑resolution, non-contact vibration measurement.",
};

export default function LaserDopplerVibrometerPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Laser Doppler Vibrometer
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The DXLV-03 Fiber Laser Doppler Vibrometer integrates advanced optical testing
            technology and digital signal processing technology. The system provides high resolution
            vibration measurement with strong anti-interference capability and a wide dynamic
            measurement range.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Image Slider */}
          <LaserDopplerSlider />

          {/* Product Overview */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The DXLV-03 Fiber Laser Doppler Vibrometer integrates advanced optical testing
              technology and digital signal processing technology. The equipment has strong
              anti-interference capability, high resolution and wide dynamic measurement range. It
              has been widely used in universities, research institutes and high-tech enterprises.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system is easy to install and allows users to quickly obtain vibration data. It
              also works seamlessly with ferroelectric analyzers for high-precision strain
              measurement.
            </p>
          </div>

          {/* Technology Description */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Technology Description</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Measurement and analysis of vibration characteristics is an important method used to
              identify and verify the quality characteristics and operating conditions of machines
              and components.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Non-contact laser Doppler vibrometer technology based on laser interferometry has
              become one of the most important vibration measurement technologies due to its high
              displacement and velocity measurement resolution.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              This technology is widely used in both scientific research and engineering
              measurement applications.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Non-contact measurement with high precision and high resolution</li>
              <li>Miniaturized and integrated design</li>
              <li>Strong anti-interference capability</li>
              <li>Not affected by ambient light or material color</li>
              <li>Coaxial transmission and reception without measurement blind spots</li>
            </ul>
          </div>

          {/* Technical Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Technical Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Parameter</th>
                    <th className="px-4 py-3 font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Optoelectronic integrated chip technology</td>
                    <td className="px-4 py-3">Supported</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Sensor sampling rate</td>
                    <td className="px-4 py-3">5 MHz</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Displacement resolution</td>
                    <td className="px-4 py-3">0.01 nm</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Measurement laser wavelength</td>
                    <td className="px-4 py-3">1310 nm</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Measurement frequency range</td>
                    <td className="px-4 py-3">DC – 2.5 MHz</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Vibration frequency accuracy</td>
                    <td className="px-4 py-3">0.02%</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Maximum vibration measurement</td>
                    <td className="px-4 py-3">
                      4.5 m/s (high-speed version up to 20 m/s)
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Analog output</td>
                    <td className="px-4 py-3">±5V</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Software interface</td>
                    <td className="px-4 py-3">Raw data interface and SDK support</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Power supply</td>
                    <td className="px-4 py-3">12V</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Power consumption</td>
                    <td className="px-4 py-3">4W</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Light interference tolerance</td>
                    <td className="px-4 py-3">&gt; 60000 lux</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Application Cases */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-zinc-900">Application Cases</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Application 1 */}
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/laser-doppler-vibrometer/laser-vibrometer-variable-temp-box.jpg"
                    alt="Laser vibrometer with variable temperature block test box"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Laser Vibrometer + Variable Temperature Block Test Box
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Adjustable electrode stroke of at least 3mm with 0.01mm resolution. Sample size
                  less than 30mm. Sample box test voltage not less than 10kV. Heating temperature
                  range RT – 250°C with imported temperature controller and over-temperature /
                  over-current protection.
                </p>
              </div>

              {/* Application 2 */}
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/laser-doppler-vibrometer/laser-vibrometer-high-temp-box.jpg"
                    alt="Laser vibrometer with high temperature block test box"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Laser Vibrometer + High Temperature Block Test Box
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Electrode adjustable stroke ≥ 3mm with 0.01mm resolution. Sample size &lt; 30mm.
                  Sample box test voltage ≥ 10kV. Heating temperature range RT – 800°C using
                  imported temperature controller with over-temperature and over-current
                  protection.
                </p>
              </div>

              {/* Application 3 */}
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/laser-doppler-vibrometer/laser-vibrometer-high-low-temp-fixture.jpg"
                    alt="Laser vibrometer high and low temperature test fixture"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Laser Vibrometer + High and Low Temperature Test Fixture
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Suitable for strain measurement of devices and bulk materials. Sample size &lt;
                  40mm. Sample box test voltage ≥ 2kV. Temperature range −196°C – 250°C with
                  imported temperature controller and full over-temperature / over-current
                  protection.
                </p>
              </div>

              {/* Application 4 */}
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/laser-doppler-vibrometer/laser-vibrometer-thin-film-cantilever.jpg"
                    alt="Laser vibrometer thin film cantilever beam test fixture"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Laser Vibrometer + Thin Film Cantilever Beam Test Fixture
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Combined with thin film piezoelectric test (E31), the laser vibrometer measures
                  piezoelectric coefficients (E31, D31, D33 and E33) of films deposited on
                  cantilever beams. Voltage applied to the film causes bending of the substrate,
                  and the displacement is captured with high precision to obtain thickness
                  displacement versus voltage characteristics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

