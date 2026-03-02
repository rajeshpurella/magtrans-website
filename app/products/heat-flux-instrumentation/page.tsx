import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Heat Flux & Instrumentation | MAGTRANS Systems",
  description:
    "Signal conditioning amplifiers and thermogage instrumentation for heat flux and thermal measurement.",
};

export default function HeatFluxInstrumentationPage() {
  const domain = getDomainBySlug("heat-flux-instrumentation")!;
  return <DomainLayout domain={domain} />;
}
