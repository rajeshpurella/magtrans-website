"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            Trusted Testing and Proven Performance.
          </p>
          <p className="text-zinc-500 text-sm">
            © 2026 MAGTrans Systems Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
