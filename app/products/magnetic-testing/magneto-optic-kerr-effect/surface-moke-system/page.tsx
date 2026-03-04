import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXMOKE Surface Magneto-optic Kerr Effect System | MAGTRANS Systems",
  description:
    "DXMOKE surface MOKE system for measuring longitudinal, transverse and polar Kerr effects, hysteresis loops and magnetic anisotropy in magnetic thin films and spintronic devices.",
};

export default function SurfaceMOKESystemPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXMOKE Surface Magneto-optic Kerr Effect System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Magneto-optic Kerr Effect (MOKE)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Surface magneto-optic Kerr effect system for measuring Kerr rotation,
            ellipticity and hysteresis loops in magnetic thin films, nanostructures
            and spintronic devices.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/moke/surface-moke-system.png"
              alt="DXMOKE Surface Magneto-optic Kerr Effect System"
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
          <h3 className="text-base font-semibold text-zinc-900">
            Surface Magneto-optic Kerr Effect System
          </h3>
          <p className="text-base text-zinc-700 leading-relaxed">
            The <strong>DXMOKE series magneto-optical Kerr effect system</strong>{" "}
            can directly obtain the longitudinal, transverse and polar Kerr rotation
            angle or the hysteresis loop of ellipticity. It can also determine
            magnetic properties such as <strong>coercive force</strong> and{" "}
            <strong>saturation magnetic field</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The magneto-optical Kerr effect system (MOKE) is an ideal tool for
            studying <strong>magnetic thin films, magnetic nanostructures and
            spintronic devices</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            In physics, the <strong>magneto-optic Kerr effect (MOKE)</strong> or{" "}
            <strong>surface magneto-optic Kerr effect (SMOKE)</strong> describes
            the changes that occur to light reflected from a magnetised surface.
            The <strong>Kerr angle</strong> is the rotation angle of linearly
            polarised light after reflection from a magnetised sample, while the{" "}
            <strong>Kerr ellipticity</strong> describes the elliptical polarisation
            state generated when linearly polarised light reflects from the sample.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-zinc-900">
                Features of DXMOKE Surface Magneto-optic Kerr Effect System
              </h2>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>
                  Uses <strong>TTL modulation</strong> to control a low-noise laser
                  light source
                </li>
                <li>
                  High-sensitivity <strong>photoelectric sensor tube</strong>{" "}
                  receives light intensity signals
                </li>
                <li>
                  <strong>Lock-in amplifier</strong> collects frequency-locked
                  signals
                </li>
                <li>Low noise, high resolution and high stability measurement performance</li>
                <li>Highly integrated optical devices for simplified operation</li>
                <li>
                  Users only need to install the sample and fine-tune the sample
                  rod to obtain the Kerr signal
                </li>
                <li>
                  Integrated Kerr effect measurement with{" "}
                  <strong>magnetic domain observation microscope</strong>
                </li>
                <li>
                  Microscopic resolution up to <strong>6 µm</strong>
                </li>
                <li>Supports in-situ measurements under vacuum</li>
                <li>Multiple magnetic field and cryogenic configuration options</li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
              <Image
                src="/products/moke/image1.avif"
                alt="DXMOKE surface MOKE optical system"
                width={640}
                height={400}
                className="w-full h-[260px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BASIC FUNCTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">Basic Functions</h2>

          {/* Kerr Effect Measurements */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Kerr Effect Measurements
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The DXMOKE Surface MOKE system provides several advanced Kerr effect
              measurement capabilities:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Single-point hysteresis loop measurement</li>
              <li>Longitudinal Kerr effect testing</li>
              <li>Transverse Kerr effect testing</li>
              <li>Polar Kerr effect testing</li>
            </ul>
          </div>

          {/* Surface Area Mapping */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Surface Area Mapping
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system can move the sample precisely in multiple directions:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Up / Down movement</li>
              <li>Left / Right movement</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              This allows mapping of magneto-optical Kerr signals at different
              surface points.
            </p>
          </div>

          {/* Magnetic Anisotropy Measurement */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Anisotropy Measurement
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The sample or magnetic field can be rotated <strong>360°</strong> to
              determine:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Easy magnetisation axis</li>
              <li>Hard magnetisation axis</li>
              <li>Magnetic anisotropy properties</li>
            </ul>
          </div>

          {/* Magnetoelectric Coupling Test */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetoelectric Coupling Test
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The sample holder includes an <strong>electrical interface</strong>{" "}
              which enables magnetoelectric coupling measurements.
            </p>
          </div>

          {/* Integrated Microscope Observation */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-zinc-900">
                Integrated Microscope Observation
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                A <strong>high-speed CCD camera and microscope system</strong> are
                integrated into the instrument. Functions include:
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Surface topography observation</li>
                <li>Magnetic domain imaging using a polariser</li>
                <li>
                  Detection of light intensity changes caused by magnetic
                  field-induced polarisation changes
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
              <Image
                src="/products/moke/image2.avif"
                alt="Surface MOKE microscope observation"
                width={640}
                height={400}
                className="w-full h-[260px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL PARAMETERS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Technical Parameters
          </h2>

          {/* Measurement Performance */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Measurement Performance
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Kerr angle resolution: <strong>&lt; 0.001°</strong>
              </li>
              <li>
                Ellipse resolution: <strong>&lt; 0.1%</strong>
              </li>
              <li>
                Minimum laser spot size: <strong>10 µm</strong>
              </li>
              <li>
                Maximum magnetic field: <strong>2.2 T</strong> (with EM7
                electromagnet)
              </li>
            </ul>
          </div>

          {/* Motion Control */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Motion Control
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Rotation angle step: <strong>0.1°</strong>
              </li>
              <li>
                Sample movement resolution: <strong>10 µm</strong> in X/Y
                directions
              </li>
            </ul>
          </div>

          {/* System Noise */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              System Noise
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Noise level: <strong>&lt; 1%</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CRYOGENIC OPTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Cryogenic Option</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            An optional cryogenic configuration enables low-temperature
            measurements with the following performance:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Temperature range: <strong>100 K – 300 K</strong>
            </li>
            <li>
              Temperature control accuracy: <strong>±0.01°C</strong>
            </li>
            <li>
              Cooling time to 100 K: <strong>≈ 30 minutes</strong>
            </li>
            <li>
              Heating rate: <strong>0.01 – 30°C/min</strong>
            </li>
            <li>
              Sample placed in a <strong>vacuum environment</strong>
            </li>
            <li>
              <strong>K9 optical glass window</strong> minimises magneto-induced
              optical rotation
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

