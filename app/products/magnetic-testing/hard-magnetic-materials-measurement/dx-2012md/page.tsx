import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-2012MD Magnetic Flux Density Experimental Device | MAGTRANS Systems",
  description:
    "DX-2012MD device for temperature dependence of magnetic flux density. Reversible and irreversible loss curves, high-temperature demagnetization. Room temp to 200°C.",
};

export default function DX2012MDFluxDensityPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-2012MD Magnetic Flux Density Experimental Device
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Hard Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Studies temperature dependence of magnetic flux density. Electromagnet
            heating with fluxmeter and Helmholtz coil for reversible and
            irreversible loss and high-temperature demagnetization.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/hard-magnetic/dx-2012md-flux-density.png"
              alt="DX-2012MD Magnetic Flux Density Experimental Device"
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
            DX-2012MD Magnetic Flux Density Experimental Device is designed to
            analyze the temperature dependence of magnetic flux density in
            permanent magnet materials. The system measures the change in magnetic
            flux after heating the sample and returning it to normal temperature,
            allowing evaluation of both{" "}
            <strong>reversible and irreversible magnetic flux density loss curves</strong>
            .
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            By applying a reverse magnetic field through an electromagnet, the
            system can also obtain the{" "}
            <strong>
              demagnetization curve of magnetic materials under high temperature
              conditions
            </strong>
            . This helps evaluate the thermal stability and operating range of
            permanent magnets used in magnetic circuits.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The device combines an electromagnet heating structure, flux
            measurement system and Helmholtz coil to provide reliable experimental
            data for magnetic material research and testing.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Measurement of reversible and irreversible magnetic flux density
              loss curves
            </li>
            <li>
              Heating temperature range from room temperature to{" "}
              <strong>200°C</strong>
            </li>
            <li>Thermal copper fixture ensures uniform heating of the sample</li>
            <li>
              Reverse magnetic field capability for high-temperature
              demagnetization testing
            </li>
            <li>
              Suitable for evaluation of thermal stability of rare earth
              permanent magnets
            </li>
            <li>
              Compatible with fluxmeter and Helmholtz coil measurement systems
            </li>
          </ul>
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
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Component
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Gap Heating Electromagnet (DXT-100)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Provides adjustable magnetic field and heating capability
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Heating Power Supply (DX-200C)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Controls heating temperature of the sample
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Excitation Power Supply (DXF2031)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Provides excitation current for electromagnet
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">AC Gaussmeter (DX-103)</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Measures magnetic field strength
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Fluxmeter System</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Measures magnetic flux of the sample
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Helmholtz Coil</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Used for magnetic moment and flux measurement
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GAP HEATING ELECTROMAGNET SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Gap Heating Electromagnet Specifications
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
                  <td className="px-4 py-2 text-zinc-700">Magnetic Field Gap</td>
                  <td className="px-4 py-2 text-zinc-700">0 – 50 mm adjustable</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Gap Display Resolution</td>
                  <td className="px-4 py-2 text-zinc-700">0.01 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Pole Surface Diameter</td>
                  <td className="px-4 py-2 text-zinc-700">100 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Uniform Magnetic Area</td>
                  <td className="px-4 py-2 text-zinc-700">≥ 60 mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Field Uniformity</td>
                  <td className="px-4 py-2 text-zinc-700">0.1%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Field Strength
                  </td>
                  <td className="px-4 py-2 text-zinc-700">≥ 750 kA/m at 25 mm gap</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature Range</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Room temperature – 200°C
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature Resolution</td>
                  <td className="px-4 py-2 text-zinc-700">0.1°C</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Temperature Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">±1.0% ±0.2°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HEATING POWER SUPPLY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Heating Power Supply (DX-200C)
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
                  <td className="px-4 py-2 text-zinc-700">Input Power</td>
                  <td className="px-4 py-2 text-zinc-700">220V ±10%, 50Hz</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Output Power</td>
                  <td className="px-4 py-2 text-zinc-700">400 VA</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Features</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Temperature setting and temperature control probe
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXCITATION POWER SUPPLY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Excitation Power Supply (DXF2031)
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
                  <td className="px-4 py-2 text-zinc-700">Input Power</td>
                  <td className="px-4 py-2 text-zinc-700">220V ±10%, 50Hz</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Output Power</td>
                  <td className="px-4 py-2 text-zinc-700">400 VA</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Function</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Provides excitation current for electromagnet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AC GAUSSMETER */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            AC Gaussmeter (DX-103)
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
                  <td className="px-4 py-2 text-zinc-700">Measurement Range</td>
                  <td className="px-4 py-2 text-zinc-700">0 – 0.2 T / 0 – 2 T</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Measurement Uncertainty
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    1.0% (&lt;1T), 2.0% (1T–2T)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Thermal stability testing of permanent magnets</li>
            <li>Magnetic flux density loss analysis</li>
            <li>High-temperature magnetic material research</li>
            <li>Rare earth permanent magnet testing</li>
            <li>Magnetic circuit design evaluation</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
