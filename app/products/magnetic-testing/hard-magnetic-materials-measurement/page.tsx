import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "BH Tracer Hysteresis Graph Test System",
    slug: "dx-2012h",
    image: "/products/hard-magnetic/dx-2012h-bh-tracer.png",
    description:
      "DX-2012H DC Hysteresis Graph Test System measures remanence (Br), coercive force (Hcb), intrinsic coercive force (Hcj) and maximum magnetic energy product (BHmax) of permanent magnets including ferrite, alnico, NdFeB and samarium cobalt. Displays BH hysteresis loops and demagnetization curves.",
  },
  {
    name: "Magnetic Moment and Magnetic Declination Measurement System",
    slug: "dx-2012am",
    image: "/products/hard-magnetic/dx-2012am-magnetic-moment.png",
    description:
      "DX-2012AM uses a three-dimensional Helmholtz coil and three-component fluxmeter to measure magnetic moment and magnetic declination of permanent magnet materials. Computer processing of three-axis data provides a complete magnetic quality testing solution.",
  },
  {
    name: "Magnetic Moment Testing Equipment for Rare Earth Permanent Magnet Materials",
    slug: "dx-2012mq",
    image: "/products/hard-magnetic/dx-2012mq-magnetic-moment.png",
    description:
      "DX-2012MQ measures magnetic flux and magnetic moment of rare earth permanent magnets. Fluxmeter with one-dimensional Helmholtz coil determines Br, Hcb and BHmax of permanent magnet devices.",
  },
  {
    name: "Magnetic Flux Density Experimental Device",
    slug: "dx-2012md",
    image: "/products/hard-magnetic/dx-2012md-flux-density.png",
    description:
      "DX-2012MD studies temperature dependence of magnetic flux density. Electromagnet heating with fluxmeter and Helmholtz coil measures magnetic flux or moment under different temperature conditions.",
  },
] as const;

export const metadata: Metadata = {
  title:
    "Hard Magnetic Materials Measurement | Magnetic Testing | MAGTRANS Systems",
  description:
    "Measurement systems for hard magnetic materials: BH tracers, magnetic moment and declination systems, rare earth magnet testing, and flux density measurement.",
};

export default function HardMagneticMaterialsMeasurementPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Hard Magnetic Materials Measurement
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Measurement systems for hard magnetic materials covering coercivity,
            remanence, magnetic moment and energy product determination for
            permanent magnets including ferrite, alnico, NdFeB and samarium cobalt.
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
                    href={`/products/magnetic-testing/hard-magnetic-materials-measurement/${product.slug}`}
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
