import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "High-Temperature Ovens & HT Solutions | MAGTRANS Systems",
  description:
    "Laboratory and industrial ovens, refrigerated air dryers and high-temperature furnaces for controlled heating, drying and thermal processing.",
};

export default function HTSolutionsPage() {
  const domain = getDomainBySlug("ht-solutions")!;
  return <DomainLayout domain={domain} />;
}
