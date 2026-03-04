import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXV-130 Vibrating Sample Magnetometry System | VSM | MAGTRANS Systems",
  description:
    "DXV-130 VSM system for magnetic materials research and quality control. Measures magnetisation curves, hysteresis loops and demagnetisation curves with high sensitivity and field up to 1.2 Tesla.",
};

export default function DXV130VSMPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXV-130 Vibrating Sample Magnetometry (VSM) System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Vibrating Sample Magnetometer (VSM)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            High-sensitivity VSM system for precise measurement of magnetic moment
            as a function of applied field.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/vsm/dxv-130-vsm.png"
              alt="DXV-130 Vibrating Sample Magnetometry System"
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
            DXV-130 Vibrating Sample Magnetometry (VSM) System is designed for
            magnetic materials research, quality control and product testing. The
            instrument measures fundamental magnetic properties such as
            magnetisation curves, hysteresis loops and demagnetisation curves.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system calculates important magnetic parameters including saturation
            magnetisation, residual magnetisation, coercive force, magnetic energy
            product and magnetic permeability. It supports measurement of different
            sample types including powders, granules, flakes and solid materials.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>High sensitivity magnetic moment measurement</li>
            <li>Accurate analysis of magnetisation and hysteresis behaviour</li>
            <li>Magnetic field strength up to 1.2 Tesla</li>
            <li>Stable electromagnet system for precise magnetic field control</li>
            <li>Compatible with powder, pellet and bulk samples</li>
            <li>Computer controlled measurement and analysis software</li>
          </ul>
        </div>
      </section>

      {/* MAIN SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Main Specifications
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
                  <td className="px-4 py-2 text-zinc-700">10⁻³ emu – 300 emu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sensitivity</td>
                  <td className="px-4 py-2 text-zinc-700">5 × 10⁻⁵ emu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Relative Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">Better than ±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">Better than ±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Better than ±1% after 4 hours continuous operation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnetic Pole Gap</td>
                  <td className="px-4 py-2 text-zinc-700">40 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Pole Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">60 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Magnetic Field
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1.2 Tesla</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SYSTEM COMPONENTS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Components
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
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
                  <td className="px-4 py-2 text-zinc-700">Electromagnet</td>
                  <td className="px-4 py-2 text-zinc-700">
                    DXSG-130 type electromagnet
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Measurement Unit
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Includes scanning power supply, lock-in amplifier and Tesla
                    meter
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Vibration System</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Vibrating head, vibrating rod and detection coil
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Control Computer</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Lenovo industrial control computer
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Printer</td>
                  <td className="px-4 py-2 text-zinc-700">
                    HP printer for data output
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INSTRUMENT DESCRIPTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Instrument Description
          </h2>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Electromagnet</h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The electromagnet is a double-yoke fixed air-gap electromagnet
              positioned at 45°. The magnetic field is generated horizontally with
              a fixed air gap of 40 mm and pole diameter of 60 mm. The maximum
              magnetic field strength can reach 1.2 Tesla.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Power Supply</h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system uses a high-stability steady-current DC power supply rated
              at approximately 2 kW. The output current can be continuously
              adjusted within the rated operating range and includes protection
              against over-current and short-circuit conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Vibration System
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The vibration assembly includes a vibrating rod, mechanical vibrating
              head, sample chamber and detection coil. The vibrating head can rotate
              360 degrees and the sample position can be adjusted along the X, Y and
              Z axes.
            </p>
          </div>
        </div>
      </section>

      {/* MAGNETIC MEASUREMENT UNIT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Measurement Unit
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The magnetic moment measurement unit provides multiple measurement
            ranges from 300 emu down to 0.015 emu with sensitivity better than 5 ×
            10⁻⁵ emu.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magnetic field measurement resolution is 0.1 mT with relative accuracy
            better than ±1%. The vibration source operates at approximately 180 Hz
            with high frequency stability.
          </p>
        </div>
      </section>

      {/* MEASUREMENT SOFTWARE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Software
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The VSM-130C&amp;D measurement software allows configuration of
            measurement parameters and real-time display of data.
          </p>
          <p className="text-sm font-semibold text-zinc-900">Features include:</p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Automatic measurement of magnetisation curves and hysteresis loops
            </li>
            <li>Fast MH loop measurement and background correction</li>
            <li>Data export for analysis using Excel and Origin</li>
            <li>Curve zooming, smoothing and translation tools</li>
            <li>
              Automatic calculation of magnetic parameters including saturation
              magnetisation, coercive force and maximum magnetic energy product
            </li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic materials research and development</li>
            <li>Measurement of hysteresis loops and magnetisation curves</li>
            <li>
              Characterisation of magnetic nanoparticles and advanced materials
            </li>
            <li>Industrial magnetic materials testing and quality control</li>
            <li>Academic research laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
