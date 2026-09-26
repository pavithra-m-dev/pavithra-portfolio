"use client";

import { motion } from "motion/react";

const achievements = [
  {
    value: "15+",
    title: "Reusable UI Components",
    description:
      "Designed and enhanced reusable UI components using JavaScript, HTML, CSS, Adobe Milo and Edge Delivery Services.",
  },
  {
    value: "200+",
    title: "Content Pages",
    description:
      "Built and maintained production content pages and developer experiences through AEM and EDS publishing workflows.",
  },
  {
    value: "80+",
    title: "UI Issues Resolved",
    description:
      "Diagnosed and resolved responsive, visual and cross-browser issues across desktop, tablet and mobile experiences.",
  },
  {
    value: "5+",
    title: "Production Features",
    description:
      "Delivered features including Hero video support, Author Pages, RSS generation and dynamic content rendering.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#09090b] px-5 py-16 text-white sm:px-6 sm:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-indigo-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Achievements
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Engineering impact, measured in production.
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            Focused on building reliable interfaces, improving user
            experiences and delivering production-ready frontend solutions.
          </p>
        </motion.div>

        {/* =========================
            MAIN ACHIEVEMENT GRID
        ========================== */}
        <div className="mt-9 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">

          {/* =========================
              LEFT FEATURE CARD
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#111114] p-6"
          >
            {/* Accent glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.06] blur-3xl" />

            <div className="relative">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Technical Impact
              </p>

              <h3 className="mt-3 max-w-md text-xl font-semibold leading-7 text-zinc-100 sm:text-2xl">
                Building interfaces that scale beyond the browser.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">
                My work focuses on translating product requirements into
                maintainable frontend experiences while improving
                performance, responsiveness and content delivery.
              </p>

              {/* Technical highlights */}
              <div className="mt-7 space-y-5">

                {/* Item 1 */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-3"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-cyan-400">
                    <span className="text-xs font-bold">
                      UI
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">
                      Scalable UI Development
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Reusable components and responsive interfaces
                      designed for consistency across experiences.
                    </p>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-3"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-cyan-400">
                    <span className="text-xs font-bold">
                      DX
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">
                      Content Experience
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Production experience with AEM, EDS and Adobe
                      Milo for content-driven websites.
                    </p>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-3"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-cyan-400">
                    <span className="text-xs font-bold">
                      ⚡
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">
                      Production-Focused Delivery
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Focused on reliable implementation, debugging,
                      responsive behavior and real-world usability.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT METRICS
          ========================== */}
          <div className="grid grid-cols-2 gap-4">

            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#111114] p-5 transition-colors duration-300 hover:border-cyan-400/30"
              >

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.15,
                  }}
                  className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl"
                >
                  {item.value}
                </motion.div>

                {/* Title */}
                <h3 className="mt-4 text-sm font-semibold leading-5 text-zinc-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[11px] leading-5 text-zinc-500">
                  {item.description}
                </p>

                {/* Bottom indicator */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                    Production Impact
                  </span>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}