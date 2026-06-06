import { HeroSection } from "@/components/sections/HeroSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { SimulatorSection } from "@/components/sections/SimulatorSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AuthoritySection />
      <BenefitsSection />
      <HowItWorksSection />
      <AreasSection />
      <ServicesSection />
      <PortfolioSection />
      <SimulatorSection />
      <AboutSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
