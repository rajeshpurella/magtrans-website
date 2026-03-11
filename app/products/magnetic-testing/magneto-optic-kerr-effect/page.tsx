import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "Multifunctional Magneto-optical Kerr Microscopic Imaging System",
    slug: "moke-microscopic-imaging-system",
    image: "/products/moke/moke-microscopic-imaging-system.png",
    description:
      "Magneto-optical Kerr microscopic imaging system for visualising spatial distribution and time evolution of magnetisation states in magnetic materials and spintronic devices.",
  },
  {
    name: "Surface Magneto-optic Kerr Effect System",
    slug: "surface-moke-system",
    image: "/products/moke/surface-moke-system.png",
    description:
      "DXMOKE series surface MOKE system for measuring longitudinal, transverse and polar Kerr rotation angles and hysteresis loops to analyse coercivity and saturation fields.",
  },
  {
    name: "Wafer-Level Magneto-Optic Kerr Measuring Instrument",
    slug: "wafer-level-moke-measuring-instrument",
    image: "/products/moke/wafer-level-moke-measuring-instrument.png",
    description:
      "Wafer-level MOKE measuring instrument for fast, non-contact global magnetic property testing of wafer stacks without damaging delicate samples.",
  },
  {
    name: "Micro MOKE Magnetic Measuring Instrument",
    slug: "micro-moke-magnetic-measuring-instrument",
    image: "/products/moke/micro-moke-magnetic-measuring-instrument.png",
    description:
      "Micro MOKE magnetic measuring instrument using magneto-optical Kerr effect to measure magnetic hysteresis loops with high speed and precision without contacting the sample.",
  },
  {
    name: "Scientific Research Grade MOKE Hysteresis Loop Tester",
    slug: "scientific-moke-hysteresis-loop-tester",
    image: "/products/moke/scientific-moke-hysteresis-loop-tester.png",
    description:
      "Scientific-grade MOKE system for hysteresis loop measurement of magnetic materials, supporting both in-plane and out-of-plane magnetic field configurations.",
  },
] as const;

export const metadata: Metadata = {
  title:
    "Magneto-optic Kerr Effect Systems | Magnetic Testing | MAGTRANS Systems",
  description:
    "Magneto-optic Kerr effect (MOKE) systems for microscopic imaging, surface Kerr measurements, wafer-level testing and high-speed hysteresis loop characterisation of magnetic and spintronic materials.",
};

export default function MagnetoOpticKerrEffectPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Magneto-optic Kerr Effect Systems
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magneto-optic Kerr effect (MOKE) instruments for imaging magnetic
            domains, measuring Kerr hysteresis loops and characterising thin
            films, wafers and spintronic devices.
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
                href={`/products/magnetic-testing/magneto-optic-kerr-effect/${product.slug}`}
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

