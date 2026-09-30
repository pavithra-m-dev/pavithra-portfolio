"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300${scrolled ? "border-b border-white/10 bg-black/90 shadow-lg backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex w-full max-w-[1080px] items-center justify-between px-6 py-4">
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.05]">
            <Image src="/pavithra-mark.png" alt="" width={20} height={15} priority className="h-4 w-5 object-contain" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 group-hover:text-zinc-200">
            Pavithra<span className="text-cyan-400"> M</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-gray-300 transition-all duration-200 hover:text-cyan-400">{item.name}</a>
          ))}
          <a href="/Pavithra_M_Frontend_Developer_Resume.pdf" download className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black">Resume</a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white md:hidden" aria-label="Toggle menu">{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="text-gray-300 transition-colors hover:text-cyan-400">{item.name}</a>
            ))}
            <a href="/Pavithra_M_Frontend_Developer_Resume.pdf" download onClick={() => setMenuOpen(false)} className="w-fit rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-400">Download Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
