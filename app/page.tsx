import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoTicker from "./components/LogoTicker";
import BentoGrid from "./components/BentoGrid";
import IntakeSection from "./components/IntakeSection";
import PlanSection from "./components/PlanSection";
import BuildSection from "./components/BuildSection";
import ReviewSection from "./components/ReviewSection";
import PulseSection from "./components/PulseSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <LogoTicker />
      <BentoGrid />
      <IntakeSection />
      <PlanSection />
      <BuildSection />
      <ReviewSection />
      <PulseSection />
      <CTASection />
      <Footer />
    </main>
  );
}
