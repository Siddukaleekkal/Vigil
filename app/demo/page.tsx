"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowLeft, FileText, ShieldAlert, ShieldCheck, ChevronDown, Image, Video } from "lucide-react";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const screenshots = [
    {
        title: "Unprotected Pipeline",
        description:
            "Raw AI output with no guardrails active. Injection Detection, PII Detection, and Bias Detection are all skipped — leaving the system vulnerable to manipulation.",
        src: "/demo/unprotected-pipeline.png",
        icon: ShieldAlert,
        accent: "from-red-500/20",
    },
    {
        title: "Side-by-Side Comparison",
        description:
            "Unprotected vs. Vigil-protected pipeline processing the same resume. With Vigil active, all three guardrail layers pass and the prompt injection is caught.",
        src: "/demo/pipeline-comparison.png",
        icon: ShieldCheck,
        accent: "from-green-500/20",
    },
    {
        title: "Full Platform View",
        description:
            "The complete TalentScan AI interface with Vigil enforcement active. Guardrails are enforced across injection detection, PII protection, and bias monitoring in real time.",
        src: "/demo/baseline-comparison.png",
        icon: ShieldCheck,
        accent: "from-purple-500/20",
    },
];

const pdfs = [
    {
        title: "James Okafor — Legitimate Resume",
        description:
            "A genuine, well-qualified Senior Data Engineer resume. This is the baseline input processed by both the unprotected and Vigil-protected pipelines.",
        filename: "james-okafor-resume.pdf",
        tag: "Legitimate",
        tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
        title: "Emily Carter — Adversarial Resume",
        description:
            "A deliberately crafted resume containing a hidden prompt injection attack at the bottom, attempting to override the AI's scoring and force an approval.",
        filename: "emily-carter-resume.pdf",
        tag: "Prompt Injection",
        tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
    },
];

/* ── Accordion wrapper ──────────────────────────────── */
function AccordionCard({
    children,
    title,
    subtitle,
    icon,
    badge,
    badgeColor,
    defaultOpen = false,
}: {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    badge?: string;
    badgeColor?: string;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden"
        >
            {/* Header — always visible, click to toggle */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] shrink-0">
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-white">{title}</h3>
                    <p className="text-[13px] text-[#8A8F98] mt-0.5 line-clamp-1">{subtitle}</p>
                </div>
                {badge && (
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border shrink-0 hidden sm:inline-flex ${badgeColor}`}>
                        {badge}
                    </span>
                )}
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-[#5C5F66]"
                >
                    <ChevronDown size={18} />
                </motion.div>
            </button>

            {/* Expandable content */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-white/[0.06]">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function DemoPage() {
    const [videoPlaying, setVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        setVideoPlaying(true);
        setTimeout(() => videoRef.current?.play(), 50);
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="hero-glow opacity-40" />
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
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-4"
                    >
                        See Vigil in Action
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[#8A8F98] text-lg max-w-2xl mb-2"
                    >
                        Watch how Vigil detects prompt injection, enforces guardrails, and
                        protects AI pipelines in real time — using a live resume screening demo.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-[13px] text-[#5C5F66]"
                    >
                        Click any section below to expand it.
                    </motion.p>
                </div>
            </section>

            {/* All content in collapsible accordions */}
            <section className="pb-12">
                <div className="mx-auto max-w-[1200px] px-6 space-y-3">

                    {/* ── Section: Platform Walkthrough (Video) ── */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 mt-2">
                            <Video size={14} className="text-[#8B5CF6]" />
                            <span className="text-[12px] font-medium text-[#5C5F66] uppercase tracking-wider">Platform Walkthrough</span>
                        </div>
                        <AccordionCard
                            title="Demo Video"
                            subtitle="Watch Vigil's guardrails in action — from resume intake to real-time enforcement."
                            icon={<Play size={18} className="text-[#8B5CF6]" />}
                            defaultOpen
                        >
                            <div className="relative aspect-video bg-[#0A0A0A]">
                                <div className="absolute -inset-px bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />
                                <video
                                    ref={videoRef}
                                    src="/demo/demo.mp4"
                                    className={`w-full h-full object-contain transition-opacity duration-300 ${videoPlaying ? "opacity-100" : "opacity-30"}`}
                                    controls={videoPlaying}
                                    playsInline
                                    preload="metadata"
                                />
                                {!videoPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={handlePlay}
                                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/40 hover:scale-105"
                                        >
                                            <Play size={18} fill="currentColor" />
                                            Watch Demo
                                        </button>
                                    </div>
                                )}
                            </div>
                        </AccordionCard>
                    </div>

                    {/* ── Section: Test Documents (PDFs) ── */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 mt-8">
                            <FileText size={14} className="text-[#4191E2]" />
                            <span className="text-[12px] font-medium text-[#5C5F66] uppercase tracking-wider">Test Documents</span>
                            <span className="text-[11px] text-[#5C5F66]/60 ml-1">— Resumes used in this demo</span>
                        </div>
                        <div className="space-y-3">
                            {pdfs.map((pdf) => (
                                <AccordionCard
                                    key={pdf.filename}
                                    title={pdf.title}
                                    subtitle={pdf.description}
                                    icon={<FileText size={18} className="text-[#8A8F98]" />}
                                    badge={pdf.tag}
                                    badgeColor={pdf.tagColor}
                                >
                                    <div className="bg-[#111]">
                                        <iframe
                                            src={`/demo/${pdf.filename}`}
                                            className="w-full h-[700px]"
                                            title={pdf.title}
                                        />
                                    </div>
                                </AccordionCard>
                            ))}
                        </div>
                    </div>

                    {/* ── Section: Platform Screenshots ── */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 mt-8">
                            <Image size={14} className="text-[#4CAF50]" />
                            <span className="text-[12px] font-medium text-[#5C5F66] uppercase tracking-wider">Platform Screenshots</span>
                            <span className="text-[11px] text-[#5C5F66]/60 ml-1">— Unprotected vs. Vigil-protected</span>
                        </div>
                        <div className="space-y-3">
                            {screenshots.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <AccordionCard
                                        key={item.title}
                                        title={item.title}
                                        subtitle={item.description}
                                        icon={<Icon size={18} className="text-[#8A8F98]" />}
                                    >
                                        <div className="relative overflow-hidden bg-[#111]">
                                            <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} via-transparent to-transparent opacity-50 pointer-events-none`} />
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <p className="text-[13px] text-[#8A8F98] leading-relaxed max-w-2xl">
                                                {item.description}
                                            </p>
                                        </div>
                                    </AccordionCard>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 pt-8">
                <div className="mx-auto max-w-[1200px] px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center glass rounded-2xl border border-white/[0.08] py-16 px-6 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.04] via-transparent to-transparent pointer-events-none" />
                        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 relative z-10">
                            Ready to protect your AI pipelines?
                        </h2>
                        <p className="text-[#8A8F98] text-[15px] mb-8 max-w-md mx-auto relative z-10">
                            See how Vigil can enforce guardrails, catch adversarial inputs, and
                            keep you audit-ready.
                        </p>
                        <div className="flex items-center justify-center gap-3 relative z-10">
                            <a
                                href="https://calendly.com/siddukaleekkal/new-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] font-medium bg-white text-black px-6 py-2.5 rounded-md hover:bg-white/90 transition-all duration-200"
                            >
                                Get Started
                            </a>
                            <a
                                href="https://calendly.com/siddukaleekkal/new-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] font-medium text-[#8A8F98] hover:text-white px-6 py-2.5 rounded-md border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
