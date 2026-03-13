import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const SITE_URL = "https://magtrans.in";

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  const itemListElement = items.map((item, index) => {
    const isLast = index === items.length - 1;
    const href = item.href && !isLast ? `${SITE_URL}${item.href}` : undefined;

    return {
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(href ? { item: href } : {}),
    };
  });

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-zinc-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1">
                {index > 0 && <span className="text-zinc-400">/</span>}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-emerald-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-zinc-900 font-medium" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement,
          }),
        }}
      />
    </>
  );
}

