import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012M Silicon Steel Material Automatic Measuring Device | MAGTRANS Systems",
  description:
    "DX-2012M automatic AC magnetic property measuring system for hot-rolled and cold-rolled oriented and non-oriented silicon steel sheets using standard Epstein square coils.",
};

export default function DX2012MSiliconSteelMeasuringPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012M Silicon Steel Material Automatic Measuring Device
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Soft Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Automatic AC magnetic property measuring system for silicon steel
            materials, supporting standard Epstein square coils and core testing
            from 40 Hz to 1 kHz.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/soft-magnetic/silicon-steel-measuring-dx2012m.png"
              alt="DX-2012M Silicon Steel Material Automatic Measuring Device"
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
            DX-2012M Silicon Steel Material Automatic Measuring Device is designed
            for automatic measurement of{" "}
            <strong>AC magnetic properties of silicon steel materials</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system is widely used for{" "}
            <strong>
              incoming inspection and quality control of hot-rolled and
              cold-rolled oriented and non-oriented silicon steel sheets
            </strong>
            .
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            DX-2012M supports testing using{" "}
            <strong>standard Epstein square coils</strong> and complies with
            international magnetic testing standards. The system can also directly
            measure AC magnetic properties of soft magnetic cores within the
            frequency range of <strong>40 Hz – 1 kHz</strong>.
          </p>
        </div>
      </section>

      {/* MEASUREMENT ACCURACY AND REPEATABILITY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Accuracy and Repeatability
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The following accuracy values are referenced using a{" "}
            <strong>
              standard Epstein square coil sample at 50 Hz frequency
            </strong>
            .
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Uncertainty (%)
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Repeatability (%)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Specific Total Loss (Ps)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1.0</td>
                  <td className="px-4 py-2 text-zinc-700">±0.5</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Induction (Bm)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0.5</td>
                  <td className="px-4 py-2 text-zinc-700">±0.3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Strength (Hm)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0.5</td>
                  <td className="px-4 py-2 text-zinc-700">±0.3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Amplitude Permeability (µa)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1.0</td>
                  <td className="px-4 py-2 text-zinc-700">±0.5</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Loss Angle (δ)</td>
                  <td className="px-4 py-2 text-zinc-700">2.0</td>
                  <td className="px-4 py-2 text-zinc-700">±1.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HARDWARE TECHNICAL PARAMETERS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Hardware Technical Parameters
          </h2>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Built-in Testing Power Supply
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
                    <td className="px-4 py-2 text-zinc-700">Input Voltage</td>
                    <td className="px-4 py-2 text-zinc-700">
                      220V ±20V / 10A
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Input Power</td>
                    <td className="px-4 py-2 text-zinc-700">
                      500VA sine wave
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Frequency Range</td>
                    <td className="px-4 py-2 text-zinc-700">40Hz – 1000Hz</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Frequency Error</td>
                    <td className="px-4 py-2 text-zinc-700">±0.05%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Output Voltage</td>
                    <td className="px-4 py-2 text-zinc-700">
                      0–10–50–100–200V
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Output Current</td>
                    <td className="px-4 py-2 text-zinc-700">
                      0–20–20–10A
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Voltage Distortion
                    </td>
                    <td className="px-4 py-2 text-zinc-700">&lt;0.5%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Voltage Stability
                    </td>
                    <td className="px-4 py-2 text-zinc-700">&lt;0.2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Signal Generation</td>
                    <td className="px-4 py-2 text-zinc-700">
                      DDS digital frequency synthesis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM PARAMETERS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Parameters
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
                  <td className="px-4 py-2 text-zinc-700">Processor</td>
                  <td className="px-4 py-2 text-zinc-700">
                    32-bit ARM embedded processor
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Interface</td>
                  <td className="px-4 py-2 text-zinc-700">
                    RS232 communication
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">PC Control</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Supports upper computer software control
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SAMPLING TECHNOLOGY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Sampling Technology
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
                  <td className="px-4 py-2 text-zinc-700">A/D Converter</td>
                  <td className="px-4 py-2 text-zinc-700">16-bit dual channel</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sampling Speed</td>
                  <td className="px-4 py-2 text-zinc-700">Up to 1MHz</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sampling Method</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Automatic value replacement
                  </td>
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
            Measurement conditions:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Preheated for 10 minutes</li>
            <li>
              Temperature: <strong>23 ±5°C</strong>
            </li>
            <li>
              Humidity: <strong>30–75% RH</strong>
            </li>
            <li>No external magnetic field interference</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Accuracy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Induction Locking
                  </td>
                  <td className="px-4 py-2 text-zinc-700">±0.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Locking
                  </td>
                  <td className="px-4 py-2 text-zinc-700">±0.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Induction Measurement
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±(0.2% + correction factor)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Measurement
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±(0.2% + correction factor)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base text-zinc-700 leading-relaxed">
            Specific total loss measurement accuracy depends on the phase angle
            between induced voltage and excitation current.
          </p>
        </div>
      </section>

      {/* SOFTWARE FUNCTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Software Functions
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012M software provides automatic measurement, analysis and
            report generation.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Automatic test control and data saving through PC connection
            </li>
            <li>
              Sorting and classification of key parameters (Br, Bm, Hc, Hm, Ps,
              µa)
            </li>
            <li>
              Accurate measurement of voltage, current, frequency and power
              parameters
            </li>
            <li>
              Measurement of dynamic magnetic parameters including permeability and
              loss angle
            </li>
            <li>
              Generation of waveform reports including{" "}
              <strong>I-V-B waveforms and B-H hysteresis loops</strong>
            </li>
            <li>Display of magnetization curves and permeability curves</li>
            <li>Loss curve analysis Ps-B curve</li>
            <li>
              Multi-curve comparison of different samples or frequencies
            </li>
            <li>
              Supports Chinese and English interface with automatic report
              generation
            </li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Silicon steel sheet production quality control</li>
            <li>Transformer core material testing</li>
            <li>Electrical steel research laboratories</li>
            <li>Magnetic material development</li>
            <li>University research and academic laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

