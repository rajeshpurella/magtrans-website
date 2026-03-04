import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DX-2012R Magnetic Field Mapper | MAGTRANS Systems",
  description:
    "DX-2012R series three-axis magnetic field mapping system for 3D magnetic field distribution measurement, harmonic analysis and quality inspection of permanent magnets, motor stators and rotors, coils and electromagnets.",
};

export default function DX2012RMagneticFieldMapperPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012R Magnetic Field Mapper
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            High-precision three-axis magnetic field mapping system for
            evaluating magnetic field distribution, magnetisation accuracy and
            magnetic ring quality.
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
            The <strong>DX-2012R series Magnetic Field Mapper</strong> is a
            high-precision 3D magnetic field mapping system used for evaluating
            magnetic field distribution and magnetisation accuracy.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can generate detailed reports including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>XY coordinate mapping</li>
            <li>Polar coordinate analysis</li>
            <li>3D magnetic field distribution</li>
            <li>Relative fundamental wave harmonic analysis</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            It is widely used for quality inspection of:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>Permanent magnets</li>
            <li>Permanent magnet motor stators and rotors</li>
            <li>DC magnetic field coils</li>
            <li>Electromagnets</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012R surface magnetic field distribution measuring
            instrument developed by Dexinmag is an essential tool for accurate
            evaluation of magnet magnetisation accuracy and quality inspection
            of magnetic rings.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            This <strong>three-axis magnetic field mapping system</strong> can
            be equipped with multiple testing fixtures including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>Three-dimensional test probes</li>
            <li>Rotating platforms</li>
            <li>Loading platforms</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system features{" "}
            <strong>high concentricity design and high-precision probe return</strong>
            , with a scanning space of{" "}
            <strong>800 mm × 800 mm × 800 mm</strong>.
          </p>
        </div>
      </section>

      {/* PRODUCT MODELS */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Product Models
          </h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
            <table className="min-w-full text-left text-sm text-zinc-800">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">
                    Product Name
                  </th>
                  <th className="px-4 py-3 font-semibold">DX-2012RA</th>
                  <th className="px-4 py-3 font-semibold">DX-2012RB</th>
                  <th className="px-4 py-3 font-semibold">DX-2012RC</th>
                  <th className="px-4 py-3 font-semibold">DX-2012RD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">
                    Two-dimensional analysis
                  </td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">
                    Rectangular coordinate display
                  </td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">
                    Polar coordinate display
                  </td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Axial 3D distribution</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Oblique charging test</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">
                    One-dimensional plane description
                  </td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">✓</td>
                  <td className="px-4 py-3">✓</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">
                    Three-dimensional magnetic field description
                  </td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MEASUREMENT PRINCIPLE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Principle
          </h2>
          <div className="max-w-xl">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/products/magnetic-field-mapper/DX-2012R.jpg"
                alt="DX-2012R magnetic field distribution measurement principle diagram"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base text-zinc-700 leading-relaxed">
              The magnetic field distribution measurement system mainly consists
              of:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Industrial computer with measurement software</li>
              <li>Motion control system</li>
              <li>Data acquisition system</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              The measurement process works as follows:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                The industrial computer sends commands to the motion control
                system.
              </li>
              <li>
                The system moves according to the preset trajectory.
              </li>
              <li>
                The data acquisition system collects magnetic field data in{" "}
                <strong>X, Y and Z directions</strong> using Hall sensors.
              </li>
              <li>The data is transmitted to the computer.</li>
              <li>
                The software processes the data and generates a{" "}
                <strong>3D magnetic field distribution map</strong>.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Three-axis electrically controlled mobile platform</li>
              <li>
                Aluminum alloy platform structure (customizable size)
              </li>
              <li>
                Stepper motor return precision up to{" "}
                <strong>±0.01 mm</strong>
              </li>
              <li>
                Step resolution <strong>0.01 mm</strong>
              </li>
              <li>
                Taiwan three-jaw chuck with concentricity better than{" "}
                <strong>0.05 mm</strong>
              </li>
              <li>
                Rotation angle resolution <strong>0.01°</strong>
              </li>
              <li>
                Rotation return uncertainty <strong>±0.005°</strong>
              </li>
              <li>
                Test speed <strong>30–60 seconds per cycle</strong>
              </li>
              <li>
                Multiple automatic measurement ranges: 0.2k / 0.4k / 1k / 2k /
                4k / 10k / 20k Gs
              </li>
            </ul>
            <div className="space-y-2">
              <p className="text-base text-zinc-700 leading-relaxed">
                Measurement performance:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>
                  Accuracy: <strong>1.0%</strong>
                </li>
                <li>
                  Repeatability: <strong>0.3%</strong>
                </li>
                <li>
                  Resolution: <strong>0.1 Gs below 400 Gs</strong>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-base text-zinc-700 leading-relaxed">
                Calibration:
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                The system is equipped with a{" "}
                <strong>standard magnetic field calibration module</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>
                  Magnetic field: <strong>1000 Gs ±5 Gs</strong>
                </li>
                <li>
                  Calibration accuracy: <strong>0.5%</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STEPPER MOTOR DRIVE TECHNICAL PARAMETERS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Stepper Motor Drive Technical Parameters
          </h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
            <table className="min-w-full text-left text-sm text-zinc-800">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Parameter</th>
                  <th className="px-4 py-3 font-semibold">X Axis</th>
                  <th className="px-4 py-3 font-semibold">Y Axis</th>
                  <th className="px-4 py-3 font-semibold">Z Axis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Displacement distance</td>
                  <td className="px-4 py-3">200 mm</td>
                  <td className="px-4 py-3">200 mm</td>
                  <td className="px-4 py-3">150 mm</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Step resolution</td>
                  <td className="px-4 py-3">0.01 mm</td>
                  <td className="px-4 py-3">0.01 mm</td>
                  <td className="px-4 py-3">0.01 mm</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Return uncertainty</td>
                  <td className="px-4 py-3">±0.01 mm</td>
                  <td className="px-4 py-3">±0.01 mm</td>
                  <td className="px-4 py-3">±0.01 mm</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="px-4 py-3">Maximum speed</td>
                  <td className="px-4 py-3">20 mm/s</td>
                  <td className="px-4 py-3">20 mm/s</td>
                  <td className="px-4 py-3">20 mm/s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DRIVE SYSTEM PARAMETERS */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Drive System Parameters
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>
              Power supply: <strong>12V – 40V DC</strong>
            </li>
            <li>
              Capacity: <strong>0.1 KVA</strong>
            </li>
            <li>
              Output current: <strong>Peak 2.6 A / phase</strong>
            </li>
            <li>
              Drive mode:{" "}
              <strong>Space vector bipolar constant current drive</strong>
            </li>
            <li>
              Excitation method: <strong>16 subdivision modes available</strong>
            </li>
            <li>
              Insulation resistance: <strong>&gt;100 MΩ</strong>
            </li>
            <li>
              Insulation strength:{" "}
              <strong>0.5 KV (1 minute test)</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* ROTATING PLATFORM SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Rotating Platform Specifications
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
            <li>
              Table diameter: <strong>100 mm</strong>
            </li>
            <li>
              Transmission ratio: <strong>180 : 1</strong>
            </li>
            <li>
              Resolution (8 subdivisions): <strong>0.00125°</strong>
            </li>
            <li>
              Repeat positioning accuracy: <strong>&lt; 0.005°</strong>
            </li>
            <li>
              Maximum rotation speed: <strong>25° / s</strong>
            </li>
            <li>
              Stepper motor: <strong>2-phase</strong>
            </li>
            <li>
              Maximum static torque: <strong>40 Ncm</strong>
            </li>
            <li>
              Maximum center load: <strong>50 kg</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* TEST RESULT EXAMPLES */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">
              Test Result Examples
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900">
                Multistage Magnetic Ring Test Result
              </h3>
              <div className="relative w-full md:w-2/3 aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <Image
                  src="/products/magnetic-field-mapper/multistage-magnetic.avif"
                  alt="DX-2012R multistage magnetic ring test result"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900">
                3D Magnetic Field Distribution Result
              </h3>
              <div className="relative w-full md:w-2/3 aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <Image
                  src="/products/magnetic-field-mapper/3d.avif"
                  alt="DX-2012R 3D magnetic field distribution result"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

