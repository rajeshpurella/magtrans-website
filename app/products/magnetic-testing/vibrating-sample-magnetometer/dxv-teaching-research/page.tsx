import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXV-60 VSM Magnetometer for Teaching and Research | Vibrating Sample Magnetometer | MAGTRANS Systems",
  description:
    "DXV-60 VSM magnetometer for teaching and research: laboratory instrument for measuring magnetic properties of materials using the vibrating sample magnetometer principle. Suitable for universities and materials science studies.",
};

export default function DXVTeachingResearchVSMPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXV-60 VSM Magnetometer for Teaching and Research
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Vibrating Sample Magnetometer (VSM)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Educational and research-focused VSM platform tailored for academic
            laboratories and defence research applications.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/vsm/dxv-teaching-research-vsm.png"
              alt="DXV-60 VSM Magnetometer for Teaching and Research"
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
            DXV-60 VSM Magnetometer is a laboratory instrument designed for teaching
            and research applications to measure the magnetic properties of
            materials. The system operates using the vibrating sample magnetometer
            principle, where a sample is placed in a stable magnetic field and
            vibrated near a detection coil to produce a signal proportional to the
            magnetic moment.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The instrument provides high sensitivity, high accuracy and convenient
            operation, making it suitable for universities, research laboratories
            and materials science studies.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Accurate measurement of magnetic properties of materials</li>
            <li>High sensitivity detection of magnetic moment</li>
            <li>Suitable for powders, particles, films, liquids and bulk samples</li>
            <li>Automated measurement using computer-controlled system</li>
            <li>Capable of measuring magnetisation curves and hysteresis loops</li>
            <li>Ideal for teaching laboratories and academic research</li>
          </ul>
        </div>
      </section>

      {/* TEST METHODS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">Test Methods</h2>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Manual Measurement
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              In manual mode, the system is controlled using the instrument panel.
              Parameters such as modulation zero, phase shifting, time constant and
              sensitivity are adjusted manually.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Online Measurement
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              In online measurement mode, the system automatically locks the phase and
              controls parameters such as time constant, magnetic field strength,
              sensitivity and scan numbers via computer software. The system
              automatically records and displays magnetization curves, hysteresis
              loops and other magnetic parameters.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN FUNCTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">Main Functions</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DXV-60 VSM can measure fundamental magnetic characteristics
            including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Hysteresis loops</li>
            <li>Magnetisation curves</li>
            <li>Demagnetisation curves</li>
            <li>Warming and cooling magnetic curves</li>
            <li>Magnetic energy product curves</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            From these measurements, the system calculates magnetic parameters such
            as:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Saturation magnetization</li>
            <li>Residual magnetization</li>
            <li>Coercive force</li>
            <li>Maximum magnetic energy product</li>
            <li>Curie temperature</li>
            <li>Magnetic permeability</li>
          </ul>
        </div>
      </section>

      {/* MAIN SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Main Specifications
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
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Moment Range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">10⁻² emu – 300 emu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sensitivity</td>
                  <td className="px-4 py-2 text-zinc-700">5 × 10⁻⁵ emu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Relative Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">±1% (at 30 emu)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    ±1% for 24 hours continuous operation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnetic Pole Gap</td>
                  <td className="px-4 py-2 text-zinc-700">45 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Pole Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">60 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900 w-16">
                    No
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Component
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Model / Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">1</td>
                  <td className="px-4 py-2 text-zinc-700">Electromagnet</td>
                  <td className="px-4 py-2 text-zinc-700">DXWD-60</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">2</td>
                  <td className="px-4 py-2 text-zinc-700">Vibrating Head</td>
                  <td className="px-4 py-2 text-zinc-700">Vibration driver</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">3</td>
                  <td className="px-4 py-2 text-zinc-700">Vibrating Frame</td>
                  <td className="px-4 py-2 text-zinc-700">Mechanical structure</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">4</td>
                  <td className="px-4 py-2 text-zinc-700">Vibrating Poles</td>
                  <td className="px-4 py-2 text-zinc-700">Sample vibration poles</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">5</td>
                  <td className="px-4 py-2 text-zinc-700">Sample Chamber</td>
                  <td className="px-4 py-2 text-zinc-700">Measurement chamber</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">6</td>
                  <td className="px-4 py-2 text-zinc-700">Control Cabinet</td>
                  <td className="px-4 py-2 text-zinc-700">
                    DXV-60 electronics cabinet
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">7</td>
                  <td className="px-4 py-2 text-zinc-700">Detection Coils</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic signal detection
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">8</td>
                  <td className="px-4 py-2 text-zinc-700">Computer</td>
                  <td className="px-4 py-2 text-zinc-700">Lenovo control computer</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">9</td>
                  <td className="px-4 py-2 text-zinc-700">Instruction Manual</td>
                  <td className="px-4 py-2 text-zinc-700">User documentation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">10</td>
                  <td className="px-4 py-2 text-zinc-700">Measurement Software</td>
                  <td className="px-4 py-2 text-zinc-700">
                    English software system
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INSTRUMENT DESCRIPTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Instrument Description
          </h2>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Electromagnet</h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The electromagnet is an adjustable double-yoke structure with a fixed
              air gap and 45° orientation. It provides a magnetic field up to 0.5
              Tesla at the centre of the gap.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Power Supply</h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              High stability DC power supply designed for electromagnet operation
              with adjustable current output and protection features including
              over-current and short-circuit protection.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Vibration System
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The vibration system includes a vibrating head, vibration frame,
              sample chamber and detection coil to generate the magnetic signal
              during measurement.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Measurement Unit
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The measurement unit provides multiple magnetic moment ranges and
              magnetic field strengths with high resolution (0.1 mT) and measurement
              accuracy better than ±1%.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
