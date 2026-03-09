import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Heat Flux & Instrumentation | MAGTRANS Systems",
  description:
    "Heat flux sensors, signal conditioning amplifiers and thermogage instrumentation for precise thermal and heat flux measurement in research and industry.",
};

export default function HeatFluxInstrumentationPage() {
  const domain = getDomainBySlug("heat-flux-instrumentation")!;
  return <DomainLayout domain={domain} />;
}
