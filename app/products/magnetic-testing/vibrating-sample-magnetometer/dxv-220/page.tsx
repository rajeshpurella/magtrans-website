import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DXV-220 Vibrating Magnetometer VSM Equipment | Vibrating Sample Magnetometer | MAGTRANS Systems",
  description:
    "DXV-220 vibrating sample magnetometer (VSM) equipment for measuring magnetisation curves, hysteresis loops and demagnetisation curves of powders, flakes and bulk magnetic materials.",
};

export default function DXV220VibratingMagnetometerPage() {
  return (
    <main className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXV-220 Vibrating Magnetometer VSM Equipment
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Vibrating Sample Magnetometer (VSM)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            DX-220V VSM equipment measures fundamental magnetic properties including
            magnetisation curves, hysteresis loops and demagnetisation curves. It provides
            accurate magnetic parameters such as saturation magnetisation, residual
            magnetisation, coercive force and maximum magnetic energy product for powders,
            granules, flakes and bulk materials.
          </p>
        </div>
      </section>

      {/* 2️⃣ OVERVIEW SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Overview</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DXV-220 Vibrating Sample Magnetometer is designed for laboratory and
            industrial magnetic material analysis. It enables precise measurement of
            magnetisation curves, hysteresis loops, demagnetisation behaviour and
            permeability characteristics under controlled magnetic fields.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system supports testing of powders, granules, flakes and solid block
            magnetic materials. Combined with dedicated measurement electronics and
            analysis software, the DXV-220 provides a robust platform for characterising
            hard and soft magnetic materials in research, product development and quality
            control environments.
          </p>
        </div>
      </section>

      {/* 3️⃣ MAIN SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Main Specifications</h2>
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
                    Measuring magnetic moment range
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    10⁻³ emu – 300 emu (sensitivity better than 5 × 10⁻⁵ emu)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Relative accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Better than ±1% (3 emu range)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">Better than ±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Stability</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Better than 1% over 4 hours continuous operation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnetic pole pitch</td>
                  <td className="px-4 py-2 text-zinc-700">35 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Pole face diameter</td>
                  <td className="px-4 py-2 text-zinc-700">60 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Maximum magnetic field strength
                  </td>
                  <td className="px-4 py-2 text-zinc-700">2.0 T (typical)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4️⃣ SYSTEM ARCHITECTURE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">System Architecture</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>DXSG-220 electromagnet.</li>
            <li>Magnetic moment measurement unit host.</li>
            <li>Scanning power supply.</li>
            <li>Lock-in amplifier.</li>
            <li>Tesla meter.</li>
            <li>Vibration source.</li>
            <li>Vibrating head and rod assembly.</li>
            <li>Detection coil set.</li>
            <li>Lenovo computer.</li>
            <li>HP printer.</li>
          </ul>
        </div>
      </section>

      {/* 5️⃣ ELECTROMAGNET SYSTEM */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">Electromagnet System</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The DXV-220 uses a double-yoke fixed air-gap electromagnet with a 45°
            seated structure and horizontal magnetic field orientation. The fixed air gap
            is 40 mm with a pole diameter of approximately 60 mm. The maximum magnetic
            field is better than 2.0 T and the magnet uses a water-cooled cooling
            structure for stable long-term operation.
          </p>
        </div>
      </section>

      {/* 6️⃣ POWER SUPPLY SYSTEM */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Power Supply System</h2>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
              Main Functions
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Output power in the range of approximately 8–10 kW.</li>
              <li>Phase-loss protection.</li>
              <li>Over-current protection.</li>
              <li>Automatic short-circuit protection.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
              Technical Indicators
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>Steady current output adjustable from 0 to rated value.</li>
              <li>LCD digital ammeter display (4½ digits).</li>
              <li>Display accuracy: ±(1% + 2 digits).</li>
              <li>Continuous working time: up to 8 hours.</li>
              <li>Input voltage: 3‑phase 380 V ±10%, 50 Hz.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7️⃣ VIBRATION & DETECTION SYSTEM */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            Vibration &amp; Detection System
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The vibration system includes a vibrating rod, mechanical vibrating head,
            support bracket, sample chamber and detection coil assembly. The output
            frequency is nominally 180 Hz with frequency stability better than 10⁻⁵. The
            vibration drive provides more than 50 W of output power to ensure a stable
            signal level across the full measurement range.
          </p>
        </div>
      </section>

      {/* 8️⃣ MAGNETIC MOMENT MEASUREMENT UNIT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Moment Measurement Unit
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The magnetic moment measuring unit provides 18 measurement ranges from 300
            emu down to approximately 0.015 emu, with highest sensitivity better than
            5 × 10⁻⁵ emu. At the 3 emu range, accuracy and repeatability are typically
            better than ±1%, and stability is better than 1% after 4 hours of continuous
            operation. Magnetic field capability extends up to 3.2 T (maximum,
            configuration dependent) with a field resolution of approximately 0.1 mT.
          </p>
        </div>
      </section>

      {/* 9️⃣ COMPUTER & SOFTWARE SYSTEM */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Computer &amp; Software System
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                Computer &amp; Printer
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Lenovo E5800 or equivalent industrial PC.</li>
                <li>Memory: 2 GB; hard disk: 500 GB.</li>
                <li>19‑inch LCD monitor.</li>
                <li>HP‑1018 or equivalent laser printer (with standard warranty).</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                VSM Software
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Model VSM‑100C&amp;D with data files stored using .13D suffix.</li>
                <li>
                  Data can be exported for further processing in Excel and Origin or
                  similar analysis tools.
                </li>
                <li>
                  Supports automatic MH loop, hysteresis loop and demagnetisation curve
                  acquisition.
                </li>
                <li>
                  Calculates parameters in both SI and Gauss unit systems with zoom,
                  smoothing, translation and printing functions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 RESEARCH APPLICATIONS SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Research Applications
          </h2>

          {/* Study 1 */}
          <div className="border border-zinc-200 rounded-xl p-8">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Size- and Shape-Controlled Synthesis and Properties of Magnetic-Plasmonic Core-Shell Nanoparticles
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  In this study, magnetic nanoparticles were purified by magnetic separation prior to characterisation. Optical absorption spectra were
                  recorded using a VIS–NIR spectrometer. Magnetic properties of iron oxide nanoparticles were measured using a Dexing Magnet Vibrating
                  Sample Magnetometer (VSM), while IO–Au core–shell nanoparticles were characterised using SQUID magnetometry. Morphology was evaluated
                  via transmission electron microscopy (TEM).
                </p>
              </div>
              <div className="flex md:justify-end justify-start">
                <a
                  href="/research/magnetic-plasmonic-core-shell-vsm-study.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
                >
                  View Research PDF
                </a>
              </div>
            </div>
          </div>

          {/* Study 2 */}
          <div className="border border-zinc-200 rounded-xl p-8">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Investigations on LaFeO₃ Thin Film Using Sol-Gel Technique for Magnet Technology
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  LaFeO₃ thin films were prepared using spin-coating sol–gel techniques and characterised by X-ray diffraction, XPS and surface
                  analysis methods. Magnetic properties were determined using a Dexing Magnet Vibrating Sample Magnetometer (VSM), enabling evaluation
                  of coercivity, remanence and magnetic phase behaviour in sol–gel derived LaFeO₃ thin films.
                </p>
              </div>
              <div className="flex md:justify-end justify-start">
                <a
                  href="/research/lafeo3-thin-film-vsm-study.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
                >
                  View Research PDF
                </a>
              </div>
            </div>
          </div>

          {/* Study 3 */}
          <div className="border border-zinc-200 rounded-xl p-8">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Effect of La³⁺ and Ti⁴⁺ Ions on the Magnetic Properties of Barium Hexaferrite Powders Synthesised Using Sol-Gel Method
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Barium hexaferrite powders synthesised via sol–gel processing were analysed for phase formation and magnetic performance. Hysteresis
                  loops, saturation magnetisation (Mₛ), remanent magnetisation (Mᵣ) and coercivity (Hc) were measured at room temperature using a
                  Vibrating Sample Magnetometer (VSM) with applied magnetic fields up to 11,000 Oe.
                </p>
              </div>
              <div className="flex md:justify-end justify-start">
                <a
                  href="https://acikerisim.karatay.edu.tr/dogrulama/?devam=2f68616e646c652f32302e3530302e31323439382f35303230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
                >
                  View External Publication
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11️⃣ CHEMICAL REACTION SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            Typical Reaction Example (Barium Hexaferrite Study)
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            In studies of barium hexaferrite (BaFe₁₂O₁₉) magnetic materials, VSM
            measurements are often combined with phase analysis to track phase formation
            through key reactions such as:
          </p>
          <pre className="mt-2 rounded-lg bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm text-zinc-800 overflow-x-auto">
{`BaCO₃ + 6Fe₂O₃ → BaFe₁₂O₁₉
BaCO₃ + Fe₂O₃ → BaFe₂O₄
BaFe₂O₄ + 5Fe₂O₃ → BaFe₁₂O₁₉`}
          </pre>
        </div>
      </section>
    </main>
  );
}

