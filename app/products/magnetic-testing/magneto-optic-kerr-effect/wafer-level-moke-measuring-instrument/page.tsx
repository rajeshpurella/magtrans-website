import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Wafer-Level Magneto-Optic Kerr Measuring Instrument | MAGTRANS Systems",
  description:
    "Wafer-level MOKE instrument for fast, non-contact magnetic property testing of 12-inch wafers and multilayer MRAM film stacks under up to 2.5 T vertical and 1.3 T in-plane fields.",
};

export default function WaferLevelMOKEMeasuringInstrumentPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Wafer-Level Magneto-Optic Kerr Measuring Instrument
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Magneto-optic Kerr Effect (MOKE)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Wafer-level MOKE platform for fast, non-contact magnetic characterisation
            of multilayer MRAM stacks, magnetic storage media and sensor films.
          </p>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-zinc-900">
                Product Overview
              </h2>
              <h3 className="text-base font-semibold text-zinc-900">
                Wafer-Level Magneto-Optic Kerr Measuring Instrument
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                The <strong>Wafer-Level Magneto-Optic Kerr Measuring Instrument</strong>{" "}
                uses the <strong>poloidal magneto-optical Kerr effect (MOKE)</strong>{" "}
                to quickly and globally detect the magnetic properties of wafer stacks.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                The system performs <strong>non-contact magnetic characterisation</strong>,
                which avoids damage to wafers that may occur with traditional magnetic
                measurement techniques. This makes it suitable for sample testing{" "}
                <strong>before and after wafer patterning processes</strong>.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                Strong magnetic field excitation and ultra-high sensitivity Kerr
                detection allow researchers and engineers to analyse complex multilayer
                magnetic structures used in modern devices.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
              <Image
                src="/products/moke/wafer-level-moke-measuring-instrument.png"
                alt="Wafer-level MOKE measuring instrument"
                width={640}
                height={400}
                className="w-full h-[260px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM CAPABILITIES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Capabilities
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The Wafer MOKE system can provide:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Up to <strong>2.5 T vertical magnetic field</strong>
            </li>
            <li>
              Up to <strong>1.3 T in-plane magnetic field</strong>
            </li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            These strong magnetic fields can induce switching in different layers of{" "}
            <strong>MRAM film stacks</strong>, including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Free layer</li>
            <li>Reference layer</li>
            <li>Pinned layer</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system offers <strong>ultra-high Kerr detection sensitivity</strong>,
            allowing simultaneous characterisation of subtle magnetic changes in
            multilayer films.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            By combining <strong>laser point-by-point detection</strong> with{" "}
            <strong>scanning imaging</strong>, the instrument can quickly generate a{" "}
            <strong>global magnetic property map of an entire wafer</strong>, helping
            with:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Process optimisation</li>
            <li>Yield monitoring</li>
            <li>Magnetic uniformity analysis</li>
          </ul>
        </div>
      </section>

      {/* PERFORMANCE INDICATORS AND ADVANTAGES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Performance Indicators and Advantages
          </h2>

          {/* Sample Compatibility */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Sample Compatibility
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Supports up to <strong>12-inch wafer testing</strong></li>
              <li>Backward compatible with smaller wafers</li>
              <li>Supports fragment or partial wafer testing</li>
            </ul>
          </div>

          {/* Magnetic Field Performance */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Field Performance
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Maximum vertical magnetic field: <strong>±2.5 T</strong>
              </li>
              <li>
                Magnetic field resolution: <strong>1 μT</strong>
              </li>
            </ul>
          </div>

          {/* Magnetic Detection Sensitivity */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Detection Sensitivity
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Kerr rotation detection sensitivity:{" "}
                <strong>better than 0.3 mdeg (RMS)</strong>
              </li>
              <li>
                Suitable for <strong>multilayer magnetic film stack</strong>{" "}
                characterisation
              </li>
            </ul>
          </div>

          {/* Positioning Accuracy */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Positioning Accuracy
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Sample repeat positioning accuracy:{" "}
                <strong>better than ±1 μm</strong>
              </li>
              <li>
                Static positioning jitter: <strong>≤ ±0.25 μm</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FUNCTIONS AND APPLICATION SCENARIOS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Functions and Application Scenarios
          </h2>

          {/* MRAM Device Testing */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              MRAM Device Testing
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Vertical hysteresis loop measurement of MRAM stacks and device arrays</li>
              <li>Uses <strong>Polar Kerr configuration</strong> for MRAM film analysis</li>
            </ul>
          </div>

          {/* Magnetic Storage Media Testing */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Storage Media Testing
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Vertical hysteresis loop measurement for{" "}
                <strong>magnetic disks and storage media</strong>
              </li>
              <li>Suitable for PMR disk characterisation</li>
            </ul>
          </div>

          {/* Magnetic Sensor Film Testing */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Sensor Film Testing
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Measurement of <strong>in-plane hysteresis loops</strong> in magnetic
                sensor film stacks
              </li>
            </ul>
          </div>

          {/* Automated Magnetic Property Mapping */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Automated Magnetic Property Mapping
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system can automatically extract hysteresis loop parameters including:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Free layer coercivity (Hc)</li>
              <li>Exchange field (Hex)</li>
              <li>Saturation magnetisation (Ms)</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              It can then generate <strong>distribution maps of wafer magnetic properties</strong>.
            </p>
          </div>

          {/* Flexible Scanning Modes */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Flexible Scanning Modes
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system provides several scanning options:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Single-point scanning</li>
              <li>Array scanning</li>
              <li>Ring distribution scanning</li>
              <li>Import of custom scanning position lists</li>
            </ul>
          </div>

          {/* Operation Modes */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Operation Modes
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Manual wafer loading</li>
              <li>Fully automatic operation</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              This flexibility allows the system to be used in both{" "}
              <strong>R&amp;D laboratories</strong> and{" "}
              <strong>industrial production environments</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* MEASUREMENT RESULTS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Results
          </h2>

          {/* Hysteresis Loop Measurement */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Hysteresis Loop Measurement of Perpendicular Magnetic Anisotropy Stack
            </h3>
            <div className="rounded-xl overflow-hidden bg-gray-50 p-4 max-w-2xl">
              <Image
                src="/products/moke/anisotropic-magnetic.jpg"
                alt="Hysteresis loop of perpendicular magnetic anisotropy stack"
                width={720}
                height={420}
                className="w-full h-[280px] object-contain"
              />
            </div>
          </div>

          {/* Coercive Field Distribution Map */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Coercive Field Distribution Map of 8-inch Magnetic Wafer
            </h3>
            <div className="rounded-xl overflow-hidden bg-gray-50 p-4 max-w-2xl">
              <Image
                src="/products/moke/8-inch-perpendicular.jpg"
                alt="Coercive field distribution map of 8-inch perpendicular magnetic wafer"
                width={720}
                height={420}
                className="w-full h-[280px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

