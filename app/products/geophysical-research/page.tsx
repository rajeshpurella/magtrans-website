import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Geophysical Research | MAGTRANS Systems",
  description:
    "Proton precession systems for geophysical measurement and research applications.",
};

export default function GeophysicalResearchPage() {
  const domain = getDomainBySlug("geophysical-research")!;
  return <DomainLayout domain={domain} />;
}
