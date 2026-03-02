import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getIndustryBySlug,
  getAllIndustrySlugs,
} from "@/lib/industries-data";
import IndustryContent from "../IndustryContent";

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry)
    return { title: "Industries | MAGTRANS Systems" };
  return {
    title: `${industry.title} | MAGTRANS Systems`,
    description: industry.shortDescription,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryContent industry={industry} />;
}
