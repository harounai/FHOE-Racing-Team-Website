import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { CarSection } from "@/components/CarSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { InstagramPreview } from "@/components/InstagramPreview";
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
        <InstagramPreview />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
