"use client";

import Image from "next/image";
import { motion } from "motion/react";

const technologies = ["React.js", "Next.js", "JavaScript", "AEM", "EDS"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#0b0b0e] px-6 text-white">
      <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.12, 0.06] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-[12%] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />
      <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.03, 0.07, 0.03] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute bottom-[8%] right-[8%] h-72 w-72 rounded-full bg-indigo-400/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center py-16 sm:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.45fr_0.55fr] lg:gap-4">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-cyan-400/70" />
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400">Frontend Developer</p>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-lg text-zinc-500 sm:text-xl">Hi, I&apos;m</motion.p>

            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }} className="mt-1 max-w-4xl font-[var(--font-manrope)] text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.045em] text-zinc-100 sm:text-[3.6rem] lg:text-[4.35rem]">
              Pavithra <span className="text-cyan-400">M</span>
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.03em] text-zinc-300 sm:text-3xl">
              Building clean, responsive web experiences.
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }} className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
              I build modern interfaces with <span className="text-zinc-200">React, Next.js and Adobe technologies</span>, with a focus on performance, accessibility and maintainable frontend systems.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-7 flex flex-wrap gap-3">
              <motion.a href="#projects" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-400/10 transition-shadow duration-300 hover:shadow-cyan-400/25">View Projects</motion.a>
              <motion.a href="/Pavithra_M_Frontend_Developer_Resume.pdf" download whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className="rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400">Resume</motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="mt-6 flex flex-wrap gap-2">
              {technologies.map((technology, index) => (
                <motion.span key={technology} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.7 + index * 0.07 }} whileHover={{ y: -3, scale: 1.03 }} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-zinc-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:text-cyan-300">
                  {technology}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25, scale: 0.94 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }} className="relative mx-auto w-full max-w-[220px] lg:mx-0 lg:ml-auto lg:mr-4">
            <motion.div animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.65, 0.4], rotate: [0, 2, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-6 rounded-[2.5rem] border border-cyan-400/[0.06] bg-gradient-to-br from-cyan-400/[0.10] via-cyan-400/[0.03] to-transparent blur-[1px]" />
            <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} whileHover={{ y: -8, scale: 1.035 }} className="relative mx-auto aspect-square w-[175px] overflow-hidden rounded-full border border-cyan-400/20 bg-zinc-900 shadow-2xl shadow-cyan-400/[0.08] sm:w-[190px] lg:w-[200px]">
              <Image src="/Portfolio-Image.jpeg" alt="Pavithra M - Frontend Developer" fill priority sizes="200px" className="object-cover object-[center_15%] transition-transform duration-700 hover:scale-[1.06]" />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/25 via-transparent to-cyan-400/[0.04]" />
            </motion.div>

            <motion.span animate={{ scale: [1, 1.25, 1], opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="absolute right-3 top-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-4 -left-5 rounded-lg border border-white/[0.08] bg-[#111114]/95 px-3 py-2 shadow-xl backdrop-blur-md">
              <p className="text-[8px] uppercase tracking-[0.18em] text-zinc-600">Working with</p>
              <p className="mt-0.5 text-[10px] font-medium text-cyan-400">React · Next.js · AEM</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="relative flex h-[30px] w-[18px] items-start justify-center rounded-full border border-zinc-700">
          <motion.span animate={{ y: [3, 11, 3], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400" />
        </div>
        <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
      </motion.a>
    </section>
  );
}
