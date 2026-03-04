import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012AM Magnetic Moment and Magnetic Declination Measurement System | MAGTRANS Systems",
  description:
    "DX-2012AM system for measuring magnetic moment and magnetic declination of permanent magnets. Three-axis Helmholtz coil and multi-channel fluxmeter for quality inspection.",
};

export default function DX2012AMMagneticDeclinationPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012AM Magnetic Moment and Magnetic Declination Measurement System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Hard Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Three-dimensional Helmholtz coil and three-component fluxmeter for
            measuring magnetic moment and magnetic declination of permanent magnet
            materials.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/hard-magnetic/dx-2012am-magnetic-moment.png"
              alt="DX-2012AM Magnetic Moment and Magnetic Declination Measurement System"
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
            DX-2012AM Magnetic Moment and Magnetic Declination Measurement System
            is designed for measuring the magnetic moment and magnetic declination
            angle of permanent magnets. The system determines magnetic parameters by
            measuring the magnetic flux components using a Helmholtz coil system
            and a multi-channel fluxmeter.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            By placing the magnet sample on the test platform, the instrument
            measures the magnetic flux components and calculates the total
            magnetic moment and the magnetic field deviation angle along the main
            axis. The system can display values including total magnetic moment{" "}
            <strong>M</strong>, magnetic declination <strong>α</strong>, and flux
            components <strong>Øx, Øy and Øz</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            This system is widely used for magnetic quality inspection of permanent
            magnets and magnetic component testing.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Accurate measurement of magnetic moment and magnetic declination
              angle
            </li>
            <li>
              Three-axis Helmholtz coil system for multi-directional magnetic
              analysis
            </li>
            <li>
              Built-in three-channel fluxmeter for simultaneous measurement
            </li>
            <li>
              Real-time display of magnetic flux components Øx, Øy and Øz
            </li>
            <li>High-resolution LCD display interface</li>
            <li>Computer-based data recording and reporting system</li>
            <li>Suitable for permanent magnet testing and quality control</li>
          </ul>
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
                    Model
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Component
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DX-2012AM</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic declination test host
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 set</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DXHC150</td>
                  <td className="px-4 py-2 text-zinc-700">
                    3-axis Helmholtz coil
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 set</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">DX-2012</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic declination testing software
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 set</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">M4200</td>
                  <td className="px-4 py-2 text-zinc-700">Lenovo computer</td>
                  <td className="px-4 py-2 text-zinc-700">1 set</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">HP1007</td>
                  <td className="px-4 py-2 text-zinc-700">HP printer</td>
                  <td className="px-4 py-2 text-zinc-700">1 set</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Nonstandard</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Special working platform
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 set</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Technical Specifications
          </h2>

          <div className="space-y-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Fluxmeter Specifications
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
                    <td className="px-4 py-2 text-zinc-700">Fluxmeter Range</td>
                    <td className="px-4 py-2 text-zinc-700">
                      1mWb / 10mWb / 100mWb / 1000mWb
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">
                      Measurement Accuracy
                    </td>
                    <td className="px-4 py-2 text-zinc-700">0.5%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Resolution</td>
                    <td className="px-4 py-2 text-zinc-700">
                      0.01% (minimum 0.1 µWb)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Input Impedance</td>
                    <td className="px-4 py-2 text-zinc-700">
                      1kΩ / 10kΩ / 100kΩ / 1MΩ
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-zinc-700">Drift</td>
                    <td className="px-4 py-2 text-zinc-700">
                      1 µWb/min (after stabilization)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Host Functions
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Display magnetic flux values from three-channel fluxmeter</li>
              <li>
                Display magnetic declination angle <strong>θz</strong> of the
                tested sample
              </li>
              <li>
                Compare measured declination with preset values for quality
                inspection
              </li>
              <li>
                Stand-alone testing or PC connection via{" "}
                <strong>RS232 interface</strong>
              </li>
              <li>Automatic recording of measurement data</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              Measurement repeatability for magnetic moment <strong>M</strong> and
              declination <strong>θz</strong> is{" "}
              <strong>better than 10%</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* HELMHOLTZ COIL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Helmholtz Coil Specifications
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
                  <td className="px-4 py-2 text-zinc-700">XY Coil Constant</td>
                  <td className="px-4 py-2 text-zinc-700">0.015 Wb·cm/V·s</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Z Coil Constant</td>
                  <td className="px-4 py-2 text-zinc-700">0.05 Wb·cm/V·s</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Calibration Accuracy
                  </td>
                  <td className="px-4 py-2 text-zinc-700">Better than 0.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Coil Orthogonality</td>
                  <td className="px-4 py-2 text-zinc-700">±0.2°</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-900 mb-3">
              Test Sample Range
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>30 mm³ – 150 mm³ (homogeneous area: 0.3%)</li>
              <li>30 mm³ – 30 mm³ (homogeneous area: 1.0%)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEASUREMENT SOFTWARE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Software
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            DX-2012AM magnetic declination testing software provides automated
            measurement and data recording functions.
          </p>
          <p className="text-sm font-semibold text-zinc-900">Key features include:</p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Automatic recording of sample serial numbers</li>
            <li>Measurement of total magnetic moment <strong>M</strong></li>
            <li>Automatic recording of flux values <strong>Øx, Øy, Øz</strong></li>
            <li>Automatic calculation of magnetic declination <strong>θz</strong></li>
            <li>Software correction of fluxmeter amplification coefficient</li>
            <li>Export of measurement results for reporting and documentation</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Permanent magnet quality inspection</li>
            <li>Magnetic moment measurement of permanent magnets</li>
            <li>Magnetic declination measurement of magnetized samples</li>
            <li>Research laboratories and academic institutions</li>
            <li>Industrial permanent magnet manufacturing testing</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
