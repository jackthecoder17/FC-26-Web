"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Gallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-animate]");
            items.forEach((item, i) => {
              const el = item as HTMLElement;
              setTimeout(() => {
                el.style.transition =
                  "opacity 0.8s ease, transform 0.8s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0) scale(1)";
              }, i * 150);
            });
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
      id="gallery"
      className="py-32 md:py-40 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          data-animate
          className="mb-16"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            In-Game
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            See it in action
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {/* Large image */}
          <div
            data-animate
            className="relative aspect-[4/3] md:row-span-2 overflow-hidden group"
            style={{ opacity: 0, transform: "translateY(20px) scale(0.98)" }}
          >
            <Image
              src="/images/stadium.png"
              alt="Stadium atmosphere"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                Stadium atmosphere
              </span>
            </div>
          </div>

          {/* Top right */}
          <div
            data-animate
            className="relative aspect-video overflow-hidden group"
            style={{ opacity: 0, transform: "translateY(20px) scale(0.98)" }}
          >
            <Image
              src="/images/hero.png"
              alt="Match day"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                Match day
              </span>
            </div>
          </div>

          {/* Bottom right */}
          <div
            data-animate
            className="relative aspect-video overflow-hidden group"
            style={{ opacity: 0, transform: "translateY(20px) scale(0.98)" }}
          >
            <Image
              src="/images/player.png"
              alt="Player detail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                Player detail
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
