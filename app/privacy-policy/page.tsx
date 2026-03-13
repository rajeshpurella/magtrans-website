import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | MAGTRANS Systems",
  description:
    "Privacy Policy for MAGTRANS Systems Private Limited describing how we collect, use and protect personal information shared via this website.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <SectionShell background="white">
        <div className="space-y-10 max-w-3xl">
          <SectionHeader
            align="left"
            title="Privacy Policy"
            subtitle="MAGTRANS Systems Private Limited respects your privacy and is committed to protecting the personal information you share with us when using our website and services."
          />

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Information We Collect
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              We may collect the following information when you interact with our
              website:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 leading-relaxed space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization details</li>
              <li>Any information submitted through contact forms or inquiries</li>
            </ul>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              This information is collected solely for communication and service
              purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              How We Use Your Information
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              The information collected may be used for:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 leading-relaxed space-y-1">
              <li>Responding to inquiries and technical requests</li>
              <li>Providing product or service information</li>
              <li>Improving website functionality and user experience</li>
              <li>Internal communication related to business services</li>
            </ul>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              MAGTRANS does not sell, rent, or share personal data with third
              parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Data Protection
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              We implement reasonable administrative and technical security
              measures to protect your information against unauthorized access,
              disclosure, or misuse.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Data Retention
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              Personal data submitted through the website will only be retained for
              as long as necessary to respond to inquiries or fulfill the requested
              service, unless a longer retention period is required or permitted by
              law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">User Rights</h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              Subject to applicable law, users may request access, correction or
              deletion of their personal information held by MAGTRANS. We may ask
              for reasonable verification of identity before acting on such
              requests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Third-Party Links
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              Our website may contain links to external websites or partner
              organizations. MAGTRANS is not responsible for the privacy practices
              or content of external websites. We recommend that you review the
              privacy policies of any external sites you visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">Cookies</h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              This website may use cookies and analytics tools to enhance browsing
              experience and analyze website traffic. Cookies are small text files
              stored on your device by your browser.
            </p>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              Users may choose to disable cookies through their browser settings.
              However, disabling cookies may affect the functionality of certain
              features on the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Updates to This Policy
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              MAGTRANS may update this Privacy Policy periodically to reflect
              changes in legal requirements, industry practices or website
              functionality. The updated policy will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              Contact Information
            </h2>
            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
              For questions regarding this Privacy Policy or how your information
              is handled, please contact:
            </p>
            <div className="text-sm md:text-base text-zinc-700 leading-relaxed">
              <p>MAGTRANS Systems Private Limited</p>
              <p>3-6-369/A/10, Flat No.1</p>
              <p>Srinilayam Street No.1</p>
              <p>Himayathnagar</p>
              <p>Hyderabad – 500029</p>
              <p>India</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:sales@magtrans.in"
                  className="text-emerald-700 hover:text-emerald-800 underline-offset-2 hover:underline"
                >
                  sales@magtrans.in
                </a>
              </p>
            </div>
          </section>
        </div>
      </SectionShell>
    </main>
  );
}

