import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="min-h-screen bg-ofceab-dark overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
