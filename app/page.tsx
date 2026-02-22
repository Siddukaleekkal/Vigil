import Navbar from "./components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import HeroSection from "./components/HeroSection";
import PricingSection from "@/components/ui/pricing-section-3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <HeroSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
