"use client";

import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive, accessible and interactive interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "Next.js",
      "Vanilla JS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Adobe & CMS",
    description: "Content-driven platforms and digital experiences.",
    skills: [
      "Adobe Experience Manager",
      "Edge Delivery Services",
      "Franklin",
      "Adobe Milo",
    ],
  },
  {
    title: "Backend",
    description: "Building and extending backend fundamentals.",
    skills: [
      "Node.js",
      "REST APIs",
      "CRUD APIs",
      "Authentication",
      "MongoDB",
    ],
  },
  {
    title: "Tools",
    description: "Development, debugging and delivery workflows.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
      "Agile / Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Technologies I work with.
          </h2>

          {/* Animated accent */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-[2px] bg-cyan-400"
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950/80 px-5 py-5 transition-all duration-500 hover:border-cyan-400/30 hover:bg-zinc-900/80 hover:shadow-[0_12px_40px_rgba(34,211,238,0.08)]"
            >

              {/* Hover gradient */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.06] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Subtle bottom glow */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full"
              />

              {/* Card Header */}
              <div className="relative">

                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.02em] text-zinc-100 transition-colors duration-300 group-hover:text-cyan-300">
                  {group.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                  {group.description}
                </p>

              </div>

              {/* Skills */}
              <div className="relative mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay:
                        index * 0.08 +
                        skillIndex * 0.04,
                    }}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="cursor-default rounded-md border border-white/[0.09] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:text-cyan-300 hover:shadow-[0_4px_15px_rgba(34,211,238,0.08)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Stack */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-5"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
            Core Stack
          </span>

          {[
            "React.js",
            "Next.js",
            "JavaScript",
            "AEM",
            "EDS",
            "Node.js",
            "MongoDB",
          ].map((technology, index) => (
            <motion.span
              key={technology}
              initial={{
                opacity: 0,
                x: -5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.4 + index * 0.04,
              }}
              className="text-xs text-zinc-500 transition-colors duration-300 hover:text-cyan-400"
            >
              {technology}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
