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
                    href={`/products/magnetic-testing/soft-magnetic-materials-measurement/${product.slug}`}
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
