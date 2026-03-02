"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SECTION_PADDING } from "@/lib/constants";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error || "Subscription failed. Please try again.");
        return;
      }
      setStatus("success");
      setEmail("");
      setMessage("Thank you. You’re subscribed.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className={`bg-zinc-50 ${SECTION_PADDING}`}>
      <motion.div
        {...fadeUp}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
          Stay Updated with MAGTRANS
        </h2>
        <p className="mt-3 text-zinc-600 text-base">
          Receive updates on engineering systems, new product releases and industry insights.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            disabled={status === "loading"}
            className="w-full sm:flex-1 rounded-full border border-zinc-300 px-6 py-3 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all disabled:opacity-60"
            aria-invalid={status === "error"}
            aria-describedby={message ? "newsletter-message" : undefined}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
        {message && (
          <p
            id="newsletter-message"
            role="alert"
            className={`mt-4 text-sm ${status === "success" ? "text-emerald-600" : "text-red-600"}`}
          >
            {message}
          </p>
        )}
      </motion.div>
    </section>
  );
}
