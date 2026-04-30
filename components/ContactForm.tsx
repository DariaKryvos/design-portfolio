"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent" && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  return (
    <div aria-live="polite" aria-atomic="true">
      {status === "sent" ? (
        <div
          ref={successRef}
          tabIndex={-1}
          className="py-16 focus:outline-none"
        >
          <div
            className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6"
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900 mb-3">
            Message sent.
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            Thanks for reaching out. I typically respond within 1–2 business days.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2"
              >
                Name <span aria-label="required" className="text-zinc-900">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2"
              >
                Email <span aria-label="required" className="text-zinc-900">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow duration-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2"
            >
              Message <span aria-label="required" className="text-zinc-900">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={7}
              autoComplete="off"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, what you're trying to solve, and what you're looking for in a designer."
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow duration-200 resize-none leading-relaxed"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Sending…</span>
              </>
            ) : (
              <>
                Send message
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
