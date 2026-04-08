"use client";

import { useEffect, useRef, useState } from "react";

const platforms = [
  { name: "PlayStation 5", icon: "PS5" },
  { name: "Xbox Series X|S", icon: "XSX" },
  { name: "PC", icon: "PC" },
  { name: "Nintendo Switch 2", icon: "SW2" },
];

export function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="newsletter"
      className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            Stay Updated
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-5">
            Be the first to know
          </h2>
          <p className="text-sm md:text-base text-white/40 leading-relaxed font-light max-w-md mx-auto">
            Get exclusive reveals, early access announcements, and launch-day
            news delivered straight to your inbox.
          </p>
        </div>

        {/* Email Form */}
        <div
          className={`mb-16 transition-all duration-700 delay-150 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors duration-300 font-light"
                id="newsletter-email"
              />
              <button
                type="submit"
                className="bg-white text-black px-7 py-3.5 text-xs tracking-[0.1em] uppercase font-medium hover:bg-white/90 transition-colors duration-300 shrink-0"
                id="newsletter-submit"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-3.5">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-white/60 font-light">
                You&apos;re in. We&apos;ll be in touch.
              </span>
            </div>
          )}
        </div>

        {/* Platforms */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-6">
            Available on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center gap-2 group"
              >
                <span className="text-lg font-medium text-white/25 group-hover:text-white/50 transition-colors duration-300 tracking-wider">
                  {p.icon}
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-white/15 group-hover:text-white/30 transition-colors duration-300">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
