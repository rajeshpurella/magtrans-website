import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";

export const metadata: Metadata = {
  title: "Cryogenic Systems & Cryostats | MAGTRANS Systems",
  description:
    "Closed-cycle and liquid nitrogen cryostats, 4 K and ultra-low temperature platforms for magnetic, optical and electrical measurements without helium loss.",
};

export default function CryogenicSystemsPage() {
  const domain = getDomainBySlug("cryogenic-systems")!;
  return <DomainLayout domain={domain} />;
}
