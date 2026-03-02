import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "DX-100 Hall Effect Measurement Equipment | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "DX-100 Hall Effect Measurement Equipment for measuring carrier concentration, mobility, resistivity and Hall coefficient of semiconductor materials.",
};

type SpecSection = {
  title: string;
  items: { label: string; value: string }[];
};

const DX100_SPECS: SpecSection[] = [
  {
    title: "Physical parameters",
    items: [
      {
        label: "Carrier concentration",
        value: "10³cm⁻³ - 10²³cm⁻³",
      },
      {
        label: "Mobility",
        value: "0.1 cm²/V·sec - 10⁸cm²/V·sec",
      },
      {
        label: "Resistivity range",
        value: "10⁻⁷ Ohm·cm - 10¹² Ohm·cm",
      },
      {
        label: "Hall voltage",
        value: "1uV - 3V",
      },
      {
        label: "Hall coefficient",
        value: "10⁻⁵ - 10²⁷ cm³/C",
      },
    ],
  },
  {
    title: "Magnetic field environment",
    items: [
      {
        label: "Magnet type",
        value: "Variable electromagnet",
      },
      {
        label: "Magnetic field magnitude",
        value:
          "1900mT (10mm pole pitch)\n1300mT (20mm pole pitch)\n900mT (30mm pole pitch)\n800mT (40mm pole pitch)\n600mT (50mm pole pitch)",
      },
      {
        label: "Uniform area",
        value: "1%",
      },
      {
        label: "Minimum resolution",
        value: "0.1Gs",
      },
    ],
  },
  {
    title: "Electrical parameters",
    items: [
      {
        label: "Current source",
        value: "50nA – 50mA",
      },
      {
        label: "Current resolution",
        value: "0.0001uA",
      },
      {
        label: "Measuring voltage",
        value: "0 ~ ±3V",
      },
      {
        label: "Voltage resolution",
        value: "0.0001 mV",
      },
    ],
  },
  {
    title: "Other features",
    items: [
      {
        label: "One-button automatic measurement",
        value: "One-button automatic measurement",
      },
      {
        label: "I-V and BV curves",
        value: "I-V and BV curve testing",
      },
      {
        label: "Automatic temperature measurement",
        value: "Automatic temperature measurement",
      },
      {
        label: "Data export",
        value: "Excel data export",
      },
      {
        label: "Standard samples",
        value: "Standard test samples included",
      },
    ],
  },
];

const DX100_TEMPERATURE_MODELS = [
  {
    model: "DX-100",
    range: "80K ~ 500K",
    features: "Resolution 0.1GS",
  },
  {
    model: "DX-100H",
    range: "300K ~ 500K",
    features: "High temperature",
  },
  {
    model: "DX-100L",
    range: "80K ~ 300K",
    features: "Low temperature",
  },
  {
    model: "DX-200L",
    range: "4K ~ 300K",
    features: "Ultra low temperature",
  },
  {
    model: "DX-500",
    range: "80K ~ 800K",
    features: "Extended range",
  },
  {
    model: "DX-500H",
    range: "300K ~ 800K",
    features: "High temperature extended",
  },
];

export default function DX100HallEffectMeasurementEquipmentPage() {
  return (
    <main className="bg-white">
      {/* Introduction */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            DX-100 Hall Effect Measurement Equipment
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            DX-100 Hall Effect Measurement Equipment consists of an electromagnet,
            electromagnet power supply, high precision constant current source,
            high precision voltmeter, Hall effect sample holder, standard sample
            and system software.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
            It is used to measure carrier concentration, mobility, resistivity
            and Hall coefficient of semiconductor materials.
          </p>
        </div>
      </section>

      {/* DX-320 System SourceMeter */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)] gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              DX-320 System SourceMeter
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The DX-320 effect meter integrates a constant current source and
              switching system into one unit, greatly reducing experimental wiring
              and improving efficiency. It can also operate independently as a
              constant current source and microvoltmeter.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/products/magnetic-testing/hall-effect-measurement-systems/dx-100/DX-320"
                alt="DX-320 System SourceMeter"
                width={640}
                height={480}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Technical Specifications
          </h2>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <tbody className="divide-y divide-gray-200">
                {DX100_SPECS.map((section) => (
                  <>
                    <tr key={section.title}>
                      <td
                        colSpan={3}
                        className="bg-gray-50 px-4 py-2 font-semibold text-gray-900"
                      >
                        {section.title}
                      </td>
                    </tr>
                    {section.items.map((item) => (
                      <tr key={section.title + item.label}>
                        <td className="px-4 py-2 align-top text-gray-700 w-1/4">
                          {/* Category column intentionally left blank; category indicated by header row */}
                        </td>
                        <td className="px-4 py-2 align-top text-gray-700 font-medium w-1/4">
                          {item.label}
                        </td>
                        <td className="px-4 py-2 align-top text-gray-600 whitespace-pre-line">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Testable Material Types */}
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Testable Material Types
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900 w-1/3">
                      Category
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">
                      Description
                    </th>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Semiconductor material
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      SiGe, SiC, InAs, InGaAs, InP, AlGaAs, HgCdTe and ferrite
                      materials etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Low resistance material
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      Graphene, metals, transparent oxides, weakly magnetic
                      semiconductor materials, TMR materials, etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      High resistance material
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      Semi-insulating GaAs, GaN, CdTe, etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Material Conductive Particles
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      Type P and Type N testing of materials
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Other Accessories (Detailed) */}
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Other Accessories
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900 w-1/3">
                      Item
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">
                      Specification
                    </th>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Shading
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      Externally installed light-shielding parts make the test
                      material more stable.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Sample size
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      Normal: 10mm × 10mm; Maximum: 16mm × 16mm
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Box cabinet
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      600 × 600 × 1000 mm
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Test piece
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      Hall effect standard test samples and data from Institute
                      of Semiconductors, Chinese Academy of Sciences – 1 set
                      (Si, Ge, GaAs, InSb)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Making ohmic contacts
                    </td>
                    <td className="px-4 py-2 align-top text-gray-600">
                      Electric soldering iron, indium chip, solder, enameled
                      wire, etc.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* High & Low Temperature Models */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            High &amp; Low Temperature Models
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">
                    Model
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">
                    Temperature Range
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">
                    Key Features
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {DX100_TEMPERATURE_MODELS.map((row) => (
                  <tr key={row.model}>
                    <td className="px-4 py-2 text-gray-700">{row.model}</td>
                    <td className="px-4 py-2 text-gray-700">{row.range}</td>
                    <td className="px-4 py-2 text-gray-700">
                      {row.features}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed System Test Index */}
          <div className="pt-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              DX-100 High and Low Temperature Hall Effect Test System
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900 w-1/3">
                      Parameter
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">
                      Specification
                    </th>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Temperature range
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      80K ~ 500K (temperature adjustment 0.1K)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Minimum resolution
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      0.1GS
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Sample current
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      0.05uA – 50mA (adjust 0.1nA)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Magnetic field
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      2T at 10mm spacing; 1T at 30mm spacing
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Resistivity range
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      10⁻⁵ – 10⁷ Ohm·cm
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Carrier concentration
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      10³ – 10²³ cm⁻³
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Mobility
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      0.1 – 10⁸ cm²/V·sec
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top text-gray-700">
                      Resistance range
                    </td>
                    <td className="px-4 py-2 align-top text-gray-700">
                      10mΩ – 6MΩ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <a
            href="/products/magnetic-testing/hall-effect-measurement-systems/dx-100/dx-100-brochure.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white rounded-lg px-6 py-3 text-sm font-semibold"
          >
            Download Brochure (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}

