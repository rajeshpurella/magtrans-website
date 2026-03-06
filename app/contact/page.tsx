import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact MAGTrans Systems | Engineering Solutions & Technical Support",
  description:
    "Contact MAGTrans Systems for magnetic testing systems, cryogenic solutions, process cooling and advanced instrumentation support.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Contact />
    </div>
  );
}
