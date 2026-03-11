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

      {/* PRODUCT GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/magnetic-testing/vibrating-sample-magnetometer/${product.slug}`}
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

                  {/* Hover text */}
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

