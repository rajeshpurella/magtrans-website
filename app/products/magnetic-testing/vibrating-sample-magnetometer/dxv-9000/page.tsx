import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXV-9000 Magnetic Moment Measurement Equipment | VSM | MAGTRANS Systems",
  description:
    "DXV-9000 high-performance VSM for advanced magnetic materials research. Magnetic hysteresis, M-T curves, FORC analysis. Room, high and low temperature options.",
};

export default function DXV9000VSMPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXV-9000 Magnetic Moment Measurement Equipment (VSM System)
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Vibrating Sample Magnetometer (VSM)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Premium VSM platform for advanced magnetic moment and hysteresis
            studies across a wide field and temperature range.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/vsm/dxv-9000-vsm.png"
              alt="DXV-9000 Magnetic Moment Measurement Equipment"
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
            DXV-9000 Magnetic Moment Measurement Equipment is a high-performance
            vibrating sample magnetometer designed for advanced magnetic materials
            research and precision magnetic moment measurement.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system measures magnetic hysteresis loops (M-H curves),
            magnetisation behaviour and temperature-dependent magnetic properties
            of materials. It enables accurate determination of parameters such as
            coercivity, remanent magnetisation, saturation magnetisation and
            magnetic moment.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The instrument supports research on diamagnetic, paramagnetic,
            ferromagnetic, ferrimagnetic and antiferromagnetic materials including
            bulk samples, powders, thin films, liquids and single crystals.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              High-precision magnetic moment measurement with noise level down to
              10⁻⁸ emu
            </li>
            <li>High-speed magnetic field scanning up to 5000 Oe/s</li>
            <li>
              Continuous 360° rotating vibrating head for anisotropic magnetic
              studies
            </li>
            <li>Automatic sample centering system for improved measurement accuracy</li>
            <li>
              Fast data acquisition (10 ms interval) for capturing rapid magnetic
              changes
            </li>
            <li>Laser displacement sensor for vibration stability monitoring</li>
            <li>
              Compatible with room temperature, high-temperature and low-temperature
              measurements
            </li>
            <li>Advanced measurement software with automated analysis</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT CAPABILITIES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Capabilities
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DXV-9000 system can measure:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic hysteresis loops (M-H curves)</li>
            <li>Magnetisation vs temperature curves (M-T curves)</li>
            <li>Curie temperature measurement</li>
            <li>
              Superconducting transition measurement (with low-temperature option)
            </li>
            <li>First Order Reversal Curve (FORC) analysis</li>
            <li>Magnetic energy product analysis</li>
          </ul>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Technical Specifications
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
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Moment Measurement Range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    3.5 × 10⁻⁸ to 10³ emu
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Moment Noise (Room Temperature)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">150 μemu @0.1s/pt</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Moment Noise</td>
                  <td className="px-4 py-2 text-zinc-700">80 μemu @1s/pt</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Moment Noise</td>
                  <td className="px-4 py-2 text-zinc-700">35 μemu @10s/pt</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Measurement Accuracy
                  </td>
                  <td className="px-4 py-2 text-zinc-700">±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±0.05% of full scale per day
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">±0.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Maximum Sample Mass</td>
                  <td className="px-4 py-2 text-zinc-700">10 g</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Data Acquisition Interval
                  </td>
                  <td className="px-4 py-2 text-zinc-700">10 ms – 10 s</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Vibration Amplitude</td>
                  <td className="px-4 py-2 text-zinc-700">2 – 8 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Vibration Frequency</td>
                  <td className="px-4 py-2 text-zinc-700">55 – 85 Hz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MAGNETIC FIELD CHARACTERISTICS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Field Characteristics
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
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Resolution
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 mOe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Accuracy
                  </td>
                  <td className="px-4 py-2 text-zinc-700">±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Change Rate
                  </td>
                  <td className="px-4 py-2 text-zinc-700">up to 5000 Oe/s</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sample Lifting Range</td>
                  <td className="px-4 py-2 text-zinc-700">0 – 300 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Lifting Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">0.1 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Rotating Range</td>
                  <td className="px-4 py-2 text-zinc-700">Continuous</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Rotation Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">0.01°</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SYSTEM CONFIGURATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Configurations
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Typical system configuration includes:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Variable gap electromagnet</li>
            <li>Bipolar electromagnet power supply</li>
            <li>Lock-in amplifier for signal detection</li>
            <li>Vibrating head assembly</li>
            <li>Sample rod and sample holders</li>
            <li>Calibration sample</li>
            <li>Control cabinet and measurement electronics</li>
            <li>Computer with measurement software</li>
            <li>Chiller for cooling electromagnet</li>
            <li>
              Optional high-temperature and low-temperature systems
            </li>
          </ul>
        </div>
      </section>

      {/* TEMPERATURE OPTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Temperature Options
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Option
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Range
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Stability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Low Temperature</td>
                  <td className="px-4 py-2 text-zinc-700">80K – 370K</td>
                  <td className="px-4 py-2 text-zinc-700">±0.1K</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">High Temperature</td>
                  <td className="px-4 py-2 text-zinc-700">350K – 1050K</td>
                  <td className="px-4 py-2 text-zinc-700">±1K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base text-zinc-700 leading-relaxed">
            Sample environments include flowing nitrogen for low temperature and
            argon atmosphere for high temperature experiments.
          </p>
        </div>
      </section>

      {/* SAMPLE TYPES SUPPORTED */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Sample Types Supported
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Bulk magnetic materials</li>
            <li>Powders and nanoparticles</li>
            <li>Thin films</li>
            <li>Liquids</li>
            <li>Single crystals</li>
            <li>Magnetic recording materials</li>
            <li>GMR and spin-valve materials</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic materials research and development</li>
            <li>Nanomaterials and thin film magnetism studies</li>
            <li>Superconducting materials research</li>
            <li>Magnetic storage materials development</li>
            <li>Academic and industrial research laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
