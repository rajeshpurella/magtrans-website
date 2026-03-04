import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DXV-100 Laboratory VSM | Vibrating Sample Magnetometer | MAGTRANS Systems",
  description:
    "DXV-100 Laboratory VSM vibrating sample magnetometer for measuring magnetisation curves, hysteresis loops and demagnetisation curves of powders, granules, flakes and solid magnetic materials.",
};

export default function DXV100LaboratoryVSMPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DXV-100 Laboratory VSM
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Vibrating Sample Magnetometer (VSM)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Laboratory-scale VSM for characterising soft and hard magnetic materials
            with stable field control and flexible sample holders.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/vsm/dxv-100-laboratory-vsm.png"
              alt="DXV-100 Laboratory VSM Vibrating Sample Magnetometer"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 1. PRODUCT OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            DXV-100 Laboratory VSM Vibrating Sample Magnetometer is designed to measure
            the fundamental magnetic properties of materials such as magnetisation
            curves, hysteresis loops and demagnetisation curves.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system analyses parameters including saturation magnetisation, residual
            magnetisation, coercivity, magnetic energy product and magnetic
            permeability. It supports measurement of powders, granules, flakes and
            solid samples for research laboratories and material testing.
          </p>
        </div>
      </section>

      {/* 2. KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Accurate measurement of magnetisation curves and hysteresis loops</li>
            <li>High sensitivity magnetic moment detection up to 5 × 10⁻⁵ emu</li>
            <li>Stable electromagnet producing magnetic field up to 0.8 Tesla</li>
            <li>Compatible with powder, pellet and bulk samples</li>
            <li>Advanced measurement software with Excel and Origin export</li>
            <li>Suitable for materials research and quality control</li>
          </ul>
        </div>
      </section>

      {/* 3. MAIN SPECIFICATIONS */}
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
                  <td className="px-4 py-2 text-zinc-700">10⁻³ emu – 300 emu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Sensitivity</td>
                  <td className="px-4 py-2 text-zinc-700">5 × 10⁻⁵ emu</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Relative Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Repeatability</td>
                  <td className="px-4 py-2 text-zinc-700">±1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Strength
                  </td>
                  <td className="px-4 py-2 text-zinc-700">0 – 0.8 Tesla</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Magnetic Pole Gap</td>
                  <td className="px-4 py-2 text-zinc-700">40 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Pole Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">60 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Field Resolution</td>
                  <td className="px-4 py-2 text-zinc-700">0.1 mT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. SYSTEM COMPONENTS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Components
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>DXSG-100 Electromagnet</li>
            <li>DX-2K Steady Current Power Supply</li>
            <li>Vibrating Head and Detection Coil System</li>
            <li>Magnetic Moment Measurement Unit</li>
            <li>Control Computer with Measurement Software</li>
            <li>Printer for data output</li>
          </ul>
        </div>
      </section>

      {/* 5. APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Magnetic materials research</li>
            <li>Hysteresis loop and magnetisation analysis</li>
            <li>Magnetic nanoparticle studies</li>
            <li>Quality control of magnetic materials</li>
            <li>Academic and industrial R&amp;D laboratories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
