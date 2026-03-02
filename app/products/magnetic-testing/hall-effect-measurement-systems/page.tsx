import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hall Effect Measurement Systems | Magnetic Testing | MAGTRANS Systems",
  description:
    "Hall effect measurement systems for determining carrier concentration, mobility, resistivity and Hall coefficient in semiconductor and functional materials.",
};

const HALL_PRODUCTS = [
  {
    name: "DX-70 Hall Measurement System",
    slug: "dx-70",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-70.avif",
    description:
      "Measures carrier concentration, mobility, resistivity and Hall coefficient of semiconductor materials.",
  },
  {
    name: "DX-100 Hall Effect Measurement Equipment",
    slug: "dx-100",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-100.avif",
    description:
      "Integrated electromagnet-based system with precision current source, voltmeter and system software.",
  },
  {
    name: "DX-3000 Hall Effect Device",
    slug: "dx-3000",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-3000.avif",
    description:
      "Fully automated system integrating Hall effect, magnetoresistance and IV characteristics testing.",
  },
  {
    name: "DX-30 Permanent Magnet Hall Effect Meter",
    slug: "dx-30",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-30.avif",
    description:
      "Permanent magnet based Hall measurement system with high-precision Gauss meter and current source.",
  },
  {
    name: "DX-60 Hall Effect Measurement Instrument",
    slug: "dx-60",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-60.avif",
    description:
      "Electromagnet-based precision Hall effect measurement system for semiconductor materials.",
  },
  {
    name: "DX-50 Hall Effect Measurement System",
    slug: "dx-50",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-50.avif",
    description:
      "Laboratory Hall measurement system for research and semiconductor device studies.",
  },
  {
    name: "High & Low Temperature Hall Effect Test System",
    slug: "high-low-temperature",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/high-low-temperature.avif",
    description:
      "Temperature-controlled Hall measurement setup with Dewar and thermal controller.",
  },
  {
    name: "DX-1000H High Temperature Hall Measurement Setup",
    slug: "dx-1000h",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-1000h.avif",
    description:
      "High temperature vacuum Hall measurement system with precision magnetic field control.",
  },
  {
    name: "DX-1000L Low Temperature Hall Effect Test System",
    slug: "dx-1000l",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-1000l.avif",
    description:
      "Low temperature Hall effect test system for cryogenic semiconductor characterisation.",
  },
  {
    name: "DX-9000 Electrical Transport Properties Measurement System",
    slug: "dx-9000",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-9000.avif",
    description:
      "Automated transport property measurement system integrating Hall effect and magnetoresistance testing.",
  },
  {
    name: "DX-300 Automatic Hall Effect Test System",
    slug: "dx-300-automatic",
    image: "/products/magnetic-testing/hall-effect-measurement-systems/dx-300-automatic.avif",
    description:
      "Fully automatic electromagnetic Hall effect test system with micro-probe integration.",
  },
];

export default function HallEffectMeasurementSystemsPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-sm text-gray-500">
            Products &gt; Magnetic Testing &gt; Products &amp; Systems &gt; Hall
            Effect Measurement Systems
          </p>
        </div>
      </section>

      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Hall Effect Measurement Systems
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            MAGTRANS offers Hall Effect Measurement Systems for determining
            carrier concentration, mobility, resistivity and Hall coefficient in
            semiconductor and functional materials under controlled magnetic
            fields.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {HALL_PRODUCTS.map((product) => (
              <div
                key={product.slug}
                className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={200}
                  className="object-contain h-[160px] w-full mb-4"
                />
                <h3 className="text-base font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <Link
                  href={`/products/magnetic-testing/hall-effect-measurement-systems/${product.slug}`}
                  className="text-sm font-medium text-blue-600"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

