import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, FileText, Download } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardContainer } from "@/components/ui/CardContainer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/ui/Breadcrumbs";

export interface ProductHeroProps {
  categoryLabel?: string;
  name: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  primaryCtaHref: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
}

export interface ProductFeature {
  title: string;
  description?: string;
}

export interface ProductSpecRow {
  label: string;
  value: string;
}

export interface ProductSpecGroup {
  title?: string;
  rows: ProductSpecRow[];
}

export interface ProductDownload {
  label: string;
  href: string;
  type?: "brochure" | "datasheet" | "manual" | "other";
}

export interface UsedInIndustryLink {
  label: string;
  href: string;
}

export interface ProductPageTemplateProps {
  hero: ProductHeroProps;
  overview: {
    heading?: string;
    paragraphs: string[];
    highlights?: string[];
  };
  features?: ProductFeature[];
  specifications?: ProductSpecGroup[];
  applications?: string[];
  downloads?: ProductDownload[];
  breadcrumbs?: BreadcrumbItem[];
  usedInIndustries?: UsedInIndustryLink[];
  canonicalUrl?: string;
  /** Optional extra sections rendered after the standard layout */
  children?: ReactNode;
}

export function ProductPageTemplate({
  hero,
  overview,
  features,
  specifications,
  applications,
  downloads,
  breadcrumbs,
  usedInIndustries,
  canonicalUrl,
  children,
}: ProductPageTemplateProps) {
  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: hero.name,
    description: overview.paragraphs[0],
    brand: {
      "@type": "Brand",
      name: "MAGTRANS Systems Private Limited",
    },
    category: hero.categoryLabel,
    image: hero.imageSrc,
  };

  if (canonicalUrl) {
    productJsonLd.url = canonicalUrl;
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <div className="w-full border-b border-zinc-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-4 pb-2">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      ) : null}

      {/* Hero */}
      <SectionShell background="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          <div className="space-y-4">
            {hero.categoryLabel ? (
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
                {hero.categoryLabel}
              </p>
            ) : null}
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
              {hero.name}
            </h1>
            <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
              {hero.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PrimaryButton href={hero.primaryCtaHref}>
                {hero.primaryCtaLabel ?? "Contact Sales"}
              </PrimaryButton>
              {hero.secondaryCtaHref ? (
                <SecondaryButton href={hero.secondaryCtaHref}>
                  {hero.secondaryCtaLabel ?? "Download Brochure"}
                </SecondaryButton>
              ) : null}
            </div>
          </div>

          <div className="relative w-full max-w-xl mx-auto aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-50">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 512px, 100vw"
              priority
              className="object-contain object-center"
            />
          </div>
        </div>
      </SectionShell>

      {/* Overview */}
      <SectionShell background="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
          <div className="space-y-4">
            <SectionHeader
              align="left"
              title={overview.heading ?? "Product Overview"}
              subtitle={undefined}
            />
            {overview.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-base text-zinc-700 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
          {overview.highlights && overview.highlights.length > 0 && (
            <CardContainer className="p-6 space-y-3">
              <p className="text-sm font-semibold text-zinc-900">
                Highlights
              </p>
              <ul className="space-y-2 text-sm text-zinc-700">
                {overview.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContainer>
          )}
        </div>
      </SectionShell>

      {/* Key Features */}
      {features && features.length > 0 && (
        <SectionShell background="muted" aria-label="Key features">
          <SectionHeader
            title="Key Features"
            subtitle="Capabilities that enable precise, repeatable measurements for demanding engineering environments."
            align="left"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <CardContainer key={feature.title} className="p-5" as="article">
                <h3 className="text-base md:text-lg font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                {feature.description ? (
                  <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                    {feature.description}
                  </p>
                ) : null}
              </CardContainer>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Technical Specifications */}
      {specifications && specifications.length > 0 && (
        <SectionShell background="white" aria-label="Technical specifications">
          <SectionHeader
            title="Technical Specifications"
            align="left"
            subtitle={undefined}
          />
          <div className="mt-8 space-y-10">
            {specifications.map((group, idx) => (
              <div key={group.title ?? idx} className="space-y-3">
                {group.title ? (
                  <p className="text-sm font-semibold text-zinc-900">
                    {group.title}
                  </p>
                ) : null}
                <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
                  <table className="min-w-full text-sm">
                    <tbody className="divide-y divide-zinc-200">
                      {group.rows.map((row) => (
                        <tr key={row.label}>
                          <th className="w-1/3 px-4 py-2 text-left font-medium text-zinc-800 bg-zinc-50">
                            {row.label}
                          </th>
                          <td className="px-4 py-2 text-zinc-700">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Applications */}
      {applications && applications.length > 0 && (
        <SectionShell background="muted" aria-label="Applications">
          <SectionHeader
            title="Applications"
            align="left"
            subtitle={undefined}
          />
          <div className="mt-8 space-y-6">
            <div className="grid gap-3 md:grid-cols-2">
              {applications.map((app) => (
                <div key={app} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
                    {app}
                  </p>
                </div>
              ))}
            </div>
            {usedInIndustries && usedInIndustries.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {usedInIndustries.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs sm:text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </SectionShell>
      )}

      {/* Downloads */}
      {downloads && downloads.length > 0 && (
        <SectionShell background="white" aria-label="Downloads">
          <SectionHeader
            title="Downloads"
            subtitle="Datasheets, brochures and manuals to support evaluation, integration and long-term operation."
            align="left"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {downloads.map((item) => (
              <CardContainer
                key={item.href}
                className="flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.label}
                    </p>
                    {item.type ? (
                      <p className="text-xs text-zinc-500 uppercase tracking-wide mt-0.5">
                        {item.type}
                      </p>
                    ) : null}
                  </div>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </CardContainer>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Extra custom sections from caller */}
      {children}

      {/* Bottom CTA */}
      <SectionShell background="dark" aria-label="Contact and quote">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ready to discuss this system for your application?
            </h2>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Connect with our application engineering team to review your use
              case, measurement requirements and integration constraints.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/#contact">Contact Sales</PrimaryButton>
            <SecondaryButton href="/#contact">
              Request Technical Details
            </SecondaryButton>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

