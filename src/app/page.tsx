import { AnimatedGridPattern } from "@/components/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import EventSection from "@/components/event-section";
import ArticleSection from "@/components/article-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.25}
        duration={2.5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150svh] skew-y-12",

          "md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "md:h-[200svh]",

          "fixed pointer-events-none -z-10"
        )}
      />
      <HeroSection />
      <EventSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}
