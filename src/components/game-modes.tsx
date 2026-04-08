"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const modes = [
  {
    id: "career",
    label: "Career Mode",
    title: "Write your legacy",
    desc: "A completely reimagined managerial experience. Scout hidden gems, negotiate transfers with a revamped system, and lead your club through dynamic storylines that react to your decisions.",
    image: "/images/career-mode.png",
  },
  {
    id: "ultimate-team",
    label: "Ultimate Team",
    title: "Build your dream squad",
    desc: "Collect, trade, and compete with the best players in the world. New Evolution system lets you transform any player into a world-beater. Redesigned rewards make every match count.",
    image: "/images/ultimate-team.png",
  },
  {
    id: "clubs",
    label: "Clubs",
    title: "Play as one. Win as eleven.",
    desc: "Team up with friends in the most social football experience. Create your club, customise everything, and climb the ranks in cross-play competitive seasons.",
    image: "/images/clubs.png",
  },
  {
    id: "volta",
    label: "VOLTA Football",
    title: "Take it to the streets",
    desc: "Express yourself in small-sided games across iconic urban locations. New skill moves, street-specific abilities, and a vibrant customisation system.",
    image: "/images/volta.png",
  },
];

export function GameModes() {
  const ref = useRef<HTMLElement>(null);
  const [activeMode, setActiveMode] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
      id="modes"
      className="py-32 md:py-40 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            Game Modes
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Your game, your way
          </h2>
        </div>

        {/* Mode Tabs */}
        <div
          className={`flex flex-wrap gap-1 mb-10 transition-all duration-700 delay-100 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {modes.map((mode, i) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(i)}
              className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeMode === i
                  ? "bg-white text-black font-medium"
                  : "text-white/40 hover:text-white/70 border border-white/5 hover:border-white/15"
              }`}
              id={`mode-tab-${mode.id}`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Active Mode Content */}
        <div
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden group">
            {modes.map((mode, i) => (
              <div
                key={mode.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeMode === i
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={mode.image}
                  alt={mode.label}
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="md:pl-4">
            {modes.map((mode, i) => (
              <div
                key={mode.id}
                className={`transition-all duration-400 ${
                  activeMode === i
                    ? "opacity-100 translate-y-0 block"
                    : "opacity-0 translate-y-2 hidden"
                }`}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-4">
                  {mode.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-5">
                  {mode.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light mb-8 max-w-md">
                  {mode.desc}
                </p>
                <a
                  href="#editions"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white group/link transition-colors duration-300"
                >
                  Learn more
                  <span className="inline-block w-6 h-px bg-white/30 group-hover/link:w-10 group-hover/link:bg-white transition-all duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
