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

      {/* PRODUCT GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/magnetic-testing/cemented-carbides-measurement/${product.slug}`}
                className="group relative block"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm text-zinc-200">
                      {product.description}
                    </p>
                    <span className="mt-4 text-emerald-400 text-sm font-medium">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

