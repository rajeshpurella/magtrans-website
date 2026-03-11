import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hall Effect Measurement Systems | Magnetic Testing | MAGTRANS Systems",
  description:
    "Hall effect systems for measuring carrier concentration, mobility, resistivity and Hall coefficient in semiconductor and functional materials.",
};

const HALL_PRODUCTS = [
  {
    name: "DX-70 Hall Measurement System",
    slug: "dx-70",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-70.png",
    description:
      "Measures carrier concentration, mobility, resistivity and Hall coefficient of semiconductor materials.",
  },
  {
    name: "DX-100 Hall Effect Measurement Equipment",
    slug: "dx-100",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-100.png",
    description:
      "Integrated electromagnet-based system with precision current source, voltmeter and system software.",
  },
  {
    name: "DX-3000 Hall Effect Device",
    slug: "dx-3000",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-3000.png",
    description:
      "Fully automated system integrating Hall effect, magnetoresistance and IV characteristics testing.",
  },
  {
    name: "DX-30 Permanent Magnet Hall Effect Meter",
    slug: "dx-30",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-30.png",
    description:
      "Permanent magnet based Hall measurement system with high-precision Gauss meter and current source.",
  },
  {
    name: "DX-60 Hall Effect Measurement Instrument",
    slug: "dx-60",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-60.png",
    description:
      "Electromagnet-based precision Hall effect measurement system for semiconductor materials.",
  },
  {
    name: "DX-50 Hall Effect Measurement System",
    slug: "dx-50",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-50.png",
    description:
      "Laboratory Hall measurement system for research and semiconductor device studies.",
  },
  {
    name: "High & Low Temperature Hall Effect Test System",
    slug: "high-low-temperature",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/high-low-temperature.png",
    description:
      "Temperature-controlled Hall measurement setup with Dewar and thermal controller.",
  },
  {
    name: "DX-1000H High Temperature Hall Measurement Setup",
    slug: "dx-1000h",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-1000h.png",
    description:
      "High temperature vacuum Hall measurement system with precision magnetic field control.",
  },
  {
    name: "DX-1000L Low Temperature Hall Effect Test System",
    slug: "dx-1000l",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-1000l.png",
    description:
      "Low temperature Hall effect test system for cryogenic semiconductor characterisation.",
  },
  {
    name: "DX-9000 Electrical Transport Properties Measurement System",
    slug: "dx-9000",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-9000.png",
    description:
      "Automated transport property measurement system integrating Hall effect and magnetoresistance testing.",
  },
  {
    name: "DX-300 Automatic Hall Effect Test System",
    slug: "dx-300-automatic",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-300-automatic.png",
    description:
      "Fully automatic electromagnetic Hall effect test system with micro-probe integration.",
  },
];

export default function HallEffectMeasurementSystemsPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Hall Effect Measurement Systems",
            image: [
              "https://www.magtrans.in/products/magnetic-testing/hall-effect-measurement-systems/dx-1000l.png",
            ],
            description:
              "Hall effect systems for measuring carrier concentration, mobility, resistivity and Hall coefficient in semiconductor and functional materials.",
            brand: {
              "@type": "Organization",
              name: "MAGTRANS Systems",
            },
            category:
              "Magnetic testing – Hall effect measurement systems",
            url:
              "https://www.magtrans.in/products/magnetic-testing/hall-effect-measurement-systems",
          }),
        }}
      />
      {/* Breadcrumb */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-500">
            Products &gt; Magnetic Testing &gt; Products &amp; Systems &gt; Hall
            Effect Measurement Systems
          </p>
        </div>
      </section>

      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Hall Effect Measurement Systems
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
            MAGTRANS offers Hall Effect Measurement Systems for determining
            carrier concentration, mobility, resistivity and Hall coefficient in
            semiconductor and functional materials under controlled magnetic
            fields.
          </p>
        </div>
      </section>

      {/* Product gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
            {HALL_PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/magnetic-testing/hall-effect-measurement-systems/${product.slug}`}
                className="group relative block"
              >
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1400}
                    height={1800}
                    quality={100}
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          <div className="mt-16 border-t border-zinc-200 pt-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Related Pages
            </h2>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-700 list-disc list-inside">
              <li>
                <Link
                  href="/products/magnetic-testing"
                  className="text-emerald-700 hover:underline"
                >
                  Magnetic Testing domain overview
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/research-labs"
                  className="text-emerald-700 hover:underline"
                >
                  Research Labs industry
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/universities"
                  className="text-emerald-700 hover:underline"
                >
                  Universities industry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

