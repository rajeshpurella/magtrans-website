import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012F Multi-dimensional Magnetic Field Testing System | MAGTRANS Systems",
  description:
    "DX-2012F fully automatic multi-dimensional magnetic field testing system for high-precision 3D AC/DC magnetic field distribution measurement and analysis in complex geometries.",
};

export default function DX2012FMagneticFieldTestingPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012F Multi-dimensional Magnetic Field Testing System
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Fully automatic multi-dimensional magnetic field measurement system
            for high-precision AC and DC 3D magnetic field mapping and analysis.
          </p>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Product Overview
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The{" "}
            <strong>
              DX-2012F Multi-dimensional Magnetic Field Testing System
            </strong>{" "}
            is a high-precision fully automatic digital magnetic measurement
            platform developed by Dexinmag.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can test the{" "}
            <strong>
              three-dimensional magnetic field distribution of AC and DC
              magnetic fields
            </strong>{" "}
            in any spatial configuration with very high precision. It can
            measure and analyse:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>3D magnetic field distribution</li>
            <li>Surface magnetic structures of various shapes</li>
            <li>Uniform magnetic field distribution</li>
            <li>Multi-pole magnetic rings</li>
            <li>N/S magnetic pole distribution</li>
            <li>Motor magnetic field distribution</li>
            <li>Superconducting magnetic field</li>
            <li>Magnetic resonance imaging (MRI) magnetic field</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Measurement results can be converted into graphical
            visualisations, stored as digital data and exported for reporting
            and printing.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            This system is widely used for{" "}
            <strong>
              magnetic research and testing of AC and DC magnetic fields
            </strong>{" "}
            and has been adopted by many aerospace, military and scientific
            research institutions worldwide.
          </p>
        </div>
      </section>

      {/* KEY CHARACTERISTICS - WIDE MEASUREMENT RANGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Key Characteristics
          </h2>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Wide Measurement Range
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                Space measurement range:{" "}
                <strong>200 mm × 200 mm × 200 mm (X, Y, Z)</strong>
              </li>
              <li>
                Customisable scanning range based on user requirements
              </li>
              <li>
                Supports <strong>three-axis movement</strong> and optional{" "}
                <strong>5-axis platform configuration</strong>
              </li>
            </ul>

            <p className="text-base text-zinc-700 leading-relaxed">
              Mechanical performance:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                Translation resolution: <strong>0.00039 mm</strong>
              </li>
              <li>
                Position accuracy: <strong>0.01 mm</strong>
              </li>
              <li>
                Repeat positioning accuracy: <strong>&lt; 0.005 mm</strong>
              </li>
            </ul>

            <p className="text-base text-zinc-700 leading-relaxed">
              Rotation platform performance:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                Rotation resolution: <strong>&lt; 0.0002°</strong>
              </li>
              <li>
                Rotation positioning accuracy: <strong>0.01°</strong>
              </li>
              <li>
                Repeat positioning accuracy: <strong>&lt; 0.005°</strong>
              </li>
            </ul>

            <p className="text-base text-zinc-700 leading-relaxed">
              Motion control:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                Movement speed adjustable in{" "}
                <strong>2–64 speed levels</strong>
              </li>
            </ul>

            <p className="text-base text-zinc-700 leading-relaxed">
              This enables{" "}
              <strong>
                high-resolution spatial magnetic field distribution
                measurement
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* KEY CHARACTERISTICS - HIGH MEASUREMENT ACCURACY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h3 className="text-base font-semibold text-zinc-900">
            High Measurement Accuracy
          </h3>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system uses a{" "}
            <strong>high-precision digital Gauss meter</strong> combined with{" "}
            <strong>micro Hall probes</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Probe types:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>One-dimensional probe: Φ0.5 mm</li>
            <li>Two-dimensional probe: Φ1.2 mm</li>
            <li>Three-dimensional probe: Φ1.2 mm</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Measurement precision:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>
              One-dimensional measurement accuracy:{" "}
              <strong>±0.05% of reading (±0.005 range)</strong>
            </li>
            <li>
              Three-dimensional measurement accuracy:{" "}
              <strong>±0.10% of reading (±0.005 range)</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* KEY CHARACTERISTICS - AUTOMATION AND DIGITAL MEASUREMENT */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h3 className="text-base font-semibold text-zinc-900">
            Automation and Digital Measurement
          </h3>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system operates through{" "}
            <strong>
              computer-controlled real-time data acquisition and motion control
            </strong>
            .
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Features include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>Fully automated measurement workflow</li>
            <li>Automatic data acquisition and storage</li>
            <li>User-defined measurement parameters</li>
            <li>
              Automatic generation of 1D, 2D and 3D magnetic field
              visualisations
            </li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Measurement data is stored in{" "}
            <strong>database format (Access compatible)</strong> and charts can
            be exported or printed.
          </p>
        </div>
      </section>

      {/* KEY CHARACTERISTICS - FLEXIBLE SYSTEM CONFIGURATION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h3 className="text-base font-semibold text-zinc-900">
            Flexible System Configuration
          </h3>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system supports flexible combinations of measurement hardware:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>Three-axis translation platform</li>
            <li>Optional rotation platform</li>
            <li>Multi-axis measurement configuration</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            These combinations allow measurement of{" "}
            <strong>
              magnetic fields in complex structures and geometries
            </strong>
            . The system software integrates:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>Motion control</li>
            <li>Data acquisition</li>
            <li>Measurement automation</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Additional software functions can be customised according to
            application requirements.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Certification:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>
              Gauss meter calibrated by{" "}
              <strong>National Institute of Metrology China</strong>
            </li>
            <li>
              Software registered by{" "}
              <strong>
                CPCC (Copyright Protection Center of China)
              </strong>
            </li>
          </ul>
        </div>
      </section>

      {/* SYSTEM CONFIGURATION */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Configuration
          </h2>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <p className="text-base text-zinc-700 leading-relaxed">
                The system includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Industrial PC with control software</li>
                <li>High-precision Gauss meter (1D or 3D)</li>
                <li>Hall probe compatible with the Gauss meter</li>
                <li>Multi-axis displacement control unit</li>
                <li>Displacement platform controller</li>
              </ul>
              <p className="text-base text-zinc-700 leading-relaxed">
                The system consists of two main parts:
              </p>
              <h3 className="text-sm font-semibold text-zinc-900">
                Data Acquisition System
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Magnetic field data acquisition</li>
                <li>Hall probe measurement</li>
                <li>Real-time data transmission to PC</li>
              </ul>
              <h3 className="text-sm font-semibold text-zinc-900">
                Displacement Control System
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Multi-axis movement control</li>
                <li>Motion trajectory and scanning path control</li>
                <li>Automated scanning of measurement points</li>
              </ul>
              <p className="text-base text-zinc-700 leading-relaxed">
                The motion controller receives commands from the PC software
                and drives the displacement platform to move according to
                predefined scanning paths.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/products/magnetic-field-mapper/DX-2012F-Multi.jpg"
                alt="DX-2012F multi-dimensional magnetic field testing system configuration"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CNC MULTI-AXIS PLATFORM */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            CNC Multi-Axis Platform
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The translation and rotation axes can be configured based on
            measurement requirements.
          </p>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
            <table className="min-w-full text-left text-sm text-zinc-800">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Direction</th>
                  <th className="px-4 py-3 font-semibold">Panning Range</th>
                  <th className="px-4 py-3 font-semibold">Resolution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">X Axis</td>
                  <td className="px-4 py-3">50 mm – 4000 mm</td>
                  <td className="px-4 py-3">0.00039 mm</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Y Axis</td>
                  <td className="px-4 py-3">50 mm – 2000 mm</td>
                  <td className="px-4 py-3">0.00039 mm</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Z Axis</td>
                  <td className="px-4 py-3">50 mm – 2000 mm</td>
                  <td className="px-4 py-3">0.00039 mm</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">T (Rotary table)</td>
                  <td className="px-4 py-3">360°</td>
                  <td className="px-4 py-3">0.0002°</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">θz (Rotary table)</td>
                  <td className="px-4 py-3">360°</td>
                  <td className="px-4 py-3">0.0002°</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HIGH-PRECISION DIGITAL GAUSS METER */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            High-Precision Digital Gauss Meter
          </h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
            <table className="min-w-full text-left text-sm text-zinc-800">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">
                    Measurement Range
                  </th>
                  <th className="px-4 py-3 font-semibold">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">DX-360</td>
                  <td className="px-4 py-3">10 nT – 30 T</td>
                  <td className="px-4 py-3">±0.15% ±0.005 range</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">DX-210</td>
                  <td className="px-4 py-3">10 nT – 30 T</td>
                  <td className="px-4 py-3">±0.10% ±0.005 range</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">DX-180</td>
                  <td className="px-4 py-3">10 nT – 30 T</td>
                  <td className="px-4 py-3">±0.05% ±0.005 range</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">DX-160</td>
                  <td className="px-4 py-3">100 nT – 3 T</td>
                  <td className="px-4 py-3">±0.20% ±0.005 range</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

