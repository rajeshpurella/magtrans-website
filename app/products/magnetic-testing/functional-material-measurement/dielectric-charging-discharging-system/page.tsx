import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Dielectric Charging and Discharging System | Functional Material Measurement | MAGTRANS Systems",
  description:
    "Dexinmag dielectric charge and discharge test system for studying the high-voltage discharge performance of dielectric energy storage materials.",
};

export default function DielectricChargingDischargingSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Dielectric Charging and Discharging System
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Dexinmag dielectric charge and discharge test system is mainly used to study the
            high-voltage discharge performance of dielectric energy storage materials.
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
                src="/products/functional-material-measurement/dielectric-charging-discharging-system/dielectric-system-main.png"
                alt="Dielectric charging and discharging test system"
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
              Dexinmag dielectric charge and discharge test system is mainly used to study the
              high-voltage discharge performance of dielectric energy storage materials. It enables
              researchers to characterise how quickly and efficiently dielectric films and ceramic
              capacitors release stored energy under different load and temperature conditions.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                <strong>Strong scalability</strong> – can be connected to an external high-voltage
                amplifier or high-voltage DC power supply.
              </li>
              <li>
                <strong>High discharge current</strong> – discharge current can be detected by a
                current probe, up to 100A.
              </li>
              <li>
                <strong>Applicable to various sample tests</strong> – customized sample loading
                platform suitable for ceramic and thin-film sample testing.
              </li>
              <li>
                <strong>Data acquisition</strong> – collect data through an oscilloscope and
                directly calculate energy storage density.
              </li>
              <li>
                <strong>Signal source capability</strong> – can be used as a signal source to
                generate arbitrary waveforms.
              </li>
              <li>
                <strong>Variable temperature testing</strong> – supports temperature testing from RT
                to 250℃.
              </li>
              <li>
                <strong>Polarized material testing</strong> – suitable for polarized materials.
              </li>
              <li>
                <strong>Small parasitic capacitance and short switching time</strong> – uses a
                special high-voltage switch with single-pole double-throw structure, withstanding up
                to 10kV and providing very small parasitic capacitance.
              </li>
              <li>
                <strong>Two test modes</strong> – under-damping mode with discharge circuit
                short-circuited (no load resistance) and over-damping mode using precision
                non-inductive resistor as discharge load.
              </li>
              <li>Fatigue testing supported for repetitive charge/discharge cycling.</li>
              <li>
                <strong>Voltage and current capability</strong> – voltage up to 10kV and current up
                to 5mA (with optional high-voltage source modules).
              </li>
            </ul>
          </div>

          {/* Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Parameters</h2>
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
                    <td className="px-4 py-3">Equipment Model</td>
                    <td className="px-4 py-3">DX-DSC-10KV</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Current Probe Bandwidth</td>
                    <td className="px-4 py-3">120MHz</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Peak Current</td>
                    <td className="px-4 py-3">0–100A, 150A</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Current Acquisition Accuracy</td>
                    <td className="px-4 py-3">1mA</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">High Voltage Source Module</td>
                    <td className="px-4 py-3">
                      3kV, 5kV, 10kV, 15kV optional (0–5mA)
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Switch Application</td>
                    <td className="px-4 py-3">1 million cycles, withstand voltage 15kV</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Temperature Control Range</td>
                    <td className="px-4 py-3">0–200℃</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Temperature Stability</td>
                    <td className="px-4 py-3">0.1℃</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Test Samples</td>
                    <td className="px-4 py-3">Thin film, thick film, ceramic, glass</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Note</td>
                    <td className="px-4 py-3">
                      Can be used with polarization equipment to test piezoelectric and dielectric
                      materials.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Test Circuit */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Test Circuit</h2>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
                <Image
                  src="/products/functional-material-measurement/dielectric-charging-discharging-system/test-circuit.png"
                  alt="Dielectric charging and discharging test circuit diagram"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="space-y-3 text-sm text-zinc-700 leading-relaxed">
                <p>
                  In this circuit, the dielectric film is first charged to a specified voltage. The
                  energy stored in the capacitor film is then discharged into a resistor load by
                  closing the high-speed MOS high-voltage switch.
                </p>
                <p>
                  During discharge, the voltage change across the sample can be recorded by the
                  detector. The discharge speed of dielectric materials depends on the resistance
                  value of the load resistor.
                </p>
                <p>
                  To achieve different discharge conditions, resistors with different resistance
                  values are installed in the test system. Users can select a single resistor or a
                  combination of resistors to obtain the required resistance.
                </p>
                <p>
                  A high-voltage MOSFET switch is used to release the stored energy. The switch
                  determines the maximum discharge speed and maximum charging voltage of the
                  circuit.
                </p>
              </div>
            </div>
          </div>

          {/* System Structure */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">System Structure</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              This test system consists of:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Discharge acquisition circuit</li>
              <li>High-voltage amplifier or high-voltage DC power supply</li>
              <li>Control computer</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              During testing, the user selects a suitable resistor to determine the discharge
              speed, and the voltage on the test sample is automatically recorded by the computer.
            </p>
          </div>

          {/* Discharge Performance Example */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Discharge Performance Example
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              As an example, the discharge behavior of a P(VDF-TrFE-CFE) terpolymer (63/37/7.5) film
              capacitor is analysed using the discharge circuit. Time-dependent voltage data is used
              to calculate the discharge energy density.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              For a 1MΩ load resistor, the discharge energy density over time can be measured and
              compared with the energy density derived from the unipolar P–E loop. In this example,
              the film capacitance is approximately 1nF at 1kHz.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Because the polarization response of the terpolymer is nonlinear and
              frequency-dependent, the discharge behavior cannot be described by a simple RC
              constant. If RL &gt; ESR, the discharge energy density can be expressed as:
            </p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Uc(t) = UD (1 − e^(−2t/τ)), where UD represents the discharge energy density.
            </p>
          </div>

          {/* Experimental Results */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Experimental Results</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Using a 1nF capacitor and 1MΩ load resistor:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>70% energy release time ≈ 0.6 ms (theoretical), measured ≈ 0.66 ms.</li>
              <li>50% energy release time ≈ 0.35 ms (theoretical), measured ≈ 0.3 ms.</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              The differences arise due to the nonlinear dielectric constant at high electric
              fields (&gt;100 MV/m), frequency-dependent dielectric response and lower ESR at high
              frequency or shorter discharge times.
            </p>
          </div>

          {/* Discharge Characteristics */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Discharge Characteristics
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              For the same terpolymer film capacitor, discharge energy density can also be measured
              using different load resistances, such as RL = 100kΩ and RL = 1kΩ.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Reducing the load resistance shortens the discharge time, but the reduction is not
              linearly proportional due to nonlinear dielectric behavior and the complex frequency
              response of the material.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

