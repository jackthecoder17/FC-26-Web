import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EA SPORTS FC 26 — The World's Game",
  description:
    "Experience the next evolution of football. EA SPORTS FC 26 brings HyperMotion V, tactical overhauls, and 19,000+ players to life. Available September 2026.",
  keywords: ["FC 26", "EA Sports", "football", "soccer", "gaming"],
  openGraph: {
    title: "EA SPORTS FC 26 — The World's Game",
    description:
      "Experience football like never before. Available September 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
