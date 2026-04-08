import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { GameModes } from "@/components/game-modes";
import { Parallax } from "@/components/parallax";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { Editions } from "@/components/editions";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <GameModes />
      <Parallax />
      <Gallery />
      <Reviews />
      <Editions />
      <Newsletter />
      <Footer />
    </main>
  );
}
