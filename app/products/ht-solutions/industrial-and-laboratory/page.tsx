import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industrial & Laboratory Furnaces | HT Solutions | MAGTRANS Systems",
  description:
    "Microwave furnaces, laboratory furnaces and industrial bottom loading furnaces. High temperature muffle, split tube and tubular furnaces up to 1800°C.",
};

export default function IndustrialAndLaboratoryPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            HT Solutions
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Industrial & Laboratory Furnaces
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Section 1: Microwave Furnaces */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Microwave Furnaces</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Microwave furnaces represent a system that combines free radiating heating elements
              with a microwaves field. Key advantages include greater energy efficiency, faster
              sample heating, more uniform heating and improves material properties.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/ht-solutions/industrial-and-laboratory/Microwave Furnaces.png"
                alt="Microwave Furnaces"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white max-w-2xl">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Heating System</td>
                    <td className="px-4 py-3">Microwave By Magnetron</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power Rating</td>
                    <td className="px-4 py-3">2.45 GHz with 900W each x 2</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Operation</td>
                    <td className="px-4 py-3">Single Phase/AC</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power Output</td>
                    <td className="px-4 py-3">Two magnetrons with total 1.8KW</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Maximum Temperature</td>
                    <td className="px-4 py-3">1200°C Max</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Normal Working Temperature</td>
                    <td className="px-4 py-3">1100°C</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Rate of Heating</td>
                    <td className="px-4 py-3">Programmable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Laboratory Furnaces */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Laboratory Furnaces</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Microwave furnaces represent a system that combines free radiating heating elements
              with a microwaves field. Key advantages include greater energy efficiency, faster
              sample heating, more uniform heating and improves material properties.
            </p>
            <div>
              <p className="text-base font-medium text-zinc-900 mb-2">Laboratory Furnaces</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Hight Temperature Furnace</li>
                <li>Muffle Furnace</li>
                <li>Split Tube Furnace</li>
                <li>Tubular Furnaces</li>
              </ul>
            </div>
            <p className="text-base text-zinc-700 leading-relaxed">
              Bottom loading furnaces are designed for uniform thermal distribution inside the
              chamber, easy loading and unloading of the sample with help of lifting arrangement.
              Bottom loading furnaces are ideal to achieve a variety of heating-cooling cycles
              without sacrificing temperature uniformity or product quality.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              These furnaces are well suited for calcining, firing and sintering oxide ceramic
              parts (i.e., alumina, zirconia), technical ceramics, co-fired substrate materials,
              capacitors, filters, thermistors, ferrites.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The high-temperature bottom loading furnaces are additionally equipped with a drying
              as well as a forced cooling function. For residual drying, the oven remains open
              gapwise during heating up to a defined temperature and thus ensures reliable removal
              of moisture.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              For accelerated cooling, the furnace is automatically opened step by step under
              program control.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/ht-solutions/industrial-and-laboratory/Laboratory Furnaces.png"
                alt="Laboratory Furnaces"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white max-w-2xl">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Maximum Operating Temperature</td>
                    <td className="px-4 py-3">1200/1400/1600/1800°C</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature Controller</td>
                    <td className="px-4 py-3">Microprocessor based PID controller</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Operation</td>
                    <td className="px-4 py-3">Single Phase/AC</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Bottom Lifting Arrangement</td>
                    <td className="px-4 py-3">
                      Bottom lifting plate fitted with DC motor ensure smooth lifting & lowering.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Industrial Furnaces */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Industrial Furnaces</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Industrial Bottom Loading Furnace is suitable for 1600°C as well as 1800°C
              application. The Industrial Bottom Loading Furnace is a kind of user friendly
              operating system that comes with smooth bottom lifting arrangement.
            </p>
            <p className="text-base font-medium text-zinc-900">Industrial Furnaces</p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The Industrial Bottom Loading is widely used for firing and sintering of advanced
              ceramics and high temperature glass melting application.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Industrial Bottom Loading Furnace offers high temperature accuracy in a range of
              ±1°C
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/ht-solutions/industrial-and-laboratory/Industrial Furnaces.png"
                alt="Industrial Furnaces"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white max-w-2xl">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Maximum Temperature</td>
                    <td className="px-4 py-3">1200 /1400°C/1600°C/1800°C</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Insulation</td>
                    <td className="px-4 py-3">
                      Multiple Layers of High Temperature Fiber Insulation Boards Ensure Minimum
                      Heat Loss
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Bottom Lifting Arrangement</td>
                    <td className="px-4 py-3">
                      Bottom Lifting Plate Fitted with Dc Motor Ensures Smooth Lifting & Lowering
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Bottom Lifting Arrangement</td>
                    <td className="px-4 py-3">
                      Bottom Lifting Plate Fitted with Dc Motor Ensures Smooth Lifting & Lowering
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
