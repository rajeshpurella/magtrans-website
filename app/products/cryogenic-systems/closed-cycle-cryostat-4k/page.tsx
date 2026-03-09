import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Closed-cycle Cryostat – 4K 6.5K 10K 30K | Cryogenic Systems | MAGTRANS Systems",
  description:
    "Closed-cycle cryostat series for 4K–30K operation using GM thermodynamic cycle, supporting magnetic, optical and electrical measurements in low-temperature environments.",
};

const GALLERY_IMAGES = [
  "Closed-cycle Cryostat.png",
  "Closed-cycle Cryostat1.png",
  "Closed-cycle Cryostat3.png",
];

export default function ClosedCycleCryostat4KPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Closed-cycle Cryostat – 4K 6.5K 10K 30K",
            image: [
              "https://www.magtrans.in/products/cryogenic-systems/Closed-cycle%20Cryostat%20-%204K/Closed-cycle%20Cryostat.png",
            ],
            description:
              "Closed-cycle cryostat series for 4K–30K operation using GM thermodynamic cycle, supporting magnetic, optical and electrical measurements in low-temperature environments.",
            brand: {
              "@type": "Organization",
              name: "MAGTRANS Systems",
            },
            category: "Cryogenic systems – closed-cycle cryostats",
            url:
              "https://www.magtrans.in/products/cryogenic-systems/closed-cycle-cryostat-4k",
          }),
        }}
      />
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Cryogenic Systems
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Closed-cycle Cryostat – 4K 6.5K 10K 30K
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The closed-cycle cryostat uses the G-M thermodynamic cycle principle to compress and
            expand helium. The compressor provides the high-pressure helium required during the
            cycle, which is transmitted to the cold head through a flexible metal helium pipeline.
            The compressed helium gas expands and is cooled in the cold head, and the expanded
            low-pressure helium returns to the compressor to repeat the cycle.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            The closed-cycle cryostat provided by Dexinmag is a variable temperature low-temperature
            platform based on GM refrigerators produced by domestic and foreign companies. When used
            with a high-precision temperature controller, it can accurately control the temperature
            of samples within the entire temperature range, offering simple operation and low
            maintenance cost.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            It is mainly used for magnetic measurement, optical measurement, photoelectric reaction,
            light reflection, fluorescence and magnetoresistance tests in low-temperature and vacuum
            environments. The system provides two stages of cooling: the first stage cools the
            thermal radiation shield around the sample, and the second stage cools the sample.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">Product Image Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_IMAGES.map((filename) => (
                <div
                  key={filename}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50"
                >
                  <Image
                    src={`/products/cryogenic-systems/Closed-cycle Cryostat - 4K/${filename}`}
                    alt="Closed-cycle cryostat 4K series product image"
                    fill
                    sizes="(min-width: 1024px) 320px, 50vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Suitable for electrical, optical and magnetic measurements in low temperature environments.</li>
              <li>Compact structure and high cost performance.</li>
              <li>No refrigerant consumption at low temperatures.</li>
              <li>Long maintenance-free operation.</li>
              <li>Strong scalability and easy operation.</li>
              <li>High vacuum or atmospheric sample environment.</li>
              <li>Optional optical windows with multiple materials.</li>
              <li>Gold-plated oxygen-free copper sample holders.</li>
              <li>Quick-replace sample holder system.</li>
              <li>Silicon diode or Cernox temperature sensors.</li>
              <li>Multiple configuration options for experiments.</li>
            </ul>
          </div>

          {/* Technical Specification - Table 1 */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-lg font-semibold text-zinc-900">Technical Specification</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Model</th>
                    <th className="px-4 py-3 font-semibold">T-101D</th>
                    <th className="px-4 py-3 font-semibold">T-101DL</th>
                    <th className="px-4 py-3 font-semibold">T-305D</th>
                    <th className="px-4 py-3 font-semibold">T-205D</th>
                    <th className="px-4 py-3 font-semibold">T-408D2</th>
                    <th className="px-4 py-3 font-semibold">T-415D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature range</td>
                    <td className="px-4 py-3">4-325K</td>
                    <td className="px-4 py-3">3.5-325K</td>
                    <td className="px-4 py-3">4-325K</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Heater</td>
                    <td className="px-4 py-3">60W one</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">70W one</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cold head model</td>
                    <td className="px-4 py-3">101D</td>
                    <td className="px-4 py-3">101DL</td>
                    <td className="px-4 py-3">305D</td>
                    <td className="px-4 py-3">205D</td>
                    <td className="px-4 py-3">408D2</td>
                    <td className="px-4 py-3">415D</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Lowest temperature</td>
                    <td className="px-4 py-3">&lt;3K</td>
                    <td className="px-4 py-3">&lt;3K</td>
                    <td className="px-4 py-3">3.5K</td>
                    <td className="px-4 py-3">&lt;3.5K</td>
                    <td className="px-4 py-3">&lt;3.5K</td>
                    <td className="px-4 py-3">&lt;3.5K</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cooling time</td>
                    <td className="px-4 py-3">150min to 4K</td>
                    <td className="px-4 py-3">150min to 4K</td>
                    <td className="px-4 py-3">120min to 4K</td>
                    <td className="px-4 py-3">90min to 4K</td>
                    <td className="px-4 py-3">60min to 4K</td>
                    <td className="px-4 py-3">60min to 4K</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cooling power</td>
                    <td className="px-4 py-3">0.1W@4.2K 3W@50K</td>
                    <td className="px-4 py-3">0.1W@4.2K 3W@50K</td>
                    <td className="px-4 py-3">0.4W@4.2K 15W@40K</td>
                    <td className="px-4 py-3">0.5W@4.2K 3W@50K</td>
                    <td className="px-4 py-3">1.0W@4.2K 40W@43K</td>
                    <td className="px-4 py-3">1.5W@4.2K 35W@50K</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Compressor</td>
                    <td className="px-4 py-3">CAN-11B/C</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">FA40H</td>
                    <td className="px-4 py-3">CKW-21A</td>
                    <td className="px-4 py-3">F50H</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cooling method</td>
                    <td className="px-4 py-3">Air cooling</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">Water cooling</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power consumption</td>
                    <td className="px-4 py-3">1.2-1.3KW</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">4.0-4.4KW</td>
                    <td className="px-4 py-3">2.7-3.3KW</td>
                    <td className="px-4 py-3">6.5-7.2KW</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power supply</td>
                    <td className="px-4 py-3">Single phase 220V 50/60Hz</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">Three-phase 380V 50/60Hz</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cooling water flow</td>
                    <td className="px-4 py-3">/</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">6-9L/min</td>
                    <td className="px-4 py-3">3-3.5L/min</td>
                    <td className="px-4 py-3">7-10L/min</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cooling water temperature</td>
                    <td className="px-4 py-3">/</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">4-28℃</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Compressor size</td>
                    <td className="px-4 py-3">461×400×450</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">532×442×493</td>
                    <td className="px-4 py-3">471×401×450</td>
                    <td className="px-4 py-3">591×450×588</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Compressor weight</td>
                    <td className="px-4 py-3">70Kg</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">96Kg</td>
                    <td className="px-4 py-3">70Kg</td>
                    <td className="px-4 py-3">120Kg</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Specification - Table 2 Placeholder */}
          <div className="space-y-4 max-w-6xl">
            <h3 className="text-base font-semibold text-zinc-900">Additional Models – Set 2</h3>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Models</th>
                    <th className="px-4 py-3 font-semibold">T-062B</th>
                    <th className="px-4 py-3 font-semibold">T-082B</th>
                    <th className="px-4 py-3 font-semibold">T-182B2S</th>
                    <th className="px-4 py-3 font-semibold">T-204N</th>
                    <th className="px-4 py-3 font-semibold">T408S2</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Detailed parameter rows to be filled with vendor data. */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Specification - Table 3 Placeholder */}
          <div className="space-y-4 max-w-6xl">
            <h3 className="text-base font-semibold text-zinc-900">Additional Models – Set 3</h3>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Models</th>
                    <th className="px-4 py-3 font-semibold">TCH202</th>
                    <th className="px-4 py-3 font-semibold">TCH204</th>
                    <th className="px-4 py-3 font-semibold">TCH208R</th>
                    <th className="px-4 py-3 font-semibold">TCH208L</th>
                    <th className="px-4 py-3 font-semibold">TCH210</th>
                    <th className="px-4 py-3 font-semibold">TCH210N</th>
                    <th className="px-4 py-3 font-semibold">TCH210L</th>
                    <th className="px-4 py-3 font-semibold">TKDE210SA</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Detailed parameter rows to be filled with vendor data. */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Specification - Table 4 Placeholder */}
          <div className="space-y-4 max-w-6xl">
            <h3 className="text-base font-semibold text-zinc-900">Additional Models – Set 4</h3>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Models</th>
                    <th className="px-4 py-3 font-semibold">T500B</th>
                    <th className="px-4 py-3 font-semibold">T400B</th>
                    <th className="px-4 py-3 font-semibold">TC110LT</th>
                    <th className="px-4 py-3 font-semibold">TCH110</th>
                    <th className="px-4 py-3 font-semibold">TCH104</th>
                    <th className="px-4 py-3 font-semibold">T125D</th>
                    <th className="px-4 py-3 font-semibold">TKDE400SX</th>
                    <th className="px-4 py-3 font-semibold">TKDE535</th>
                    <th className="px-4 py-3 font-semibold">TKDE400SA</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Detailed parameter rows to be filled with vendor data. */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Configuration / Information */}
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">Temperature Sensor</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Silicon diode temperature sensor</li>
                <li>Iron rhodium temperature sensor</li>
                <li>Cernox™ temperature sensor (suitable for magnetic fields)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">Temperature Stability</h2>
              <p className="text-sm text-zinc-700 leading-relaxed">
                ±0.01K depending on DXTC-290 temperature controller.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">Vacuum Evacuation</h2>
              <p className="text-sm text-zinc-700 leading-relaxed">
                No special requirements, KF25 interface.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">Experiment Type</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Optical experiments</li>
                <li>Electrical experiments</li>
                <li>Spectrometer integration</li>
                <li>Three-stage vibration isolation</li>
                <li>Sample vibration less than 1 micron</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">Number of Windows</h2>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Electrical experiments: no windows required.
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Optical experiments: 1-5 windows available.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">Window Materials</h2>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Fused quartz, infrared silicon, sapphire, zinc selenide, zinc sulfide, cadmium,
                germanium, silicon, cadmium fluoride, Mylar, Kapton. Custom sizes are supported.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">Standard Configuration</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
                <li>Vacuum cover</li>
                <li>Temperature sensor and heater</li>
                <li>Gold-plated oxygen-free copper sample holder</li>
                <li>KF25 vacuum suction port</li>
                <li>KF16 release valve</li>
                <li>8-pin electrical vacuum connector</li>
                <li>
                  Compressor, cold head drive cable, high-pressure nitrogen pipe and toolkit
                </li>
                <li>Cold head mounting bracket</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

