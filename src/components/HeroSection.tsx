import heroBanner from "@/assets/hero-banner.png";
import checkeredBackground from "@/assets/checkered-background.avif";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
export function HeroSection() {
  return <section id="home" className="relative min-h-screen overflow-hidden flex-row flex items-center justify-center">
      {/* Checkered Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${checkeredBackground})`
    }}>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Hero Banner Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-lighten opacity-60" style={{
      backgroundImage: `url(${heroBanner})`
    }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-fade-in">
          <p className="text-primary font-bold tracking-widest uppercase mb-4 text-lg md:text-xl">
            "To The Racetrack!"
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            FHOÖ Racing Team
            <span className="text-primary block">Formula Student</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" asChild>
              <a href="#about">Discover Our Team</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="#car">View The Car</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>;
}