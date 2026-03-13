import type { Metadata } from "next";
import InsightsNewsletterSection from "@/components/insights/InsightsNewsletterSection";

export const metadata: Metadata = {
  title: "Insights & Technical Newsletters | MAGTRANS Systems",
  description:
    "Technical insights and newsletters from MAGTRANS Systems covering heat flux sensing, magnetic characterisation and cryogenic measurement topics.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <main className="bg-white">
      <InsightsNewsletterSection />
    </main>
  );
}

