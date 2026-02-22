import Navbar from "./components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import HeroSection from "./components/HeroSection";
import IntakeSection from "./components/IntakeSection";
import PlanSection from "./components/PlanSection";
import BuildSection from "./components/BuildSection";
import ReviewSection from "./components/ReviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <HeroSection />
      <IntakeSection />
      <PlanSection />
      <BuildSection />
      <ReviewSection />
      <CTASection />
      <Footer />
    </main>
  );
}
