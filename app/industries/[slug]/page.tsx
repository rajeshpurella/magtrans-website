import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getIndustryBySlug,
  getAllIndustrySlugs,
} from "@/lib/industries-data";
import IndustryContent from "../IndustryContent";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

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
    alternates: {
      canonical: `/industries/${slug}`,
    },
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
  return (
    <>
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />
        </div>
      </div>
      <IndustryContent industry={industry} />;
    </>
  );
}
