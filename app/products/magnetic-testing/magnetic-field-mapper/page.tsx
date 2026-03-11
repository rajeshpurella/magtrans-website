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

      {/* PRODUCT GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
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

