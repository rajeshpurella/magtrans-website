import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Thermal Stimulation Current Tester | Functional Material Measurement | MAGTRANS Systems",
  description:
    "DX-TSC thermal stimulation current tester for TSDC measurements, dielectric relaxation analysis and high-voltage functional material testing.",
};

const GALLERY_IMAGES = [
  "Thermal Stimulation Current Tester.png",
  "Thermal Stimulation Current Tester1.png",
];

export default function ThermalStimulationCurrentTesterPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Thermal Stimulation Current Tester
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The DX-TSC Thermal Stimulation Current Tester is used to study dielectric properties of
            materials such as relaxation time, phase transition, glass transition temperature and
            activation energy, and is widely applied in research and testing of electrical
            materials, insulation materials, biomolecules and other functional materials.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            With a maximum test voltage of <strong>10 kV</strong>, the system provides powerful TSDC
            measurement capabilities and can be expanded to support high-resistance testing,
            breakdown testing, dielectric temperature spectrum and frequency spectrum measurements.
            It allows continuous, high-speed measurements under different conditions and modes,
            enabling a single DX-TSC tester to replace multiple instruments for functional material
            testing.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">
              Product Image Gallery
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {GALLERY_IMAGES.map((filename) => (
                <div
                  key={filename}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50"
                >
                  <Image
                    src={`/products/functional-material-measurement/thermal-stimulation-current-tester/${filename}`}
                    alt={filename.replace(".png", "")}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Overview */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The DX-TSC Thermal Stimulation Current Tester is used to study dielectric properties
              of materials such as relaxation time, phase transition, glass transition temperature
              and activation energy. It is widely used in the research and testing of electrical
              materials, insulation materials, biomolecules and other functional materials.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The DX-TSC tester provides powerful measurement capabilities with a maximum test
              voltage of <strong>10 kV</strong>. Additional testing functions such as high-resistance
              testing and breakdown testing can also be supported, allowing comprehensive evaluation
              of dielectric performance under high electric fields.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system can be expanded to perform dielectric temperature spectrum and frequency
              spectrum measurements, and supports continuous, high-speed measurements under
              different conditions and modes. With these capabilities, a single DX-TSC tester can
              replace multiple instruments used for functional material testing.
            </p>
          </div>

          {/* Principle */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Principle</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Thermally Stimulated Depolarization Current (TSDC) is the short-circuit current
              generated when dielectric materials establish or release polarization during heating.
              The DX-TSC tester records this current as a function of temperature to obtain the
              TSDC spectrum, revealing the dielectric behaviour of the material.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              In a typical test, the sample is clamped between two electrodes and heated to a
              specific temperature to excite carriers inside the material. A DC polarization voltage
              is then applied so that carriers drift toward electrodes or dipoles become oriented.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              After full polarization, the sample is cooled to a low temperature to freeze the
              polarization state. The sample is subsequently reheated at a constant heating rate
              while the depolarization current is recorded using a sensitive galvanometer. The
              resulting <strong>TSDC spectrum</strong> contains information about relaxation
              processes, phase transitions and activation energies within the dielectric material.
            </p>
          </div>

          {/* Product Parameters */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Equipment model</td>
                    <td className="px-4 py-3">DX-TSC</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature range</td>
                    <td className="px-4 py-3">−185 ~ 600 °C</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature control accuracy</td>
                    <td className="px-4 py-3">±0.25 °C</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Heating slope</td>
                    <td className="px-4 py-3">10 °C/min (adjustable)</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Maximum test voltage</td>
                    <td className="px-4 py-3">±10 kV</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Heating method</td>
                    <td className="px-4 py-3">DC electrode heating</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cooling method</td>
                    <td className="px-4 py-3">Water cooling</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Input voltage</td>
                    <td className="px-4 py-3">AC 220 V</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Sample size</td>
                    <td className="px-4 py-3">φ &lt; 25 mm, d &lt; 4 mm</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Electrode material</td>
                    <td className="px-4 py-3">Brass or silver</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Fixture auxiliary material</td>
                    <td className="px-4 py-3">99 alumina ceramic</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Low temperature refrigeration</td>
                    <td className="px-4 py-3">Liquid nitrogen</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Test function</td>
                    <td className="px-4 py-3">TSDC</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Data transmission</td>
                    <td className="px-4 py-3">RS-232</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Equipment size</td>
                    <td className="px-4 py-3">180 mm × 210 mm × 50 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Advantages */}
          <div className="space-y-8 max-w-5xl">
            {/* 1. Network harmonics */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                1. Eliminate the influence of network harmonics on acquisition accuracy
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                Power grid harmonics are high-order harmonic components that exist in electrical
                systems due to nonlinear loads and can interfere with precision instruments such as
                communication systems, computer systems and measurement equipment. Most heating
                devices use AC heating wires powered by 50 Hz sinusoidal signals, which introduce
                additional harmonic interference.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                Dexinmag instruments adopt <strong>DC heating technology</strong> combined with
                dedicated filtering methods to greatly reduce harmonic interference and improve
                measurement accuracy in TSDC and related dielectric tests.
              </p>
            </div>

            {/* 2. Measurement wire impedance */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                2. Eliminate the influence of measurement wire impedance and shielding at high
                temperatures
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                Transmission lines have inherent impedance characteristics, and impedance mismatches
                can introduce measurement errors when transmitting weak signals. Measurement
                accuracy is improved by using impedance-matched measurement cables, reducing cable
                length to minimise signal distortion and employing insulating structures such as
                ceramics and refractory materials.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                The DX-TSC system applies a <strong>three-electrode measurement method</strong> to
                improve shielding performance and reduce the impact of lead impedance and stray
                capacitance on the measured depolarization current.
              </p>
            </div>

            {/* 3. Sample temperature and electrode design */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                3. Optimized sample temperature measurement and electrode design
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                Based on the parallel-plate electrode principle, the measurement electrode is
                designed to be as small as possible to reduce stray capacitance and spatial
                influence. A conductive layer is typically sputtered on the sample surface to form a
                stable electrode interface.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                Because different materials have different thermal expansion coefficients,
                thermocouple readings near the sample may differ slightly from the actual material
                temperature. Using a reference sample allows the system to obtain a more accurate
                true temperature and better correlate TSDC peaks with physical transitions.
              </p>
            </div>

            {/* 4. Operating software */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                4. Powerful operating software
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                The test system software is developed using the <strong>LabVIEW platform</strong>
                and supports multiple testing functions for functional materials. Features include a
                multilingual interface (Chinese / English), real-time monitoring of test status,
                visual legend and status management, user permission management and an equipment
                fault alarm system.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                The software provides custom test report generation with export of reports in{" "}
                <strong>Excel and PDF formats</strong>, and supports automatic saving of data during
                unexpected power interruptions with restoration after system restart. Compatible
                operating systems include Windows XP, Windows 7 and Windows 10.
              </p>
            </div>

            {/* 5. Supported hardware */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                5. Supported hardware
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                The DX-TSC system can be integrated with additional hardware to extend its testing
                capabilities, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>External 6517B or other high-voltage DC power supply</li>
                <li>External high-voltage amplifier (±100 V to ±10 kV)</li>
                <li>Low-noise test fixtures</li>
                <li>Temperature controller and high-low temperature chamber</li>
              </ul>
            </div>

            {/* 6. Additional test functions */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                6. Additional test functions
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Pyroelectric testing</li>
                <li>Leakage current testing</li>
                <li>User-defined excitation waveform testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

