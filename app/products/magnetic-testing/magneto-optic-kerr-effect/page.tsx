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
                    href={`/products/magnetic-testing/magneto-optic-kerr-effect/${product.slug}`}
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

