"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Parallax() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
          setOffset(progress * 60 - 30);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[50vh] md:h-[60vh] overflow-hidden"
    >
      <div
        className="absolute inset-[-30px] transition-transform duration-100"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/images/stadium.png"
          alt="Stadium"
          fill
          className="object-cover"
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      {/* Center text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-white/40 mb-4">
            September 2026
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            A new era <span className="text-white/40">begins</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
