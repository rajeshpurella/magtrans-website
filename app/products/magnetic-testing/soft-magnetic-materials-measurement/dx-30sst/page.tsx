import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "DX-30SST Core Loss Tester | Soft Magnetic Materials Measurement | MAGTRANS Systems",
  description:
    "DX-30SST silicon steel sheet core loss tester for measuring mass specific total loss (Ps) and magnetic induction (Bm) of oriented and non-oriented silicon steel sheets.",
};

export default function DX30SSTCoreLossTesterPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            DX-30SST Core Loss Tester
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Soft Magnetic Materials Measurement
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Core loss tester for determining mass specific total loss (Ps) and
            magnetic induction (Bm) of oriented and non-oriented silicon steel
            sheets.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/soft-magnetic/core-loss-tester-dx30sst.png"
              alt="DX-30SST Core Loss Tester"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            DX-30SST silicon steel sheet core loss tester adopts SCM technology and
            analog electronic technology. The magnetic circuit of the permeameter
            uses a <strong>low-loss silicon steel iron core</strong>, making it
            suitable for accurate measurement of the magnetic characteristics of
            silicon steel sheets.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The tester is designed to meet the requirements of{" "}
            <strong>silicon steel sheet grade tracing and quality testing</strong>.
            The hardware circuit design follows the Chinese industry standard{" "}
            <strong>GB/T 3655-2000</strong>.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Through real-time sampling of secondary induction voltage V and primary
            exciting current I, the system compensates the air flux to below{" "}
            <strong>1.0 mV</strong>. Wave feedback technology ensures a{" "}
            <strong>stable sinusoidal magnetic flux waveform</strong>, providing
            more accurate measurement results compared with similar products.
          </p>
        </div>
      </section>

      {/* KEY FUNCTIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Key Functions</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Accurate closed-circuit permeameter measurement for oriented and
              non-oriented silicon steel
            </li>
            <li>
              Open-circuit permeameter loss measurement for monolithic stator
              (P1.5/50)
            </li>
            <li>
              Closed-circuit measurement can lock magnetic induction{" "}
              <strong>Bm</strong> to measure <strong>Ps</strong>
            </li>
            <li>
              Closed-circuit measurement can lock excitation magnetic strength{" "}
              <strong>Hm</strong> to measure <strong>Bm</strong>
            </li>
            <li>
              Zero magnetic flux compensation in closed-circuit permeameter
            </li>
            <li>Supports standard square magnetic measurement method</li>
            <li>Direct operation through front panel controls</li>
            <li>RS232 interface for connection to PC and test software</li>
            <li>
              Supports BH hysteresis loop, permeability curve (μ-H) and Ps-B loss
              measurement
            </li>
          </ul>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Technical Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Parameter
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Input Voltage</td>
                  <td className="px-4 py-2 text-zinc-700">220V ±20V / 0.5A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Frequency</td>
                  <td className="px-4 py-2 text-zinc-700">50 Hz</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Output Voltage</td>
                  <td className="px-4 py-2 text-zinc-700">15V / 1.5A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Saturation Magnetic Induction Range (Bm)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">500 mT – 1900 mT</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Excitation Magnetic Strength Range (Hm)
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    100 A/m – 10000 A/m
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Ps Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">2.0%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Bm Accuracy</td>
                  <td className="px-4 py-2 text-zinc-700">2.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OPTIONAL CONFIGURATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Optional Configurations
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            DX-30SST silicon steel sheet iron loss tester can be configured with
            different excitation tooling depending on the test requirements.
          </p>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Open-Circuit Permeameter
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Suitable for monolithic testing in finished silicon stators.
              Supports direct testing under <strong>P1.5/50</strong> conditions
              with an accuracy of <strong>5.0%</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              Closed-Circuit Permeameter
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Suitable for accurate measurement of monolithic silicon stators
              with length above <strong>150 mm</strong> and width between{" "}
              <strong>20 mm and 30 mm</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-900">
              DX-30SST Test Software
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              DX-30SST test software supports measurement and analysis of:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>BH hysteresis loop</li>
              <li>Demagnetization curve</li>
              <li>Ps, Bm, Br, Hc</li>
              <li>Permeability μa</li>
              <li>Magnetic loss parameters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Applications</h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Electrical steel sheet testing</li>
            <li>Transformer core material inspection</li>
            <li>Motor stator magnetic testing</li>
            <li>Electrical steel manufacturing quality control</li>
            <li>Research laboratories and universities</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

