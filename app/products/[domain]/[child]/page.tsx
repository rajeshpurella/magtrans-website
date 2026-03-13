import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getDomainBySlug } from "@/lib/products-data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CardContainer } from "@/components/ui/CardContainer";

interface PageParams {
  domain: string;
  child: string;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const domain = getDomainBySlug(params.domain);
  const child = domain?.children?.find((c) => c.slug === params.child);

  if (!domain || !child) {
    return {
      title: "Products | MAGTRANS Systems",
    };
  }

  return {
    title: `${child.title} | ${domain.title} | MAGTRANS Systems`,
    description: domain.shortDescription,
    alternates: {
      canonical: `/products/${params.domain}/${params.child}`,
    },
  };
}

export default function ProductChildPage({ params }: { params: PageParams }) {
  const domain = getDomainBySlug(params.domain);

  if (!domain) {
    notFound();
  }

  const child = domain.children?.find((c) => c.slug === params.child);

  if (!child) {
    notFound();
  }

  if (
    domain.slug === "magnetic-testing" &&
    child.slug === "hall-effect-measurement-systems"
  ) {
    return <HallEffectMeasurementSystemsPage />;
  }

  return (
    <>
      <section className="bg-white pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: domain.title, href: `/products/${domain.slug}` },
                { label: child.title },
              ]}
            />
          </div>
          <p className="text-sm text-emerald-700 font-medium mb-3 uppercase tracking-wide">
            {domain.title}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900">
            {child.title}
          </h1>
          {child.image && (
            <div className="mt-8 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 h-64 md:h-80 flex items-center justify-center">
              <Image
                src={child.image}
                alt={child.title}
                width={1280}
                height={512}
                sizes="(min-width: 1024px) 960px, 100vw"
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] gap-8 sm:gap-12 items-start">
          <article
            className="prose prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: child.contentHtml }}
          />

          <aside className="space-y-6">
            {child.pdf && (
              <CardContainer className="p-5">
                <PrimaryButton
                  href={child.pdf}
                  fullWidth
                  className="justify-center"
                >
                  View Detailed PDF
                </PrimaryButton>
              </CardContainer>
            )}

            {child.externalLinks && child.externalLinks.length > 0 && (
              <CardContainer className="px-5 py-4">
                <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase mb-3">
                  Related links
                </p>
                <ul className="space-y-2 text-sm">
                  {child.externalLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-800 transition-colors break-words"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContainer>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}

const HALL_PRODUCTS = [
  {
    name: "DX-70 Hall Measurement System",
    slug: "dx-70",
    image: "/products/magnetic-testing/hall-effect/dx-70.jpg",
    description:
      "Measures carrier concentration, mobility, resistivity and Hall coefficient of semiconductor materials.",
  },
  {
    name: "DX-100 Hall Effect Measurement Equipment",
    slug: "dx-100",
    image: "/products/magnetic-testing/hall-effect/dx-100.jpg",
    description:
      "Integrated electromagnet-based system with precision current source, voltmeter and system software.",
  },
  {
    name: "DX-3000 Hall Effect Device",
    slug: "dx-3000",
    image: "/products/magnetic-testing/hall-effect/dx-3000.jpg",
    description:
      "Fully automated system integrating Hall effect, magnetoresistance and IV characteristics testing.",
  },
  {
    name: "DX-30 Permanent Magnet Hall Effect Meter",
    slug: "dx-30",
    image: "/products/magnetic-testing/hall-effect/dx-30.jpg",
    description:
      "Permanent magnet based Hall measurement system with high-precision Gauss meter and current source.",
  },
  {
    name: "DX-60 Hall Effect Measurement Instrument",
    slug: "dx-60",
    image: "/products/magnetic-testing/hall-effect/dx-60.jpg",
    description:
      "Electromagnet-based precision Hall effect measurement system for semiconductor materials.",
  },
  {
    name: "DX-50 Hall Effect Measurement System",
    slug: "dx-50",
    image: "/products/magnetic-testing/hall-effect/dx-50.jpg",
    description:
      "Laboratory Hall measurement system for research and semiconductor device studies.",
  },
  {
    name: "High & Low Temperature Hall Effect Test System",
    slug: "high-low-temperature",
    image: "/products/magnetic-testing/hall-effect/high-low-temp.jpg",
    description:
      "Temperature-controlled Hall measurement setup with Dewar and thermal controller.",
  },
  {
    name: "DX-1000H High Temperature Hall Measurement Setup",
    slug: "dx-1000h",
    image: "/products/magnetic-testing/hall-effect/dx-1000h.jpg",
    description:
      "High temperature vacuum Hall measurement system with precision magnetic field control.",
  },
  {
    name: "DX-1000L Low Temperature Hall Effect Test System",
    slug: "dx-1000l",
    image: "/products/magnetic-testing/hall-effect/dx-1000l.jpg",
    description:
      "Low temperature Hall effect test system for cryogenic semiconductor characterisation.",
  },
  {
    name: "DX-9000 Electrical Transport Properties Measurement System",
    slug: "dx-9000",
    image: "/products/magnetic-testing/hall-effect/dx-9000.jpg",
    description:
      "Automated transport property measurement system integrating Hall effect and magnetoresistance testing.",
  },
  {
    name: "DX-300 Automatic Hall Effect Test System",
    slug: "dx-300-automatic",
    image: "/products/magnetic-testing/hall-effect/dx-300-automatic.jpg",
    description:
      "Fully automatic electromagnetic Hall effect test system with micro-probe integration.",
  },
];

function HallEffectMeasurementSystemsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-semibold mb-6">
            Hall Effect Measurement Systems
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Hall effect measurement systems are used to determine key transport
            parameters such as carrier concentration, mobility and resistivity
            in semiconducting and conducting materials under controlled
            magnetic fields.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {HALL_PRODUCTS.map((product) => (
              <div
                key={product.slug}
                className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={200}
                  className="object-contain h-[180px] w-full mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <Link
                  href={`/products/magnetic-testing/hall-effect-measurement-systems/${product.slug}`}
                  className="text-sm font-medium text-blue-600"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

