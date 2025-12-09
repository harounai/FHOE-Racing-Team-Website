import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { CarSection } from "@/components/CarSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <CarSection />
        <SponsorsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
