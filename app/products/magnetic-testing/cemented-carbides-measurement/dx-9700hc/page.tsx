import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-9700HC Hard Metal Magnetometer | Cemented Carbides Measurement | MAGTRANS Systems",
  description:
    "DX-9700HC high-precision magnetometer for evaluating magnetic properties of cemented carbides (WC-Co alloys) and semi-hard magnetic materials for research and quality control.",
};

export default function DX9700HCHardMetalMagnetometerPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-9700HC Hard Metal Magnetometer
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Cemented Carbides Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            High-precision measurement system for evaluating the magnetic
            properties of cemented carbides (WC-Co alloys) and semi-hard magnetic
            materials in research and quality control environments.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/cemented-carbides-measurement/dx-9700hc.png"
              alt="DX-9700HC Hard Metal Magnetometer"
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
            DX-9700HC Hard Metal Magnetometer is a high-precision measurement
            system designed for evaluating the magnetic properties of{" "}
            <strong>cemented carbides (WC-Co alloys)</strong> and{" "}
            <strong>semi-hard magnetic materials</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system provides accurate magnetic parameters that help evaluate
            other correlated material properties such as{" "}
            <strong>hardness and the presence of undesired phases</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-9700HC uses advanced digital measurement technology to provide{" "}
            <strong>
              fast, repeatable and highly accurate magnetic measurements
            </strong>
            , making it suitable for research laboratories and industrial quality
            control applications.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system complies with international standards including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              <strong>IEC 60404-4</strong>
            </li>
            <li>
              <strong>ASTM A596</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT PRINCIPLE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Principle
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-9700HC measurement process is controlled by computer software
            and a data acquisition system. The typical workflow is:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
            <li>
              The computer sends excitation current signals to the excitation
              power supply through a data acquisition card.
            </li>
            <li>
              The excitation power supply drives the electromagnet to generate a
              changing magnetic field.
            </li>
            <li>
              The <strong>DX-210H Gaussmeter</strong> measures the magnetic field
              intensity.
            </li>
            <li>
              The <strong>DX-210B Fluxmeter</strong> measures magnetic flux.
            </li>
            <li>
              Signals are converted from analog to digital by a dual-channel A/D
              converter.
            </li>
            <li>
              The computer processes the data and generates measurement results and
              graphs.
            </li>
          </ol>
          <p className="text-base text-zinc-700 leading-relaxed">
            Typical measurement time is{" "}
            <strong>60 – 120 seconds per test</strong>.
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
            The DX-9700HC measuring software provides powerful testing and data
            analysis features.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Supports <strong>Windows XP, Windows 7, Windows 8 and Windows 10</strong>
            </li>
            <li>Chinese and English interface available</li>
            <li>Real-time waveform display during measurement</li>
            <li>Automatic saving of measurement results</li>
            <li>
              Sample parameters and measurement data stored automatically
            </li>
            <li>Print preview and report printing functions</li>
            <li>
              Export measurement results as <strong>BMP images or data tables</strong>
            </li>
            <li>
              Up to <strong>four measurement curves</strong> can be displayed
              simultaneously for comparison
            </li>
            <li>Built-in temperature coefficients for various materials</li>
            <li>
              Measurement time: <strong>30 – 120 seconds</strong> depending on
              sample
            </li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT ACCURACY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Accuracy
          </h2>
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
                  <td className="px-4 py-2 text-zinc-700">HcB</td>
                  <td className="px-4 py-2 text-zinc-700">1.0</td>
                  <td className="px-4 py-2 text-zinc-700">±0.3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">HcJ</td>
                  <td className="px-4 py-2 text-zinc-700">1.0</td>
                  <td className="px-4 py-2 text-zinc-700">±0.3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Br</td>
                  <td className="px-4 py-2 text-zinc-700">1.0</td>
                  <td className="px-4 py-2 text-zinc-700">±0.3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">BHmax</td>
                  <td className="px-4 py-2 text-zinc-700">2.0</td>
                  <td className="px-4 py-2 text-zinc-700">±1.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXCITATION POWER SUPPLY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Excitation Power Supply
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Different electromagnets can generate different magnetic field ranges
            depending on application requirements.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Model
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Output Power
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Input Power
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Output Voltage
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Output Current
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">140</td>
                  <td className="px-4 py-2 text-zinc-700">2 kVA</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Single Phase 220V
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±100 V</td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±20 A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">200</td>
                  <td className="px-4 py-2 text-zinc-700">4 kVA</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Three Phase 380V
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±120 V</td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±40 A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">250</td>
                  <td className="px-4 py-2 text-zinc-700">8 kVA</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Three Phase 380V
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±150 V</td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±60 A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">300</td>
                  <td className="px-4 py-2 text-zinc-700">16 kVA</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Three Phase 380V
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±200 V</td>
                  <td className="px-4 py-2 text-zinc-700">0 – ±80 A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Stability: <strong>0.05%</strong>
            </li>
            <li>
              Protection: <strong>Over-current and over-voltage protection</strong>
            </li>
            <li>
              Operating conditions: <strong>0–40°C, 40–80% RH</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* GAUSSMETER SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Gaussmeter Specifications
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Model: <strong>DX-210H Gaussmeter</strong>
          </p>
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
                    Measurement Principle
                  </td>
                  <td className="px-4 py-2 text-zinc-700">Hall Effect</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Display</td>
                  <td className="px-4 py-2 text-zinc-700">4½ digit LED</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.5 / 1.0 / 1.5 / 3.0 T or 0.5 / 1.0 / 2.0 / 4.0 T
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resolution</td>
                  <td className="px-4 py-2 text-zinc-700">1 mT</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">0.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FLUXMETER SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Fluxmeter Specifications
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Model: <strong>DX-210B Fluxmeter</strong>
          </p>
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
                  <td className="px-4 py-2 text-zinc-700">4½ digit LED</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    2.5 / 5 / 10 / 20 mWb
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Resolution</td>
                  <td className="px-4 py-2 text-zinc-700">1 µWb</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">0.3%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Drift</td>
                  <td className="px-4 py-2 text-zinc-700">1 µWb/min</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Input Impedance</td>
                  <td className="px-4 py-2 text-zinc-700">10 kΩ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ELECTROMAGNET OPTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Electromagnet Options
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Different electromagnets can be selected depending on sample size and
            magnetic field requirements.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Model
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Pole Face Diameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Air Gap
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Magnetic Field
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Weight
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DXT-140</td>
                  <td className="px-4 py-2 text-zinc-700">140 mm</td>
                  <td className="px-4 py-2 text-zinc-700">60 mm</td>
                  <td className="px-4 py-2 text-zinc-700">1.8 T</td>
                  <td className="px-4 py-2 text-zinc-700">200 kg</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DXT-200</td>
                  <td className="px-4 py-2 text-zinc-700">200 mm</td>
                  <td className="px-4 py-2 text-zinc-700">80 mm</td>
                  <td className="px-4 py-2 text-zinc-700">2.8 T</td>
                  <td className="px-4 py-2 text-zinc-700">800 kg</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DXT-250</td>
                  <td className="px-4 py-2 text-zinc-700">250 mm</td>
                  <td className="px-4 py-2 text-zinc-700">80 mm</td>
                  <td className="px-4 py-2 text-zinc-700">3.0 T</td>
                  <td className="px-4 py-2 text-zinc-700">1400 kg</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DXT-300</td>
                  <td className="px-4 py-2 text-zinc-700">300 mm</td>
                  <td className="px-4 py-2 text-zinc-700">80 mm</td>
                  <td className="px-4 py-2 text-zinc-700">3.2 T</td>
                  <td className="px-4 py-2 text-zinc-700">3000 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DATA ACQUISITION SYSTEM */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Data Acquisition System
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Two types of data acquisition cards can be used:
          </p>

          {/* MP411 */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              MP411 Data Acquisition Card
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
                    <td className="px-4 py-2 text-zinc-700">Resolution</td>
                    <td className="px-4 py-2 text-zinc-700">12-bit</td>
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
                    <td className="px-4 py-2 text-zinc-700">System Accuracy</td>
                    <td className="px-4 py-2 text-zinc-700">±0.1% FSR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* USB2817 */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              USB2817 Data Acquisition Card
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
                    <td className="px-4 py-2 text-zinc-700">Resolution</td>
                    <td className="px-4 py-2 text-zinc-700">16-bit</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Sampling Speed</td>
                    <td className="px-4 py-2 text-zinc-700">
                      2000 – 250000 channels/sec
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Input Impedance</td>
                    <td className="px-4 py-2 text-zinc-700">10 MΩ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">System Accuracy</td>
                    <td className="px-4 py-2 text-zinc-700">0.01% FSR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARD SYSTEM CONFIGURATION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Standard System Configuration
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    No
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Component
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">1</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Excitation Power Supply
                  </td>
                  <td className="px-4 py-2 text-zinc-700">2 – 16 kVA</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">2</td>
                  <td className="px-4 py-2 text-zinc-700">Electromagnet</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Pole face diameter 140 – 300 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">3</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Gaussmeter &amp; Fluxmeter
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic field and flux measurement
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">4</td>
                  <td className="px-4 py-2 text-zinc-700">Fixed J Coil</td>
                  <td className="px-4 py-2 text-zinc-700">Measurement coil</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">5</td>
                  <td className="px-4 py-2 text-zinc-700">Standard Sample</td>
                  <td className="px-4 py-2 text-zinc-700">AlNiCo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">6</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Data Acquisition Card
                  </td>
                  <td className="px-4 py-2 text-zinc-700">12-bit or 16-bit</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">7</td>
                  <td className="px-4 py-2 text-zinc-700">Computer</td>
                  <td className="px-4 py-2 text-zinc-700">Industrial PC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">8</td>
                  <td className="px-4 py-2 text-zinc-700">Measuring Software</td>
                  <td className="px-4 py-2 text-zinc-700">DX-2012</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">9</td>
                  <td className="px-4 py-2 text-zinc-700">Printer</td>
                  <td className="px-4 py-2 text-zinc-700">HP Laser Printer</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">10</td>
                  <td className="px-4 py-2 text-zinc-700">User Manual</td>
                  <td className="px-4 py-2 text-zinc-700">PDF</td>
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
            <li>Cemented carbide material testing</li>
            <li>Hard metal quality control</li>
            <li>Magnetic material research laboratories</li>
            <li>Industrial materials testing</li>
            <li>Universities and research institutes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

