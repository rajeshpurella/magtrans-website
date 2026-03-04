import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "DX-9700HC Hard Metal Magnetometer",
    slug: "dx-9700hc",
    image: "/products/cemented-carbides-measurement/dx-9700hc.png",
    description:
      "DX-9700HC Magnetometer is a high-precision instrument developed by Dexinmag for measuring the magnetic properties of cemented carbides (WC-Co alloys) and semi-hard magnetic materials, supporting quality control and research in hard metal production.",
  },
] as const;

export const metadata: Metadata = {
  title:
    "Cemented Carbides Measurement | Magnetic Testing | MAGTRANS Systems",
  description:
    "Magnetic measurement systems for cemented carbides (WC-Co alloys) and semi-hard magnetic materials, supporting quality control and research in hard metal production.",
};

export default function CementedCarbidesMeasurementPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Cemented Carbides Measurement
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magnetic property measurement systems for cemented carbides and
            semi-hard magnetic materials, supporting production quality control
            and research.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <div
                key={product.slug}
                className="rounded-xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-52 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h2 className="text-base font-semibold text-zinc-900">
                    {product.name}
                  </h2>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/products/magnetic-testing/cemented-carbides-measurement/${product.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

