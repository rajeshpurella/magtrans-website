import type { ReactNode } from "react";
import Link from "next/link";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardContainer } from "@/components/ui/CardContainer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export interface IndustryHeroProps {
  label: string;
  title: string;
  intro: string;
}

export interface IndustryChallenge {
  text: string;
}

export interface IndustrySolutionCard {
  title: string;
  description: string;
}

export interface IndustryRelatedProduct {
  href: string;
  name: string;
  description: string;
}

export interface IndustryPageTemplateProps {
  hero: IndustryHeroProps;
  challenges?: IndustryChallenge[];
  solutions?: IndustrySolutionCard[];
  relatedProducts?: IndustryRelatedProduct[];
  applications?: string[];
  /** Optional extra rich sections rendered at the end */
  children?: ReactNode;
}

export function IndustryPageTemplate({
  hero,
  challenges,
  solutions,
  relatedProducts,
  applications,
  children,
}: IndustryPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <SectionShell background="white">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            {hero.label}
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900">
            {hero.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-700 leading-relaxed">
            {hero.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton href="/#contact">
              Speak to Our Team
            </PrimaryButton>
          </div>
        </div>
      </SectionShell>

      {/* Challenges */}
      {challenges && challenges.length > 0 && (
        <SectionShell background="white" aria-label="Industry challenges">
          <SectionHeader
            title="Industry Challenges"
            align="left"
            subtitle={undefined}
          />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {challenges.map((c) => (
              <div key={c.text} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Solutions */}
      {solutions && solutions.length > 0 && (
        <SectionShell background="white" aria-label="Solutions">
          <SectionHeader
            title="Our Solutions"
            align="left"
            subtitle={undefined}
          />
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            {solutions.map((card) => (
              <CardContainer key={card.title} className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
                  {card.description}
                </p>
              </CardContainer>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Related products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <SectionShell
          background="muted"
          aria-label="Representative products for this industry"
        >
          <SectionHeader
            title="Representative Products"
            align="left"
            subtitle="Examples of MAGTRANS systems frequently deployed in this industry."
          />
          <div className="mt-8 divide-y divide-zinc-200 rounded-2xl bg-white/80 border border-zinc-200">
            {relatedProducts.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="block px-6 py-5 hover:bg-zinc-50 transition-colors"
              >
                <h3 className="font-medium text-zinc-900">{product.name}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Applications */}
      {applications && applications.length > 0 && (
        <SectionShell background="white" aria-label="Applications">
          <SectionHeader
            title="Applications"
            align="left"
            subtitle={undefined}
          />
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            {applications.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Optional additional sections */}
      {children}
    </>
  );
}

