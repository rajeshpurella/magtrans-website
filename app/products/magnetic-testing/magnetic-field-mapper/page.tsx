import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "Magnetic Field Mapper",
    slug: "dx-2012r",
    image: "/products/magnetic-field-mapper/bb2049ee3d280e14603586bddd0caf6f.png",
    description:
      "DX-2012R series 3D magnetic field mapping system providing XY coordinate maps, polar plots, 3D field distribution and harmonic analysis for permanent magnets, motor stators/rotors, coils and electromagnets.",
    href: "/products/magnetic-testing/magnetic-field-mapper/dx-2012r",
  },
  {
    name: "DX-2012F Multi-dimensional Magnetic Field Testing System",
    slug: "dx-2012f",
    image: "/products/magnetic-field-mapper/9390691.png",
    description:
      "DX-2012F multi-dimensional fully automatic digital magnetic measurement platform for advanced high-precision magnetic field testing and analysis.",
    href: "/products/magnetic-testing/magnetic-field-mapper/dx-2012f",
  },
] as const;

export const metadata: Metadata = {
  title:
    "Magnetic Field Mapper Systems | Magnetic Testing | MAGTRANS Systems",
  description:
    "Magnetic field mapper and multi-dimensional magnetic field testing systems for 3D field distribution mapping, harmonic analysis and quality inspection of permanent magnets, motors, coils and electromagnets.",
};

export default function MagneticFieldMapperPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Magnetic Field Mapper Systems
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            3D magnetic field mapping and multi-dimensional magnetic field
            testing platforms for quality inspection and advanced magnetic
            analysis of permanent magnets, motors, coils and electromagnets.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 mt-10">
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
                    sizes="(min-width: 1024px) 480px, 100vw"
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
                    href={product.href}
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

