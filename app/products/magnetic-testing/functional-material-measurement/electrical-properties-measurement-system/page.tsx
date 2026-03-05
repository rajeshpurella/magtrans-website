import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Electrical Properties Measurement System | Functional Material Measurement | MAGTRANS Systems",
  description:
    "Electrical properties measurement system for ferroelectric, piezoelectric, pyroelectric, dielectric and insulation resistance testing under controlled temperature environments.",
};

export default function ElectricalPropertiesMeasurementSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Electrical Properties Measurement System
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            This Electrical Properties Measurement System is used for electrical testing of
            functional materials such as ferroelectricity, piezoelectricity, pyroelectricity,
            dielectricity and insulation resistance under high and low temperature environments.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Many adaptive interfaces have been developed with international electrical testing
            instruments in terms of communication protocols, database processing and software
            compatibility. This makes the instrument system easier to expand in the future in both
            software and hardware while saving time and cost during upgrades.
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
                src="/products/functional-material-measurement/electrical-properties-measurement-system/electrical-properties-measurement-system.jpg"
                alt="Electrical Properties Measurement System"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* System Configuration Diagram */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              System Configuration Diagram
            </h2>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/functional-material-measurement/electrical-properties-measurement-system/System configuration diagram.png"
                alt="System configuration diagram for the electrical properties measurement system"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* System Components */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-lg font-semibold text-zinc-900">System Components</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800 align-top">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Test System</th>
                    <th className="px-4 py-3 font-semibold">Equipment</th>
                    <th className="px-4 py-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Ferroelectric Analyzer</td>
                    <td className="px-4 py-3">Ferroelectric parameter analyzer</td>
                    <td className="px-4 py-3 space-y-2">
                      <p>
                        1. Ferroelectric parameter analyzer, high voltage amplifier, brake test
                        fixture, system controller, test fixture, displacement sensor and high and
                        low temperature environment combination can realize ferroelectric performance
                        testing of functional materials, piezoelectric performance testing,
                        pyroelectric performance testing, thermally stimulated polarization current
                        tester (TSDC) and other functional tests.
                      </p>
                      <p>
                        2. High and low temperature environment can be equipped with hot and cold
                        tables, high and low temperature test chambers or near-infrared high
                        temperature furnaces.
                      </p>
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Ferroelectric Analyzer</td>
                    <td className="px-4 py-3">High voltage amplifier</td>
                    <td className="px-4 py-3">
                      Used with the ferroelectric analyzer to provide high voltage during testing.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Ferroelectric Analyzer</td>
                    <td className="px-4 py-3">Various test fixtures</td>
                    <td className="px-4 py-3">
                      Different fixtures for various functional material testing conditions.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Ferroelectric Analyzer</td>
                    <td className="px-4 py-3">High and low temperature environment chamber</td>
                    <td className="px-4 py-3">
                      Used to provide high and low temperature testing environments.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Dielectric temperature spectrum test</td>
                    <td className="px-4 py-3">Impedance analyzer</td>
                    <td className="px-4 py-3">
                      Impedance analyzer with high and low temperature environment box, hot and cold
                      stage or near-infrared high temperature furnace can realize dielectric
                      temperature spectrum and spectrum measurement of materials.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Insulation resistance test</td>
                    <td className="px-4 py-3">High resistance meter</td>
                    <td className="px-4 py-3">
                      High resistance meter with high and low temperature environment box, hot and
                      cold stage or near infrared high temperature furnace can measure resistance,
                      resistivity and resistance spectrum of materials at high and low temperature.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Low resistance test</td>
                    <td className="px-4 py-3">Low resistance tester</td>
                    <td className="px-4 py-3">
                      Low resistance meter with high and low temperature environment box, hot and
                      cold stage or near infrared high temperature furnace can measure resistance,
                      resistivity and resistance spectrum of materials at high and low temperature.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Four-probe test</td>
                    <td className="px-4 py-3">Source meter</td>
                    <td className="px-4 py-3">
                      Source meter with high and low temperature environment box, hot and cold stage
                      or near infrared high temperature furnace can measure the conductive properties
                      of semiconductor materials at high and low temperature.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">
                      Seebeck coefficient / resistance measurement system
                    </td>
                    <td className="px-4 py-3">Infrared high temperature furnace</td>
                    <td className="px-4 py-3">
                      Combination of source meter, infrared high temperature furnace and system
                      controller can evaluate thermoelectric properties of metal or semiconductor
                      materials. Seebeck coefficient and resistance can be measured with one
                      instrument.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">System controller</td>
                    <td className="px-4 py-3">System controller</td>
                    <td className="px-4 py-3">
                      Temperature control of hot and cold stage or high and low temperature test box
                      and near infrared reflection furnace. Responsible for acquisition of voltage,
                      current, switching signals and displacement signals.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">High voltage polarization power supply</td>
                    <td className="px-4 py-3">Polarization power supply</td>
                    <td className="px-4 py-3">
                      Used for polarization, material breakdown and ceramic flash burning of
                      piezoelectric ceramics and piezoelectric film materials.
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">Mechanical in-situ loading device</td>
                    <td className="px-4 py-3">Loading device</td>
                    <td className="px-4 py-3">
                      Used for in-situ loading and parameter testing and analysis of piezoelectric
                      ceramic materials.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Extensible Test Device */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Extensible Test Device
            </h2>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/functional-material-measurement/electrical-properties-measurement-system/Extensible test device.png"
                alt="Extensible test device for electrical properties measurement system"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Test Module */}
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Test Module</h2>

            {/* 01 Ferroelectric Parameter Test Function */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                01 Ferroelectric Parameter Test Function
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Dynamic Hysteresis</li>
                <li>Static Hysteretic</li>
                <li>PUND</li>
                <li>Fatigue</li>
                <li>Retention</li>
                <li>Imprint</li>
                <li>Leakage current</li>
                <li>Thermo Measurement</li>
              </ul>
            </div>

            {/* 02 Insulation Resistance Test Function */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                02 Insulation Resistance Test Function
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                High precision voltage output and current measurement ensure accurate test results
                and are suitable for testing functional materials in high temperature environments.
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed">Example materials:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Ceramic materials</li>
                <li>Silicone rubber</li>
                <li>PCB</li>
                <li>Mica</li>
                <li>PTFE materials</li>
              </ul>
              <p className="text-sm text-zinc-700 leading-relaxed">
                It can also be used for high temperature insulation resistance testing of new
                materials in research laboratories.
              </p>
            </div>

            {/* 03 Piezoelectric Parameter Test Function */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                03 Piezoelectric Parameter Test Function
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                This module can perform static d33 and other parameter tests on piezoelectric
                ceramics. Dynamic piezoelectric coefficients can also be measured using displacement
                sensors through high voltage discharge methods.
              </p>
            </div>

            {/* 04 High Temperature Four-Probe Test Function */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                04 High Temperature Four-Probe Test Function
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Used for electrical conductivity testing of functional material conductors and
                semiconductor materials in high temperature environments. The dual-position digital
                four-probe tester follows national standards for single crystal silicon testing and
                also references the ASTM standard.
              </p>
            </div>

            {/* 05 Pyroelectric Test Function */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                05 Pyroelectric Test Function
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Used for temperature-dependent pyroelectric performance testing of thin film and
                bulk materials.
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed">Measured parameters:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Pyroelectric current</li>
                <li>Pyroelectric coefficient</li>
                <li>Residual polarization intensity</li>
              </ul>
              <p className="text-sm text-zinc-700 leading-relaxed">Temperature range:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Thin film materials: −196℃ to +600℃</li>
                <li>Bulk materials: RT to 200℃ / RT to 600℃ / RT to 800℃</li>
              </ul>
            </div>

            {/* 06 Dielectric Temperature Spectrum Test Function */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                06 Dielectric Temperature Spectrum Test Function
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Used to analyze dielectric properties of materials including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Impedance Z</li>
                <li>Reactance X</li>
                <li>Admittance Y</li>
                <li>Conductance G</li>
                <li>Susceptance B</li>
                <li>Inductance L</li>
                <li>Dielectric loss D</li>
                <li>Quality factor Q</li>
              </ul>
              <p className="text-sm text-zinc-700 leading-relaxed">
                It can also analyze curves of materials with temperature, frequency, time and bias
                voltage and can perform Curie temperature testing of piezoelectric ceramics.
              </p>
            </div>

            {/* 07 Seebeck Coefficient / Resistance Measurement System */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                07 Seebeck Coefficient / Resistance Measurement System
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Used for thermoelectric property analysis of semiconductor materials, ceramic
                materials and metal materials.
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed">Optional configurations:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Thin film measurement option</li>
                <li>Low temperature option (−100℃ to 200℃)</li>
                <li>High resistance option up to 10MΩ</li>
              </ul>
            </div>

            {/* 08 Electrocaloric Effect Test Function */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                08 Electrocaloric Effect Test Function
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Used for testing electrocaloric performance of materials over a wide temperature
                range.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Temperature range: −50℃ to 200℃</li>
                <li>Heat flow time range: 1s – 1000s</li>
                <li>Maximum voltage: 10kV</li>
              </ul>
              <p className="text-sm text-zinc-700 leading-relaxed">Supported waveforms:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>User-defined waveform</li>
                <li>Pulse waveform</li>
                <li>Triangle waveform</li>
                <li>Sine waveform</li>
                <li>Arbitrary waveform</li>
                <li>Predefined waveform</li>
              </ul>
            </div>

            {/* 09 Thermally Stimulated Polarization Current Test (TSDC) */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-900">
                09 Thermally Stimulated Polarization Current Test (TSDC)
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Used to study important physical mechanisms of functional materials such as
                molecular relaxation, phase transition and glass transition temperature. TSDC
                technology can also analyze relaxation time and activation energy of dielectric
                materials.
              </p>
            </div>
          </div>

          {/* Test Module Image */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Test Module Image</h2>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/functional-material-measurement/electrical-properties-measurement-system/Test module.png"
                alt="Test module overview for the electrical properties measurement system"
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

