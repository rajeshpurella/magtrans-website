export interface CoolingTowerSectionItem {
  title: string;
  image?: string;
  content: string;
  features: string[];
  applications: string[];
  components: string[];
}

const BASE = "/products/cooling-tower-air-dryer";

export const coolingTowerAirDryer = {
  title: "Cooling Tower & Air Dryer",
  sections: [
    {
      title: "Cooling Tower Overview",
      content:
        "A cooling tower removes heat from a process and rejects it to the atmosphere through the process of evaporation. In a typical application, water is pumped through a process or process machinery where it removes heat. The warm water is pumped outside to the cooling tower where it is distributed over a series of plastic sheets (fill) inside the cooling tower. An electrically powered fan moves air through the tower and causes a small portion of water to evaporate which cools the rest of the water left in the cooling tower. This process operates more efficiently and provides much cooler water temperatures than simple fan-cooled air coils.\n\nMecken Technologies offers cooling towers with corrosion resistant fiberglass exteriors and internal supports that are lightweight, require low maintenance, and are designed for years of dependable service. Our MTR Series Cooling towers and MTS Series Cooling Towers can withstand the harsh conditions of industrial environments much better than traditional galvanized steel cooling towers and are the smart choice for industrial cooling towers.",
      features: [],
      applications: [],
      components: [],
    },
    {
      title: "Cooling Tower Types",
      content: "",
      features: [],
      applications: [],
      components: [],
    },
    {
      title: "MTR – Round Type Cooling Tower",
      image: `${BASE}/mtr-round-type-cooling-tower.avif`,
      content:
        "MTR series is specifically developed to cater to needs of small application having heat load capacity up to 400TR or 315 M3/hr. MTS Towers are round or bottle shaped and have a compact design. The MTS Tower is equipped with a rotating distribution system, which provides uniform water distribution to suit a lower head. The Fill with a unique and engineered microstructure enhances air-water interaction and is bottom supported. The Basin at the bottom is designed with deep Cold Water outlet to ensure flooded suction and avoid cavitation of pump. It is a modular design and can cater to higher heat loads with multiple towers. The Tower made of high quality fiber glass provides robustness and longevity, with many towers being in operation for decades with just basic maintenance.",
      features: [],
      applications: [],
      components: [],
    },
    {
      title: "MTS – Square Type Cooling Tower",
      image: `${BASE}/mts-square-type-cooling-tower.avif`,
      content:
        "MTS Series is a modular design based on extensive R&D efforts carried out in house.\n\nThe MTS Series comes with an option for multiple cells in the same cooling tower unlike MTR series wherein separate towers are given for higher loads. Cell orientation can be in line or back to back (cluster) to suit site space restrictions. MTS Series Towers are square shaped with turbulator sprayers, which enhance water distribution at lower heads without clogging of nozzles. Fills are generally cross fluted film type, which maximise air/water interaction and heat exchange. Drift eliminators are cellular type and provide higher drift elimination at lower pressure drops. A separate metallic structure is provided to ensure sturdiness of design without loading FRP Shell, thereby providing a longer operating product life cycle. These Towers are provided with unique FRP Modular casing panels. Fans are directly driven by a Motor. These Towers can cater to 50 TO 1000 TR or 750 M3/hr in a single cell and can be scaled up for higher capacities with multiple cells.",
      features: [],
      applications: [],
      components: [],
    },
    {
      title: "MTC – Cross Flow Cooling Tower",
      image: `${BASE}/mtc-cross-flow-cooling-tower.avif`,
      content:
        'The main purpose of any cooling tower is heat loss into the atmosphere and the crossflow cooling towers follow the same idea. Crossflow is one of the main wet cooling towers. This cooling tower is used in Heating Ventilation and air conditioning (HVAC) systems and also large scale cooling and air conditioning systems. The cooling tower works by crossing air vertically against water horizontally hence the name "cross-flow". Visit Mecken Cooling Tower, you can get more information about the cooling tower',
      features: [],
      applications: [],
      components: [],
    },
    {
      title: "MTW – Wooden Cooling Tower",
      image: `${BASE}/mtw-wooden-cooling-tower.avif`,
      content:
        "This rugged war horse in our stables, incorporate multi blade, cast aluminum, adjustable pitch fan assembly driven by special T.E, IP-55 protected Geared Motor with low R.P.M and higher air discharge capacities. The tower structural and supporting sections are HDG Steel, fastened with SS fasteners, and suited for hot, harsh and humid atmospheric industrial conditions.\n\nThe MTS Series comes with an option for multiple cells in The standard cladding profile of corrugated asbestos cement sheet, the joints of which are lapped to minimize water spillage. The Treated Wooden Splash bars, the fill media, are supported on FRP Grids to ensure positive and permanent positioning. The wooden splash bars are of imported pine woods, chemically treated to arrest fungal or algae formations. The design incorporates accommodation of waters with very high TDS factors The hot water from the source when circulated to the collection basin with flower pot nozzles, are sprayed over the fill area. Simultaneously, air is induced through the fill media thus taking away the latent heat from the water passing through the fill media.",
      features: [],
      applications: [],
      components: [],
    },
    {
      title: "MTD – Dry Cooling Tower",
      image: `${BASE}/mtd-dry-cooling-tower.avif`,
      content:
        "The fans can be mounted according to induced draft or forced draft type, depending on the application. The fans are of direct drive type, but options with gear box or belt drive are also available. The tubes which carry the process fluid are of copper or stainless steel with continuous plate type aluminum fins to maximise the heat transfer.",
      features: [
        "Modular design of Mecken dry coolers helps in space optimisation",
        "Highly efficient fin to tube heat transfer",
        "High efficiency shell & tube Condenser",
        "Separates process side from any contamination due to closed loop system",
      ],
      applications: [],
      components: [],
    },
    {
      title: "Air Dryer",
      image: `${BASE}/air-dryer.avif`,
      content:
        "Mecken Refrigeration type Dryer operates on the method of cooling the air to near freezing point to remove the moisture and the cold air is reheated by the incoming air to approximately 10°C below the incoming compressed air temperature at nominal conditions.\n\nThe Refrigeration Dryer consists of an air drying unit with centrifugal cum demister pad condensate separator and a refrigeration circuit.\n\nThe refrigeration circuit consists mainly of a compressor, a condenser, a receiver, a vapour liquid accumulator with liquid refrigerant and an evaporator.The air drying unit consists of two kinds of heat exchangers, one is air to air heat exchangers and second is refrigerant to air heat exchangers.\n\nThe Heart Of The System Is The Special Foamed In, Patented Heat Exchanger Which Makes It Outperform Other Dryers\nThe function of the air to air heat exchanger is to lower the load on the refrigerant system and secondly by warming the outgoing cold air pipelines to the required temperature.\n\nThe refrigerant to air heat exchanger(s) further cools the air to the required temperature thus condensing the water vapour from the air, which is automatically drained.",
      features: [
        "Available in 45 standard models",
        "Capacities from 10 cfm to 3000 cfm",
        "Microprocessor based delsmart LCD card to readout dew point, operating status, faults indication",
        "Provides pressure dew points range to 3-4°C",
        "Proprietary Heat Exchanger",
        "Certified and reliable performance",
        "Compact design",
        "According to ISO 7183 Compressed Refrigerant Air Dryer",
      ],
      applications: [],
      components: [],
    },
    {
      title: "Heat Exchanger",
      image: `${BASE}/heat-exchanger.avif`,
      content: "",
      features: [
        "Shell and tube heat exchanger",
        "After cooler – [for air & gas compressors]",
        "Air pre-heater",
        "Condensers [for steam and process fluids]",
        "Chillers [for refrigeration systems]",
        "Evaporators [for thickening process liquids]",
        "Fuel oil heaters [for pre-heating furnace oil]",
        "Marine heat exchanger",
        "Marine oil cooler",
        "Oil coolers – [for lubrication of machine tools, centrifugals, quenching systems, transformers, turbines, gear box etc.]",
        "Reboilers [for distillation application]",
        "Steam-air heaters [for hot air generation for drying applications]",
        "Surface condenser",
        "HEAT EXCHANGER'S SERVICED",
      ],
      applications: [],
      components: [],
    },
  ],
};
