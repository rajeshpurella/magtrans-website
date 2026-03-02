import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "HT Solutions | MAGTRANS Systems",
  description:
    "Industrial and laboratory thermal solutions and industrial ovens for controlled heating applications.",
};

export default function HTSolutionsPage() {
  const domain = getDomainBySlug("ht-solutions")!;
  return <DomainLayout domain={domain} />;
}
