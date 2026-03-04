import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXV-8000 Vibrating Sample Magnetometry System | VSM | MAGTRANS Systems",
  description:
    "DXV-8000 high-performance VSM for thin films, powders, liquids and bulk samples. High sensitivity, 360° rotation, FORC, optional temperature systems. LabVIEW software.",
};

export default function DXV8000VSMPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXV-8000 Vibrating Sample Magnetometry (VSM) System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Vibrating Sample Magnetometer (VSM)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            High-performance VSM system designed for demanding magnetic materials
            R&amp;D and production support.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/vsm/dxv-8000-vsm.png"
              alt="DXV-8000 Vibrating Sample Magnetometry System"
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
            DXV-8000 Vibrating Sample Magnetometer (VSM) is designed for
            high-precision magnetic measurements of advanced materials. The system
            supports multiple sample rod configurations allowing measurement of thin
            films, powders, liquids and bulk samples.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The instrument provides excellent sensitivity for materials with very
            low magnetic moments and is particularly suitable for multilayer films
            and advanced magnetic materials research.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can measure magnetisation curves, hysteresis loops and
            temperature-dependent magnetic behaviour of materials.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>High sensitivity magnetic moment measurement</li>
            <li>Supports thin films, powders, liquids and bulk samples</li>
            <li>
              Continuous <strong>360° motorized sample rotation</strong>
            </li>
            <li>
              High-precision{" "}
              <strong>laser displacement sensor (1 μm resolution)</strong>
            </li>
            <li>Automatic sample centering for improved accuracy</li>
            <li>
              Fast data acquisition with <strong>10 ms sampling interval</strong>
            </li>
            <li>First-order reversal curve (FORC) measurement capability</li>
            <li>
              Optional high-temperature and low-temperature measurement systems
            </li>
            <li>
              Software developed using <strong>LabVIEW</strong> for flexible
              control and analysis
            </li>
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
            DXV-8000 VSM enables measurement of:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetisation curves (M-H curves)</li>
            <li>Hysteresis loops</li>
            <li>Magnetisation vs temperature (M-T curves)</li>
            <li>Magnetic behaviour over time and temperature</li>
            <li>Curie temperature measurement</li>
            <li>
              Superconducting transition measurement (with low-temperature option)
            </li>
            <li>First-Order Reversal Curve (FORC) analysis</li>
          </ul>
        </div>
      </section>

      {/* MAGNETIC MOMENT SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Moment Specifications
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
                    Magnetic Moment Range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    3.4 × 10⁻⁸ emu – 10³ emu
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sensitivity</td>
                  <td className="px-4 py-2 text-zinc-700">10⁻⁷ emu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Stability</td>
                  <td className="px-4 py-2 text-zinc-700">±0.05% / day</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">±0.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Noise (10s/pt RMS)</td>
                  <td className="px-4 py-2 text-zinc-700">30 nemu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sample Mass</td>
                  <td className="px-4 py-2 text-zinc-700">0 – 10 g</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Vibration Amplitude</td>
                  <td className="px-4 py-2 text-zinc-700">5 – 10 mm</td>
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

      {/* MAGNETIC FIELD OPTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Field Options
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Magnet Model
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Room Temp Field
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Low Temp Field
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    High Temp Field
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DXWDS-130</td>
                  <td className="px-4 py-2 text-zinc-700">2.8 Tesla</td>
                  <td className="px-4 py-2 text-zinc-700">2.1 Tesla</td>
                  <td className="px-4 py-2 text-zinc-700">1.7 Tesla</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DXWDS-225</td>
                  <td className="px-4 py-2 text-zinc-700">3.2 Tesla</td>
                  <td className="px-4 py-2 text-zinc-700">2.4 Tesla</td>
                  <td className="px-4 py-2 text-zinc-700">2.4 Tesla</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm font-semibold text-zinc-900">
            Magnetic field characteristics:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic field accuracy: <strong>±1%</strong></li>
            <li>Magnetic field resolution: <strong>1 mOe</strong></li>
            <li>Magnetic field stability: <strong>100 mOe</strong></li>
            <li>Maximum field change rate: <strong>10,000 Oe/s</strong></li>
          </ul>
        </div>
      </section>

      {/* TEMPERATURE MEASUREMENT OPTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Temperature Measurement Options
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Temperature System
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Range
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Accuracy
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Resolution
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Cryostat</td>
                  <td className="px-4 py-2 text-zinc-700">Down to 4.2K</td>
                  <td className="px-4 py-2 text-zinc-700">0.1K</td>
                  <td className="px-4 py-2 text-zinc-700">0.001K</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    High Temperature Furnace
                  </td>
                  <td className="px-4 py-2 text-zinc-700">Room Temp – 1273K</td>
                  <td className="px-4 py-2 text-zinc-700">0.5K</td>
                  <td className="px-4 py-2 text-zinc-700">0.001K</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Integrated Temperature System
                  </td>
                  <td className="px-4 py-2 text-zinc-700">100K – 950K</td>
                  <td className="px-4 py-2 text-zinc-700">0.5K</td>
                  <td className="px-4 py-2 text-zinc-700">0.001K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base text-zinc-700 leading-relaxed">
            Sample space diameter: <strong>7 mm</strong>
          </p>
        </div>
      </section>

      {/* VECTOR MAGNETIC MEASUREMENT OPTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Vector Magnetic Measurement Option
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Optional vector coils allow simultaneous measurement of magnetic moment
            components in the <strong>X and Y directions</strong>. This enables
            advanced studies of anisotropic magnetic materials and magnetic
            susceptibility tensors.
          </p>
        </div>
      </section>

      {/* ACCESSORIES AND OPTIONAL EQUIPMENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Accessories and Optional Equipment
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Accessory
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature Controller</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Controls cryostat or furnace
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Mechanical Pump</td>
                  <td className="px-4 py-2 text-zinc-700">Vacuum generation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Molecular Pump</td>
                  <td className="px-4 py-2 text-zinc-700">
                    High-vacuum generation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Liquid Nitrogen Tank</td>
                  <td className="px-4 py-2 text-zinc-700">Cooling system</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Water Cooler</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Cooling electromagnet
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    High Temperature Sample Rod
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    High-temperature measurements
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Disposable Sample Container
                  </td>
                  <td className="px-4 py-2 text-zinc-700">Sample mounting</td>
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
            <li>Magnetic materials research and development</li>
            <li>Thin film magnetism studies</li>
            <li>Nanomaterials and magnetic nanoparticles analysis</li>
            <li>Superconducting materials research</li>
            <li>Magnetic storage and spintronic materials research</li>
            <li>Academic and industrial laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
