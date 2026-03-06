export interface ProcessCoolingNode {
  title: string;
  slug: string;
  children?: ProcessCoolingNode[];
}

/**
 * Structured domain tree for the Process Cooling product area.
 *
 * This mirrors the folder + route structure under:
 *   app/products/process-cooling/**
 *
 * Pages represented:
 * - /products/process-cooling
 * - /products/process-cooling/air-cooling
 * - /products/process-cooling/liquid-cooling
 * - /products/process-cooling/value-added-cooling
 * - /products/process-cooling/cooling-tower-air-dryer
 * - /products/process-cooling/dehumidifier-humidifier
 * - /products/process-cooling/industrial-cooling
 *   - /products/process-cooling/industrial-cooling/air-cooling
 *   - /products/process-cooling/industrial-cooling/liquid-cooling
 *   - /products/process-cooling/industrial-cooling/value-added-cooling
 *   - /products/process-cooling/industrial-cooling/cooling-tower-air-dryer
 *   - /products/process-cooling/industrial-cooling/dehumidifier-humidifier
 */
export const processCoolingDomains: ProcessCoolingNode[] = [
  {
    title: "Process Cooling",
    slug: "process-cooling",
    children: [
      {
        title: "Industrial Cooling",
        slug: "industrial-cooling",
        children: [
          { title: "Air Cooling", slug: "air-cooling" },
          { title: "Liquid Cooling", slug: "liquid-cooling" },
          {
            title: "Cooling Tower and Air Dryer",
            slug: "cooling-tower-air-dryer",
          },
          {
            title: "Dehumidifier / Humidifier",
            slug: "dehumidifier-humidifier",
          },
          {
            title: "Value Added Cooling Solutions",
            slug: "value-added-cooling",
          },
        ],
      },
      { title: "Air Cooling", slug: "air-cooling" },
      { title: "Liquid Cooling", slug: "liquid-cooling" },
      {
        title: "Cooling Tower and Air Dryer",
        slug: "cooling-tower-air-dryer",
      },
      {
        title: "Dehumidifier / Humidifier",
        slug: "dehumidifier-humidifier",
      },
      {
        title: "Value Added Cooling Solutions",
        slug: "value-added-cooling",
      },
    ],
  },
];

