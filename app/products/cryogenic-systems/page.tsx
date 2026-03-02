import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Cryogenic Systems | MAGTRANS Systems",
  description:
    "Closed-cycle and liquid nitrogen cryostats, 4K systems and ultra-low temperature solutions for research and industrial applications.",
};

export default function CryogenicSystemsPage() {
  const domain = getDomainBySlug("cryogenic-systems")!;
  return <DomainLayout domain={domain} />;
}
