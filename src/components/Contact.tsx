"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09090b] px-5 py-16 text-white sm:px-6 sm:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-64 w-64 rounded-full bg-cyan-400/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-indigo-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s build something great.
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
            Have a project, opportunity or just want to say hello?
            Feel free to send me a message.
          </p>
        </motion.div>

        {/* =========================
            CONTACT GRID
        ========================== */}
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =========================
              LEFT CONTACT CARD
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-zinc-800 bg-[#111114] p-6"
          >

            {/* Profile */}
            <div className="flex items-center gap-4">

              {/* Small profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-[76px] w-[76px] shrink-0"
              >
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 p-[2px]">

                  <div className="h-full w-full rounded-full bg-[#111114] p-[3px]">

                    <img
                      src="/email-profile.png"
                      alt="Pavithra M"
                      className="h-full w-full rounded-full object-cover object-top"
                    />

                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  Pavithra M
                </h3>

                <p className="mt-1 text-xs font-medium text-cyan-400">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-400">
              I build modern, responsive web experiences with a focus
              on clean UI, performance, and scalable frontend
              development.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3">

              {/* Email */}
              <motion.a
                href="mailto:pavithram1642002@gmail.com"
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 rounded-lg py-1.5 text-sm text-zinc-400 transition-colors hover:text-cyan-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-[#0b0b0e] text-xs text-cyan-400">
                  @
                </span>

                <span>
                  pavithram1642002@gmail.com
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+919791697752"
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 rounded-lg py-1.5 text-sm text-zinc-400 transition-colors hover:text-cyan-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-[#0b0b0e] text-xs text-cyan-400">
                  ☎
                </span>

                <span>
                  +91 9791697752
                </span>
              </motion.a>

              {/* Location */}
              <div className="flex items-center gap-3 py-1.5 text-sm text-zinc-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-[#0b0b0e] text-xs text-cyan-400">
                  ●
                </span>

                <span>
                  Ettayapuram, Tamil Nadu
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3 border-t border-zinc-800 pt-5">

              <motion.a
                href="https://github.com/pavithra-m-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg border border-zinc-800 px-4 py-2 text-xs font-medium text-zinc-400 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
              >
                GitHub
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/pavithram57"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg border border-zinc-800 px-4 py-2 text-xs font-medium text-zinc-400 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* =========================
              RIGHT CONTACT FORM
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-zinc-800 bg-[#111114] p-6"
          >

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-800 bg-[#0b0b0e] px-3.5 py-2.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-zinc-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Email */}
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@gmail.com"
                  className="w-full rounded-lg border border-zinc-800 bg-[#0b0b0e] px-3.5 py-2.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-zinc-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-zinc-800 bg-[#0b0b0e] px-3.5 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-zinc-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Submit */}
              <div className="mt-5 flex justify-end">
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-400/10 transition-all hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message →"}
                </motion.button>
              </div>

              {/* Success */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-right text-xs text-green-400"
                >
                  Thanks for reaching out! Your message has been
                  sent successfully.
                </motion.p>
              )}

              {/* Error */}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-right text-xs text-red-400"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-9 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-semibold text-zinc-200">
              Have something interesting in mind?
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Let&apos;s create something meaningful together.
            </p>
          </div>

          <motion.a
            href="mailto:pavithram1642002@gmail.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border border-cyan-400/30 px-5 py-2.5 text-xs font-semibold text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black"
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
