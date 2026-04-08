"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/90 group-hover:text-white transition-colors">
            EA Sports FC 26
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Modes", "Gallery", "Reviews", "Editions"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#editions"
            className="text-xs tracking-[0.15em] uppercase bg-white text-black px-5 py-2 hover:bg-white/90 transition-colors duration-300"
          >
            Pre-order
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-60 border-b border-white/5" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-black/80 backdrop-blur-md">
          {["Features", "Modes", "Gallery", "Reviews", "Editions"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#editions"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-[0.1em] uppercase bg-white text-black px-5 py-2.5 text-center hover:bg-white/90 transition-colors"
          >
            Pre-order
          </a>
        </div>
      </div>
    </header>
  );
}
