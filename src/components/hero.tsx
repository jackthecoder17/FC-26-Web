"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        setTimeout(() => {
          el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 200 + i * 180);
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/player.png"
          alt="Player in motion"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
            Coming September 2026
          </p>

          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-light tracking-tight leading-[0.95] mb-6"
          >
            The World&apos;s
            <br />
            <span className="font-semibold">Game</span>
          </h1>

          <p
            ref={subRef}
            className="text-base md:text-lg text-white/50 leading-relaxed max-w-md mb-8 font-light"
          >
            Football rebuilt from the ground up. New engine, new gameplay,
            new era.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#editions"
              className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 text-sm tracking-[0.1em] uppercase font-medium hover:bg-white/90 transition-colors duration-300"
              id="hero-cta-preorder"
            >
              Pre-order now
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3 text-sm tracking-[0.1em] uppercase font-light hover:border-white/40 hover:text-white transition-all duration-300"
              id="hero-cta-learn"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
