"use client";

import { motion } from "motion/react";

const focusAreas = [
    {
        number: "01",
        title: "Frontend Engineering",
        stack: "React.js · Next.js · JavaScript",
    },
    {
        number: "02",
        title: "Adobe Experience",
        stack: "AEM · EDS · Adobe Milo",
    },
    {
        number: "03",
        title: "UI Engineering",
        stack: "Responsive UI · Accessibility · Cross-browser",
    },
    {
        number: "04",
        title: "Backend Growth",
        stack: "Node.js · MongoDB · REST APIs",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#0b0b0e] px-6 py-20 text-white sm:py-24"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.035] blur-[100px]" />

            <div className="relative mx-auto max-w-5xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4"
                >
                    <span className="h-px w-10 bg-cyan-400" />

                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
                        About Me
                    </span>
                </motion.div>

                {/* Main introduction */}
                <div className="mt-10 grid gap-12 lg:grid-cols-[0.3fr_1fr]">
                    {/* Year / identity */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:block"
                    >
                        <div className="sticky top-32">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                                Profile
                            </p>

                            <p className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-medium tracking-[-0.04em] text-zinc-700">
                                2023
                            </p>

                            <div className="mt-5 h-16 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />

                            <p className="mt-4 max-w-[150px] text-xs leading-5 text-zinc-600">
                                Frontend development · Adobe ecosystem · Modern web
                            </p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="project-title">
                            I build{" "}
                            <span className="text-cyan-400">
                                scalable web experiences
                            </span>{" "}
                            where design, performance and technology come together.
                        </h2>

                        <div className="mt-8 max-w-3xl">
                            <p className="text-[15px] leading-7 text-zinc-400 sm:text-base">
                                I&apos;m a Frontend Developer with 2 years of experience
                                building responsive and production-ready web experiences
                                using JavaScript, React.js, Next.js, HTML and CSS.
                            </p>

                            <p className="mt-5 text-[15px] leading-7 text-zinc-500 sm:text-base">
                                My professional experience includes working with{" "}
                                <span className="text-zinc-300">
                                    Adobe Experience Manager, Edge Delivery Services and Adobe
                                    Milo
                                </span>{" "}
                                to build content-driven websites, reusable UI components and
                                maintainable frontend solutions.
                            </p>
                        </div>

                        {/* Current focus */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-10 flex items-center gap-4"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                            </span>

                            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                Currently expanding into backend development
                            </span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Technical capabilities */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-20 border-y border-white/[0.08]"
                >
                    <div className="grid lg:grid-cols-[0.3fr_1fr]">
                        {/* Label */}
                        <div className="border-b border-white/[0.08] py-6 lg:border-b-0 lg:border-r">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                Technical
                            </p>

                            <p className="mt-2 text-sm text-zinc-400">
                                Focus Areas
                            </p>
                        </div>

                        {/* Focus items */}
                        <div className="grid sm:grid-cols-2">
                            {focusAreas.map((item, index) => (
                                <motion.div
                                    key={item.number}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{ x: 4 }}
                                    className={`group border-b border-white/[0.08] p-6 transition-all duration-300 ${
                                        index % 2 === 1 ? "sm:border-l sm:border-white/[0.08]" : ""
                                    } ${index >= 2 ? "sm:border-b-0" : ""}`}
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="pt-1 text-[10px] tracking-widest text-cyan-400/60">
                                            {item.number}
                                        </span>

                                        <div>
                                            <h3 className="font-[var(--font-space-grotesk)] text-sm font-medium text-zinc-200 transition-colors duration-300 group-hover:text-cyan-400">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-xs leading-5 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-500">
                                                {item.stack}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p className="max-w-2xl text-sm leading-6 text-zinc-600">
                        Focused on solving frontend problems, improving user experiences,
                        and transforming requirements into clean, maintainable interfaces.
                    </p>

                    <div className="flex shrink-0 items-center gap-2 text-xs text-zinc-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        Open to meaningful opportunities
                    </div>
                </motion.div>
            </div>
        </section>
    );
}