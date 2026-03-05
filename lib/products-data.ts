export interface ProductChild {
  slug: string;
  title: string;
  image?: string;
  pdf?: string;
  externalLinks?: { label: string; href: string }[];
  contentHtml: string;
}

export interface ProductDomain {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  subProducts: string[];
  children?: ProductChild[];
}

export const productDomains: ProductDomain[] = [
  {
    slug: "process-cooling",
    title: "Process Cooling",
    shortDescription:
      "Liquid, industrial and air cooling; value-added solutions; cooling towers, air dryers, dehumidifiers and humidifiers for process stability and climate control.",
    intro:
      "MAGTRANS supplies process cooling systems for industrial and laboratory applications. Our solutions cover liquid, industrial and air cooling, value-added cooling systems, and environmental control equipment for consistent process conditions.",
    subProducts: [
      "Liquid Cooling",
      "Industrial Cooling",
      "Air Cooling",
      "Value Added Cooling Solutions",
      "Cooling Tower and Air Dryer",
      "Dehumidifier / Humidifier",
    ],
    children: [
      {
        title: "Liquid Cooling",
        slug: "liquid-cooling",
        image: "/products/liquid-cooling-overview.jpg",
        pdf: "/pdfs/process-cooling/liquid-cooling.pdf",
        externalLinks: [
          {
            label: "Air-cooled water chiller capacity chart",
            href: "https://wernerfinley.com/water-chiller-aircooled.html",
          },
          {
            label: "Compact coolant chiller capacity chart",
            href: "https://wernerfinley.com/compact-coolant-chillers.html",
          },
          {
            label: "Inverter coolant chiller capacity chart",
            href: "https://wernerfinley.com/inverter-coolant-chillers.html",
          },
          {
            label: "Modular air-cooled chiller capacity chart",
            href: "https://wernerfinley.com/modular-aircooled.html",
          },
          {
            label: "Modular water-cooled chiller capacity chart",
            href: "https://wernerfinley.com/modular-watercooled.html",
          },
        ],
        contentHtml: `
<section>
  <h2>Compact Water Chillers – NANO CHILL Series</h2>
  <p>
    Werner Finley compact water chillers are designed to cater to a wide range of industrial and laboratory applications. 
    The compact footprint ensures optimal space utilization on shop floors without compromising efficiency or build quality.
  </p>
  <p>
    Water remains one of the most effective cooling media in the industry due to its physical and chemical properties. 
    The NANO CHILL series covers a broad capacity range and integrates modern energy-saving technology.
  </p>
</section>

<section>
  <h2>Air-Cooled Water Chillers</h2>
  <img src="/products/air-cooled-chiller.png" alt="Air Cooled Chiller" />
  <h3>Key Features</h3>
  <ul>
    <li>Rated ambient temperature: 35°C</li>
    <li>High-efficiency rotary / scroll compressors</li>
    <li>Condenser designed to operate up to 50°C ambient temperature</li>
    <li>Highly reliable global brand pumps</li>
    <li>Packaged chiller with or without pump configuration</li>
    <li>Intelligent controller with RS485 communication</li>
  </ul>
  <p><strong>Capacity Range:</strong> 1.0 TR to 5 TR (R410a refrigerant)</p>
</section>

<section>
  <h2>Water-Cooled Water Chillers</h2>
  <img src="/products/water-cooled-chiller.png" alt="Water Cooled Chiller" />
  <h3>Key Features</h3>
  <ul>
    <li>Condenser designed for up to 50°C ambient temperature</li>
    <li>Insulated SS 304 reservoir</li>
    <li>All wetted parts in SS 304</li>
    <li>High-efficiency SS 316 plate-brazed heat exchanger</li>
    <li>Packaged / chiller-only configurations</li>
    <li>Intelligent controller with RS485 interface</li>
  </ul>
  <p><strong>Capacity Range:</strong> 1.0 TR to 30 TR (R410a refrigerant)</p>
</section>

<section>
  <h2>Compact Range Variants</h2>
  <h3>Configuration Options</h3>
  <ul>
    <li>Packaged – Inbuilt tank &amp; pump</li>
    <li>Bare – With pump / Without tank &amp; pump</li>
    <li>Precision – With pump / Without tank &amp; pump</li>
    <li>Effective – With pump / Without tank &amp; pump</li>
  </ul>
  <p>
    <strong>Operating Notes:</strong> Rated cooling tower water temperature 32°C; media temperature 15°C. 
    Redundancy is available from 10 TR upwards.
  </p>
</section>

<section>
  <h2>Oil Chillers</h2>
  <img src="/products/oil-chillers.png" alt="Oil Chillers" />
  <p>
    Oil chillers maintain hydraulic and lubrication oils within safe operating temperature bands to ensure
    process reliability, protect equipment and extend oil life.
  </p>
  <h3>Key Features</h3>
  <ul>
    <li>Condensers rated for up to 50°C ambient</li>
    <li>High-efficiency fin &amp; tube or micro-channel heat exchangers</li>
    <li>Low noise operation suitable for indoor installation</li>
    <li>Shell &amp; coil or stainless-steel coil evaporators</li>
    <li>Microprocessor-based intelligent controller</li>
  </ul>
  <p><strong>Capacity Range:</strong> 0.5 TR to 10 TR (R134a / R407C)</p>
</section>

<section>
  <h2>Coolant Chillers</h2>
  <img src="/products/coolant-chillers.png" alt="Coolant Chillers" />
  <p>
    Coolant chillers support grinding machines, VMCs and other metal cutting applications by maintaining
    coolant temperature with high precision for consistent productivity and surface finish.
  </p>
  <h3>Key Features</h3>
  <ul>
    <li>High-efficiency heat exchangers for stable coolant temperature</li>
    <li>Low noise design for indoor environments</li>
    <li>Reliable pumps from global brands</li>
    <li>Microprocessor-based intelligent controller</li>
  </ul>
  <p><strong>Capacity Range:</strong> 1 TR to 10 TR</p>
</section>

<section>
  <h2>Inverter Chillers – ECO CHILL Series</h2>
  <img src="/products/inverter-chillers.png" alt="Inverter Chillers" />
  <p>
    ECO CHILL inverter-driven chillers use DC inverter technology to handle varying cooling loads efficiently,
    delivering up to 30% energy savings with options for Industry 4.0 integration.
  </p>
  <h3>Key Features</h3>
  <ul>
    <li>Wetted parts in stainless steel 304</li>
    <li>Stainless steel 316 plate-brazed heat exchanger</li>
    <li>Intelligent controller with RS485 communication</li>
    <li>High-efficiency scroll compressors</li>
  </ul>
  <p><strong>Capacity Range:</strong> 1.0 TR to 30 TR (R410a)</p>
</section>

<section>
  <h2>Modular Chillers – ECO CHILL Series</h2>
  <img src="/products/modular-chillers.png" alt="Modular Chillers" />
  <p>
    Modular chiller systems provide scalability, redundancy and lower operating cost, making them ideal
    for facilities planning phased capacity expansion.
  </p>
  <h3>Key Features</h3>
  <ul>
    <li>All wetted parts in stainless steel 304</li>
    <li>Stainless steel 316 plate-brazed heat exchangers</li>
    <li>Rated ambient temperature 35°C</li>
    <li>Lower footprint and reduced noise levels</li>
  </ul>
  <p><strong>Capacity Range:</strong> 21.5 TR to 115 TR</p>
</section>
`,
      },
    ],
  },
  {
    slug: "magnetic-testing",
    title: "Magnetic Testing",
    shortDescription:
      "Hall effect measurement, VSM, hard and soft magnetic materials, cemented carbides, magneto-optic Kerr effect, field mappers, shielding and functional material measurement.",
    intro:
      "MAGTRANS offers magnetic testing and measurement systems for research and quality assurance. Our range includes Hall effect systems, vibrating sample magnetometers, and characterisation equipment for hard and soft magnetic materials, cemented carbides and functional materials.",
    subProducts: [
      "Hall Effect Measurement Systems",
      "Vibrating Sample Magnetometer",
      "Hard Magnetic Materials Measurement",
      "Soft Magnetic Materials Measurement",
      "Cemented Carbides Measurement",
      "Magneto-optic Kerr Effect",
      "Magneto-optical",
      "Magnetic Field Mapper",
      "Magnetic Shielding Device",
      "Functional Material Measurement",
    ],
    children: [
      {
        title: "Hall Effect Measurement Systems",
        slug: "hall-effect-measurement-systems",
        contentHtml: "",
      },
    ],
  },
  {
    slug: "cryogenic-systems",
    title: "Cryogenic Systems",
    shortDescription:
      "Closed-cycle and liquid nitrogen cryostats, 4K systems and ultra-low temperature solutions for research and industrial applications.",
    intro:
      "MAGTRANS provides cryogenic systems for low-temperature research and industrial use. Our range includes closed-cycle and liquid nitrogen cryostats, 4K systems and ultra-low temperature solutions.",
    subProducts: [
      "Closed-cycle Cryostat",
      "Liquid Nitrogen Cryostat",
      "Closed-cycle Cryostat - 4K",
      "Ultra-low Temperature",
    ],
    children: [
      {
        title: "Closed-cycle Cryostat",
        slug: "closed-cycle-cryostat",
        contentHtml: "",
      },
      {
        title: "Liquid Nitrogen Cryostat",
        slug: "liquid-nitrogen-cryostat",
        contentHtml: "",
      },
      {
        title: "Closed-cycle Cryostat - 4K",
        slug: "closed-cycle-cryostat-4k",
        contentHtml: "",
      },
    ],
  },
  {
    slug: "heat-flux-instrumentation",
    title: "Heat Flux & Instrumentation",
    shortDescription:
      "Signal conditioning amplifiers and thermogage instrumentation for heat flux and thermal measurement.",
    intro:
      "MAGTRANS supplies heat flux and instrumentation solutions for thermal measurement applications. Our range includes signal conditioning amplifiers and thermogage systems for accurate heat flux and temperature measurement.",
    subProducts: [
      "Signal Conditioning Amplifiers",
      "Thermogage",
    ],
  },
  {
    slug: "ht-solutions",
    title: "HT Solutions",
    shortDescription:
      "Industrial and laboratory thermal solutions and industrial ovens for controlled heating applications.",
    intro:
      "MAGTRANS offers high-temperature solutions for industrial and laboratory use. Our range covers industrial and laboratory heating systems and industrial ovens for controlled thermal processes.",
    subProducts: [
      "Industrial and Laboratory",
      "Industrial Ovens",
    ],
  },
  {
    slug: "laboratory-equipment",
    title: "Laboratory Equipment",
    shortDescription:
      "Laminar air flow stations, bio safety cabinets and fume hoods for controlled laboratory environments.",
    intro:
      "MAGTRANS supplies laboratory equipment for controlled environments. Our range includes laminar air flow stations, bio safety cabinets and fume hoods for research, quality control and safety-critical applications.",
    subProducts: [
      "Laminar Air Flow Stations",
      "Bio Safety Cabinets",
      "Fume Hoods",
    ],
  },
  {
    slug: "geophysical-research",
    title: "Geophysical Research",
    shortDescription:
      "Proton precession systems for geophysical measurement and research applications.",
    intro:
      "MAGTRANS provides instrumentation for geophysical research. Our range includes proton precession systems for magnetic field measurement and related geophysical applications.",
    subProducts: [
      "Proton Precession Systems",
    ],
  },
];

export function getDomainBySlug(slug: string): ProductDomain | undefined {
  return productDomains.find((d) => d.slug === slug);
}

export function getAllSlugs(): string[] {
  return productDomains.map((d) => d.slug);
}
