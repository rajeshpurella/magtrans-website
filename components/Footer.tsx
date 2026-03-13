import Link from "next/link";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <p className="font-montserrat font-bold text-xl">MAGTRANS Systems</p>
            <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
              MAGTRANS brings over a decade of specialized cooling system expertise developed in collaboration with Werner Finley, supported by 45+ years of engineering heritage in climate simulation and refrigeration technology, serving Indian customers with state-of-the-art German systems for decades.
            </p>
            <p className="mt-4 text-zinc-400 text-sm">
              We offer quality products and systems from leading national and international manufacturers.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-zinc-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/#about", label: "About" },
                { href: "/#industries", label: "Industries" },
                { href: "/#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-zinc-300 mb-4">
              Visit Us
            </h4>
            <address className="not-italic space-y-3 text-sm text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                3-6-369/A/10, Flat No.1, Srinilayam, Street No.1, Himayathagar, Hyderabad-500029
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:sales@magtrans.in" className="hover:text-white transition-colors">
                  sales@magtrans.in
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+919392123094" className="hover:text-white transition-colors">
                  +91 93921 23094
                </a>
              </p>
            </address>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-zinc-500 text-xs uppercase tracking-[0.16em]">
                Connect
              </span>
              <Link
                href="https://www.linkedin.com/company/magtrans-systems-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAGTRANS on LinkedIn"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 p-1.5 text-zinc-300 transition-colors transition-transform duration-300 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-zinc-800 hover:scale-110"
              >
                <Linkedin className="w-7 h-7 animate-pulse hover:animate-none" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col gap-3 sm:gap-4">
          <p className="text-zinc-500 text-sm text-center sm:text-left">
            Trusted Testing and Proven Performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm">
              <Link
                href="/privacy-policy"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <Link
                href="/terms"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <Link
                href="/sitemap"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>

            <p className="text-zinc-500 text-sm text-center sm:text-right">
              © 2026 MAGTrans Systems Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
