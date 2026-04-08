"use client";

import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    label: "HyperMotion V",
    title: "Every touch, perfected",
    desc: "Captured from real matches using advanced machine learning. Over 11,000 new animations make every dribble, tackle, and volley feel authentic.",
  },
  {
    label: "FC IQ",
    title: "Tactical depth, redefined",
    desc: "A complete overhaul of team AI. Players now read the game, make intelligent runs, and adapt to your playstyle in real-time.",
  },
  {
    label: "Frostbite Engine",
    title: "Next-gen visuals",
    desc: "Ray-traced lighting, realistic crowd behavior, and stadium atmospheres that react to the match. This is as close to broadcast TV as it gets.",
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);

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
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-32 md:py-40 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          data-animate
          className="mb-20"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            What&apos;s new
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Built for the pitch
          </h2>
        </div>

        <div className="space-y-0">
          {features.map((feat, idx) => (
            <div key={feat.label}>
              {idx > 0 && <Separator className="bg-white/5" />}
              <div
                data-animate
                className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 py-12 md:py-16 group"
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium">
                    {feat.label}
                  </span>
                </div>
                <div className="max-w-lg">
                  <h3 className="text-xl md:text-2xl font-normal mb-4 tracking-tight group-hover:text-white transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
