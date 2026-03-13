import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export const metadata: Metadata = {
  title:
    "DXV-130 Vibrating Sample Magnetometry System | VSM | MAGTRANS Systems",
  description:
    "DXV-130 VSM system for magnetic materials research and quality control. Measures magnetisation curves, hysteresis loops and demagnetisation curves with high sensitivity and field up to 1.2 Tesla.",
  alternates: {
    canonical:
      "/products/magnetic-testing/vibrating-sample-magnetometer/dxv-130",
  },
  openGraph: {
    title:
      "DXV-130 Vibrating Sample Magnetometry System | VSM | MAGTRANS Systems",
    description:
      "DXV-130 VSM system for magnetic materials research and quality control. Measures magnetisation curves, hysteresis loops and demagnetisation curves with high sensitivity and field up to 1.2 Tesla.",
    images: ["/products/vsm/dxv-130-vsm.png"],
  },
};

export default function DXV130VSMPage() {
  return (
    <ProductPageTemplate
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Magnetic Testing", href: "/products/magnetic-testing" },
        {
          label: "Vibrating Sample Magnetometer",
          href: "/products/magnetic-testing/vibrating-sample-magnetometer",
        },
        { label: "DXV-130" },
      ]}
      hero={{
        categoryLabel: "Magnetic Testing",
        name: "DXV-130 Vibrating Sample Magnetometry (VSM) System",
        tagline:
          "High-sensitivity VSM platform for precise measurement of magnetic moment as a function of applied field.",
        imageSrc: "/products/vsm/dxv-130-vsm.png",
        imageAlt: "DXV-130 Vibrating Sample Magnetometry System",
        primaryCtaHref: "/#contact",
        primaryCtaLabel: "Contact Sales",
        secondaryCtaHref: "/#contact",
        secondaryCtaLabel: "Download Brochure",
      }}
      overview={{
        heading: "Product Overview",
        paragraphs: [
          "DXV-130 Vibrating Sample Magnetometry (VSM) System is designed for magnetic materials research, quality control and product testing. The instrument measures fundamental magnetic properties such as magnetisation curves, hysteresis loops and demagnetisation curves.",
          "The system calculates important magnetic parameters including saturation magnetisation, residual magnetisation, coercive force, magnetic energy product and magnetic permeability. It supports measurement of different sample types including powders, granules, flakes and solid materials.",
        ],
      }}
      features={[
        {
          title: "High-sensitivity magnetic moment measurement",
          description:
            "Enables precise characterisation of soft and hard magnetic materials across a wide dynamic range.",
        },
        {
          title: "Accurate magnetisation and hysteresis analysis",
          description:
            "Captures detailed magnetisation curves, hysteresis loops and demagnetisation behaviour.",
        },
        {
          title: "Magnetic field strength up to 1.2 Tesla",
          description:
            "Stable electromagnet design with fixed air gap for reproducible field conditions.",
        },
        {
          title: "Flexible sample handling",
          description:
            "Supports powder, pellet, bulk and advanced material formats with configurable sample holders.",
        },
        {
          title: "Integrated control and analysis software",
          description:
            "Computer-controlled measurement with automated parameter calculation and data export.",
        },
      ]}
      specifications={[
        {
          title: "Main Specifications",
          rows: [
            {
              label: "Magnetic Moment Range",
              value: "10⁻³ emu – 300 emu",
            },
            {
              label: "Sensitivity",
              value: "5 × 10⁻⁵ emu",
            },
            {
              label: "Relative Accuracy",
              value: "Better than ±1%",
            },
            {
              label: "Repeatability",
              value: "Better than ±1%",
            },
            {
              label: "Stability",
              value: "Better than ±1% after 4 hours continuous operation",
            },
            {
              label: "Magnetic Pole Gap",
              value: "40 mm",
            },
            {
              label: "Pole Diameter",
              value: "60 mm",
            },
            {
              label: "Maximum Magnetic Field",
              value: "1.2 Tesla",
            },
          ],
        },
      ]}
      applications={[
        "Magnetic materials research and development",
        "Measurement of hysteresis loops and magnetisation curves",
        "Characterisation of magnetic nanoparticles and advanced materials",
        "Industrial magnetic materials testing and quality control",
        "Academic research laboratories",
      ]}
    >
      {/* System Components */}
      <section className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            System Components
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Component
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-zinc-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Electromagnet</td>
                  <td className="px-4 py-2 text-zinc-700">
                    DXSG-130 type electromagnet
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">
                    Magnetic Measurement Unit
                  </td>
                  <td className="px-4 py-2 text-zinc-700">
                    Includes scanning power supply, lock-in amplifier and Tesla
                    meter
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Vibration System</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Vibrating head, vibrating rod and detection coil
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Control Computer</td>
                  <td className="px-4 py-2 text-zinc-700">
                    Lenovo industrial control computer
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-zinc-700">Printer</td>
                  <td className="px-4 py-2 text-zinc-700">
                    HP printer for data output
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Instrument Description */}
      <section className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Instrument Description
          </h2>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Electromagnet</h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The electromagnet is a double-yoke fixed air-gap electromagnet
              positioned at 45°. The magnetic field is generated horizontally with
              a fixed air gap of 40 mm and pole diameter of 60 mm. The maximum
              magnetic field strength can reach 1.2 Tesla.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">Power Supply</h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system uses a high-stability steady-current DC power supply rated
              at approximately 2 kW. The output current can be continuously
              adjusted within the rated operating range and includes protection
              against over-current and short-circuit conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Vibration System
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The vibration assembly includes a vibrating rod, mechanical vibrating
              head, sample chamber and detection coil. The vibrating head can rotate
              360 degrees and the sample position can be adjusted along the X, Y and
              Z axes.
            </p>
          </div>
        </div>
      </section>

      {/* Magnetic Measurement Unit */}
      <section className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Measurement Unit
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The magnetic moment measurement unit provides multiple measurement
            ranges from 300 emu down to 0.015 emu with sensitivity better than 5 ×
            10⁻⁵ emu.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Magnetic field measurement resolution is 0.1 mT with relative accuracy
            better than ±1%. The vibration source operates at approximately 180 Hz
            with high frequency stability.
          </p>
        </div>
      </section>

      {/* Measurement Software */}
      <section className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Measurement Software
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The VSM-130C&amp;D measurement software allows configuration of
            measurement parameters and real-time display of data.
          </p>
          <p className="text-sm font-semibold text-zinc-900">Features include:</p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Automatic measurement of magnetisation curves and hysteresis loops
            </li>
            <li>Fast MH loop measurement and background correction</li>
            <li>Data export for analysis using Excel and Origin</li>
            <li>Curve zooming, smoothing and translation tools</li>
            <li>
              Automatic calculation of magnetic parameters including saturation
              magnetisation, coercive force and maximum magnetic energy product
            </li>
          </ul>
        </div>
      </section>
    </ProductPageTemplate>
  );
}
