import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DX-9000 Electrical Transport Properties Measurement System | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "DX-9000 electrical transport properties measurement system integrating Hall effect, R–T, R–H and I–V characterisation with multiple system configurations and temperature options.",
};

export default function DX9000ElectricalTransportPropertiesMeasurementSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Hall Effect Measurement System
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-9000 Electrical Transport Properties Measurement System
          </h1>
          <p className="text-base text-zinc-700 leading-relaxed">
            Multi-configuration Hall and transport measurement platform for sheet
            resistance, Hall coefficient, mobility and magnetoresistance across wide
            resistance and temperature ranges.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
          <p className="text-base text-zinc-700 leading-relaxed">
            The DX-9000 electrical transport properties measurement system is designed for
            comprehensive characterisation of semiconductors and functional materials. By
            integrating an electromagnet or superconducting magnet, precision Keithley
            instrumentation and dedicated sample cards, the system measures Hall effect,
            resistivity and magnetoresistance with high accuracy.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Fully automated software controls current, magnetic field and temperature to
            acquire Hall, R–T, R–H and I–V characteristics, and derives parameters such as
            sheet resistance, resistivity, Hall coefficient, Hall mobility, carrier
            concentration and conductivity type. Multiple configurations support standard,
            high-sensitivity and high-resistance measurement requirements.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Measures Hall effect, R–T, R–H and I–V characteristics with automated
                parameter extraction.
              </li>
              <li>
                Derives sheet resistance, resistivity, Hall coefficient, mobility, carrier
                concentration and conductivity type.
              </li>
              <li>
                Multiple system configurations for standard, high-sensitivity and
                high-resistance measurements.
              </li>
              <li>
                Wide resistance range from low milliohm to gigaohm regimes (depending on
                configuration).
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                Plug-in sample cards simplify sample mounting and support multi-sample
                measurement.
              </li>
              <li>
                Stable magnetic field with smooth zero crossing and integrated gauss
                meter.
              </li>
              <li>
                Temperature options from liquid nitrogen to high-temperature furnace
                ranges.
              </li>
              <li>
                Measurements and curves automatically stored and exportable for further
                analysis.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS – CONFIGURATION SUMMARY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900 text-center">
            Technical Specifications
          </h2>

          {/* Configuration summary table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Configuration
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Models
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Mobility range
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Carrier concentration
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Resistivity range
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Resistance range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Standard system</td>
                  <td className="px-4 py-2 text-zinc-700">
                    DX-9003 / DX-9005 / DX-9007
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 – 1 × 10⁵ cm²/V·s</td>
                  <td className="px-4 py-2 text-zinc-700">
                    6 × 10¹² – 6 × 10²¹ cm⁻³
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    5 × 10⁻⁷ – 5 × 10² Ω·cm
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    10 mΩ – 10 MΩ
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">High sensitivity system</td>
                  <td className="px-4 py-2 text-zinc-700">
                    DX-9003HS / DX-9005HS / DX-9007HS
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 – 1 × 10⁶ cm²/V·s</td>
                  <td className="px-4 py-2 text-zinc-700">
                    6 × 10¹² – 6 × 10²³ cm⁻³
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    5 × 10⁻⁹ – 5 × 10² Ω·cm
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.1 mΩ – 10 mΩ (down to 100 nΩ with low-resistance option)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">High resistance system</td>
                  <td className="px-4 py-2 text-zinc-700">
                    DX-9003HR / DX-9005HR / DX-9007HR
                  </td>
                  <td className="px-4 py-2 text-zinc-700">1 – 1 × 10⁶ cm²/V·s</td>
                  <td className="px-4 py-2 text-zinc-700">
                    6 × 10⁸ – 6 × 10²³ cm⁻³
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    5 × 10⁻⁹ – 5 × 10⁶ Ω·cm
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    0.1 mΩ – 10 GΩ (down to 100 nΩ with low-resistance option)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Magnetic field & temperature options (summary) */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                Magnetic Field Options
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Room‑temperature fields up to ~1 T, 2.4 T or 2.6 T at 10 mm spacing.</li>
                <li>
                  Variable‑temperature fields up to ~0.44 T, 1.7 T or 2.0 T with liquid
                  nitrogen cryostat.
                </li>
                <li>
                  Additional options using closed‑cycle refrigerators with fields up to
                  ~1.5 T.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                Temperature Options
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Single‑point liquid nitrogen box at 77 K.</li>
                <li>
                  Liquid nitrogen thermostat: ~80 K – 325 K (standard) or 80 K – 500 K
                  (high temperature).
                </li>
                <li>
                  Closed‑cycle refrigerator: ~4 K – 325 K or 10 K – 325 K depending on
                  configuration.
                </li>
                <li>High‑temperature furnace up to ~1000 K.</li>
              </ul>
            </div>
          </div>

          {/* Sample & footprint */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                Sample Capacity
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>
                  Maximum sample sizes up to approximately 10 × 10 × 3 mm, 30 × 30 × 3 mm
                  or 50 × 50 × 3 mm depending on configuration.
                </li>
                <li>
                  Standard systems accommodate 2 samples simultaneously (expandable to 4
                  with options).
                </li>
                <li>
                  High‑sensitivity and high‑resistance systems typically accommodate 1
                  sample.
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                Footprint
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Standard configuration footprint from ~2 m × 1.5 m.</li>
                <li>
                  Larger magnet and cryostat options up to approximately 5 m × 2 m floor
                  area.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Transport property studies of semiconductors, oxides and complex functional
              materials.
            </li>
            <li>
              High‑ and low‑resistance material characterisation across wide temperature
              and field ranges.
            </li>
            <li>
              Device and material development requiring ASTM‑aligned Hall and resistivity
              testing.
            </li>
            <li>
              Advanced teaching and research laboratories needing flexible Hall and
              magnetoresistance measurement capabilities.
            </li>
          </ul>
        </div>
      </section>

      {/* OPTIONAL COMPONENTS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">Optional Components</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Helium‑free superconducting magnet and cryogenic platform with higher field
              and extended temperature range.
            </li>
            <li>
              Additional temperature options including liquid nitrogen boxes, thermostats,
              closed‑cycle systems and high‑temperature furnaces.
            </li>
            <li>
              Optical access options such as polar heads and light‑shielding enclosures.
            </li>
            <li>
              Rotating mechanisms, vacuum pumps, water‑cooling units and other auxiliary
              hardware.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

