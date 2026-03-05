import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Atomic Force Microscope | Functional Material Measurement | MAGTRANS Systems",
  description:
    "Wafer-level atomic force microscope for ultra-high resolution 3D surface morphology characterisation of conductor, semiconductor and insulating samples.",
};

const GALLERY_IMAGES = [
  "Atomic Force Microscope.png",
  "Atomic Force Microscope1.png",
  "Atomic Force Microscope2.png",
  "Atomic Force Microscope3.png",
];

export default function AtomicForceMicroscopePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Atomic Force Microscope
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The wafer-level Atomic Force Microscope uses a micro-cantilever probe structure to
            characterise the three-dimensional surface morphology of solid materials such as
            conductors, semiconductors and insulators, with support for large wafer-level samples.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The electric sample positioning stage combined with optical imaging can achieve
            positioning accuracy of <strong>1 µm within a 300 × 300 mm area</strong>. Probe approach
            and scanning parameter adjustments are fully automated, and imaging resolution can reach{" "}
            <strong>20 picometers</strong>, enabling ultra-high precision surface characterisation.
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY_IMAGES.map((filename) => (
                <div
                  key={filename}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50"
                >
                  <Image
                    src={`/products/functional-material-measurement/atomic-force-microscope/${filename}`}
                    alt={filename.replace(".png", "")}
                    fill
                    sizes="(min-width: 1024px) 260px, 50vw"
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
              The wafer-level Atomic Force Microscope uses a micro-cantilever probe structure to
              characterise the three-dimensional surface morphology of solid materials such as
              conductors, semiconductors and insulators. The system supports testing of large
              wafer-level samples, providing high-resolution, non-destructive analysis of critical
              device surfaces.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The electric sample positioning stage combined with optical imaging achieves
              positioning accuracy of <strong>1 µm within a 300 × 300 mm area</strong>, simplifying
              region-of-interest selection across large wafers. Probe approach and scanning
              parameter adjustments are fully automated, improving ease of use and repeatability.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              With an imaging resolution down to <strong>20 picometers</strong>, the system enables
              ultra-high precision surface characterisation for advanced materials research and
              process control.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                Advanced measurement functions including Young&apos;s modulus, adhesion, magnetic
                domain, surface potential and work function analysis.
              </li>
              <li>
                Compatible with accessories such as culture dishes and heating stages, allowing
                measurements in underwater or high-temperature environments.
              </li>
              <li>
                Intelligent probe insertion system enabling one-click automated probe insertion using
                a piezoelectric scanning tube.
              </li>
              <li>
                Supports large wafer measurements including <strong>12-inch wafers</strong> and is
                backward compatible with <strong>8-inch, 6-inch, 4-inch wafers and smaller
                samples</strong>.
              </li>
            </ul>
          </div>

          {/* Technical Indicators */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Technical Indicators</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">
                      Noise level (XY direction)
                    </td>
                    <td className="px-4 py-3">
                      0.2 nm closed loop, 0.02 nm open loop
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">
                      Noise level (Z direction)
                    </td>
                    <td className="px-4 py-3">
                      0.06 nm closed loop, 0.03 nm open loop
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Nonlinearity</td>
                    <td className="px-4 py-3">
                      0.15% in XY direction, 1% in Z direction
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Scanning mode</td>
                    <td className="px-4 py-3">
                      XYZ full probe scanning mode (sample remains stationary)
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Scanning range</td>
                    <td className="px-4 py-3">90 μm × 90 μm × 9 μm</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Scanning rate</td>
                    <td className="px-4 py-3">0.1 Hz – 30 Hz</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Image sampling points</td>
                    <td className="px-4 py-3">32 × 32 – 4000 × 4000</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Sample size</td>
                    <td className="px-4 py-3">
                      12-inch wafer compatible with 8, 6, 4-inch wafers and fragment samples
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Working mode</td>
                    <td className="px-4 py-3">
                      Contact, tapping, non-contact
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Adaptive environment</td>
                    <td className="px-4 py-3">
                      Air and liquid phase environments
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Multi-functional Measurement Modes */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Multi-functional Measurement Modes
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Electrostatic Force Microscope (EFM)</li>
              <li>Scanning Kelvin Probe Microscope (KPFM)</li>
              <li>Piezoelectric Force Microscope (PFM)</li>
              <li>Conductive Atomic Force Microscope (C-AFM)</li>
              <li>Scanning Capacitive Force Microscope (SCFM)</li>
              <li>Magnetic Force Microscope (MFM)</li>
              <li>Lateral Force Microscope (LFM)</li>
              <li>Nano-etching / nano-processing</li>
              <li>Single-point force spectrum curve measurement</li>
              <li>Force modulation mode</li>
            </ul>
          </div>

          {/* Optional Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Optional Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Fully automatic wafer loading and unloading system.</li>
              <li>
                Fully automatic probe approach system with <strong>35 mm stroke</strong> and{" "}
                <strong>50 nm step accuracy</strong>.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

