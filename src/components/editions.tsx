"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef } from "react";

const editions = [
  {
    name: "Standard",
    price: "$69.99",
    tag: null,
    perks: [
      "Base game",
      "Ultimate Team starter pack",
      "Career Mode access",
    ],
  },
  {
    name: "Ultimate",
    price: "$99.99",
    tag: "Popular",
    perks: [
      "Everything in Standard",
      "7-day early access",
      "4,600 FC Points",
      "Ultimate Team Hero item",
      "Season Pass included",
    ],
  },
];

export function Editions() {
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
                  "opacity 0.7s ease, transform 0.7s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
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
      id="editions"
      className="py-32 md:py-40 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          data-animate
          className="mb-20"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            Editions
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Choose your edition
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {editions.map((ed) => (
            <div
              key={ed.name}
              data-animate
              className={`border p-8 md:p-10 flex flex-col transition-colors duration-300 ${
                ed.tag
                  ? "border-white/15 hover:border-white/25"
                  : "border-white/5 hover:border-white/10"
              }`}
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-lg font-medium tracking-tight mb-1">
                    {ed.name}
                  </h3>
                  <p className="text-2xl font-light">{ed.price}</p>
                </div>
                {ed.tag && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] tracking-[0.15em] uppercase bg-white/10 text-white/70 border-0 rounded-none px-3 py-1"
                  >
                    {ed.tag}
                  </Badge>
                )}
              </div>

              <Separator className="bg-white/5 mb-6" />

              <ul className="space-y-3 flex-1 mb-8">
                {ed.perks.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-white/40 font-light flex items-start gap-3"
                  >
                    <span className="text-white/20 mt-1.5 block w-1 h-1 rounded-full bg-white/30 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-300 ${
                  ed.tag
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                }`}
                id={`preorder-${ed.name.toLowerCase()}`}
              >
                Pre-order
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
