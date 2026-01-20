import { Hero } from "@/components/home/hero";
import { LinksSection } from "@/components/home/links-section";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-40">
      <Hero />
      <LinksSection />
    </main>
  );
}
