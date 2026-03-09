import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "Ferroelectric Test System",
    slug: "ferroelectric-test-system",
    image:
      "/products/functional-material-measurement/ferroelectric-test-system.png",
    description:
      "Ferroelectric material testing system for hysteresis loop, fatigue, imprint, C-V curve, leakage current and dielectric capacitance measurements.",
  },
  {
    name: "Laser Doppler Vibrometer",
    slug: "laser-doppler-vibrometer",
    image:
      "/products/functional-material-measurement/laser-doppler-vibrometer.png",
    description:
      "DXLV-03 fiber laser Doppler vibrometer combining advanced optical testing and digital signal processing for high-resolution, low-noise vibration measurement.",
  },
  {
    name: "Dielectric Charging and Discharging System",
    slug: "dielectric-charging-discharging-system",
    image:
      "/products/functional-material-measurement/dielectric-charging-discharging-system.png",
    description:
      "Dielectric charge and discharge test system for studying high-voltage discharge performance of dielectric energy storage materials.",
  },
  {
    name: "Impedance Analyzer",
    slug: "impedance-analyzer",
    image:
      "/products/functional-material-measurement/impedance-analyzer.png",
    description:
      "Precision impedance analyzer for characterising complex impedance versus frequency in functional materials and electronic components.",
  },
  {
    name: "Electrical Properties Measurement System",
    slug: "electrical-properties-measurement-system",
    image:
      "/products/functional-material-measurement/electrical-properties-measurement-system.png",
    description:
      "System for measuring ferroelectric, piezoelectric, pyroelectric, dielectric and insulation properties under controlled temperature environments.",
  },
  {
    name: "Insulation Resistance Tester",
    slug: "insulation-resistance-tester",
    image:
      "/products/functional-material-measurement/insulation-resistance-tester.png",
    description:
      "High-temperature insulation resistance tester using a parallel-plate method with improved anti-interference and measurement stability.",
  },
  {
    name: "Dielectric Measurement System",
    slug: "dielectric-measurement-system",
    image:
      "/products/functional-material-measurement/dielectric-measurement-system.png",
    description:
      "Dielectric temperature spectrum measurement system for electrical testing of insulating materials across temperature and frequency ranges.",
  },
  {
    name: "LCR Multi-channel Test Device",
    slug: "lcr-multi-channel-test-device",
    image:
      "/products/functional-material-measurement/lcr-multi-channel-test-device.png",
    description:
      "Multi-channel LCR test device for simultaneous dielectric and resistance measurements in electronic component and sensor R&D.",
  },
  {
    name: "Piezoelectric Coefficient Tester",
    slug: "piezoelectric-coefficient-tester",
    image:
      "/products/functional-material-measurement/piezoelectric-coefficient-tester.png",
    description:
      "High-temperature piezoelectric coefficient tester using advanced weak-signal acquisition and FPGA digital technology for accurate measurements.",
  },
  {
    name: "Atomic Force Microscope",
    slug: "atomic-force-microscope",
    image:
      "/products/functional-material-measurement/atomic-force-microscope/Atomic Force Microscope.png",
    description:
      "Wafer-level atomic force microscope for 3D surface morphology characterisation of conductors, semiconductors and insulating materials.",
  },
  {
    name: "Thermal Stimulation Current Tester",
    slug: "thermal-stimulation-current-tester",
    image:
      "/products/functional-material-measurement/thermal-stimulation-current-tester.png",
    description:
      "DX-TSC thermal stimulation current tester for studying dielectric relaxation time, phase transitions, glass transition temperature and activation energy.",
  },
] as const;

export const metadata: Metadata = {
  title:
    "Functional Material Measurement Systems | Magnetic Testing | MAGTRANS Systems",
  description:
    "Measurement systems for characterising electrical and functional properties of advanced materials, including ferroelectric, piezoelectric, dielectric, insulation and vibration testing instruments.",
};

export default function FunctionalMaterialMeasurementPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Functional Material Measurement Systems
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Instruments for measuring ferroelectric, piezoelectric, dielectric,
            insulation and vibration properties of functional and smart
            materials.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {PRODUCTS.map((product) => (
              <div
                key={product.slug}
                className="rounded-xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-40 mb-4">
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
                    href={`/products/magnetic-testing/functional-material-measurement/${product.slug}`}
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

