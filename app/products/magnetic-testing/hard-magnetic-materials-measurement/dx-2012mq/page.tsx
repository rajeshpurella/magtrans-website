import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012MQ Magnetic Moment Testing Equipment for Rare Earth Permanent Magnets | MAGTRANS Systems",
  description:
    "DX-2012MQ measures magnetic flux and magnetic moment of rare earth permanent magnets. Fluxmeter and Helmholtz coil for Br, Hcb and BHmax determination.",
};

export default function DX2012MQMagneticMomentPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012MQ Magnetic Moment Testing Equipment for Rare Earth Permanent
            Magnet Materials
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Hard Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Fluxmeter combined with one-dimensional Helmholtz coil for measuring
            magnetic flux and magnetic moment of rare earth permanent magnets;
            determines Br, Hcb and BHmax.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/hard-magnetic/dx-2012mq-magnetic-moment.png"
              alt="DX-2012MQ Magnetic Moment Testing Equipment for Rare Earth Permanent Magnet Materials"
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
            DX-2012MQ Magnetic Moment Testing Equipment is designed for quality
            inspection and performance evaluation of rare earth permanent magnet
            materials. The system measures the magnetic flux and magnetic moment of
            magnetized samples using a fluxmeter combined with a one-dimensional
            Helmholtz coil.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Based on the magnetic moment measurement and the demagnetization
            characteristics of the material, the system can accurately calculate
            important magnetic parameters such as{" "}
            <strong>remanence (Br)</strong>, <strong>coercive force (Hcb)</strong>{" "}
            and <strong>maximum magnetic energy product (BHmax)</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system provides high efficiency testing, allowing rapid inspection
            of magnetized samples and reliable evaluation of rare earth permanent
            magnet material quality.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Accurate measurement of magnetic flux (Φ) and magnetic moment (M)
            </li>
            <li>Suitable for various rare earth permanent magnet materials</li>
            <li>
              Single-chip intelligent control system with automatic calculation
            </li>
            <li>
              Ability to test samples of different sizes without strict size
              limitations
            </li>
            <li>
              Optional ceramic heating furnace for temperature dependent magnetic
              testing
            </li>
            <li>High stability fluxmeter with low drift technology</li>
            <li>
              Suitable for thermal stability and magnetic flux irreversible loss
              inspection
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
            The DX-2012MQ system measures magnetic parameters including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic moment (M)</li>
            <li>Magnetic flux (Φ)</li>
            <li>Remanence (Br)</li>
            <li>Coercive force (Hcb)</li>
            <li>Maximum magnetic energy product (BHmax)</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            The measurement results allow evaluation of permanent magnet material
            quality and consistency.
          </p>
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
                  <td className="px-4 py-2 text-zinc-700">Power Supply</td>
                  <td className="px-4 py-2 text-zinc-700">AC 220V / 0.5A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Fluxmeter Test Range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    1 mWb / 10 mWb / 100 mWb / 1000 mWb
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Input Impedance</td>
                  <td className="px-4 py-2 text-zinc-700">
                    1kΩ / 10kΩ / 100kΩ / 1000kΩ
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Test Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">0.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Drift</td>
                  <td className="px-4 py-2 text-zinc-700">1 µWb / minute</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Minimum Resolution</td>
                  <td className="px-4 py-2 text-zinc-700">0.1 µWb</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Instrument Size</td>
                  <td className="px-4 py-2 text-zinc-700">285 × 300 × 100 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Weight</td>
                  <td className="px-4 py-2 text-zinc-700">3 kg</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Operating Temperature
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0°C – 50°C</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Humidity Range</td>
                  <td className="px-4 py-2 text-zinc-700">35% – 80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SYSTEM CONFIGURATION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Configuration
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Typical configuration includes:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic moment testing host</li>
            <li>One-dimensional Helmholtz coil</li>
            <li>Fluxmeter measurement system</li>
            <li>Sample testing platform</li>
            <li>Optional high-temperature ceramic furnace</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Quality inspection of rare earth permanent magnets</li>
            <li>Magnetic moment measurement of magnetized samples</li>
            <li>Permanent magnet material production testing</li>
            <li>Magnetic materials research laboratories</li>
            <li>Industrial permanent magnet quality control</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
