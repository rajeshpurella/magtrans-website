import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Liquid Nitrogen Cryostat | Cryogenic Systems | MAGTRANS Systems",
  description:
    "Dexinmag liquid nitrogen cryostat with wide 65K–800K temperature range, fast cooling and stable vacuum environment for optical, electrical and magnetic experiments.",
};

const GALLERY_IMAGES = [
  "Liquid Nitrogen Cryostat.png",
  "Liquid Nitrogen Cryostat1.png",
  "Liquid Nitrogen Cryostat2.png",
];

export default function LiquidNitrogenCryostatPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Cryogenic Systems
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Liquid Nitrogen Cryostat
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Dexinmag Liquid Nitrogen Cryostat provides a wide temperature range (65K–800K), high
            efficiency, fast cooling speed and a stable experimental environment, making it a
            preferred low-temperature platform for many scientific research experiments.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Based on the steady-state bubble principle, liquid nitrogen is stored in the cryostat
            tank. By adjusting the cone air plug clearance and changing the boiling condition of the
            gas–liquid interface, the heat leakage of the constant temperature block is stabilised,
            while precise heater control enables rapid temperature change between 65K and 800K.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Main advantages include high cost-effectiveness, compact structure and strong
            expandability for integration into optical, electrical, magnetic and thermal
            measurement systems.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">Product Image Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_IMAGES.map((filename) => (
                <div
                  key={filename}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50"
                >
                  <Image
                    src={`/products/cryogenic-systems/liquid-nitrogen-cryostat/${filename}`}
                    alt="Liquid nitrogen cryostat product image"
                    fill
                    sizes="(min-width: 1024px) 320px, 50vw"
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
              Dexinmag Liquid Nitrogen Cryostat provides a wide temperature range (65K–800K), high
              efficiency, fast cooling speed and a stable experimental environment. It has become a
              preferred low-temperature equipment choice for many scientific research experiments.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system is based on the steady-state bubble principle. Liquid nitrogen is stored in
              the cryostat tank, and by adjusting the cone air plug clearance and changing the
              boiling condition of the gas–liquid interface, the heat leakage of the constant
              temperature block can be stabilised.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The heating power is adjusted by the temperature controller so that the sample stage
              can change temperature rapidly between 65K and 800K and stabilise precisely at the set
              temperature. Main advantages include high cost-effectiveness, compact structure and
              strong expandability.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Wide temperature range (65K – 800K).</li>
              <li>High efficiency and fast cooling speed.</li>
              <li>Stable vacuum sample environment.</li>
              <li>Long vacuum holding time using low-temperature adsorbent.</li>
              <li>PT100 platinum temperature sensor with high stability.</li>
              <li>Multiple experimental configuration options.</li>
              <li>Easy liquid nitrogen filling without pumps or compressors.</li>
              <li>Quick optical and electrical sample installation.</li>
              <li>Customisable cryostat configurations for different experiments.</li>
            </ul>
          </div>

          {/* Performance and Characteristics */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Performance and Characteristics
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Wide temperature range (65K ~ 800K).</li>
              <li>Stable vacuum environment for samples.</li>
              <li>
                Vacuum interlayer with low-temperature adsorbent extends liquid nitrogen usage time.
              </li>
              <li>High precision PT100 platinum temperature sensor.</li>
              <li>Multiple optional configurations for different experiments.</li>
              <li>Easy operation without pumps or compressors.</li>
              <li>Optical and electrical sample holder options.</li>
              <li>
                Custom design for optical, electrical, magnetic and thermal measurement experiments.
              </li>
            </ul>
          </div>

          {/* Specifications Table */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Parameters of Dexinmag Series Liquid Nitrogen Cryostat
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">No.</th>
                    <th className="px-4 py-3 font-semibold">DXNC15</th>
                    <th className="px-4 py-3 font-semibold">DXNC20</th>
                    <th className="px-4 py-3 font-semibold">DXNC30</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Liquid nitrogen storage capacity</td>
                    <td className="px-4 py-3" colSpan={3}>
                      400 ml
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Ultimate vacuum</td>
                    <td className="px-4 py-3" colSpan={3}>
                      10⁻⁴ Pa
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Optical window</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">2–5, Ø40mm × 3mm</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">
                      Test sample quantity at same time
                    </td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">2</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature range</td>
                    <td className="px-4 py-3" colSpan={3}>
                      65K–500K (extendable to 800K)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Temperature accuracy</td>
                    <td className="px-4 py-3" colSpan={3}>
                      ±0.1K
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Parameters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Additional Parameters</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Number of measurement leads: 8 (expandable).</li>
              <li>Lead material: four-color phosphor bronze low-temperature wire.</li>
              <li>Sample size: standard ≤30mm × 30mm.</li>
              <li>
                Test connector: 8-core aviation plug (optional BNC, SMA interfaces).
              </li>
              <li>
                Window material: fused quartz or optional ZnSe, KBr, TPX according to wavelength
                requirements.
              </li>
              <li>Quick clamp vacuum cover design for easy sample replacement.</li>
              <li>
                Optional sample holders: electrical, optical, probe type and plug-in type fixtures.
              </li>
              <li>
                Applications: variable temperature testing, magnetic field testing and optical
                experiments.
              </li>
              <li>Other types available: atmosphere type and continuous flow type cryostats.</li>
              <li>Custom non-standard systems available on request.</li>
            </ul>
          </div>

          {/* Bottom Images */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-lg font-semibold text-zinc-900">System Images</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
                <Image
                  src="/products/cryogenic-systems/liquid-nitrogen-cryostat/image1.png"
                  alt="Liquid nitrogen cryostat system image 1"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
                <Image
                  src="/products/cryogenic-systems/liquid-nitrogen-cryostat/image2.png"
                  alt="Liquid nitrogen cryostat system image 2"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
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

