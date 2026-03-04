import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXV-250 VSM with Temperature Control | Vibrating Sample Magnetometer | MAGTRANS Systems",
  description:
    "DXV-250 VSM with integrated temperature control for studying magnetisation behaviour from low to elevated temperatures. Magnetic field up to 2.2 Tesla, high and low temperature options.",
};

export default function DXV250VSMPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXV-250 VSM with Temperature Control
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Vibrating Sample Magnetometer (VSM)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            VSM with integrated temperature control for studying magnetisation
            behaviour from low to elevated temperatures.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/vsm/dxv-250-vsm.png"
              alt="DXV-250 VSM with Temperature Control"
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
            DXV-250 Vibrating Sample Magnetometer (VSM) with Temperature Control is
            designed for advanced magnetic materials research, quality control and
            product testing. The system enables precise measurement of magnetic
            properties such as magnetization curves, hysteresis loops and
            demagnetization curves.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The instrument can determine magnetic parameters including saturation
            magnetization, residual magnetization, coercive force, magnetic energy
            product and magnetic permeability. With integrated high and low
            temperature options, the system allows in-situ magnetic measurements over
            a wide temperature range.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            It supports measurement of powders, granules, thin flakes and bulk
            magnetic materials.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Accurate measurement of magnetic properties of materials</li>
            <li>High sensitivity magnetic moment detection</li>
            <li>Magnetic field strength up to 2.2 Tesla</li>
            <li>Temperature-dependent magnetic measurements</li>
            <li>Compatible with powder, pellet and bulk samples</li>
            <li>Computer-controlled measurement and analysis system</li>
          </ul>
        </div>
      </section>

      {/* TEMPERATURE MEASUREMENT CAPABILITY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Temperature Measurement Capability
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DXV-250 VSM supports magnetic measurements across a wide
            temperature range.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Room temperature to <strong>500°C</strong> using high-temperature
              furnace
            </li>
            <li>
              Room temperature to{" "}
              <strong>liquid nitrogen temperature</strong> using low-temperature
              system
            </li>
            <li>
              Temperature resolution of <strong>0.1 K</strong>
            </li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            This allows researchers to study temperature-dependent magnetic
            behaviour including Curie temperature and magnetic phase transitions.
          </p>
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
                    Better than ±1% after 4 hours operation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnetic Pole Gap</td>
                  <td className="px-4 py-2 text-zinc-700">35–40 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Pole Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">60 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum Magnetic Field
                  </td>
                  <td className="px-4 py-2 text-zinc-700">2.2 Tesla</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature Range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Room temperature to 500°C / Liquid nitrogen
                  </td>
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
                    DXSG-250 water-cooled electromagnet
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Measurement Unit
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Includes scanning power supply, lock-in amplifier, Tesla meter
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
                  <td className="px-4 py-2 text-zinc-700">HP printer</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    High Temperature System
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Furnace for measurements up to 500°C
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Low Temperature System
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Liquid nitrogen cooling system
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm font-semibold text-zinc-900">Optional components:</p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Vacuum pump</li>
            <li>Liquid nitrogen tank</li>
            <li>Water circulation cooling system</li>
            <li>Electromagnet water chiller</li>
          </ul>
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
              positioned at 45°. The magnetic field is horizontal with a pole
              diameter of 60 mm and maximum magnetic field strength of 2.2 Tesla.
              The electromagnet uses a water-cooling system for stable operation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Power Supply</h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system uses a high-stability DC regulated power supply rated at
              approximately 10 kW. The output current can be continuously adjusted
              and includes protection features such as phase-loss protection,
              over-current protection and automatic short-circuit protection.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Vibration System
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The vibration system includes a vibrating rod, mechanical vibrating
              head, bracket, sample chamber and detection coil used to generate the
              magnetic signal during measurement.
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
            The measurement system provides multiple magnetic moment ranges from{" "}
            <strong>300 emu down to 0.015 emu</strong> with sensitivity better than{" "}
            <strong>5 × 10⁻⁵ emu</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magnetic field measurement resolution is <strong>0.1 mT</strong> with
            accuracy better than <strong>±1%</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The vibration source operates at <strong>180 Hz</strong> with high
            frequency stability.
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
            The VSM250 measurement software provides an intuitive interface for
            configuring measurement parameters and analysing data.
          </p>
          <p className="text-sm font-semibold text-zinc-900">Features include:</p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Automatic measurement of magnetisation curves and hysteresis loops
            </li>
            <li>Fast MH loop measurement and background correction</li>
            <li>Heating and cooling curve analysis</li>
            <li>Temperature-dependent magnetic measurements</li>
            <li>Data export and processing using Excel and Origin</li>
            <li>
              Automatic calculation of magnetic parameters including saturation
              magnetisation, coercive force and Curie temperature
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
            <li>Temperature-dependent magnetism studies</li>
            <li>Magnetic nanoparticles and advanced materials analysis</li>
            <li>Industrial magnetic materials testing</li>
            <li>Academic and research laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
