
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "AI Tools Hub",
    description: "Access powerful AI-driven tools for crypto analysis and trading",
  },
  {
    title: "Token Sale",
    description: "Participate in our revolutionary token sale on BSC and Solana",
  },
  {
    title: "Dashboard",
    description: "Monitor your portfolio and track market trends in real-time",
  },
  {
    title: "Roadmap",
    description: "Explore our journey and upcoming milestones",
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % features.length;
      container.style.transform = `translateY(-${currentIndex * 100}%)`;
    }, 15000); // Increased to 15000ms (15 seconds) for slower transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background pointer-events-none" />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 overflow-hidden h-[400px]">
            <div
              ref={containerRef}
              className="transition-transform duration-2000 ease-in-out"
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="h-[400px] flex flex-col items-center justify-center text-center space-y-6 p-8"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold font-space">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-lg">
                    {feature.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full hover-scale"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
