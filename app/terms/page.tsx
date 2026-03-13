import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions | MAGTRANS Systems",
  description:
    "Terms and conditions for using the MAGTRANS Systems Private Limited website and accessing product and technical information.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <SectionShell background="white">
        <div className="space-y-10 max-w-3xl">
          <SectionHeader
            align="left"
            title="Terms and Conditions"
            subtitle="By accessing this website, you agree to comply with the following terms and conditions."
          />

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Website Usage
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              This website provides general information regarding MAGTRANS
              products, services and technical resources. Users may view or
              download information for informational and business purposes only.
              Any other use, including commercial redistribution, is prohibited
              unless expressly authorized in writing by MAGTRANS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Acceptable Use
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              When using this website, users must not:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 leading-relaxed space-y-1">
              <li>Attempt unauthorized access to website systems or data</li>
              <li>Distribute malicious software, code or content</li>
              <li>
                Misuse website content, trademarks or intellectual property for
                unauthorised purposes
              </li>
              <li>
                Interfere with normal website operation or other users&apos;
                access to the site
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Intellectual Property
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              All content on this website, including text, images, product
              information, technical documentation, logos and branding, is the
              intellectual property of MAGTRANS Systems Private Limited unless
              otherwise stated. Unauthorized reproduction, modification,
              distribution or public display of any content is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Product Information
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              Product descriptions, specifications and technical information are
              provided for general guidance only and may change without notice.
              MAGTRANS and its principals reserve the right to modify products,
              specifications or availability at any time. Users should confirm
              critical details with MAGTRANS before placing orders or designing
              systems based on published information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Limitation of Liability
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              MAGTRANS shall not be liable for any direct, indirect, incidental
              or consequential damages arising from the use of this website, the
              information contained herein or any linked resources. Use of the
              website and reliance on its content is at the user&apos;s own
              risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">External Links</h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              This website may include links to external manufacturer or partner
              websites. These links are provided for convenience only. MAGTRANS
              does not control and is not responsible for the content, accuracy
              or privacy policies of external sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Changes to Website
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              MAGTRANS reserves the right to modify website content, features or
              availability at any time without notice. This includes updates to
              product information, downloads and technical resources.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Governing Law
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              These terms shall be governed by and interpreted in accordance
              with the laws of India. Any disputes arising out of or in
              connection with the use of this website shall be subject to the
              exclusive jurisdiction of the courts in Hyderabad, Telangana,
              India.
            </p>
          </section>
        </div>
      </SectionShell>
    </main>
  );
}

