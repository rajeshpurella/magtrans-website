"use client";

import { useState } from "react";
import { Award } from "lucide-react";

export default function CertificationsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <div className="w-16 h-1 bg-green-600 mx-auto mb-6 rounded-full" />

        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <Award className="w-10 h-10" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          ISO 9001:2015 Certified
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our quality management systems meet internationally recognized standards, ensuring
          consistent performance, reliability and compliance.
        </p>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="mt-8 inline-flex items-center gap-2 text-green-600 font-medium transition-all duration-300 hover:gap-3"
        >
          {isOpen ? "Hide Certification Document" : "View Certification Document"}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[800px] opacity-100 mt-10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-sm text-gray-500 mb-6">
              ISO 9001:2015 Quality Management Certification
            </p>

            <div className="rounded-xl overflow-hidden border border-gray-300 bg-white">
              {/* Replace with real certificate (Image or iframe) in future */}
              <div className="h-[500px] flex items-center justify-center text-gray-400">
                Certificate Preview Area
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
