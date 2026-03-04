import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Micro MOKE Magnetic Measuring Instrument | MAGTRANS Systems",
  description:
    "Portable micro MOKE instrument for fast, non-contact hysteresis loop measurement of magnetic thin films and nanostructures.",
};

export default function MicroMOKEMagneticMeasuringInstrumentPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Micro MOKE Magnetic Measuring Instrument
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Magneto-optic Kerr Effect (MOKE)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Compact micro MOKE system for rapid, non-contact hysteresis loop
            measurements and magnetic parameter extraction in thin film samples.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/moke/micro-moke-magnetic-measuring-instrument.png"
              alt="Micro MOKE Magnetic Measuring Instrument"
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
            Micro MOKE Magnetic Measuring Instrument
          </h3>
          <p className="text-base text-zinc-700 leading-relaxed">
            The <strong>Micro MOKE Magnetic Measuring Instrument</strong> uses the{" "}
            <strong>magneto-optical Kerr effect (MOKE)</strong> to measure magnetic
            hysteresis loops of materials.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            This measurement method offers several advantages:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Fast measurement speed</li>
            <li>High precision</li>
            <li>Non-contact testing</li>
            <li>No damage to the sample</li>
            <li>No additional sample preparation required</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Using this system, important magnetic parameters can be obtained,
            including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Coercive force (Hc)</li>
            <li>Saturation magnetic field</li>
            <li>Remanence (Br)</li>
          </ul>
        </div>
      </section>

      {/* INSTRUMENT DESCRIPTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Instrument Description
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The <strong>Micro MOKE magnetic measuring instrument</strong> is a
            portable system independently developed by Dexinmag. The instrument is
            compact, sensitive and fast, making it suitable for both:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Laboratory research</li>
            <li>Industrial production testing</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            It is designed for <strong>rapid and non-destructive testing of magnetic
            thin film materials</strong>. For different magnetically anisotropic
            materials, the instrument provides an integrated optical measurement
            solution without requiring external devices, displays or accessories.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Users can quickly complete hysteresis loop measurements using the
            integrated system.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Flexible scanning modes including <strong>fast scanning</strong> and{" "}
              <strong>fine scanning</strong>
            </li>
            <li>
              Highly focused laser allows detection of{" "}
              <strong>local or single structures of samples</strong>
            </li>
            <li>
              Built-in <strong>test result saving function</strong> to store spectrum
              and scanning data
            </li>
            <li>
              Integrated <strong>sample holder with positioning function</strong> for
              stable testing
            </li>
            <li>
              Highly integrated system with all components built inside the
              instrument
            </li>
            <li>
              Simple software interface developed using <strong>LabVIEW</strong>,
              making operation intuitive
            </li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Typical operation flow:
          </p>
          <p className="text-base text-zinc-900">
            <strong>Insert sample → Start measurement → Output results</strong>
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Dual input modes:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Touchscreen operation</li>
            <li>Keyboard and mouse control</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Multiple external interfaces include:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>USB ports</li>
            <li>HD display interface</li>
            <li>Network interface</li>
          </ul>
        </div>
      </section>

      {/* DEVICE PARAMETERS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">Device Parameters</h2>

          {/* Sample Compatibility */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Sample Compatibility
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Maximum sample size: <strong>10 mm × 10 mm fragments</strong>
              </li>
              <li>Larger samples can be customised</li>
              <li>Expandable up to <strong>2-inch samples</strong></li>
            </ul>
          </div>

          {/* Magnet System */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnet System
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Uses <strong>bipolar magnets</strong></li>
              <li>
                Magnetic field direction is <strong>perpendicular</strong> to the
                film surface
              </li>
            </ul>
          </div>

          {/* Magnetic Field Performance */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Field Performance
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Rated maximum magnetic field: <strong>650 mT</strong>
              </li>
              <li>
                Higher magnetic field options available through customisation
              </li>
            </ul>
          </div>

          {/* Quick Test Mode */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Quick Test Mode
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Fast scan mode:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Magnetic field range: <strong>-20 mT to 20 mT</strong>
              </li>
              <li>
                Step size: <strong>1 mT</strong>
              </li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              Testing time:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                From sample loading to test completion:{" "}
                <strong>≈ 45 seconds</strong>
              </li>
              <li>
                From test start to completion: <strong>≈ 30 seconds</strong>
              </li>
            </ul>
          </div>

          {/* Measurement Performance */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Measurement Performance
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Magnetic field resolution: <strong>50 μT</strong>
              </li>
              <li>
                Kerr rotation detection sensitivity:{" "}
                <strong>better than 0.8 mdeg</strong>
              </li>
            </ul>
          </div>

          {/* Mechanical Specifications */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Mechanical Specifications
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Air gap: <strong>6 mm</strong>
              </li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              Instrument dimensions:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Length: <strong>510 mm</strong>
              </li>
              <li>
                Width: <strong>360 mm</strong>
              </li>
              <li>
                Height: <strong>392 mm</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPLICATION FIELDS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Application Fields
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The Micro MOKE system is suitable for a wide range of research and
            industrial applications, including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Spintronics and magnetotronics research</li>
            <li>Magnetic nanotechnology</li>
            <li>Non-volatile MRAM device characterisation</li>
            <li>Magnetoresistance studies</li>
            <li>Magnetic thin film characterisation</li>
            <li>Magnetic sensor development</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT RESULTS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Results
          </h2>
          <h3 className="text-base font-semibold text-zinc-900">
            Vertical Sample Hysteresis Loop
          </h3>
          <div className="rounded-xl overflow-hidden bg-gray-50 p-4 max-w-2xl">
            <Image
              src="/products/moke/Vertical sample hysteresis.jpg"
              alt="Vertical sample hysteresis loop measured by Micro MOKE"
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

