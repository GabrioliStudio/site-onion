import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import PartnersBadge from "@/components/PartnersBadge";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FixedBar from "@/components/FixedBar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground teste">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <OurServices />
        <PartnersBadge />
        <Projects />
        <Reviews />
        <CTA />
        <Footer />
        <FixedBar />
      </div>
    </LanguageProvider>
  );
};

export default Index;
