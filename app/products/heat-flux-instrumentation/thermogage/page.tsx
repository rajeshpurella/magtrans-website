import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thermogage | Heat Flux & Instrumentation | MAGTRANS Systems",
  description:
    "Vatell Thermogage circular-foil heat flux transducers (Gardon gauges). Water-cooled and conduction-cooled sensors, radiometers. TG-1000, TG-2000, TG-9000 series.",
};

export default function ThermogagePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Heat Flux & Instrumentation
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Thermogage
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Vatell&apos;s Thermogage line of sensors are circular-foil heat flux transducers, also
            known as Gardon gauges, that have been used for measuring heat flux for decades.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The all-metal construction and fully brazed joints make these sensors the sturdiest
            circular-foil transducers available. Many different housing designs are available to
            adapt to almost any application.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Product Image */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">Product Image</h2>
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/heat-flux-instrumentation/thermogage/Thermogage.png"
                alt="Thermogage"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Overview */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Vatell&apos;s Thermogage line of sensors are circular-foil heat flux transducers,
              also known as Gardon gauges, that have been used for measuring heat flux for decades.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The all-metal construction and fully brazed joints make these sensors the sturdiest
              circular-foil transducers available. Many different housing designs are available to
              adapt to almost any application.
            </p>
          </div>

          {/* Section 1: TG-1000 Series */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              TG-1000 Series Water-Cooled Heat Flux Sensors
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Water-cooled circular-foil heat flux gauges have an active heat sink and so are less
              sensitive to mounting conditions, especially for applications with longer measurement
              times or high heat flux levels.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">Popular models include:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>TG1000-1</li>
              <li>TG1000-0 (flanged)</li>
              <li>TG1000-30 (pipe-style)</li>
            </ul>
          </div>

          {/* Section 2: TG-2000 Series */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              TG-2000 Series Conduction-Cooled Heat Flux Sensors
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Conduction-cooled circular foil heat flux gauges are designed for applications with
              short measurement times in which the total amount of heat absorbed by the gauge will
              not raise its temperature beyond 200°C.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">The basic model is:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>TG2000-0</li>
            </ul>
          </div>

          {/* Section 3: TG-9000 Series */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              TG-9000 Series Water-Cooled Radiometers
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Vatell radiometers are standard heat flux sensors with a window in front of the
              sensing element to screen out convection so that only radiation is measured.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The window is placed directly on the water-cooled copper surface to minimize its
              heating, but is not in contact with the sensing element itself.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Sapphire is the standard window material with a spectral range of 0.3–5 microns. Its
              hardness and chemical resistance allow it to withstand harsh environments.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Other materials such as ZnSe (0.6–17 microns range) are available upon request.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">Standard model:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>TG9000-9</li>
            </ul>
          </div>

          {/* Specification Table */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-lg font-semibold text-zinc-900">Specification Table</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Thermogage</th>
                    <th className="px-4 py-3 font-semibold">TG-1000</th>
                    <th className="px-4 py-3 font-semibold">TG-2000</th>
                    <th className="px-4 py-3 font-semibold">TG-9000</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Min. Std. Dia.</td>
                    <td className="px-4 py-3">0.5&quot;</td>
                    <td className="px-4 py-3">0.250&quot;</td>
                    <td className="px-4 py-3">1.0&quot;</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Min. Std. Length</td>
                    <td className="px-4 py-3">1&quot;</td>
                    <td className="px-4 py-3">0.5&quot;</td>
                    <td className="px-4 py-3">1&quot;</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">
                      Range (Must Specify when ordering****)*
                    </td>
                    <td className="px-4 py-3">5 to 5000 W/cm²</td>
                    <td className="px-4 py-3">5 to 5000 W/cm²</td>
                    <td className="px-4 py-3">10 to 500 W/cm²</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Max. Sensitivity</td>
                    <td className="px-4 py-3">2 mV/(W/cm²)</td>
                    <td className="px-4 py-3">2 mV/(W/cm²)</td>
                    <td className="px-4 py-3">1 mV/(W/cm²)</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Accuracy</td>
                    <td className="px-4 py-3">±3%</td>
                    <td className="px-4 py-3">±3%</td>
                    <td className="px-4 py-3">±3%</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Repeatability</td>
                    <td className="px-4 py-3">1%</td>
                    <td className="px-4 py-3">1%</td>
                    <td className="px-4 py-3">1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Section */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Transmitters and Panel Meters
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              A digital readout or an alternate signal type is sometimes required. For those
              applications Vatell will pair a heat flux sensor with a calibrated Texmate digital
              panel meter or a Moore Industries signal transmitter. Ask our sales department for
              more details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
