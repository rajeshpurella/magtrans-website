import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DX-70 Hall Measurement System | Hall Effect Measurement Systems | MAGTRANS Systems",
  description:
    "DX-70 Hall Measurement System for measuring carrier concentration, mobility, resistivity and Hall coefficient of semiconductor materials.",
};

type SpecSection = {
  title: string;
  items: { label: string; value: string }[];
};

const DX70_SPECS: SpecSection[] = [
  {
    title: "Physical parameters",
    items: [
      {
        label: "Carrier concentration",
        value: "10³cm⁻³ - 10²³cm⁻³",
      },
      {
        label: "Mobility",
        value: "0 .1 cm²/ volt*sec - 10⁸cm²/ volt*sec",
      },
      {
        label: "Resistivity range",
        value: "10⁻⁷ Ohm*cm - 10¹² Ohm*cm",
      },
      {
        label: "Hall voltage",
        value: "1 uV - 3V",
      },
      {
        label: "Hall coefficient",
        value: "10⁻⁵ - 10²⁷cm³/ C",
      },
    ],
  },
  {
    title: "Testable material type",
    items: [
      {
        label: "Semiconductor material",
        value:
          "SiGe, SiC, InAs, InGaAs, InP,AlGaAs, HgCdTe and ferrite materials etc.",
      },
      {
        label: "low resistance material",
        value:
          "Graphene, metals, transparent oxides, weakly magnetic semiconductor materials, TMR materials, etc.",
      },
      {
        label: "high resistance material",
        value: "Semi-insulating GaAs, GaN, CdTe, etc.",
      },
      {
        label: "Material Conductive Particles",
        value: "Type P and Type N testing of materials",
      },
    ],
  },
  {
    title: "Magnetic field environment",
    items: [
      {
        label: "Magnet Type",
        value: "Variable electromagnet",
      },
      {
        label: "Magnitude of magnetic field",
        value:
          "1070mT (The pole pitch is 10mm)\n687mT (The pole pitch is 20mm)\n500mT (The pole pitch is 30mm)\n378mT (The pole pitch is 40mm)\n293mT (The pole pitch is 50mm)",
      },
      {
        label: "Uniform area",
        value: "1%",
      },
      {
        label: "Optional magnetic environment",
        value:
          "The electromagnet of relevant magnetic size can be customized according to the needs of customers",
      },
    ],
  },
  {
    title: "Electrical parameters",
    items: [
      {
        label: "Current source",
        value: "±0.1nA- ±1000mA",
      },
      {
        label: "Current source resolution",
        value: "0.001uA",
      },
      {
        label: "Measuring voltage",
        value: "±10nV ~ ±200V",
      },
      {
        label: "Voltage measurement resolution",
        value: "0.0001 mV",
      },
    ],
  },
  {
    title: "Other Accessories",
    items: [
      {
        label: "Shading",
        value:
          "Extern ally installed light-shielding parts to make the test material more stable",
      },
      {
        label: "Sample size",
        value: "Maximum 30mm * 30mm",
      },
      {
        label: "Box cabinet",
        value: "600*600*1000mm",
      },
      {
        label: "Test piece",
        value:
          "Hall effect of Institute of Semiconductors, Chinese Academy of Sciences Standard test samples and data: 1 set\n(Si, Ge, GaAs, lnSb)",
      },
      {
        label: "Making ohmic contacts",
        value:
          "Electric soldering iron, indium chip, solder, enameled wire, etc.",
      },
      {
        label: "One-button automatic measurement",
        value:
          "One-button automatic measurement can be performed without the need for human operation after the test is started",
      },
      {
        label: "I-V and BV curves",
        value: "The software can perform I-V curve and BV curve",
      },
      {
        label: "Automatic temperature measurement",
        value: "Set in software for automatic temperature measurement",
      },
      {
        label: "Data storage and export",
        value:
          "The experimental results are measured, and the data will be temporarily saved in the software. If long-term storage is required, the data can be exported to an EXCEL table to facilitate later data processing.",
      },
      {
        label: "Standard samples and data",
        value:
          "Provide the Hall effect standard test samples and data of the Institute of Semiconductors, Chinese Academy of Sciences: 1 set",
      },
    ],
  },
];

export default function DX70HallMeasurementSystemPage() {
  return (
    <main className="bg-white">
      {/* Introduction */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            DX-70 Hall Measurement System
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            DX-70 Hall Measurement System is used to measure carrier
            concentration, mobility, resistivity, and Hall coefficient of
            semiconductor materials. It is essential for researching
            semiconductor electrical properties and device behavior.
          </p>
        </div>
      </section>

      {/* Product overview */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Product Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            DX-70 Hall Effect Measurement System consists of:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Electromagnet</li>
            <li>Electromagnet power supply</li>
            <li>High-precision constant current source</li>
            <li>High-precision voltmeter</li>
            <li>Matrix card</li>
            <li>Hall effect sample holder</li>
            <li>Standard sample</li>
            <li>System software</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            The system uses a KEITHLEY imported test source meter combined with
            a high-bandwidth matrix card to improve current supply range and
            Hall voltage accuracy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Software automatically calculates:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Bulk Carrier Concentration</li>
            <li>Sheet Carrier Concentration</li>
            <li>Mobility</li>
            <li>Resistivity</li>
            <li>Hall Coefficient</li>
            <li>Magnetoresistance</li>
          </ul>
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
                {DX70_SPECS.map((section) => (
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
                          {/* Category column intentionally left blank; category is indicated by the section row above */}
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
        </div>
      </section>
    </main>
  );
}

