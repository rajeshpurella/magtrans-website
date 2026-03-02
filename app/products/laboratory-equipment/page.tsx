import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Laboratory Equipment | MAGTRANS Systems",
  description:
    "Laminar air flow stations, bio safety cabinets and fume hoods for controlled laboratory environments.",
};

export default function LaboratoryEquipmentPage() {
  const domain = getDomainBySlug("laboratory-equipment")!;
  return <DomainLayout domain={domain} />;
}
