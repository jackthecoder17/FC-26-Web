import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Discord", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70">
            EA Sports FC 26
          </span>
          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs tracking-[0.1em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <Separator className="bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-light">
            &copy; 2026 Electronic Arts Inc. All rights reserved. EA SPORTS, the
            EA SPORTS logo, and FC are trademarks of Electronic Arts Inc.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
