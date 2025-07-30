import { CallToAction } from "../components/CallToAction";
import { HeroSection } from "../components/HeroSection";
import { ProductsShowcase } from "../components/ProductsShowcase";
import { ServicesSection } from "../components/ServicesSection";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import ImageSection from "../components/ImageSection";
import Corousel from "../components/Corousel";


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <ServicesSection />
      <ProductsShowcase />
      {/* <ImageSection /> */}
      {/* <TestimonialsSection /> */}
      <CallToAction />
    </>
  )
}