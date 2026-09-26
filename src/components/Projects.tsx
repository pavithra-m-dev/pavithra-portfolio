"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    number: "01",
    category: "MIGRATION • EDS",
    title: "Product Marketing Site",
    subtitle: "Gatsby → Adobe Franklin & EDS",
    description:
      "Modernized an existing Gatsby-based marketing website by migrating its frontend and content experience to Adobe Franklin and Edge Delivery Services.",
    technologies: [
      "Adobe Franklin",
      "EDS",
      "Adobe AEM",
      "Vanilla JS",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Migrated the existing Gatsby implementation to Adobe Franklin and Edge Delivery Services.",
      "Integrated the EDS project with GitHub repositories for source management.",
      "Converted Markdown-based content into structured web content using the Dev Site Connector.",
      "Integrated AEM for content authoring and presentation.",
      "Developed responsive and performance-focused UI components.",
    ],
  },

  {
    number: "02",
    category: "CIAM • FRONTEND",
    title: "CIAM Admin",
    subtitle: "React & Next.js administration interface",
    description:
      "Developed frontend experiences for a CIAM administration platform with structured workflows, role-based interfaces and responsive UI experiences.",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Developed role-based administration screens.",
      "Implemented location-based UI workflows.",
      "Built interactive administrative interfaces.",
      "Created responsive frontend experiences across screen sizes.",
      "Implemented UI workflows based on project requirements.",
    ],
  },

  {
    number: "03",
    category: "DEVELOPER BLOG • EDS",
    title: "Developer Blog",
    subtitle: "Frontend engineering & platform maintenance",
    description:
      "Maintained and enhanced a production Developer Blog by resolving frontend issues, improving responsive behavior and delivering targeted platform enhancements.",
    technologies: [
      "Adobe Milo",
      "EDS",
      "Vanilla JS",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Resolved frontend styling, layout and responsive issues.",
      "Used Chrome DevTools to identify and troubleshoot UI problems.",
      "Tested fixes locally before deployment.",
      "Kept implementation changes scoped to blog-specific functionality.",
      "Handled ongoing bug tickets and production UI improvements.",
    ],
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090b] px-5 py-16 text-white sm:px-6 sm:py-20"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 right-10 h-72 w-72 rounded-full bg-indigo-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Engineering solutions that solve real problems.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            A selection of frontend, content-platform and migration projects
            where I worked across UI development, Adobe technologies and
            production maintenance.
          </p>
        </motion.div>

        {/* =========================
            PROJECT LIST
        ========================== */}

        <div className="mt-10 space-y-6">

          {projects.map((project, index) => {
            const isOpen = openProject === project.number;

            return (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#111114] transition-all duration-300 hover:border-cyan-400/25"
              >

                <div className="grid lg:grid-cols-[36%_64%]">

                  {/* =====================================================
                      LEFT VISUAL PANEL
                  ====================================================== */}

                  <div
                    className={`group/visual relative min-h-[230px] overflow-hidden p-6 sm:min-h-[260px] lg:min-h-[300px] ${index === 0
                        ? "bg-gradient-to-br from-cyan-950 via-[#0b3442] to-[#09090b]"
                        : index === 1
                          ? "bg-gradient-to-br from-indigo-950 via-[#25215c] to-[#09090b]"
                          : "bg-gradient-to-br from-slate-900 via-[#123943] to-[#09090b]"
                      }`}
                  >
                    {/* =================================================
      SUBTLE TECH GRID
  ================================================== */}

                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: `
        linear-gradient(
          rgba(255,255,255,0.4) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(255,255,255,0.4) 1px,
          transparent 1px
        )
      `,
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* =================================================
      SOFT BACKGROUND GLOW
  ================================================== */}

                    <motion.div
                      animate={{
                        opacity: [0.08, 0.18, 0.08],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
                    />

                    {/* =================================================
      CATEGORY
  ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="relative z-30 inline-flex rounded-lg border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md"
                    >
                      <span className="text-[10px] font-semibold tracking-[0.18em] text-zinc-200">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* =================================================
      CENTRAL TECH CORE
  ================================================== */}

                    <div className="pointer-events-none absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2">

                      {/* Outer glow */}

                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -inset-10 rounded-full border border-cyan-400/10"
                      />

                      {/* Inner ring */}

                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.25, 0.5, 0.25],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -inset-5 rounded-full border border-cyan-400/20"
                      />

                      {/* Core */}

                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                          boxShadow: [
                            "0 0 12px rgba(34,211,238,0.2)",
                            "0 0 30px rgba(34,211,238,0.55)",
                            "0 0 12px rgba(34,211,238,0.2)",
                          ],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 backdrop-blur-sm"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,1)]" />
                      </motion.div>

                    </div>

                    {/* =================================================
      CONNECTION LINES
  ================================================== */}

                    <motion.div
                      animate={{
                        opacity: [0.1, 0.4, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute left-[25%] top-[53%] h-px w-[25%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
                    />

                    <motion.div
                      animate={{
                        opacity: [0.1, 0.35, 0.1],
                      }}
                      transition={{
                        duration: 3.5,
                        delay: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute right-[24%] top-[53%] h-px w-[24%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
                    />

                    {/* =================================================
      SKILL POPUP 01
  ================================================== */}

                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.45, 1, 0.45],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-[13%] top-[42%] hidden sm:block"
                    >
                      <div className="rounded-md border border-cyan-400/20 bg-black/30 px-3 py-1.5 shadow-[0_0_15px_rgba(34,211,238,0.05)] backdrop-blur-md">
                        <span className="text-[9px] font-medium tracking-[0.12em] text-cyan-300">
                          UI
                        </span>
                      </div>
                    </motion.div>

                    {/* =================================================
      SKILL POPUP 02
  ================================================== */}

                    <motion.div
                      animate={{
                        y: [0, 5, 0],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3.5,
                        delay: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-[11%] top-[37%] hidden sm:block"
                    >
                      <div className="rounded-md border border-cyan-400/20 bg-black/30 px-3 py-1.5 shadow-[0_0_15px_rgba(34,211,238,0.05)] backdrop-blur-md">
                        <span className="text-[9px] font-medium tracking-[0.12em] text-cyan-300">
                          API
                        </span>
                      </div>
                    </motion.div>

                    {/* =================================================
      SKILL POPUP 03
  ================================================== */}

                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                        opacity: [0.35, 1, 0.35],
                      }}
                      transition={{
                        duration: 4,
                        delay: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-[24%] right-[18%] hidden sm:block"
                    >
                      <div className="rounded-md border border-cyan-400/20 bg-black/30 px-3 py-1.5 shadow-[0_0_15px_rgba(34,211,238,0.05)] backdrop-blur-md">
                        <span className="text-[9px] font-medium tracking-[0.12em] text-cyan-300">
                          EDS
                        </span>
                      </div>
                    </motion.div>

                    {/* =================================================
      SMALL FLOATING DOTS
  ================================================== */}

                    <motion.span
                      animate={{
                        y: [0, -7, 0],
                        opacity: [0.3, 0.9, 0.3],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-[19%] top-[27%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />

                    <motion.span
                      animate={{
                        y: [0, 6, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3.2,
                        delay: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-[25%] top-[60%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />

                    {/* =================================================
      BOTTOM LABEL
  ================================================== */}

                    <div className="absolute bottom-6 left-6 z-30">

                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-300">
                        Frontend Engineering
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />

                        <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                          Production Experience
                        </span>
                      </div>

                    </div>

                    {/* =================================================
      PROJECT NUMBER
  ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="pointer-events-none absolute bottom-[-18px] right-3 text-[120px] font-bold leading-none text-white/[0.045]"
                    >
                      {project.number}
                    </motion.div>

                  </div>

                  {/* =====================================================
                      RIGHT PROJECT DETAILS
                  ====================================================== */}

                  <div className="relative p-6 sm:p-8 lg:p-9">

                    {/* =========================
                        EXPAND BUTTON
                    ========================== */}

                    <motion.button
                      type="button"
                      onClick={() =>
                        setOpenProject(
                          isOpen ? null : project.number
                        )
                      }
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      aria-label={
                        isOpen
                          ? `Collapse ${project.title}`
                          : `Expand ${project.title}`
                      }
                      className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-xl text-zinc-300 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <motion.span
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        +
                      </motion.span>
                    </motion.button>

                    {/* =========================
                        SUBTITLE
                    ========================== */}

                    <p className="pr-14 text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
                      {project.subtitle}
                    </p>

                    {/* =========================
                        TITLE
                    ========================== */}
                    <h3 className="project-title mt-2">
                      {project.title}
                    </h3>

                    {/* =========================
                        DESCRIPTION
                    ========================== */}

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400 sm:text-[15px]">
                      {project.description}
                    </p>

                    {/* =========================
                        TECHNOLOGIES
                    ========================== */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          whileHover={{
                            y: -2,
                          }}
                          className="rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-[11px] font-medium text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>

                    {/* =========================
                        EXPANDABLE DETAILS
                    ========================== */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="mt-7 border-t border-zinc-800 pt-6">

                            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                              Technical Contributions
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">

                              {project.highlights.map(
                                (highlight) => (
                                  <motion.div
                                    key={highlight}
                                    initial={{
                                      opacity: 0,
                                      x: -10,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    className="flex gap-3 text-xs leading-5 text-zinc-400"
                                  >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                                    <span>
                                      {highlight}
                                    </span>
                                  </motion.div>
                                )
                              )}

                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* =========================
                        BOTTOM INDICATOR
                    ========================== */}

                    <div className="mt-7 flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                      <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                        {isOpen
                          ? "Technical details expanded"
                          : "View technical contributions"}
                      </span>

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}