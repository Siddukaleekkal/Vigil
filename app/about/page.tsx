"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const team = [
    {
        name: "Siddu Kaleekkal",
        role: "Co-Founder",
        bio: "Leading Vigil's mission to make AI governance seamless for enterprises navigating the EU AI Act and global regulation.",
        image: "/team/Siddu.jpeg",
    },
    {
        name: "Johnny Clejel",
        role: "Co-Founder",
        bio: "Architecting Vigil's compliance automation engine, from risk classification to real-time monitoring and audit-ready documentation.",
        image: "/team/Johnny.jpeg",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="hero-glow opacity-30" />
                <div className="mx-auto max-w-[1200px] px-6 relative z-10">
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-1.5 text-[13px] text-[#8A8F98] hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={14} />
                        Back to home
                    </motion.a>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-4"
                    >
                        About Vigil
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="text-[#8A8F98] text-lg max-w-2xl"
                    >
                        We&apos;re building the governance infrastructure that lets enterprises
                        deploy AI with confidence — fully compliant, fully auditable, fully automated.
                    </motion.p>
                </div>
            </section>

            {/* Mission */}
            <section className="pb-20">
                <div className="mx-auto max-w-[1200px] px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-2xl border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5E6AD2]/[0.06] via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10">
                            <p className="text-[12px] font-medium text-[#5E6AD2] uppercase tracking-widest mb-4">
                                Our Mission
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug mb-4 max-w-2xl">
                                The EU AI Act is the most consequential regulation since GDPR.
                                Most companies aren&apos;t ready.
                            </h2>
                            <p className="text-[#8A8F98] text-[15px] leading-relaxed max-w-2xl">
                                Vigil was founded to close that gap. We automate the hardest parts of AI
                                compliance — risk classification, technical documentation, conformity
                                assessments, and runtime monitoring — so enterprises can focus on
                                building, not bureaucracy. Our platform turns regulatory complexity
                                into a competitive advantage.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team */}
            <section className="pb-24">
                <div className="mx-auto max-w-[1200px] px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <p className="text-[12px] font-medium text-[#5E6AD2] uppercase tracking-widest mb-3">
                            Leadership
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                            Meet the Founders
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.15,
                                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                                }}
                                className="group"
                            >
                                <div className="rounded-2xl bg-black overflow-hidden transition-all duration-300">
                                    {/* Avatar with black-edge fade */}
                                    <div className="relative w-full aspect-square bg-black overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-contain scale-[0.85]"
                                        />
                                        {/* Radial fade to blend image bg into pure black */}
                                        <div className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: "radial-gradient(circle at center, transparent 40%, black 85%)",
                                            }}
                                        />
                                        {/* Bottom fade */}
                                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
                                    </div>

                                    {/* Info */}
                                    <div className="p-6 -mt-4 relative z-10">
                                        <h3 className="text-[18px] font-semibold text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-[13px] text-[#5E6AD2] font-medium mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                                            {member.bio}
                                        </p>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
