"use client";

import { motion } from "motion/react";

const journey = [
  {
    year: "2019 – 2023",
    label: "Education",
    title: "B.E. Computer Science & Engineering",
    institution: "PSRR Engineering College",
    score: "80%",
    description:
      "Built a strong foundation in computer science, software development and problem-solving.",
    highlights: [],
  },
  {
    year: "2023 – Present",
    label: "Professional Experience",
    title: "Frontend Engineering",
    institution: "React.js • Next.js • Adobe Technologies",
    score: "Production",
    description:
      "Building responsive, production-ready web experiences across content-driven platforms using modern frontend and Adobe technologies.",
    highlights: [
      "AEM & Edge Delivery Services",
      "Adobe Milo",
      "200+ content pages",
      "80+ UI & cross-browser fixes",
    ],
  },
  {
    year: "Continuous",
    label: "Technical Growth",
    title: "Expanding Full-Stack Capabilities",
    institution: "Node.js • REST APIs • MongoDB",
    score: "Learning",
    description:
      "Strengthening modern React and Next.js development while expanding into backend engineering with Node.js, APIs, authentication and database development.",
    highlights: [
      "Node.js backend development",
      "REST API integration",
      "Authentication & CRUD",
      "MongoDB",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#09090b] px-5 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education & Growth
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            From fundamentals to production engineering.
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            A continuous journey of building, learning and expanding
            my technical capabilities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-10">

          {/* Timeline line */}
          <div className="absolute bottom-3 left-[6px] top-3 w-px bg-zinc-800" />

          <div className="space-y-6">

            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="relative pl-8"
              >

                {/* Timeline dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.15,
                  }}
                  className="absolute left-0 top-6 h-[13px] w-[13px] rounded-full border-2 border-cyan-400 bg-[#09090b]"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-xl border border-zinc-800 bg-[#111114] px-5 py-5 transition-colors duration-300 hover:border-cyan-400/30"
                >

                  {/* Top row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-zinc-500">
                        {item.year}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-zinc-700" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                        {item.label}
                      </span>
                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold text-cyan-400">
                      {item.score}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-base font-semibold text-zinc-100 sm:text-lg">
                    {item.title}
                  </h3>

                  {/* Institution / technologies */}
                  <p className="mt-1 text-sm text-cyan-400">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>

                  {/* Technical highlights */}
                  {item.highlights.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 text-[10px] text-zinc-500 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-400"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
