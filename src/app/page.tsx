import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Editions } from "@/components/editions";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <Editions />
      <Footer />
    </main>
  );
}
