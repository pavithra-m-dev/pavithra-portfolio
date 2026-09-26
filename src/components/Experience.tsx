"use client";

import { motion } from "motion/react";

const responsibilities = [
  "Developed and customized 15+ reusable UI components using JavaScript, HTML, CSS, Adobe Milo and Edge Delivery Services.",
  "Built and maintained 200+ content pages and developer articles using Adobe Experience Manager and EDS publishing workflows.",
  "Resolved 80+ responsive UI and cross-browser issues across desktop, tablet and mobile.",
  "Delivered production features including Hero video support, Author Pages, RSS generation and dynamic content rendering.",
  "Used browser DevTools to diagnose frontend issues and improve UI reliability.",
  "Kept changes scoped to the Developer Blog without impacting shared Milo components used by other projects.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0b0b0e] px-6 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative mt-12">

          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent md:block" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative md:pl-10"
          >

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 hidden md:block">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34,211,238,0.25)",
                    "0 0 0 8px rgba(34,211,238,0)",
                    "0 0 0 0 rgba(34,211,238,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400/60 bg-[#0b0b0e]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </motion.div>
            </div>

            {/* Main experience block */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-cyan-400/20 hover:bg-white/[0.035]">

              {/* Header */}
              <div className="border-b border-white/[0.07] px-5 py-5 sm:px-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div>
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-400">
                      Frontend Engineering
                    </p>

                    {/* Project-title style */}
                    <h3 className="project-title font-[var(--font-space-grotesk)] text-2xl font-medium leading-tight tracking-[-0.03em] text-zinc-100 sm:text-[2rem]">
                      Frontend Developer
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      MitrahSoft Software Solutions Pvt. Ltd.
                    </p>
                  </div>

                  <div className="shrink-0 text-left sm:text-right">
                    <p className="text-sm font-medium text-zinc-300">
                      Apr 2024 — Jul 2026
                    </p>

                    <p className="mt-1 text-xs text-zinc-600">
                      Kovilpatti, Tamil Nadu
                    </p>
                  </div>

                </div>
              </div>

              {/* Contributions */}
              <div className="px-5 py-6 sm:px-7">

                {/* No horizontal line */}
                <div className="mb-5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                    Key Contributions
                  </span>
                </div>

                {/* Contribution grid */}
                <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                      }}
                      className="group flex gap-3"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-400" />

                      <p className="text-sm leading-6 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
