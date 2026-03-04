import type { Metadata } from "next";
import Image from "next/image";
import FerroelectricSlider from "../FerroelectricSlider";

export const metadata: Metadata = {
  title: "Ferroelectric Test System | Functional Material Measurement | MAGTRANS Systems",
  description:
    "Ferroelectric material testing system for hysteresis loop, fatigue, imprint, C-V, leakage current and dielectric measurements with wide frequency and voltage ranges.",
};

export default function FerroelectricTestSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Ferroelectric Test System
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            High-performance ferroelectric material testing platform for
            hysteresis loop, fatigue, imprint, C–V, leakage current and
            dielectric measurements with wide frequency and voltage coverage.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Image Slider */}
          <FerroelectricSlider />

          {/* Product Overview */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Product Overview
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The ferroelectric material testing system is mainly used for
              ferroelectric material hysteresis loop testing, fatigue testing,
              imprint testing, C-V curve testing, leakage current curve
              measurement, and dielectric material capacitance measurement.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Many engineers of Dexinmag Company have developed the
              Ferroelectric Analyzer for many years based on drawing lessons
              from the most advanced test methods in the world. It has more
              powerful test functions, the maximum test frequency of the
              equipment can reach 1MHz, and a high-speed sampling speed of 40M.
              Some technical indicators exceed imported instruments, which is a
              real domestic independent innovation.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              At the same time, the measurement functions of dielectric
              spectrum, electric card test, TSDC, resistance and other
              measurement functions have also been added. It can perform
              continuous and high-speed measurements under different measurement
              conditions and measurement modes, and only one Dexinmag
              ferroelectric instrument can replace the measurement functions of
              many instruments for functional material testing.
            </p>
          </div>

          {/* Product Models */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-zinc-900">
              Product Models
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col items-center text-center">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src="/products/functional-material-measurement/dx-fts2.png"
                    alt="DX-FTS2 standard ferroelectric test system"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  DX-FTS2 – Standard Type
                </h3>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col items-center text-center">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src="/products/functional-material-measurement/dx-fts3.png"
                    alt="DX-FTS3 extended ferroelectric test system"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  DX-FTS3 – Extended Type
                </h3>
              </div>
            </div>
          </div>

          {/* Measuring Functions */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Measuring Functions
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>DHM – Dynamic Hysteresis Loop Measurement</li>
              <li>CVM – CV Measurement</li>
              <li>LM – Leakage Current Measurement</li>
              <li>FM – Fatigue Measurement</li>
              <li>PM – Pulse Measurement</li>
              <li>PYM – Pyroelectric Measurement</li>
              <li>DTS – Dielectric Thermometry Measurement</li>
              <li>RT – Resistance Measurement</li>
              <li>PZM – Piezoelectric Measurement</li>
              <li>CHM – Static Hysteresis Loop Measurement</li>
              <li>IM – Blot Measurement</li>
              <li>RM – Retention Measurement</li>
              <li>BDM – Breakdown Test</li>
              <li>TSDC – Thermally Stimulated Current Measurement</li>
              <li>ECM – Electric Card Test</li>
              <li>POM – Oil Bath Polarization</li>
            </ul>
          </div>

          {/* Technical Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Technical Parameters
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">
                      Measurement Parameters
                    </th>
                    <th className="px-4 py-3 font-semibold">DEXINMAG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Built-in voltage</td>
                    <td className="px-4 py-3">
                      ±10V (external high-voltage amplifier can be connected)
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">External amplifier support</td>
                    <td className="px-4 py-3">
                      ±20V, ±100V, ±200V, ±500V, 4kV, 10kV, 20kV
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">ADC bits</td>
                    <td className="px-4 py-3">18</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Minimum Charge Resolution</td>
                    <td className="px-4 py-3">&lt;10fC</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Minimum Area Resolution</td>
                    <td className="px-4 py-3">&lt;1μ2</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Maximum Charge Resolution</td>
                    <td className="px-4 py-3">276μC</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Maximum Area Resolution</td>
                    <td className="px-4 py-3">2.76cm²</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Maximum Charge Resolution</td>
                    <td className="px-4 py-3">27.6mC</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Maximum Area Resolution</td>
                    <td className="px-4 py-3">&gt;100cm²</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">
                      Maximum hysteresis loop test frequency
                    </td>
                    <td className="px-4 py-3">
                      500KHz @10V, 20V, 100V, 200V, 400V
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Minimum Test Frequency</td>
                    <td className="px-4 py-3">0.03Hz</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Minimum pulse width</td>
                    <td className="px-4 py-3">0.5us</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Minimum pulse rise time</td>
                    <td className="px-4 py-3">400ns</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Maximum pulse width</td>
                    <td className="px-4 py-3">1s</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">
                      Maximum delay time between pulses
                    </td>
                    <td className="px-4 py-3">40ks</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Internal Clock</td>
                    <td className="px-4 py-3">25ns</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Minimum Leakage Current</td>
                    <td className="px-4 py-3">&lt;1pA</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">
                      Maximum small signal upper limit frequency
                    </td>
                    <td className="px-4 py-3">500KHz</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">
                      Minimum small signal upper limit frequency
                    </td>
                    <td className="px-4 py-3">1MHz</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Output Rise Time Control</td>
                    <td className="px-4 py-3">10^3 scaling</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Input Capacitance</td>
                    <td className="px-4 py-3">~60fF</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Impedance Input</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Description */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Technical Description
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Dexinmag FTS series ferroelectric test system is one of the most
              advanced ferroelectric testing systems available, with a wide
              frequency response range and wide voltage range.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Under the built-in voltage of ±10V the hysteresis loop test
              frequency can reach up to 500KHz, exceeding the performance of
              many imported instruments. External voltage can be extended to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>4kV</li>
              <li>10kV</li>
              <li>20kV</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              The Dexinmag host supports:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Hysteresis loop testing</li>
              <li>Pulse testing</li>
              <li>Leakage current measurement</li>
              <li>IV testing</li>
              <li>CV testing</li>
              <li>Breakdown testing</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              Optional functions include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Piezoelectric testing</li>
              <li>Pyroelectric testing</li>
              <li>TSDC testing</li>
              <li>Electric card testing</li>
              <li>Impedance analysis</li>
              <li>Resistance measurement</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system includes a built-in industrial computer with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Intel i5 CPU or higher</li>
              <li>8GB RAM or greater</li>
              <li>250GB SSD or greater</li>
              <li>Network interface</li>
              <li>USB interface</li>
              <li>VGA output</li>
              <li>Windows operating system</li>
              <li>Ferroelectric analysis software</li>
            </ul>
          </div>

          {/* Calibration and Extension */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Calibration and Extension
            </h2>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900">
                Calibration Module
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                Each system includes high-precision resistance and capacitance
                calibration modules. These modules allow self-calibration of the
                instrument to ensure high measurement accuracy.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900">
                Device Expansion Options
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>High and low temperature stages</li>
                <li>High temperature testing equipment</li>
                <li>Probe stations</li>
                <li>High voltage amplifiers</li>
                <li>High resistance meters</li>
                <li>Impedance analyzers</li>
                <li>Laser interferometers</li>
                <li>Temperature controllers</li>
                <li>Digital source meters</li>
              </ul>
            </div>
          </div>

          {/* Expandable Parts */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-zinc-900">
              Expandable Parts
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/block-test-fixture.png"
                    alt="Block test fixture"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Block Test Fixture
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  For thick film, bulk ferroelectric and breakdown testing.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/thin-film-four-probe-stage.png"
                    alt="Thin film four-probe probe station"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Thin Film Four-Probe Probe Station (Room temperature to
                  200°C)
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Used for thick film ferroelectric, piezoelectric and
                  pyroelectric testing.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/thin-film-wide-temp-stage.png"
                    alt="Thin film wide temperature zone probe stage"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Thin Film Wide Temperature Zone Probe Stage (-196°C to
                  +600°C)
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Used for ferroelectric and pyroelectric testing under variable
                  temperature.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src="/products/functional-material-measurement/thin-film-probe-station.png"
                    alt="Thin film probe station"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Thin Film Probe Station (Room Temperature)
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Used for ferroelectric property testing of thin films and
                  thick films.
                </p>
              </div>
            </div>
          </div>

          {/* High Voltage Amplifier Options */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-zinc-900">
              High Voltage Amplifier Options
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-32 mb-2">
                  <Image
                    src="/products/functional-material-measurement/dxam-10kv.png"
                    alt="DXAM-10KV high voltage amplifier"
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  DXAM-10KV
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Voltage Range: ±10kV
                  <br />
                  Current Range: 0–20mA
                  <br />
                  Maximum Frequency: 5KHz
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-32 mb-2">
                  <Image
                    src="/products/functional-material-measurement/trek-609e-6.png"
                    alt="Trek 609E-6 high voltage amplifier"
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Trek 609E-6
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Voltage Range: ±4kV
                  <br />
                  Current Range: 0–20mA
                  <br />
                  Maximum Frequency: 6000Hz
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="relative w-full h-32 mb-2">
                  <Image
                    src="/products/functional-material-measurement/trek-610e.png"
                    alt="Trek 610E high voltage amplifier"
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  Trek 610E
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Voltage Range: ±10kV
                  <br />
                  Current Range: 0–2mA
                  <br />
                  Maximum Frequency: 600Hz
                </p>
              </div>
            </div>
          </div>

          {/* Laser Interferometer Option */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Laser Interferometer Option
            </h2>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
                <Image
                  src="/products/functional-material-measurement/sios-laser-interferometer.png"
                  alt="SIOS laser interferometer single-channel optical probe"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="space-y-2 text-sm text-zinc-700 leading-relaxed">
                <h3 className="text-base font-semibold text-zinc-900">
                  SIOS Laser Interferometer Single-Channel Optical Probe
                </h3>
                <p>
                  Minimum Resolution: <strong>0.3nm</strong>
                  <br />
                  Deformation Test Range:{" "}
                  <strong>100nm – 2579.50μm</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Interface */}
          <div className="space-y-6 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Interface</h2>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/functional-material-measurement/fts-interface.png"
                alt="Ferroelectric test system interface"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white mt-4">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">
                      USB Host Port
                    </td>
                    <td className="px-4 py-3">
                      Type-A USB port for mouse, keyboard, printer, flash drive
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">USB Interface</td>
                    <td className="px-4 py-3">
                      Type-B USBTMC compatible port for external PC connection
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">LAN</td>
                    <td className="px-4 py-3">
                      10/100/1000 Base-T Ethernet port
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Video Output</td>
                    <td className="px-4 py-3">15-pin VGA connector</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Working Environment */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Working Environment
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature</td>
                    <td className="px-4 py-3">
                      Standard laboratory conditions
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Humidity</td>
                    <td className="px-4 py-3">
                      20% – 80% (non-condensing)
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Altitude</td>
                    <td className="px-4 py-3">0 – 2000 m</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Vibration</td>
                    <td className="px-4 py-3">
                      0.21Grms max (5Hz – 500Hz)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Non-working Environment */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Non-working Environment
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature</td>
                    <td className="px-4 py-3">-10°C to +60°C</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Humidity</td>
                    <td className="px-4 py-3">
                      20% – 90% (non-condensing)
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Altitude</td>
                    <td className="px-4 py-3">0 – 4572 m</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Vibration</td>
                    <td className="px-4 py-3">
                      2.09Grms max (5Hz – 500Hz)
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

