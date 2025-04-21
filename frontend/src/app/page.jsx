import { CallToAction } from "../components/CallToAction";
import { HeroSection } from "../components/HeroSection";
import { ProductsShowcase } from "../components/ProductsShowcase";
import { ServicesSection } from "../components/ServicesSection";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProductsShowcase />
      <TestimonialsSection />
      <CallToAction />
    </>
  )
}