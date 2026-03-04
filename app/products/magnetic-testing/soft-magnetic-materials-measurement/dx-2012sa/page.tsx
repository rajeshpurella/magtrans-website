import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012SA Soft Magnetic Materials AC Measuring Device | MAGTRANS Systems",
  description:
    "DX-2012SA AC measuring device for automatic measurement of AC magnetic properties of soft magnetic materials including Br, Hc, Ps, µa and other dynamic parameters.",
};

export default function DX2012SASoftMagneticACPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012SA Soft Magnetic Materials AC Measuring Device
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Soft Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Automatic AC magnetic property measurement system for soft magnetic
            materials, providing dynamic parameters such as Br, Hc, Ps and
            amplitude permeability under controlled excitation conditions.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/soft-magnetic/soft-magnetic-ac-system-dx2012sa.png"
              alt="DX-2012SA Soft Magnetic Materials AC Measuring Device"
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
            DX-2012SA Soft Magnetic Materials AC Measuring Device is designed for{" "}
            <strong>
              automatic measurement of AC magnetic properties of soft magnetic
              materials
            </strong>
            . The system measures dynamic magnetic parameters such as remanence
            (Br), coercive force (Hc), total loss (Ps), amplitude permeability
            (µa), and other AC magnetic characteristics.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The device uses <strong>computer control and digital A/D sampling
            technology</strong>, replacing traditional analog instruments such as
            bridge meters, voltmeters and frequency meters. The entire testing
            process is automated and provides highly accurate magnetic property
            analysis.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system conforms to several national and international magnetic
            testing standards, making it suitable for research, development and
            production testing of soft magnetic materials.
          </p>
        </div>
      </section>

      {/* APPLICABLE STANDARDS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Applicable Standards
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012SA testing system complies with the following standards:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              <strong>GB 5026-85</strong>
            </li>
            <li>
              <strong>GB 3658-90</strong>
            </li>
            <li>
              <strong>GB/T 9632.1-2002</strong>
            </li>
            <li>
              <strong>GB/T 19346-2003</strong>
            </li>
            <li>
              <strong>SJ/T 10281-91</strong>
            </li>
            <li>
              <strong>IEC 60367-1</strong>
            </li>
            <li>
              <strong>IEC 60404-6</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Accurate measurement of dynamic magnetic parameters such as{" "}
              <strong>Br, Hc, Ps, µa, µR, µL, µ′ and µ″</strong>
            </li>
            <li>Computer-controlled automated measurement process</li>
            <li>Digital integration for high-precision magnetic induction measurement</li>
            <li>
              Adjustable magnetic field and magnetic induction with{" "}
              <strong>0.5% precision locking</strong>
            </li>
            <li>
              Multiple frequency ranges available depending on test requirements
            </li>
            <li>
              Automatic multi-point testing up to{" "}
              <strong>255 measurement points</strong>
            </li>
            <li>
              Fast testing time of about <strong>12 seconds per point</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* TEST SAMPLE INFORMATION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Test Sample Information
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Supported Materials
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Soft magnetic ferrite</li>
              <li>Permalloy</li>
              <li>Amorphous magnetic materials</li>
              <li>Nanocrystalline magnetic materials</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">Sample Shapes</h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Ring / annular cores</li>
              <li>E-core shapes</li>
              <li>U-core shapes</li>
            </ul>
            <p className="text-base text-zinc-700 leading-relaxed">
              The magnetizing coil and measuring coil form a transformer structure
              to perform magnetic measurements under closed magnetic circuit
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* MEASUREMENT CAPABILITIES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Capabilities
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012SA system can measure the following dynamic magnetic
            parameters:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Remanence <strong>Br</strong>
            </li>
            <li>
              Coercive force <strong>Hc</strong>
            </li>
            <li>
              Specific total loss <strong>Ps</strong>
            </li>
            <li>
              Amplitude permeability <strong>µa</strong>
            </li>
            <li>
              Loss angle <strong>δ</strong>
            </li>
            <li>
              Resistive permeability <strong>µR</strong>
            </li>
            <li>
              Inductive permeability <strong>µL</strong>
            </li>
            <li>
              Elastic permeability <strong>µ′</strong>
            </li>
            <li>
              Viscous permeability <strong>µ″</strong>
            </li>
            <li>
              Inductance coefficient <strong>AL</strong>
            </li>
            <li>
              Quality factor <strong>Q</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* SOFTWARE FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Software Features
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-2012SA software provides powerful measurement and analysis tools.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Fully automatic measurement process</li>
            <li>Real-time monitoring of waveform signals</li>
            <li>
              Compatible with <strong>Windows XP, Windows 7, Windows 8 and
              Windows 10</strong>
            </li>
            <li>
              Displays <strong>I(t), U(t), B(t)</strong> sampling waveforms
            </li>
            <li>
              Displays <strong>B-H hysteresis loop</strong> and magnetization
              curves
            </li>
            <li>Multi-point cluster analysis for hysteresis loops</li>
            <li>Automatic saving and management of test data</li>
            <li>
              Export measurement results to <strong>Excel format</strong>
            </li>
            <li>Supports Chinese and English interface</li>
            <li>Print preview and test report generation</li>
            <li>
              Export reports as <strong>JPG image files</strong>
            </li>
            <li>Compatible with various printer models</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT ANALYSIS FUNCTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Analysis Functions
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can display and analyze multiple magnetic curves including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>B-H hysteresis loops</li>
            <li>Magnetization curves</li>
            <li>Permeability curves µ(H) and µ(F)</li>
            <li>Loss curves Ps(B) and Ps(F)</li>
            <li>
              Comparative analysis of magnetic properties under different
              frequencies
            </li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Multiple measurement curves can be displayed on a single graph for
            easy comparison and analysis.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Soft magnetic material research laboratories</li>
            <li>Magnetic material development and testing</li>
            <li>Ferrite and transformer core manufacturing</li>
            <li>Power electronics component testing</li>
            <li>University and industrial research applications</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

