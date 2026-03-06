import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bio Safety Cabinets | Laboratory Equipment | MAGTRANS Systems",
  description:
    "Bio Safety Cabinets (BSCs) Class I, Class II (A2, B1, B2), and Class III. Operator, product and environment protection for pharma, biotech, microbiology, R&D.",
};

export default function BioSafetyCabinetsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Laboratory Equipment
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Bio Safety Cabinets
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Bio Safety Cabinets (BSCs) across three containment classes—Class I, Class II, and
            Class III—including highly utilized Class II and III models. These cabinets are designed
            to offer comprehensive safety for operators, products, and the environment.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/laboratory-equipment/bio-safety-cabinets/Bio Safety Cabinets.png"
                alt="Bio Safety Cabinets"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Section 1: Three Levels of Containment */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Three Levels of Containment
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>
                <strong>Class I:</strong> Protects user and environment (no product protection)
              </li>
              <li>
                <strong>Class II:</strong> (Types A2, B1, B2): Simultaneously safeguards user,
                environment, and product
              </li>
              <li>
                <strong>Class III:</strong> Fully enclosed, gas-tight systems with glove access,
                commonly used for highest biosafety needs
              </li>
            </ul>
          </div>

          {/* Section 2: Advanced Filtration */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Advanced Filtration</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>
                HEPA filters creating laminar airflow and ensuring effective containment of airborne
                particles.
              </li>
            </ul>
          </div>

          {/* Section 3: Control Options */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Control Options</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>
                <strong>Standard:</strong> Microprocessor-based controls
              </li>
              <li>
                <strong>Advanced:</strong> HMI touchscreen integrated with PLCs for monitoring and
                control.
              </li>
            </ul>
          </div>

          {/* Section 4: Wide Application Suitability */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Wide Application Suitability
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>
                Suitable for environments like pharmaceuticals, biotechnology, microbiology, cell
                culture, R&D laboratories, and pharmaceutical compounding
              </li>
              <li>
                Securely handles biohazardous materials with precision.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
