import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Laboratory Equipment | MAGTRANS Systems",
  description:
    "Laminar air flow stations, bio-safety cabinets and fume hoods engineered to provide safe, clean and compliant environments for laboratory workflows.",
};

export default function LaboratoryEquipmentPage() {
  const domain = getDomainBySlug("laboratory-equipment")!;
  return <DomainLayout domain={domain} />;
}
