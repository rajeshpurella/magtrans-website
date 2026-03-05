import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Piezoelectric Coefficient Tester | Functional Material Measurement | MAGTRANS Systems",
  description:
    "High-temperature piezoelectric coefficient tester for accurate d33 measurement and piezoelectric temperature spectrum analysis of piezoelectric and ferroelectric materials.",
};

export default function PiezoelectricCoefficientTesterPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Functional Material Measurement
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Piezoelectric Coefficient Tester
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The high-temperature piezoelectric coefficient tester is designed based on Dexinmag&apos;s
            advantages in weak signal acquisition technology. The system uses FPGA digital
            technology to provide a stable test frequency for the exciter and works together with
            the B&amp;K exciter as the vibration source.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Compared with traditional d33 measuring instruments, the DXPC-800 piezoelectric
            coefficient tester provides higher measurement accuracy, wider measurement range,
            improved reliability and simpler operation. By measuring the variation of the
            piezoelectric constant d33 with temperature, the instrument can directly analyse the
            piezoelectric temperature spectrum of the sample.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            It can be widely used in the evaluation and testing of piezoelectric materials
            (piezoelectric ceramics and polymers), ferroelectric materials and related electronic
            and functional material devices.
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
                src="/products/functional-material-measurement/piezoelectric-coefficient-tester/Piezoelectric Coefficient Tester.png"
                alt="Piezoelectric Coefficient Tester"
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
              <li>Eliminates the impact of grid harmonics on measurement accuracy.</li>
              <li>
                Imported B&amp;K exciter provides a more accurate and stable vibration frequency.
              </li>
              <li>
                ADA4870 driving technology perfectly matches the B&amp;K exciter and provides a
                stable closed-loop loading force.
              </li>
              <li>
                FPGA digital architecture enables a wide measurement range from 30 Hz to 140 Hz.
              </li>
              <li>
                High-resistance charge amplifier reduces signal loss during measurement of weak
                piezoelectric responses.
              </li>
              <li>DC linear heating reduces eddy current heating noise.</li>
              <li>
                Vacuum electrode design avoids pyroelectric charges caused by insulating brackets
                entering the measurement system.
              </li>
            </ul>
          </div>

          {/* Instrument Parameters */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">Instrument Parameters</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Test frequency</td>
                    <td className="px-4 py-3">
                      Adjustable range 30 Hz – 140 Hz, accuracy ±0.1 Hz
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Test load</td>
                    <td className="px-4 py-3">
                      Static force 10 N, oscillation test load 0.05 N – 0.5 N adjustable
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Capacitance measurement range</td>
                    <td className="px-4 py-3">
                      10 pF – 0.1 μF, accuracy ±2% ±1 pF
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature range</td>
                    <td className="px-4 py-3">RT – 650°C</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Heating method</td>
                    <td className="px-4 py-3">
                      PID control (including LVDC noise reduction power supply)
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature stability</td>
                    <td className="px-4 py-3">
                      ±0.05°C (&gt;25°C), ±0.1°C (&lt;25°C)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Software function</td>
                    <td className="px-4 py-3">
                      Adjustable temperature control rate, programmable temperature control,{" "}
                      temperature curve recording
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Electrical Property Parameters */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Electrical Property Parameters
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">High range</td>
                    <td className="px-4 py-3">
                      10 – 1000 pC/N, accuracy ±2% ±1 pC/N, load 1.0 μF
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Ultra-high range</td>
                    <td className="px-4 py-3">
                      100 – 10,000 pC/N, accuracy ±2% ±1 pC/N, load 1.0 μF
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Low range</td>
                    <td className="px-4 py-3">
                      1 – 100 pC/N, accuracy ±2% ±0.1 pC/N, load 1.0 μF
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Ultra-low range</td>
                    <td className="px-4 py-3">
                      d33 0 – 10 pC/N, accuracy ±2% ±0.01 pC/N, load 0.1 μF
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

