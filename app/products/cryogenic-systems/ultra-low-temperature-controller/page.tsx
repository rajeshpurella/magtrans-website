import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ultra-low Temperature Controller DXTC-290 | Cryogenic Systems | MAGTRANS Systems",
  description:
    "DXTC-290 ultra-low temperature controller for diodes, thermocouples, platinum and NTC sensors. Multi-point testing, dual control loops, Ethernet/RS-485/USB, up to 10 sensors.",
};

export default function UltraLowTemperatureControllerPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Cryogenic Systems
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Ultra-low Temperature Controller DXTC-290
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            DXTC-290 ultra-low temperature controller supports diodes, thermocouples, platinum
            resistors and negative temperature coefficient resistance sensors. It can connect up
            to ten temperature sensors for multi-point testing.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            It provides extremely high resolution, accuracy and stability. Communication methods
            include Ethernet, RS-485 and USB. The sensor uses dual constant current source mode
            with balanced output and automatic gear shifting at ultra-low temperatures to reduce
            energy injection and ensure stable operation.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            DXTC-290 supports two control loops. Each loop input can associate with any of the ten
            sensors. It can expand to two 100W heaters or one 200W heater and supports closed-loop
            temperature control and self-tuning.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Product Image */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">Product Image</h2>
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/cryogenic-systems/ultra-low-temperature-controller/Ultra-low Temperature Controller.png"
                alt="Ultra-low Temperature Controller DXTC-290"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Overview */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              DXTC-290 ultra-low temperature controller supports diodes, thermocouples, platinum
              resistors and negative temperature coefficient resistance sensors. It can connect up
              to ten temperature sensors for multi-point testing.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              It provides extremely high resolution, accuracy and stability. Communication methods
              include Ethernet, RS-485 and USB. The sensor uses dual constant current source mode
              with balanced output and automatic gear shifting at ultra-low temperatures to reduce
              energy injection and ensure stable operation.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              DXTC-290 supports two control loops. Each loop input can associate with any of the
              ten sensors. It can expand to two 100W heaters or one 200W heater and supports
              closed-loop temperature control and self-tuning.
            </p>
          </div>

          {/* Measurement Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Measurement Parameters</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Measurement accuracy: up to 10mK</li>
              <li>
                Measurement range: down to 300mK (with appropriate NTC RTD sensor)
              </li>
              <li>Input channels: standard 2, expandable to 10</li>
              <li>
                Sensor compatibility: diode, Cernox, platinum resistance, thermocouple
              </li>
              <li>
                Output control: three heater outputs, ±10V analog output, alarm, relay
              </li>
              <li>Measurement ADC: 24-bit, 10 readings per second per channel</li>
              <li>Thermoelectric potential compensation supported</li>
              <li>Network operation: up to 247 monitors in one network</li>
            </ul>
          </div>

          {/* Control Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Control Parameters</h2>
            <div className="space-y-4 text-sm text-zinc-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-zinc-900">Control loop:</h3>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  <li>Loop 1: 100W heater (upgradeable to 200W)</li>
                  <li>Loop 2: 1W heater (upgradeable to 100W)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Signal filtering:</h3>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  <li>Filter window 1–10%FS</li>
                  <li>Filter points 2–64</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Control mode:</h3>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  <li>Automatic adjustment</li>
                  <li>Manual setting</li>
                  <li>Regional setting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">PID control:</h3>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  <li>Ratio 0–1000 (0.1 resolution)</li>
                  <li>Integral 0–1000 (0.1 resolution)</li>
                  <li>Differential 0–200 (0.1 resolution)</li>
                  <li>Manual 0–100% (0.01% resolution)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Regional function:</h3>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  <li>Continuous control from 300mK to 1505K</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Safety protection:</h3>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  <li>Setpoint limit</li>
                  <li>Curve temperature limit</li>
                  <li>Heating slope limit</li>
                  <li>Heater short circuit protection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Human-Computer Interaction */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Human-Computer Interaction
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>5-inch color capacitive touch screen</li>
              <li>Chinese / English interface</li>
              <li>Units: K, ℃, V, Ω</li>
              <li>Resolution: 0.0001K</li>
              <li>Interfaces: Ethernet, RS-485, USB</li>
              <li>RS-485 range: 1200m</li>
              <li>Ethernet: unlimited distance</li>
              <li>Protocol: ECT custom + MODBUS</li>
              <li>LabView driver supported</li>
              <li>Storage: up to 64 temperature curves</li>
            </ul>
          </div>

          {/* Sensor Type Table */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-lg font-semibold text-zinc-900">Sensor Type Table</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Sensor type</th>
                    <th className="px-4 py-3 font-semibold">Material</th>
                    <th className="px-4 py-3 font-semibold">DX model</th>
                    <th className="px-4 py-3 font-semibold">LS model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Diode</td>
                    <td className="px-4 py-3">Silicon</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">DT64</span>
                      <span className="block">1.4-325K</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">DT-670</span>
                      <span className="block">1.4-500K</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Diode</td>
                    <td className="px-4 py-3">Gallium aluminum arsenic</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">TG-120</span>
                      <span className="block">1.4-475K</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold" colSpan={4}>
                      Positive temperature coefficient Resistance
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Resistance</td>
                    <td className="px-4 py-3">Platinum</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">PT100</span>
                      <span className="block">20-500K</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">PT-100</span>
                      <span className="block">30-800K</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Resistance</td>
                    <td className="px-4 py-3">Rhodium-iron</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">RF50</span>
                      <span className="block">1.2-500K</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">RF-800-4</span>
                      <span className="block">4-400K</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold" colSpan={4}>
                      Negative temperature coefficient Resistance
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Resistance</td>
                    <td className="px-4 py-3">Germanium</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">GR-200A-1000</span>
                      <span className="block">2-100K</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Resistance</td>
                    <td className="px-4 py-3">Penetrating Ceramics</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">CC870</span>
                      <span className="block">4-500K</span>
                    </td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Resistance</td>
                    <td className="px-4 py-3">Glassy carbon</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">CGR-1-500</span>
                      <span className="block">3-400K</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Resistance</td>
                    <td className="px-4 py-3">Cernox</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">CX-1030</span>
                      <span className="block">2-325K</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Resistance</td>
                    <td className="px-4 py-3">Oxide nails</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="block">RX-202A</span>
                      <span className="block">3-300K</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="border-t-2 border-zinc-200 bg-zinc-50">
                  <tr>
                    <td className="px-4 py-3 text-zinc-600" colSpan={4}>
                      <span className="block">DX is the abbreviation of Dexinmag company</span>
                      <span className="block">LS is the abbreviation of Lakeshore Company</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Sensor Input Performance Table */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Sensor Input Performance Table
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Sensor type</th>
                    <th className="px-4 py-3 font-semibold">Silicon diode</th>
                    <th className="px-4 py-3 font-semibold">Platinum resistor</th>
                    <th className="px-4 py-3 font-semibold">Cernox</th>
                    <th className="px-4 py-3 font-semibold">Carburized ceramics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature coefficient</td>
                    <td className="px-4 py-3">Negative temperature</td>
                    <td className="px-4 py-3">Positive temperature</td>
                    <td className="px-4 py-3">Negative temperature</td>
                    <td className="px-4 py-3">Positive temperature</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Signal category</td>
                    <td className="px-4 py-3">Voltage V</td>
                    <td className="px-4 py-3">Ohms (Ω)</td>
                    <td className="px-4 py-3">Ohms (Ω)</td>
                    <td className="px-4 py-3">Ohms (Ω)</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Signal range</td>
                    <td className="px-4 py-3">0~2.5V</td>
                    <td className="px-4 py-3">0~500Ω</td>
                    <td className="px-4 py-3">0~7500Ω</td>
                    <td className="px-4 py-3">0~4000Ω</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Excitation current</td>
                    <td className="px-4 py-3">10μA±0.01%</td>
                    <td className="px-4 py-3">1mA±0.3%</td>
                    <td className="px-4 py-3">Automatic shift</td>
                    <td className="px-4 py-3">Automatic shift</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Display resolution</td>
                    <td className="px-4 py-3">0.1μV</td>
                    <td className="px-4 py-3">0.1mΩ</td>
                    <td className="px-4 py-3">0.1mΩ</td>
                    <td className="px-4 py-3">0.1mΩ</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature range</td>
                    <td className="px-4 py-3">1.4~475K</td>
                    <td className="px-4 py-3">20~800K</td>
                    <td className="px-4 py-3">2.0~400K</td>
                    <td className="px-4 py-3">4~500K</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold align-top">Standard curve</td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">LS: curve10</span>
                      <span className="block">DX: curve64</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">DIN43760</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">Requires calibration</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">Requires calibration</span>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold align-top">Measurement resolution</td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">20uV</span>
                      <span className="block">1mK@4.2K</span>
                      <span className="block">11mK@77K</span>
                      <span className="block">10mK@300K</span>
                      <span className="block">10mK@475K</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">2mΩ</span>
                      <span className="block">10.6mK@30K</span>
                      <span className="block">10mK@77K</span>
                      <span className="block">10mK@300K</span>
                      <span className="block">10mK@675K</span>
                      <span className="block">10mK@800K</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">50mΩ</span>
                      <span className="block">1mK@4.2K</span>
                      <span className="block">10mK@77K</span>
                      <span className="block">10mK@300K</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <span className="block">50mΩ</span>
                      <span className="block">1mK@4.2K</span>
                      <span className="block">33.3mK@77K</span>
                      <span className="block">500mK@300K</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-3 text-sm text-zinc-700 leading-relaxed">
              <p>
                <strong>Note 1:</strong> The driving principle of dual constant current sources for
                balanced output, that is, the two current output lines are centered to the ground,
                effectively suppressing common-mode interference and improving measurement accuracy.
              </p>
              <p>
                <strong>Note 2:</strong> Different excitation current ranges are used for different
                temperature zones of the sensor. The voltage on the sensor is monitored when the
                voltage exceeds 10 mV, it automatically downshifts to bring the voltage back to 10
                mV. This controls the injection energy and ensures stable and reliable operation at
                extremely low temperatures.
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Notes</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              For detailed specifications, calibration data and application support, please contact
              MAGTRANS.
            </p>
          </div>

          {/* PDF Download */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">Documentation</h2>
            <Link
              href="/products/cryogenic-systems/ultra-low-temperature-controller/Temperature+Controller.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Download Product Brochure (PDF)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
