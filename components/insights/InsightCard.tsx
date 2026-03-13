import Image from "next/image";
import { CardContainer } from "@/components/ui/CardContainer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export interface InsightCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  viewHref: string;
  pdfHref: string;
}

export function InsightCard({
  title,
  description,
  imageSrc,
  imageAlt,
  viewHref,
  pdfHref,
}: InsightCardProps) {
  return (
    <CardContainer
      as="article"
      interactive
      className="flex h-full flex-col overflow-hidden"
    >
      <div className="relative w-full aspect-[4/3] bg-zinc-50">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 line-clamp-2">
            {title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed line-clamp-3 min-h-[3.75rem]">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <PrimaryButton
            href={viewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex-1 justify-center"
            fullWidth
          >
            View Article
          </PrimaryButton>

          <a
            href={pdfHref}
            download
            className="sm:flex-1 inline-flex items-center justify-center rounded-full border border-emerald-600 px-6 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all duration-200"
          >
            Download PDF
          </a>
        </div>
      </div>
    </CardContainer>
  );
}

