import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Discord", href: "#" },
  { label: "TikTok", href: "#" },
];

const navColumns = [
  {
    title: "Game",
    links: [
      { label: "Features", href: "#features" },
      { label: "Game Modes", href: "#modes" },
      { label: "Gallery", href: "#gallery" },
      { label: "Editions", href: "#editions" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "News", href: "#" },
      { label: "Forums", href: "#" },
      { label: "Esports", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "EA Sports",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Investors", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        {/* Top area */}
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 block mb-4">
              EA Sports FC 26
            </span>
            <p className="text-sm text-white/25 leading-relaxed font-light max-w-xs mb-6">
              The world&apos;s game, powered by next-gen technology. Available
              September 2026 on PS5, Xbox Series X|S, PC, and Nintendo Switch 2.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[10px] tracking-[0.15em] uppercase text-white/25 hover:text-white/60 transition-colors duration-300"
                  id={`footer-social-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-medium mb-5">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/25 hover:text-white/60 transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[11px] text-white/15 font-light">
            &copy; 2026 Electronic Arts Inc. All rights reserved. EA SPORTS, the
            EA SPORTS logo, and FC are trademarks of Electronic Arts Inc.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[11px] text-white/15 hover:text-white/40 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[11px] text-white/15 hover:text-white/40 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[11px] text-white/15 hover:text-white/40 transition-colors"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
