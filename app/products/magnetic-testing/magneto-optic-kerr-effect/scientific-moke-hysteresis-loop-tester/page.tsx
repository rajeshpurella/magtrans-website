import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Scientific Research Grade MOKE Hysteresis Loop Tester | MAGTRANS Systems",
  description:
    "Scientific-grade MOKE hysteresis loop tester for simultaneous in-plane and vertical magnetic measurements with high Kerr rotation sensitivity down to 0.3 mdeg (RMS).",
};

export default function ScientificMOKEHysteresisLoopTesterPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Scientific Research Grade MOKE Hysteresis Loop Tester
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Magneto-optic Kerr Effect (MOKE)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            High-performance MOKE system for simultaneous in-plane and vertical
            hysteresis loop measurements in advanced magnetic materials and
            devices.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/moke/scientific-moke-hysteresis-loop-tester.png"
              alt="Scientific Research Grade MOKE Hysteresis Loop Tester"
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
            Scientific Research Grade MOKE Hysteresis Loop Tester
          </h3>
          <p className="text-base text-zinc-700 leading-relaxed">
            The <strong>Scientific Research Grade MOKE Hysteresis Loop Tester</strong>{" "}
            uses the <strong>magneto-optical Kerr effect (MOKE)</strong> to measure
            the magnetic hysteresis loops of materials.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can measure both <strong>in-plane hysteresis loops</strong>{" "}
            and <strong>vertical hysteresis loops</strong> simultaneously, enabling
            comprehensive magnetic characterisation of materials.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The instrument supports high-precision analysis of various magnetic
            systems including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Ferromagnetic materials</li>
            <li>Artificial antiferromagnetic structures</li>
            <li>Two-dimensional magnetic materials</li>
            <li>Microelectronic magnetic devices</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            By applying <strong>in-plane and vertical magnetic fields
            simultaneously</strong>, the system can scan both in-plane and
            perpendicular magnetisation components, allowing measurement of
            hysteresis loops under any combination of magnetic field directions.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The Kerr rotation detection accuracy reaches{" "}
            <strong>0.3 mdeg (RMS)</strong>, enabling detection of magnetisation
            signals even from <strong>single atomic layer materials</strong>. The
            instrument also includes a <strong>wire-tie sample holder</strong>,
            allowing electrical-magneto-optical property measurements.
          </p>
        </div>
      </section>

      {/* SYSTEM ADVANTAGES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">System Advantages</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The product is independently developed by Dexinmag and provides strong
            stability and scalability. Compared with similar instruments in the
            industry, this system offers:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Larger magnetic field capability</li>
            <li>Higher measurement precision</li>
            <li>
              Simultaneous in-plane and vertical hysteresis loop measurement
            </li>
            <li>No need to change optical path during measurements</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Additional intelligent functions include:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Laser automatic alignment</li>
            <li>Highly intelligent measurement software</li>
            <li>Stable and expandable hardware design</li>
            <li>Customisation options for research applications</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system provides an ideal solution for{" "}
            <strong>high-speed, high-precision and non-destructive</strong> magnetic
            measurements in both scientific research and industrial development.
          </p>
        </div>
      </section>

      {/* KEY CHARACTERISTICS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Key Characteristics
          </h2>

          {/* Magnetic Field Capability */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Field Capability
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                In-plane magnetic field: <strong>1.0 T</strong>
              </li>
              <li>
                Vertical magnetic field: <strong>1.0 T</strong>
              </li>
            </ul>
          </div>

          {/* Detection Sensitivity */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Detection Sensitivity
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Minimum Kerr rotation detection:{" "}
                <strong>0.3 mdeg (RMS)</strong>
              </li>
            </ul>
          </div>

          {/* Temperature Range */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Temperature Range
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                <strong>4 K – 500 K</strong> (optional extension module)
              </li>
            </ul>
          </div>

          {/* Sample Size */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Sample Size</h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Maximum sample size: <strong>15 mm × 15 mm</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SYSTEM FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">System Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Integrated system design</li>
            <li>Multiple magnetic field ranges available</li>
            <li>
              Maximum magnetic field resolution <strong>&lt; 0.02 mT</strong>
            </li>
            <li>
              Measured magnetic field closely matches the real magnetic field
              experienced by the sample
            </li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Additional advanced hardware features:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Integrated gaussmeter sample holder</li>
            <li>Five-axis precision sample stage</li>
            <li>Laser real-time automatic alignment system</li>
          </ul>
        </div>
      </section>

      {/* FOUR-POLES VECTOR MAGNET */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Four-Poles Vector Magnet
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system is equipped with a <strong>four-poles vector magnet</strong>{" "}
            that can generate both in-plane and vertical magnetic fields.
          </p>

          {/* In-Plane Magnetic Field Strength */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              In-Plane Magnetic Field Strength
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                &gt; 1.0 T @ <strong>8 mm</strong> air gap
              </li>
              <li>
                &gt; 0.5 T @ <strong>16 mm</strong> air gap
              </li>
            </ul>
          </div>

          {/* Vertical Magnetic Field Strength */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Vertical Magnetic Field Strength
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                &gt; 1.0 T @ <strong>7 mm</strong> air gap
              </li>
              <li>
                &gt; 0.5 T @ <strong>16 mm</strong> air gap
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden bg-gray-50 p-4 max-w-2xl">
            <Image
              src="/products/moke/vector magnet.jpg"
              alt="Four-poles vector magnet for in-plane and vertical fields"
              width={720}
              height={420}
              className="w-full h-[280px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* HIGHLY FOCUSED LASER DETECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Highly Focused Laser Detection
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system uses a <strong>highly focused laser beam spot</strong> to
            measure magnetic properties at a very small local region.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Minimum laser spot size:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              <strong>250 μm</strong>
            </li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            This enables users to obtain <strong>fine local magnetic information</strong>{" "}
            from the sample.
          </p>
          <div className="rounded-xl overflow-hidden bg-gray-50 p-4 max-w-2xl mt-4">
            <Image
              src="/products/moke/Highly focused.jpg"
              alt="Highly focused laser spot for local magnetic measurements"
              width={720}
              height={420}
              className="w-full h-[280px] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

