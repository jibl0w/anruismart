import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreSolutions from "@/components/CoreSolutions";
import ProductCTA from "@/components/ProductCTA";
import StrategicAdvantages from "@/components/StrategicAdvantages";
import WhoWeServe from "@/components/WhoWeServe";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <CoreSolutions />
      <ProductCTA />
      <StrategicAdvantages />
      <WhoWeServe />
      <CallToAction />
      <Footer />
    </main>
  );
}
