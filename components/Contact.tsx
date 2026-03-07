"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING, CONTAINER_CLASS } from "@/lib/constants";

const MAP_LINK = "https://share.google/kAqCAeTtcK0whYNVg";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const t = setTimeout(() => {
      setStatus("idle");
      setToastMessage("");
    }, 5000);
    return () => clearTimeout(t);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: formState.company.trim(),
          message,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setToastMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setToastMessage("Message sent. We’ll get back to you soon.");
      setFormState({ name: "", email: "", company: "", message: "" });
      setTouched({});
    } catch {
      setStatus("error");
      setToastMessage("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleBlur = (field: string) => {
    setTouched((t) => ({ ...t, [field]: true }));
  };

  const errors = {
    name: touched.name && !formState.name.trim(),
    email: touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email),
    message: touched.message && !formState.message.trim(),
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300";

  return (
    <section id="contact" className={`${SECTION_PADDING} bg-zinc-50 scroll-mt-20`}>
      <div className={CONTAINER_CLASS}>
        <motion.div
          {...fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Contact Us
          </h2>
          <p className="mt-4 text-zinc-600 text-base">
            Get in touch for solutions in process cooling, magnetics and cryogenics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div {...fadeUp} className="space-y-8">
            <div>
              <h3 className="font-semibold text-zinc-900 text-lg mb-6">Visit Us</h3>
              <address className="not-italic space-y-4">
                <p className="flex items-start gap-3 text-zinc-700">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  Sales Office: 3-6-369/A/10, Flat No.1, Srinilayam, Street No.1, Himayathagar, Hyderabad-500029
                </p>
                <p className="flex items-center gap-3 text-zinc-700">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <a href="tel:+919392123094" className="hover:text-emerald-600 transition-colors">
                    +91 93921 23094
                  </a>
                </p>
                <p className="flex items-center gap-3 text-zinc-700">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                  <a href="mailto:sales@magtrans.in" className="hover:text-emerald-600 transition-colors">
                    sales@magtrans.in
                  </a>
                </p>
                <p className="flex items-center gap-3 text-zinc-700">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                  Mon–Sat: 9:30 AM – 6:30 PM
                </p>
              </address>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-video min-h-[280px] w-full">
              <iframe
                src="https://www.google.com/maps?q=3-6-369%2FA%2F10%2C+Flat+No.1%2C+Srinilayam%2C+Street+No.1%2C+Himayathnagar%2C+Hyderabad+500029&output=embed"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MAGTrans Systems office location - Hyderabad"
              />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-emerald-600 hover:underline"
            >
              Open in Google Maps
            </a>
          </motion.div>

          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 sm:p-8 md:p-10"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  className={`${inputClass} ${errors.name ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">Name is required.</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  className={`${inputClass} ${errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">Valid email is required.</p>}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zinc-900 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  className={`${inputClass} resize-none ${errors.message ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
                  placeholder="How can we help?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">Message is required.</p>}
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full min-h-[44px] py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all duration-300 px-6 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </div>
          </motion.form>

        <AnimatePresence>
          {(status === "success" || status === "error") && toastMessage && (
            <motion.div
              key={toastMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg text-sm font-medium max-w-[90vw] text-center"
              style={{
                backgroundColor: status === "success" ? "#059669" : "#dc2626",
                color: "#fff",
              }}
              role="alert"
            >
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
