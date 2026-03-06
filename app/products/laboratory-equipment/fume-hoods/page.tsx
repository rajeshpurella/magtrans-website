import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fume Hoods | Laboratory Equipment | MAGTRANS Systems",
  description:
    "Laboratory fume hoods for limiting exposure to hazardous fumes, vapours or dust. Constant volume and VAV, bench top, walk-in, ductless models.",
};

export default function FumeHoodsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Laboratory Equipment
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Fume Hoods
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Fume hood is a type of local ventilation device that is designed to limit exposure to
            hazardous or toxic fumes, vapours or dust. Air is drawn from lab space into the fume
            hood then dispersed via a pipe to the outside atmosphere. Basically, it protects the
            user from inhaling toxic gases.
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
                src="/products/laboratory-equipment/fume-hoods/Fume Hoods.png"
                alt="Fume Hoods"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Section 1: Constant volume / Variable air volume */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Constant volume :</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The exhaust flow rate or quantity of air pulled through the hood is constant. In this
              configuration, when the sash is lowered, and the cross-sectional area of the hood
              opening decreases, the velocity of airflow (face velocity) through the hood increases
              proportionally. Thus, the air velocity at the hood face increases with the sash&apos;s
              lowering.
            </p>
            <h2 className="text-lg font-semibold text-zinc-900 pt-2">
              Variable air volume: (VAV) –
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The exhaust flow rate or quantity of air pulled through the hood varies as the sash is
              raised or lowered to maintain a constant face velocity. Therefore, when the sash is
              lowered and the cross-sectional area of the hood opening decreases, the rate of
              airflow (face velocity) through the hood remains constant, reducing the total air
              volume exhausted.
            </p>
          </div>

          {/* Section 2: Models */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Models -</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>Bench Top</li>
              <li>Walk-In</li>
              <li>Duct Less</li>
            </ul>
          </div>

          {/* Section 3: Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features -</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>Made from Galvanized Iron Sheets and further Powder Coated for long life.</li>
              <li>
                Internal Chamber made with Strong and Fire Resistant Phenolic Resin Sheets
              </li>
              <li>Internal Water Tap & Sink</li>
              <li>Exhaust Damper</li>
              <li>Under Structure Storage modules with Castor</li>
              <li>Vertical Sliding Sash</li>
              <li>Five Utility Valve</li>
              <li>Electrical Sockets</li>
              <li>LED Light</li>
            </ul>
          </div>

          {/* Section 4: Applications */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Applications –</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>Chemical lab</li>
              <li>Food manufacturer</li>
              <li>Drugs manufacturer company</li>
              <li>Paint manufacturing company</li>
              <li>Rubber industry</li>
              <li>Polymer industry</li>
              <li>Cement industry</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
