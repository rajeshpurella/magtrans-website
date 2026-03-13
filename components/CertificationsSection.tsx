"use client";

import { useState } from "react";
import { Award, ShieldCheck } from "lucide-react";

const CERTIFICATE_PDF_PATH = "/certificates/iso-9001-2015-magtrans.pdf";

export default function CertificationsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-emerald-50/60 py-14 sm:py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <div className="w-16 h-1 bg-emerald-600 mx-auto mb-8 rounded-full" />

        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="inline-flex items-center justify-center rounded-full bg-white shadow-sm border border-emerald-100 px-4 py-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-emerald-700">
              ISO Certification
            </span>
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Award className="w-8 h-8" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
          ISO 9001:2015 Certified
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 mt-4 max-w-2xl mx-auto">
          Our quality management systems are certified to ISO 9001:2015, ensuring consistent
          performance, traceability and regulatory compliance across engineering, supply and service.
        </p>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="mt-8 inline-flex items-center justify-center min-h-[44px] px-5 py-3 gap-2 text-emerald-700 font-medium transition-all duration-300 hover:gap-3 hover:text-emerald-800"
        >
          {isOpen ? "Hide certification document" : "View certification document"}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[900px] opacity-100 mt-10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/70 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-xs sm:text-sm text-zinc-500 mb-4 sm:mb-6 uppercase tracking-[0.18em]">
              ISO 9001:2015 Quality Management Certification
            </p>

            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-4 sm:p-6 transition-transform transition-shadow duration-300 hover:shadow-md hover:scale-[1.01] max-w-full">
              <div className="relative h-[260px] sm:h-[340px] md:h-[420px] flex items-center justify-center">
                <iframe
                  src={CERTIFICATE_PDF_PATH}
                  title="ISO 9001:2015 Certificate - MAGTRANS Systems"
                  className="w-full h-full rounded-xl border border-zinc-200 bg-white"
                />
              </div>
            </div>

            <div className="mt-4 text-[11px] sm:text-xs text-zinc-500 leading-relaxed text-center space-y-1.5">
              <p>
                <span className="font-semibold text-zinc-600">
                  Certified Standard:
                </span>{" "}
                <span>ISO 9001:2015</span>
              </p>
              <p>
                <span className="font-semibold text-zinc-600">Scope:</span>{" "}
                <span>Sales &amp; Integration of Engineering Systems</span>
              </p>
              <p>
                <span className="font-semibold text-zinc-600">Company:</span>{" "}
                <span>MAGTRANS Systems Private Limited</span>
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={CERTIFICATE_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-emerald-600 text-emerald-700 text-sm font-semibold bg-white hover:bg-emerald-50 transition-colors min-w-[160px]"
              >
                View Certificate
              </a>
              <a
                href={CERTIFICATE_PDF_PATH}
                download
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors min-w-[160px]"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
