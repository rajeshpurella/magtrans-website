import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "Core Loss Tester",
    slug: "dx-30sst",
    image: "/products/soft-magnetic/core-loss-tester-dx30sst.png",
    description:
      "DX-30SST Core Loss Tester is used to measure the mass specific total loss (Ps) and magnetic induction (Bm) of oriented and non-oriented silicon steel sheets.",
  },
  {
    name: "Coercive Force Meter (Coercimeter)",
    slug: "dx-320hc",
    image: "/products/soft-magnetic/coercimeter-dx320hc.png",
    description:
      "DX-320HC Coercimeter is designed for measuring the coercivity of soft magnetic materials such as strips, bars and sheets. It is also used for testing magnetic components including relays, electromagnetic valves and magnetic heads.",
  },
  {
    name: "Soft Magnetic Materials DC Measuring Equipment",
    slug: "dx-2012sd",
    image: "/products/soft-magnetic/soft-magnetic-dc-system-dx2012sd.png",
    description:
      "DX-2012SD Soft Magnetic Materials DC Measuring System automatically measures magnetization curves and hysteresis loops of soft magnetic materials under DC conditions.",
  },
  {
    name: "Soft Magnetic Materials AC Measuring Device",
    slug: "dx-2012sa",
    image: "/products/soft-magnetic/soft-magnetic-ac-system-dx2012sa.png",
    description:
      "DX-2012SA Soft Magnetic Materials AC Measuring Device measures AC hysteresis loops, magnetization curves and loss curves of soft magnetic materials such as ferrite, permalloy, amorphous and nanocrystalline materials.",
  },
  {
    name: "Silicon Steel Material Automatic Measuring Device",
    slug: "dx-2012m",
    image: "/products/soft-magnetic/silicon-steel-measuring-dx2012m.png",
    description:
      "DX-2012M Silicon Steel Material Automatic Measuring Device is used for inspection and measurement of hot-rolled and cold-rolled oriented and non-oriented silicon steel materials.",
  },
  {
    name: "Economical Soft Magnetic Coercivity Measurement System",
    slug: "dx-2000hc",
    image: "/products/soft-magnetic/soft-magnetic-coercivity-dx2000hc.png",
    description:
      "DX-2000HC Economical Soft Magnetic Coercivity Measurement System automatically measures the coercivity (Hc) of soft magnetic materials such as bars, strips and shaped components.",
  },
  {
    name: "Magnetostrictive Materials Measuring System",
    slug: "dxss-2020",
    image:
      "/products/soft-magnetic/magnetostrictive-measuring-system-dxss2020.png",
    description:
      "DXSS-2020 Magnetostrictive Materials Measuring System is a multi-parameter device for analyzing magnetic parameters of magnetostrictive materials under AC and DC magnetic fields, including B-H curves, magnetization characteristics and magnetic energy properties.",
  },
] as const;

export const metadata: Metadata = {
  title:
    "Soft Magnetic Materials Measurement | Magnetic Testing | MAGTRANS Systems",
  description:
    "Soft magnetic characterisation equipment: core loss testers, coercimeters, DC/AC measuring systems, silicon steel measurement and coercivity systems.",
};

export default function SoftMagneticMaterialsMeasurementPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Soft Magnetic Materials Measurement
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Soft magnetic characterisation equipment for core loss, permeability
            and B–H loop analysis under varying excitation conditions.
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
                href={`/products/magnetic-testing/soft-magnetic-materials-measurement/${product.slug}`}
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
