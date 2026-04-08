"use client";

import { useEffect, useRef, useState } from "react";

const quotes = [
  {
    quote: "The most significant leap in football gaming since the transition to 3D.",
    source: "IGN",
    score: "9.2/10",
  },
  {
    quote: "FC 26 doesn't just iterate — it reinvents what a football game can be.",
    source: "Eurogamer",
    score: "Essential",
  },
  {
    quote: "HyperMotion V is a game-changer. Every match feels unique, unpredictable, alive.",
    source: "GameSpot",
    score: "9/10",
  },
  {
    quote: "The tactical depth is staggering. This is football simulation at its absolute peak.",
    source: "GamesRadar+",
    score: "4.5/5",
  },
];

export function Reviews() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    intervalRef.current = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible]);

  const handleDotClick = (i: number) => {
    setActiveQuote(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
  };

  return (
    <section
      ref={ref}
      id="reviews"
      className="py-32 md:py-40 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            Critical Acclaim
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            What the press says
          </h2>
        </div>

        {/* Quotes Carousel */}
        <div
          className={`relative min-h-[200px] flex items-center justify-center transition-all duration-700 delay-150 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {quotes.map((q, i) => (
            <div
              key={q.source}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-600 ${
                activeQuote === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight leading-relaxed text-white/80 mb-8 max-w-2xl">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                  {q.source}
                </span>
                <span className="w-px h-4 bg-white/15" />
                <span className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">
                  {q.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          className={`flex items-center justify-center gap-2 mt-12 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 rounded-full ${
                activeQuote === i
                  ? "w-8 h-1.5 bg-white/70"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Show review ${i + 1}`}
              id={`review-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
