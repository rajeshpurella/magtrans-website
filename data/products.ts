export type Product = {
  /** Full slug path after `/products`, e.g. `magnetic-testing/hall-effect-measurement-systems/dx-3000` */
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  functions: string[];
  parametersMeasured: string[];
  sampleMeasurementMethod: string[];
  sampleSize: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "magnetic-testing/hall-effect-measurement-systems/dx-3000",
    title: "DX-3000 Hall Effect Device",
    description:
      "DX-3000 Hall effect measurement system with Keithley instrumentation, configurable magnet options and fully automated software for precise transport property characterisation.",
    image:
      "/products/magnetic-testing/hall-effect-measurement-systems/dx-3000/6948fe13fe83574d236c0d1414639ea2.png",
    features: [
      "Plug-in sample cards for fast, repeatable sample installation.",
      "Standard configuration measures two samples simultaneously; optional upgrade supports up to four samples in parallel.",
      "Wide resistance measurement range from 0.1 mΩ to 100 GΩ using high-voltage and high-impedance instrumentation.",
      "Supports Hall effect and resistance measurements under different current and magnetic field conditions.",
      "Automated test and calculation workflow with software that provides intermediate data and measurement curves in real time.",
      "High magnetic-field stability over long durations with smooth zero-field operation.",
      "Electromagnet power supply with built-in precision gauss meter and fast field control.",
      "Configurable low-temperature options enabling Hall and resistance measurements over extended temperature ranges.",
    ],
    functions: [
      "Measurement of Hall effect and magnetoresistance.",
      "Acquisition and plotting of I–V curves at different temperatures and magnetic fields.",
      "Acquisition and plotting of R–T curves at fixed magnetic field for resistance versus temperature characterisation.",
      "Acquisition and plotting of R–H curves at fixed temperature for resistance versus magnetic field characterisation.",
    ],
    parametersMeasured: [
      "Sheet resistance and bulk resistivity.",
      "Hall coefficient and conductivity type.",
      "Hall mobility and carrier concentration.",
      "Magnetoresistance parameters including R, ΔR, (ΔR / R)%, (ΔR / R₀)%.",
    ],
    sampleMeasurementMethod: [
      "Hall effect samples such as Si and GaAs using dedicated Hall sample cards.",
      "Resistance and I–V samples using 4‑wire or 6‑wire measurement methods for low contact resistance and high accuracy.",
      "Support for small, large and probe-style sample cards for different geometries.",
    ],
    sampleSize: [
      "Small sample card: 12 × 12 mm².",
      "Large sample card: 50 × 50 mm².",
      "Probe sample card: 1 × 1 mm² to 30 × 30 mm².",
    ],
  },
];

export function getProductBySlug(segments: string[]): Product | undefined {
  const joined = segments.join("/");
  return PRODUCTS.find((p) => p.slug === joined);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}

