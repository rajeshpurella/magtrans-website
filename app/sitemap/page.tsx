import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Sitemap | MAGTRANS Systems",
  description:
    "Sitemap for MAGTRANS Systems Private Limited, listing primary website sections, product categories, resources and legal pages.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function SitemapPage() {
  return (
    <main className="bg-white">
      <SectionShell background="white">
        <div className="space-y-10 max-w-5xl">
          <SectionHeader
            align="left"
            title="Sitemap"
            subtitle="Overview of key MAGTRANS website sections, product categories and resources."
          />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
                Main Pages
              </h2>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                <li>
                  <Link href="/" className="hover:text-emerald-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-emerald-700">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-emerald-700">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-emerald-700">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-emerald-700">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-emerald-700">
                    Contact
                  </Link>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
                Product Categories
              </h2>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                <li>
                  <Link
                    href="/products/magnetic-testing"
                    className="hover:text-emerald-700"
                  >
                    Magnetic Testing Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/cryogenic-systems"
                    className="hover:text-emerald-700"
                  >
                    Cryogenic Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/process-cooling"
                    className="hover:text-emerald-700"
                  >
                    Process Cooling Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/heat-flux-instrumentation"
                    className="hover:text-emerald-700"
                  >
                    Advanced Measurement Systems
                  </Link>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
                Resources
              </h2>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                <li>
                  <Link href="/insights" className="hover:text-emerald-700">
                    Technical Newsletters
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-emerald-700">
                    Product Catalogs
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-emerald-700">
                    Technical Insights
                  </Link>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
                Company
              </h2>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                <li>
                  <Link href="/#about" className="hover:text-emerald-700">
                    About MAGTRANS
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-emerald-700">
                    Contact Information
                  </Link>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
                Legal
              </h2>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                <li>
                  <Link href="/privacy-policy" className="hover:text-emerald-700">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-emerald-700">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

