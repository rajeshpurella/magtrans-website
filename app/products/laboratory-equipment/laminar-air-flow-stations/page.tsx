import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Laminar Air Flow Stations | Laboratory Equipment | MAGTRANS Systems",
  description:
    "Vertical and horizontal laminar air flow stations with HEPA H14 filtration. VLAF and HLAF for pharma, microbiology, electronics, cGMP-compliant SS-304 construction.",
};

export default function LaminarAirFlowStationsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Laboratory Equipment
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Laminar Air Flow Stations
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Section 1: Vertical Laminar Air Flow (VLAF) */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Vertical Laminar Air Flow (VLAF)
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Vertical laminar airflow units provide a sterile, particle-free workspace by directing
              HEPA-filtered air vertically, pushing contaminants downward and away from the work
              surface. They reduce cross-contamination, improve product safety, and are widely used
              in pharmaceuticals, microbiology, electronics, and medical device manufacturing where
              strict cleanliness is essential.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/laboratory-equipment/laminar-air-flow-stations/Vertical Laminar Air Flow (VLAF).png"
                alt="Vertical Laminar Air Flow (VLAF)"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="space-y-4 max-w-4xl">
              <h3 className="text-base font-semibold text-zinc-900">Standard Features</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
                <li>
                  <strong>Filtration:</strong> HEPA H14 filters (supply & exhaust), captures
                  99.999% of particles down to 0.3 µm.
                </li>
                <li>
                  <strong>Construction:</strong> SS-304, cGMP-compliant, with easy-to-clean design,
                  openable covers, built-in light, auxiliary socket, air/gas cock, UV lamp,
                  adjustable sash (automatic or foot-operated), PLC/Touchscreen HMI, audio-visual
                  alarms.
                </li>
                <li>
                  <strong>Airflow & Pressure Monitoring:</strong> Digital/analog differential
                  pressure gauge, air velocity sensor.
                </li>
                <li>
                  <strong>Sound Level:</strong> Between 65 dB and 85 dB.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Horizontal Laminar Air Flow (HLAF) */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Horizontal Laminar Air Flow (HLAF)
            </h2>
          </div>

          <div className="space-y-4">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/laboratory-equipment/laminar-air-flow-stations/Horizontal Laminar Air Flow (HLAF).png"
                alt="Horizontal Laminar Air Flow (HLAF)"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="space-y-4 max-w-4xl">
              <p className="text-base text-zinc-700 leading-relaxed">
                Horizontal laminar air flow stations provide a steady stream of clean,
                HEPA-filtered air to protect sensitive products from contamination. Commonly used
                in pharma, labs, and electronics, they ensure aseptic conditions for tasks like drug
                preparation, tissue culture, and precision assembly. Their key advantages are high
                cleanliness, product safety, and operator comfort.
              </p>
              <h3 className="text-base font-semibold text-zinc-900">Standard Features</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 leading-relaxed">
                <li>
                  <strong>Filtration:</strong> Equipped with H14 HEPA filters for both supply and
                  exhaust, ensuring 99.999% efficiency down to 0.3 µm.
                </li>
                <li>
                  <strong>Airflow:</strong> Steady, uniform, turbulence-free horizontal airflow
                  across the work surface.
                </li>
                <li>
                  <strong>Construction:</strong> SS-304, cGMP-compliant design; easy to clean with
                  openable covers and various sash options (manual, foot-operated, automatic).
                </li>
                <li>
                  <strong>Controls & Safety:</strong>
                  <ul className="ml-6 mt-1 list-disc space-y-0.5">
                    <li>Digital/analog differential pressure gauge</li>
                    <li>Air velocity sensor</li>
                    <li>Feather-touch controller, PLC-based touchscreen HMI</li>
                    <li>
                      UV germicidal lamp, auxiliary sockets, audio–video alarms for pressure
                      anomalies
                    </li>
                    <li>Explosion-safe (flame-proof) fittings available</li>
                  </ul>
                </li>
                <li>
                  <strong>Lighting:</strong> Pre-installed white light at adequate LUX level
                </li>
                <li>
                  <strong>Noise Level:</strong> &gt;65 dB and &lt;85 dB
                </li>
                <li>
                  <strong>Power:</strong> Single-phase, 220 V, 50 Hz
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
