import About from "@/components/public/about";
import Experiences from "@/components/public/experiences";
import Hero from "@/components/public/hero";
import Quotes from "@/components/public/quotes";

export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Me */}
      <About />
      {/* Experience */}
      <Experiences />
      <Quotes />
      {/* Contact */}
    </main>
  );
}
