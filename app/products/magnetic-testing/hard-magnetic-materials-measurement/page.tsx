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

      {/* PRODUCT GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/magnetic-testing/hard-magnetic-materials-measurement/${product.slug}`}
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
