import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "DXV-220 Vibrating Magnetometer VSM Equipment",
    slug: "dxv-220",
    image: "/products/vsm/dxv-220-vsm.png",
    description:
      "Compact vibrating sample magnetometer for routine measurement of magnetisation curves and hysteresis loops in research laboratories.",
  },
  {
    name: "DXV-100 Laboratory VSM",
    slug: "dxv-100",
    image: "/products/vsm/dxv-100-laboratory-vsm.png",
    description:
      "Laboratory-scale VSM for characterising soft and hard magnetic materials with stable field control and flexible sample holders.",
  },
  {
    name: "DXV Teaching & Research VSM",
    slug: "dxv-teaching-research",
    image: "/products/vsm/dxv-teaching-research-vsm.png",
    description:
      "Educational and research-focused VSM platform tailored for academic laboratories and defence research applications.",
  },
  {
    name: "DXV-130 Vibrating Sample Magnetometry System",
    slug: "dxv-130",
    image: "/products/vsm/dxv-130-vsm.png",
    description:
      "High-sensitivity VSM system for precise measurement of magnetic moment as a function of applied field.",
  },
  {
    name: "DXV-9000 Magnetic Moment Measurement Equipment",
    slug: "dxv-9000",
    image: "/products/vsm/dxv-9000-vsm.png",
    description:
      "Premium VSM platform for advanced magnetic moment and hysteresis studies across a wide field and temperature range.",
  },
  {
    name: "DXV-250 VSM with Temperature Control",
    slug: "dxv-250",
    image: "/products/vsm/dxv-250-vsm.png",
    description:
      "VSM with integrated temperature control for studying magnetisation behaviour from low to elevated temperatures.",
  },
  {
    name: "DXV-8000 Vibrating Sample Magnetometry System",
    slug: "dxv-8000",
    image: "/products/vsm/dxv-8000-vsm.png",
    description:
      "High-performance VSM system designed for demanding magnetic materials R&D and production support.",
  },
] as const;

export const metadata: Metadata = {
  title: "Vibrating Sample Magnetometer (VSM) | Magnetic Testing | MAGTRANS Systems",
  description:
    "Vibrating sample magnetometer systems for measuring magnetisation, hysteresis loops and magnetic moment as a function of magnetic field and temperature.",
};

export default function VibratingSampleMagnetometerPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Vibrating Sample Magnetometer (VSM)
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Vibrating sample magnetometer systems for measuring magnetisation, hysteresis
            loops and magnetic moment as a function of magnetic field and temperature in
            soft and hard magnetic materials.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            From compact laboratory instruments to advanced platforms with temperature
            control, these VSM systems support research, quality control and materials
            development in industrial and academic environments.
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
                    href={`/products/magnetic-testing/vibrating-sample-magnetometer/${product.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    View Details →
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

