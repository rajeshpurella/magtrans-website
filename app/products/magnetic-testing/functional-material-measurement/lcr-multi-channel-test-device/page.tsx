import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "LCR Multi-channel Test Device | Functional Material Measurement | MAGTRANS Systems",
  description:
    "LCR multi-channel test device for fast, precise dielectric and resistance measurements with high-speed channel switching and broad analyzer compatibility.",
};

export default function LcrMultiChannelTestDevicePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            LCR Multi-channel Test Device
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The LCR Multi-channel Test Device is designed for multi-channel dielectric and
            resistance measurement, providing efficient channel switching and high precision
            performance when paired with compatible impedance analyzers or high resistance meters.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The multi-channel dielectric and resistance test module is also suitable for research
            and development of electronic components and sensor devices, enabling repeatable,
            automated measurements across multiple channels in laboratory and production
            environments.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Hero Image */}
          <div className="border border-zinc-200 bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center">
              <Image
                src="/products/functional-material-measurement/lcr-multi-channel-test-device/LCR Multi-channel Test Device.png"
                alt="LCR Multi-channel Test Device"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Compatible with impedance analyzers and high resistance meters.</li>
              <li>
                Optical coupler relay switching, providing high speed, long durability and reduced
                crosstalk.
              </li>
              <li>Wide bandwidth design with low error between channels.</li>
              <li>Fast channel switching time of approximately 1 ms.</li>
              <li>High-speed I/O output control for system integration and automation.</li>
            </ul>
          </div>

          {/* Parameters - General */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">General Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power supply</td>
                    <td className="px-4 py-3">Industrial frequency power supply</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Rated power supply voltage</td>
                    <td className="px-4 py-3">AC 240 V (±10% fluctuation allowed)</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Maximum rated power</td>
                    <td className="px-4 py-3">30 VA</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Display</td>
                    <td className="px-4 py-3">
                      Power indicator, error indicator, remote indicator
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Interface</td>
                    <td className="px-4 py-3">USB, LAN, RS-232C</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Volume and weight</td>
                    <td className="px-4 py-3">
                      340 (W) × 190 (H) × 180 (D) mm (excluding protrusions), 2.4 kg
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Accessories</td>
                    <td className="px-4 py-3">Power cord, instruction manual</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Options</td>
                    <td className="px-4 py-3">Connection cable L2004; RS-232</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Supported instruments</td>
                    <td className="px-4 py-3">
                      Keysight, Tonghui, Wayne Kerr, HIOKI, Dexinmag and other impedance analyzers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Parameters - Electrical */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Electrical Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Number of channels</td>
                    <td className="px-4 py-3">10 channels</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Loop resistance</td>
                    <td className="px-4 py-3">
                      0.5 Ω (input-output terminals, reference value)
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Capacitance</td>
                    <td className="px-4 py-3">
                      0.2 pF (between input terminals and OFF channels, with Guard, reference value)
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Contact specifications</td>
                    <td className="px-4 py-3">Maximum input voltage 1000 V</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Allowable current capacity</td>
                    <td className="px-4 py-3">200 mA (AC peak / DC)</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Switching time</td>
                    <td className="px-4 py-3">1.0 ms</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Insulation resistance</td>
                    <td className="px-4 py-3">
                      100 TΩ or higher (Channel – Channel shielding layer – Between shells,
                      excluding LCUR)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

