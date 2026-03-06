import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProductSlugs, getProductBySlug } from "@/data/products";

type PageProps = {
  params: { slug: string[] };
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {};
  }

  const path = `/products/${product.slug}`;

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: path,
    },
    twitter: {
      title: product.title,
      description: product.description,
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const isDx3000 =
    params.slug.join("/") ===
    "magnetic-testing/hall-effect-measurement-systems/dx-3000";

  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-4">
          <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            HALL EFFECT MEASUREMENT SYSTEM
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            {product.title}
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            {product.description}
          </p>
          </div>
        </div>
      </section>

      {isDx3000 && (
        <>
          {/* Main configuration - U.S. Keithley equipment */}
          <section className="border-b border-zinc-200">
            <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">
                  Main Configuration
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  U.S. Keithley equipment configuration for different resistance
                  ranges.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-zinc-200 text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900 align-bottom">
                        System (resistance range)
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        2400
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        6220
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        2700
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        2182A
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        6485
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        7001
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        7709
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        7012
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        7152
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        6514
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        488B
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr>
                      <td className="px-3 py-2 align-top text-zinc-800">
                        <div className="font-medium">
                          Standard (10 mΩ – 10 MΩ)
                        </div>
                      </td>
                      {["1", "", "1", "", "", "", "1", "", "", "", "1"].map(
                        (val, idx) => (
                          <td
                            key={idx}
                            className="px-3 py-2 text-center text-zinc-700"
                          >
                            {val}
                          </td>
                        ),
                      )}
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top text-zinc-800">
                        <div className="font-medium">
                          High sensitivity (0.1 mΩ – 10 MΩ)
                        </div>
                      </td>
                      {["1", "", "", "1", "", "1", "1", "", "", "", "1"].map(
                        (val, idx) => (
                          <td
                            key={idx}
                            className="px-3 py-2 text-center text-zinc-700"
                          >
                            {val}
                          </td>
                        ),
                      )}
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top text-zinc-800">
                        <div className="font-medium">
                          High voltage &amp; impedance (0.1 mΩ – 100 GΩ)
                        </div>
                      </td>
                      {["", "1", "", "1", "1", "1", "", "2", "2", "1", "1"].map(
                        (val, idx) => (
                          <td
                            key={idx}
                            className="px-3 py-2 text-center text-zinc-700"
                          >
                            {val}
                          </td>
                        ),
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Magnetic parts */}
          <section className="border-b border-zinc-200">
            <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
              <h2 className="text-xl font-semibold text-zinc-900">
                Magnetic parts
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-zinc-200 text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                        Magnetic Field Range
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                        Magnet
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                        Water cooling equipment
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                        Magnetic Field Measuring Device
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                        Power
                      </th>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                        Software
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr>
                      <td className="px-3 py-2 text-zinc-700">0–1T @ 10mm</td>
                      <td className="px-3 py-2 text-zinc-700">DX-100</td>
                      <td className="px-3 py-2 text-zinc-700">—</td>
                      <td className="px-3 py-2 text-zinc-700">
                        DX-160 Gaussmeter (accuracy 0.2%)
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        DX-2030 1 kW
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        Fully automatic data processing and plotting
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-zinc-700">0–2.4T @ 10mm</td>
                      <td className="px-3 py-2 text-zinc-700">DX-130</td>
                      <td className="px-3 py-2 text-zinc-700">—</td>
                      <td className="px-3 py-2 text-zinc-700">
                        DX-180 Gaussmeter (accuracy 0.05%)
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        DX-10030 3 kW
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        Fully automatic data processing and plotting
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-zinc-700">0–2.6T @ 10mm</td>
                      <td className="px-3 py-2 text-zinc-700">DX-178</td>
                      <td className="px-3 py-2 text-zinc-700">
                        8 kW water cooling
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        DX-180 Gaussmeter (accuracy 0.05%)
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        DX-10050 5 kW
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        Fully automatic data processing and plotting
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Low temperature portion & main technical indexes */}
          <section className="border-b border-zinc-200">
            <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-zinc-900">
                  Low temperature portion (optional)
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 text-sm">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                          Temperature Range
                        </th>
                        <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                          Cooling body
                        </th>
                        <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                          Temperature control device
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                      <tr>
                        <td className="px-3 py-2 text-zinc-700">80–500K</td>
                        <td className="px-3 py-2 text-zinc-700">
                          Liquid nitrogen thermostat
                        </td>
                        <td className="px-3 py-2 text-zinc-700">TC202</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-zinc-700">4–500K</td>
                        <td className="px-3 py-2 text-zinc-700">
                          Cycle refrigerator
                        </td>
                        <td className="px-3 py-2 text-zinc-700">TC202</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-zinc-700">4–325K</td>
                        <td className="px-3 py-2 text-zinc-700">
                          Cryogenic low temperature system
                        </td>
                        <td className="px-3 py-2 text-zinc-700">TC202</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-zinc-700">45–325K</td>
                        <td className="px-3 py-2 text-zinc-700">
                          CTI small refrigerator
                        </td>
                        <td className="px-3 py-2 text-zinc-700">TC202</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Sample size
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                    {product.sampleSize.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Sample measurement method
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                    {product.sampleMeasurementMethod.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Magnetic field environment */}
          <section className="border-b border-zinc-200">
            <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
              <h2 className="text-xl font-semibold text-zinc-900">
                Magnetic field environment
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-zinc-200 text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-zinc-900">
                        Model index
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        DX-100
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        DX-130
                      </th>
                      <th className="px-3 py-2 text-center font-semibold text-zinc-900">
                        DX-180
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr>
                      <td className="px-3 py-2 font-semibold text-zinc-900">
                        Pole diameter
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-700">
                        60 mm (optional)
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-700">
                        100 mm (optional)
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-700">
                        120 mm (optional)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-zinc-900">
                        Air gap
                      </td>
                      <td className="px-3 py-2 text-zinc-700 whitespace-pre-line">
                        {`Room temp.: 10 mm\nLiquid nitrogen thermostat: 24 mm (optional)\nARS refrigerator: 40 mm (optional)`}
                      </td>
                      <td className="px-3 py-2 text-zinc-700 whitespace-pre-line">
                        {`Room temp.: 10 mm\nLiquid nitrogen thermostat: 24 mm (optional)\nARS refrigerator: 40 mm (optional)`}
                      </td>
                      <td className="px-3 py-2 text-zinc-700 whitespace-pre-line">
                        {`Room temp.: 10 mm\nLiquid nitrogen thermostat: 24 mm (optional)\nARS refrigerator: 40 mm (optional)`}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-zinc-900">
                        Max. magnetic field
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        1.5 T / 0.9 T / 0.6 T
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        2.5 T / 1.5 T / 1.0 T
                      </td>
                      <td className="px-3 py-2 text-zinc-700">
                        2.7 T / 2.0 T / 1.4 T
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-zinc-900">
                        Uniformity
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-700">
                        ±1%
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-700">
                        ±1%
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-700">
                        ±1%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-2">
          {product.functions.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                Core Functions
              </h2>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                {product.functions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {product.parametersMeasured.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                Parameters Measured
              </h2>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                {product.parametersMeasured.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-2">
          {product.sampleMeasurementMethod.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                Sample Measurement Methods
              </h2>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                {product.sampleMeasurementMethod.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {product.sampleSize.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                Supported Sample Sizes
              </h2>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                {product.sampleSize.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

