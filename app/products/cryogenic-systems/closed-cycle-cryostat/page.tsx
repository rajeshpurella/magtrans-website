import type { Metadata } from "next";
import Link from "next/link";
import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Closed-cycle Cryostat | Cryogenic Systems | MAGTRANS Systems",
  description:
    "Closed-cycle cryostat on SHI 4 K cryocooler for variable-temperature magnetic, optical and electrical measurements without liquid helium consumption.",
  alternates: {
    canonical: "/products/cryogenic-systems/closed-cycle-cryostat",
  },
  openGraph: {
    title: "Closed-cycle Cryostat | Cryogenic Systems | MAGTRANS Systems",
    description:
      "Closed-cycle cryostat on SHI 4 K cryocooler for variable-temperature magnetic, optical and electrical measurements without liquid helium consumption.",
    images: ["/products/cryogenic-systems/Closed-cycle Cryostat.png"],
  },
};

const GALLERY_IMAGES = [
  "Closed-cycle Cryostat.png",
  "Closed-cycle Cryostat1.png",
  "Closed-cycle Cryostat3.png",
];

export default function ClosedCycleCryostatPage() {
  return (
    <ProductPageTemplate
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Cryogenic Systems", href: "/products/cryogenic-systems" },
        { label: "Closed-cycle Cryostat" },
      ]}
      hero={{
        categoryLabel: "Cryogenic Systems",
        name: "Closed-cycle Cryostat",
        tagline:
          "Variable-temperature cryogenic platform on SHI 4 K cryocooler for magnetic, optical and electrical measurements without liquid helium.",
        imageSrc: "/products/cryogenic-systems/Closed-cycle Cryostat.png",
        imageAlt: "Closed-cycle cryostat system",
        primaryCtaHref: "/#contact",
        primaryCtaLabel: "Contact Sales",
        secondaryCtaHref: "/#contact",
        secondaryCtaLabel: "Request Brochure",
      }}
      overview={{
        heading: "Product Overview",
        paragraphs: [
          "The closed-cycle cryostat provided by Dexing Magnet is a variable-temperature cryogenic platform based on the SHI 4 K cryocooler from Japan, designed for magnetic, optical and electrical measurements in low-temperature environments.",
          "Users can configure the system with optical windows, customised sample stages, extended structures and other experimental interfaces, integrating the cryostat into magneto‑optic, photoelectric, reflection, transmission, fluorescence and magnetoresistance measurement setups.",
          "Key advantages include high cost performance, compact structure, no liquid helium consumption and strong system expandability.",
        ],
      }}
      features={[
        {
          title: "Helium-free 4 K operation",
          description:
            "Achieves cryogenic temperatures around 4 K without liquid helium consumption, reducing operating cost and complexity.",
        },
        {
          title: "Stable vacuum sample environment",
          description:
            "Vacuum sample chamber maintains a controlled low‑temperature environment for precise measurements.",
        },
        {
          title: "Flexible cooling capacity",
          description:
            "Multiple cooling power options support large samples and demanding experimental loads.",
        },
        {
          title: "Compact mechanical design",
          description:
            "Space‑efficient layout simplifies installation, operation and transport within laboratory environments.",
        },
        {
          title: "Versatile sample holders",
          description:
            "Optical and electrical sample holders enable rapid mounting and reconfiguration for different experiments.",
        },
      ]}
      specifications={[
        {
          title: "Key Cryostat Parameters",
          rows: [
            {
              label: "Temperature Range",
              value: "4 K – 325 K (model dependent)",
            },
            {
              label: "Sample Environment",
              value: "Vacuum",
            },
            {
              label: "Typical Cooling Time",
              value: "60 – 150 min from room temperature to 4.2 K",
            },
          ],
        },
      ]}
      applications={[
        "Low-temperature magnetic, optical and electrical measurements",
        "Magneto‑optic and photoelectric experiments",
        "Optical reflection, transmission and fluorescence studies",
        "Magnetoresistance and transport measurements",
        "Integration into custom cryogenic test systems",
      ]}
      images={GALLERY_IMAGES.map(
        (file) => `/products/cryogenic-systems/${file}`,
      )}
    >
      {/* Original detailed content preserved below */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-12">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Product Image Gallery
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_IMAGES.map((filename, index) => (
                <div
                  key={`${filename}-${index}`}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50"
                >
                  <img
                    src={`/products/cryogenic-systems/${filename}`}
                    alt={filename.replace(".png", "")}
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                No liquid helium consumption required, enabling easy access to cryogenic
                temperatures around 4 K.
              </li>
              <li>
                Vacuum sample chamber provides a stable low-temperature experimental environment.
              </li>
              <li>
                Multiple cooling capacity options allow cooling of large samples and experimental
                loads.
              </li>
              <li>Compact design for convenient installation and movement.</li>
              <li>Optical sample holder enables quick sample mounting.</li>
              <li>Electrical sample holder provides convenient wiring terminals.</li>
              <li>
                Various optional configurations available to support different experimental
                requirements.
              </li>
            </ul>
          </div>

          {/* Performance and Characteristics */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Performance and Characteristics
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>
                Achieves cryogenic temperatures close to 4 K without consuming liquid helium.
              </li>
              <li>Stable vacuum environment for precise sample measurements.</li>
              <li>
                Multiple cooling power options suitable for different experimental loads and
                configurations.
              </li>
              <li>Compact mechanical structure for easy operation and transport.</li>
              <li>
                Quick installation sample holders for both optical and electrical experiments.
              </li>
              <li>
                Flexible configuration options for a wide range of magnetic, optical and electrical
                research applications.
              </li>
            </ul>
          </div>

          {/* Specifications and Parameters */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Specifications and Parameters
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <table className="min-w-full text-left text-sm text-zinc-800">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Model</th>
                    <th className="px-4 py-3 font-semibold">DX 101D</th>
                    <th className="px-4 py-3 font-semibold">DX 101D-4W</th>
                    <th className="px-4 py-3 font-semibold">DX 305D</th>
                    <th className="px-4 py-3 font-semibold">DX 305D-4W</th>
                    <th className="px-4 py-3 font-semibold">DX 408D2</th>
                    <th className="px-4 py-3 font-semibold">DX 408D2-4W</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Temperature Range</td>
                    <td className="px-4 py-3">5K ~ 325K</td>
                    <td className="px-4 py-3">5K ~ 325K</td>
                    <td className="px-4 py-3">4.5K ~ 325K</td>
                    <td className="px-4 py-3">4.5K ~ 325K</td>
                    <td className="px-4 py-3">4K ~ 325K</td>
                    <td className="px-4 py-3">4K ~ 325K</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Sample Environment</td>
                    <td className="px-4 py-3">Vacuum</td>
                    <td className="px-4 py-3">Vacuum</td>
                    <td className="px-4 py-3">Vacuum</td>
                    <td className="px-4 py-3">Vacuum</td>
                    <td className="px-4 py-3">Vacuum</td>
                    <td className="px-4 py-3">Vacuum</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cold Head Model</td>
                    <td className="px-4 py-3">RDK-101D</td>
                    <td className="px-4 py-3">RDK-101D</td>
                    <td className="px-4 py-3">RDK-305D</td>
                    <td className="px-4 py-3">RDK-305D</td>
                    <td className="px-4 py-3">RDK-408D2</td>
                    <td className="px-4 py-3">RDK-408D2</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Compressor Model</td>
                    <td className="px-4 py-3">CNA-11C (air cooling)</td>
                    <td className="px-4 py-3">CNA-11C (air cooling)</td>
                    <td className="px-4 py-3">CAN-31D (air cooling)</td>
                    <td className="px-4 py-3">CAN-31D (air cooling)</td>
                    <td className="px-4 py-3">F50H (water cooling)</td>
                    <td className="px-4 py-3">F50H (water cooling)</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">First Stage Cooling Capacity</td>
                    <td className="px-4 py-3">3.0W @ 60K</td>
                    <td className="px-4 py-3">3.0W @ 60K</td>
                    <td className="px-4 py-3">15W @ 40K</td>
                    <td className="px-4 py-3">15W @ 40K</td>
                    <td className="px-4 py-3">40W @ 43K</td>
                    <td className="px-4 py-3">40W @ 43K</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Second Stage Cooling Capacity</td>
                    <td className="px-4 py-3">0.1W @ 4.2K</td>
                    <td className="px-4 py-3">0.1W @ 4.2K</td>
                    <td className="px-4 py-3">0.4W @ 4.2K</td>
                    <td className="px-4 py-3">0.4W @ 4.2K</td>
                    <td className="px-4 py-3">1.0W @ 4.2K</td>
                    <td className="px-4 py-3">1.0W @ 4.2K</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">
                      Cooling Time (Room Temperature → 4.2K)
                    </td>
                    <td className="px-4 py-3">150 min</td>
                    <td className="px-4 py-3">150 min</td>
                    <td className="px-4 py-3">120 min</td>
                    <td className="px-4 py-3">120 min</td>
                    <td className="px-4 py-3">60 min</td>
                    <td className="px-4 py-3">60 min</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Optical Window</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">4</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">4</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">4</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Sample Holder Size</td>
                    <td className="px-4 py-3">15×25 mm</td>
                    <td className="px-4 py-3">30×35 mm</td>
                    <td className="px-4 py-3">20×30 mm</td>
                    <td className="px-4 py-3">40×45 mm</td>
                    <td className="px-4 py-3">30×35 mm</td>
                    <td className="px-4 py-3">60×50 mm</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Sample Base Wiring Terminal</td>
                    <td className="px-4 py-3">8</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">8</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">8</td>
                    <td className="px-4 py-3">None</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Electrical Joint</td>
                    <td className="px-4 py-3">10-core vacuum feedthrough</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Thermometers and Heaters</td>
                    <td className="px-4 py-3">Silicon diode, 50W</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Required Vacuum</td>
                    <td className="px-4 py-3">&lt; 1 Pa</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power Supply</td>
                    <td className="px-4 py-3">Single phase 220V 50Hz</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">Three phase 380V 50Hz</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">Three phase 380V 50Hz</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Power Consumption</td>
                    <td className="px-4 py-3">1.2 ~ 1.3 kW</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">3.8 ~ 4.6 kW</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">6.5 ~ 7.2 kW</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Ambient Temperature</td>
                    <td className="px-4 py-3">4 ~ 38°C</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">5 ~ 35°C</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Compressor Dimensions</td>
                    <td className="px-4 py-3">610×390×450 mm</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">901×520×520 mm</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">591×450×588 mm</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Compressor Weight</td>
                    <td className="px-4 py-3">75 kg</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">95 kg</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">120 kg</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-3 font-semibold">Cold Head Weight</td>
                    <td className="px-4 py-3">7.2 kg</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">16.0 kg</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">18.0 kg</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* System Image */}
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              System Image
            </h2>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <img
                src="/products/cryogenic-systems/image.png"
                alt="Closed-cycle cryostat system overview"
                className="h-full w-full object-contain object-center"
                loading="lazy"
              />
            </div>
          </div>

          <section>
            <div className="max-w-7xl mx-auto px-0 py-0">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                Related Pages
              </h2>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-700 list-disc list-inside">
                <li>
                  <Link
                    href="/products/cryogenic-systems"
                    className="text-emerald-700 hover:underline"
                  >
                    Cryogenic Systems domain
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/research-labs"
                    className="text-emerald-700 hover:underline"
                  >
                    Research Labs industry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/aerospace"
                    className="text-emerald-700 hover:underline"
                  >
                    Aerospace industry
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </ProductPageTemplate>
  );
}

