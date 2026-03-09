import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Geophysical Research Systems | MAGTRANS Systems",
  description:
    "Proton precession systems and magnetic measurement equipment for geophysical exploration, field surveys and research applications.",
};

export default function GeophysicalResearchPage() {
  const domain = getDomainBySlug("geophysical-research")!;
  return <DomainLayout domain={domain} />;
}
