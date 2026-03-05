import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Impedance Analyzer | Functional Material Measurement | MAGTRANS Systems",
  description:
    "Precision impedance analyzer for characterising complex impedance, dielectric and magnetic properties of components, circuits and materials across a wide frequency range.",
};

export default function ImpedanceAnalyzerPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Impedance Analyzer
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            A precision impedance analyzer is an electronic test instrument used to
            measure the variation of complex electrical impedance with frequency.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Product Image */}
          <div className="border border-zinc-200 bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center">
              <Image
                src="/products/functional-material-measurement/impedance-analyzer/impedance-analyzer.png"
                alt="Precision impedance analyzer"
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
              A precision impedance analyzer is an electronic test instrument used
              to measure the variation of complex electrical impedance with
              frequency. Impedance is an important parameter for characterising
              electronic components, electronic circuits and material properties.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Impedance analysis can also be applied to dielectric materials such
              as biological tissues, food materials and geological samples,
              enabling the study of their electrical and dielectric behaviour over
              a wide frequency range.
            </p>
          </div>

          {/* Principle */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Principle</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              An impedance analyzer measures the change of complex electrical
              impedance with frequency. It works by measuring the current and
              voltage of a device simultaneously during a frequency sweep through
              phase-sensitive detection.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The main parameters of an impedance analyzer include frequency range,
              impedance range, impedance amplitude accuracy and phase accuracy.
              Additional features include measurement speed and the ability to
              apply voltage or current bias during testing.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The impedance measured includes impedance amplitude, real part,
              imaginary part and the phase difference between voltage and current.
              Based on the equivalent circuit model, parameters such as
              conductance, inductance and capacitance can be calculated and
              displayed.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                <strong>Wide signal source frequency range</strong> – DC to 10Hz –
                1 / 3 / 5 / 10 / 20 / 30 / 50 MHz.
              </li>
              <li>
                <strong>High precision measurement</strong> – basic impedance
                measurement accuracy: ±0.05%.
              </li>
              <li>
                <strong>ALC function</strong> – Automatic Level Control (ALC) for
                stable test signal levels.
              </li>
              <li>
                <strong>Output impedance switching</strong> – 25Ω / 100Ω selectable
                for fixture matching.
              </li>
              <li>
                <strong>Fixture compatibility</strong> – supports liquid fixtures,
                dielectric constant fixtures and other test fixtures.
              </li>
              <li>
                <strong>Display capability</strong> – up to four component
                parameters displayed simultaneously; inductance value and DCR value
                can be displayed at the same time.
              </li>
              <li>
                <strong>Correction functions</strong> – open circuit correction,
                short circuit correction and load correction.
              </li>
              <li>
                <strong>Ultra-fast measurement</strong> – measurement speed &lt;3ms.
              </li>
              <li>
                <strong>Classification function</strong> – comparator function and
                Handler interface BIN classification.
              </li>
              <li>
                <strong>Communication interfaces</strong> – RS-232, GPIB, Handler,
                LAN and USB Host / Device.
              </li>
              <li>
                <strong>Suitable test fields</strong> – laboratory testing and
                research and development.
              </li>
              <li>
                <strong>Optional operating software</strong> – measurement data
                collection and analysis.
              </li>
            </ul>
          </div>

          {/* Specifications */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Specifications</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Item</th>
                    <th className="px-4 py-3 font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Measuring Mode</td>
                    <td className="px-4 py-3">Meter mode, multi-step test</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Equivalent Circuit</td>
                    <td className="px-4 py-3">Series, Parallel</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Calibration</td>
                    <td className="px-4 py-3">Open circuit, short circuit, load</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Line Length Compensation</td>
                    <td className="px-4 py-3">0 / 0.5 / 1 / 2 m</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Multi-step Test</td>
                    <td className="px-4 py-3">50 groups, 15 steps per group</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">BIN Classification</td>
                    <td className="px-4 py-3">9 levels maximum</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Comparator</td>
                    <td className="px-4 py-3">ABS, ΔABS, Δ%, OFF</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Internal Storage</td>
                    <td className="px-4 py-3">
                      100 groups of LCR meter test settings, 50 groups multi-step
                      test settings
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">USB Host Storage</td>
                    <td className="px-4 py-3">
                      LCR meter files, multi-step test files, BMP images
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Trigger Test Mode</td>
                    <td className="px-4 py-3">
                      Automatic, Manual, RS-232, GPIB, Handler
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Communication Mode</td>
                    <td className="px-4 py-3">
                      RS-232, GPIB, Handler, LAN, USB Host/Device
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Power Supply</td>
                    <td className="px-4 py-3">
                      90–264Vac, 47–63Hz, max power 30W
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Display</td>
                    <td className="px-4 py-3">
                      7-inch TFT color display (800×480)
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Operating Environment</td>
                    <td className="px-4 py-3">
                      Temperature 10–40℃, Humidity 20–90%RH
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Dimensions</td>
                    <td className="px-4 py-3">336 × 147 × 340 mm</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Weight</td>
                    <td className="px-4 py-3">3 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Model Parameters */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Model Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Model</th>
                    <th className="px-4 py-3 font-semibold">DX6630-1</th>
                    <th className="px-4 py-3 font-semibold">DX6630-3</th>
                    <th className="px-4 py-3 font-semibold">DX6630-5</th>
                    <th className="px-4 py-3 font-semibold">DX6630-10</th>
                    <th className="px-4 py-3 font-semibold">DX6630-20</th>
                    <th className="px-4 py-3 font-semibold">DX6630-30</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Test Frequency</td>
                    <td className="px-4 py-3">10Hz–1MHz</td>
                    <td className="px-4 py-3">10Hz–3MHz</td>
                    <td className="px-4 py-3">10Hz–5MHz</td>
                    <td className="px-4 py-3">10Hz–10MHz</td>
                    <td className="px-4 py-3">10Hz–20MHz</td>
                    <td className="px-4 py-3">10Hz–30MHz</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Measurement Frequency Resolution</td>
                    <td className="px-4 py-3" colSpan={6}>
                      Six digits
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Frequency Output Accuracy</td>
                    <td className="px-4 py-3" colSpan={6}>
                      7ppm ±0.01%
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Basic Accuracy</td>
                    <td className="px-4 py-3" colSpan={6}>
                      ±0.05%
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Test Signal Voltage Range</td>
                    <td className="px-4 py-3" colSpan={6}>
                      10mV – 2Vrms
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Minimum Voltage Resolution</td>
                    <td className="px-4 py-3" colSpan={6}>
                      1mV
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AC Voltage Accuracy</td>
                    <td className="px-4 py-3" colSpan={6}>
                      ALC OFF: 10% × set voltage ±2mV; ALC ON: 6% × set voltage ±2mV
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Test Signal Current Range</td>
                    <td className="px-4 py-3" colSpan={6}>
                      200µA – 20mArms
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Current Minimum Resolution</td>
                    <td className="px-4 py-3" colSpan={6}>
                      10µA
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AC Current Accuracy</td>
                    <td className="px-4 py-3" colSpan={6}>
                      ALC OFF: 10% × set current ±20µA
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">DC Test Signal</td>
                    <td className="px-4 py-3" colSpan={6}>
                      1V fixed
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Output Impedance</td>
                    <td className="px-4 py-3" colSpan={6}>
                      25Ω / 100Ω switchable
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Measurement Time</td>
                    <td className="px-4 py-3" colSpan={6}>
                      &lt;3ms
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Measurement Parameters / Range</td>
                    <td className="px-4 py-3" colSpan={6}>
                      |Z|: 0.000m – 9999.99M; R, X: ±0.000mΩ – 9999.99MΩ; |Y|:
                      0.00000µS – 999.999kS; G, B: ±0.00000µS – 999.999kS;
                      θ(rad): ±0.00000 – 3.14159; θ(°): ±0.000° – 180.000°; Cs,
                      Cp: ±0.00000pF – 9999.99F; Ls, Lp: ±0.00nH – 9999.99kH; D:
                      0.00000 – 9999.99; Q: 0.00 – 9999.99; Δ: ±0.00% – 9999.99%;
                      Rdc: 0.00mΩ – 99.9999MΩ; εr&apos;, εr&apos;&apos;: 0 – 100000;
                      μr&apos;, μr&apos;&apos;: 0 – 100000.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

