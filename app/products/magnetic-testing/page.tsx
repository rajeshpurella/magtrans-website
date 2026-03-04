import type { Metadata } from "next";
import Link from "next/link";
import { getDomainBySlug } from "@/lib/products-data";
import ContextBackLink from "@/app/components/ContextBackLink";

export const metadata: Metadata = {
  title: "Magnetic Testing | MAGTRANS Systems",
  description:
    "Hall effect measurement, VSM, hard and soft magnetic materials, cemented carbides, magneto-optic Kerr effect, field mappers, shielding and functional material measurement.",
};

const SYSTEMS: { name: string; description: string; href: string }[] = [
  {
    name: "Hall Effect Measurement Systems",
    description:
      "Hall effect measurement systems for characterising carrier concentration, mobility and resistivity in semiconducting and conducting materials.",
    href: "/products/magnetic-testing/hall-effect-measurement-systems",
  },
  {
    name: "Vibrating Sample Magnetometer",
    description:
      "Vibrating sample magnetometers for measuring magnetisation curves, hysteresis loops and magnetic moment as a function of field and temperature.",
    href: "/products/magnetic-testing/vibrating-sample-magnetometer",
  },
  {
    name: "Hard Magnetic Materials Measurement",
    description:
      "Measurement systems for hard magnetic materials covering coercivity, remanence and energy product determination.",
    href: "/products/magnetic-testing/hard-magnetic-materials-measurement",
  },
  {
    name: "Soft Magnetic Materials Measurement",
    description:
      "Soft magnetic characterisation equipment for core loss, permeability and B–H loop analysis under varying excitation conditions.",
    href: "/products/magnetic-testing/soft-magnetic-materials-measurement",
  },
  {
    name: "Cemented Carbides Measurement",
    description:
      "Magnetic measurement systems for cemented carbides to assess cobalt content, phase distribution and quality control parameters.",
    href: "/products/magnetic-testing/cemented-carbides-measurement",
  },
  {
    name: "Magneto-optic Kerr Effect",
    description:
      "Magneto-optic Kerr effect setups for probing surface magnetisation, domain structure and thin film hysteresis behaviour.",
    href: "/products/magnetic-testing/magneto-optic-kerr-effect",
  },
  {
    name: "Magneto-optical",
    description:
      "Magneto-optical instruments for imaging and analysing spatial magnetic field distributions in functional materials.",
    href: "/products/magnetic-testing/magneto-optical",
  },
  {
    name: "Magnetic Field Mapper",
    description:
      "Magnetic field mappers for three-dimensional field mapping, homogeneity analysis and magnet assembly verification.",
    href: "/products/magnetic-testing/magnetic-field-mapper",
  },
  {
    name: "Magnetic Shielding Device",
    description:
      "Magnetic shielding devices for reducing or eliminating unwanted magnetic fields in sensitive environments such as laboratories, precision electronics, medical equipment and magnetic measurement setups.",
    href: "/products/magnetic-testing/magnetic-shielding-device",
  },
  {
    name: "Functional Material Measurement",
    description:
      "Measurement systems for analysing the magnetic and functional properties of advanced and smart materials, supporting R&D of magnetic functional materials and emerging electronic devices.",
    href: "/products/magnetic-testing/functional-material-measurement",
  },
];

export default function MagneticTestingPage() {
  const domain = getDomainBySlug("magnetic-testing")!;

  return (
    <main className="bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700 mb-3">
            Products
          </p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">
            {domain.title}
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            {domain.intro}
          </p>
          <div className="mt-8">
            <ContextBackLink />
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10">
            Products &amp; Systems
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SYSTEMS.map((system) => (
              <Link
                key={system.name}
                href={system.href}
                className="block"
              >
                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {system.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {system.description}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-emerald-700 mt-4 inline-block">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
