import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vatell Signal Conditioning Amplifiers | Heat Flux & Instrumentation | MAGTRANS Systems",
  description:
    "Vatell signal conditioning amplifiers for heat flux and temperature sensors. Dual and single channel amps for HFM and Thermogage, with transmitters and panel meters.",
};

export default function SignalConditioningAmplifiersPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Heat Flux & Instrumentation
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Vatell Signal Conditioning Amplifiers
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Whether looking at a low heat flux level, pushing a signal through a long cable length,
            or even just for signal processing convenience, a signal conditioning amplifier can make
            the difference between a mediocre signal and solid data. Vatell provides a number of
            amplifiers designed to work with our sensors. We can also provide signal transmitters
            and panel meters for ease of use.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Product Image */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">Product Image</h2>
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <Image
                src="/products/heat-flux-instrumentation/signal-conditioning-amplifiers/Vatell Signal Conditioning Amplifiers.png"
                alt="Vatell Signal Conditioning Amplifiers"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Overview */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Whether looking at a low heat flux level, pushing a signal through a long cable
              length, or even just for signal processing convenience, a signal conditioning
              amplifier can make the difference between a mediocre signal and solid data. Vatell
              provides a number of amplifiers designed to work with our sensors. We can also
              provide signal transmitters and panel meters for ease of use.
            </p>
          </div>

          {/* Section 1: Dual Channel HFM Amplifiers */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Dual Channel HFM Amplifiers
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              These amps are designed to boost the signal of both the heat flux and temperature
              outputs from our thin-film heat flux sensor the HFM, having one channel for each.
              Each channel has an independent gain and an output voltage range of up to 5V.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              For the HFM-6 and HFM-7 which have resistance temperature sensors, the Vatell
              amplifiers include a calibrated current source for interrogation so that the output
              is a user-friendly voltage signal.
            </p>
          </div>

          {/* Section 2: Single Channel Amplifiers */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Single Channel Amplifiers
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The AMP-15 is primarily designed to work with our Thermogage sensors, but can be
              used with any single output Vatell sensor. Normally the AMP-15 and Thermogage are
              calibrated as a pair, but separate sensor and amplifier calibrations are available if
              requested.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The typical use is to provide a good sensitivity for low range applications but with
              a fast time response. The AMP-15 can also provide a voltage boost for data
              acquisition systems that need more signal than the nominal 10mV range of the
              Thermogage.
            </p>
          </div>

          {/* Amplifier Table */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-lg font-semibold text-zinc-900">Amplifier Table</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Amplifier</th>
                    <th className="px-4 py-3 font-semibold">Gain Range</th>
                    <th className="px-4 py-3 font-semibold">Gain Set</th>
                    <th className="px-4 py-3 font-semibold">Temperature Channel</th>
                    <th className="px-4 py-3 font-semibold">Supports Sensor</th>
                    <th className="px-4 py-3 font-semibold">Power</th>
                    <th className="px-4 py-3 font-semibold">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AMP-6</td>
                    <td className="px-4 py-3">1 to 5000</td>
                    <td className="px-4 py-3">User select</td>
                    <td className="px-4 py-3">RTS</td>
                    <td className="px-4 py-3">HFM-6&7</td>
                    <td className="px-4 py-3">Battery</td>
                    <td className="px-4 py-3">1.7&quot;x7.5&quot;x11&quot;</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AMP-8</td>
                    <td className="px-4 py-3">1 to 3000</td>
                    <td className="px-4 py-3">Factory set</td>
                    <td className="px-4 py-3">RTS</td>
                    <td className="px-4 py-3">HFM-6&7</td>
                    <td className="px-4 py-3">5VDC Supply</td>
                    <td className="px-4 py-3">1¼&quot;x1½&quot;x4&quot;</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AMP-10</td>
                    <td className="px-4 py-3">1 to 5000</td>
                    <td className="px-4 py-3">User select</td>
                    <td className="px-4 py-3">RTS</td>
                    <td className="px-4 py-3">HFM-6&7</td>
                    <td className="px-4 py-3">18VDC Supply</td>
                    <td className="px-4 py-3">1.7&quot;x7.5&quot;x11&quot;</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AMP-12</td>
                    <td className="px-4 py-3">1 to 5000</td>
                    <td className="px-4 py-3">User select</td>
                    <td className="px-4 py-3">TC</td>
                    <td className="px-4 py-3">HFM-8</td>
                    <td className="px-4 py-3">Battery</td>
                    <td className="px-4 py-3">1.7&quot;x7.5&quot;x11&quot;</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AMP-13</td>
                    <td className="px-4 py-3">1 to 5000</td>
                    <td className="px-4 py-3">User select</td>
                    <td className="px-4 py-3">TC</td>
                    <td className="px-4 py-3">HFM-8</td>
                    <td className="px-4 py-3">18VDC Supply</td>
                    <td className="px-4 py-3">1.7&quot;x7.5&quot;x11&quot;</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3">AMP-15</td>
                    <td className="px-4 py-3">99 to 1000</td>
                    <td className="px-4 py-3">Factory set</td>
                    <td className="px-4 py-3">none</td>
                    <td className="px-4 py-3">Thermogage & Schmidt-Boelter</td>
                    <td className="px-4 py-3">Battery or 5-18VDC Supply</td>
                    <td className="px-4 py-3">1¼&quot;x1½&quot;x4&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Transmitters and Panel Meters */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Transmitters and Panel Meters
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              A digital readout or an alternate signal type is sometimes required. For those
              applications Vatell will pair a heat flux sensor with a calibrated Texmate digital
              panel meter or a Moore Industries signal transmitter. Ask our sales department for
              more details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
