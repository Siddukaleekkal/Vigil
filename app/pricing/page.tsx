"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import PricingSection from "@/components/ui/pricing-section-3";
import Footer from "../components/Footer";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <section className="pt-32 pb-4">
                <div className="mx-auto max-w-[1200px] px-6">
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-1.5 text-[13px] text-[#8A8F98] hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to home
                    </motion.a>
                </div>
            </section>
            <PricingSection />
            <Footer />
        </main>
    );
}
