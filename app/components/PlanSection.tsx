"use client";

import { motion } from "framer-motion";

const frameworks = [
    {
        icon: "🇪🇺",
        name: "EU AI Act (Full)",
        count: 89,
        color: "#5E6AD2",
    },
    {
        icon: "🇺🇸",
        name: "NIST AI RMF 1.0",
        count: 54,
        color: "#4191E2",
    },
    {
        icon: "🌍",
        name: "ISO/IEC 42001:2023",
        count: 42,
        color: "#8B5CF6",
    },
    {
        icon: "🔒",
        name: "GDPR (AI overlap)",
        count: 31,
        color: "#4CAF50",
    },
];

const subRegulations = [
    { icon: "🏛️", name: "Colorado AI Act", count: 18, color: "#EB5757" },
    { icon: "🗽", name: "NYC Bias Audit Law", count: 12, color: "#F2C94C", indent: true },
    { icon: "☀️", name: "California SB 53 & SB 942", count: 14, color: "#4191E2" },
];

const subLinks = [
    { num: "2.1", label: "Gap Analysis" },
    { num: "2.2", label: "Control Mapping" },
    { num: "2.3", label: "Cross-walk" },
    { num: "2.4", label: "Evidence Library" },
];

export default function PlanSection() {
    return (
        <section className="py-24 relative" id="frameworks">
            <div className="section-divider mb-24" />

            <div className="mx-auto max-w-[1200px] px-6">
                {/* Section header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.02em]">
                            One framework to
                            <br />
                            rule them all
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            Map controls across the EU AI Act, NIST AI RMF, ISO 42001, and
                            emerging US state laws. One assessment satisfies multiple mandates
                            through intelligent cross-walking.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[14px] text-[#5C5F66] hover:text-white/70 transition-colors group"
                            id="frameworks-link"
                        >
                            <span className="font-mono text-[13px]">2.0</span>
                            <span>Frameworks</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Mockups */}
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
                    {/* Frameworks list */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    >
                        <div className="divide-y divide-white/[.04]">
                            {frameworks.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-white/[.02] transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-[14px]">{item.icon}</span>
                                        <span className="text-[13px] text-white/80">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="text-[12px] text-[#5C5F66] font-mono">
                                        {item.count} controls
                                    </span>
                                </div>
                            ))}

                            {/* Sub-section for US state laws */}
                            <div>
                                <div className="px-4 py-2 bg-white/[.01]">
                                    <span className="text-[10px] text-[#5C5F66] uppercase tracking-wider">US State Regulations</span>
                                </div>
                                {subRegulations.map((item) => (
                                    <div
                                        key={item.name}
                                        className={`flex items-center justify-between px-4 py-3 hover:bg-white/[.02] transition-colors cursor-pointer ${item.indent ? "pl-10" : ""
                                            }`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-[14px]">{item.icon}</span>
                                            <span className="text-[13px] text-white/80">
                                                {item.name}
                                            </span>
                                        </div>
                                        <span className="text-[12px] text-[#5C5F66] font-mono">
                                            {item.count} controls
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Compliance coverage timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden p-6"
                    >
                        {/* Timeline header */}
                        <div className="flex items-center gap-12 mb-6 text-[11px] text-[#5C5F66] font-mono uppercase tracking-wider">
                            <span>Assessment</span>
                            <span>Remediation</span>
                            <span>Certification</span>
                        </div>

                        {/* Compliance bars */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[14px]">🇪🇺</span>
                                    <span className="text-[13px] text-white/80">
                                        EU AI Act (Annex III)
                                    </span>
                                    <span className="text-[11px] text-[#4CAF50] font-mono ml-auto">78%</span>
                                </div>
                                <div className="relative h-6 bg-white/[.03] rounded">
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#5E6AD2] to-[#5E6AD2]/60 rounded"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "78%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.4 }}
                                    />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-2 h-2 rounded-full bg-white/30" />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-2 h-2 rounded-full bg-white/30" />
                                </div>
                                <div className="flex justify-between mt-1 text-[10px] text-[#5C5F66] font-mono">
                                    <span>Q1 2026</span>
                                    <span>Aug 2, 2026</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[14px]">🇺🇸</span>
                                    <span className="text-[13px] text-white/80">
                                        NIST AI RMF
                                    </span>
                                    <span className="text-[11px] text-[#F2C94C] font-mono ml-auto">52%</span>
                                </div>
                                <div className="relative h-6 bg-white/[.03] rounded">
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4191E2] to-[#4191E2]/60 rounded"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "52%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.5 }}
                                    />
                                </div>
                            </div>

                            {/* Coverage score */}
                            <div className="mt-4">
                                <svg viewBox="0 0 400 120" className="w-full h-auto">
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(94,106,210,0.15)" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>
                                    {[0, 30, 60, 90, 120].map((y) => (
                                        <line
                                            key={y}
                                            x1="0"
                                            y1={y}
                                            x2="400"
                                            y2={y}
                                            stroke="rgba(255,255,255,0.03)"
                                            strokeWidth="1"
                                        />
                                    ))}
                                    <path
                                        d="M 0 110 C 80 108, 120 95, 180 70 S 320 15, 400 8"
                                        fill="none"
                                        stroke="rgba(94,106,210,0.5)"
                                        strokeWidth="2"
                                        className="chart-line"
                                    />
                                    <path
                                        d="M 0 110 C 80 108, 120 95, 180 70 S 320 15, 400 8 L 400 120 L 0 120 Z"
                                        fill="url(#chartGrad)"
                                        opacity="0.5"
                                    />
                                    <text x="10" y="12" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace">Compliance Coverage Over Time</text>
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sub-links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {subLinks.map((link) => (
                        <a
                            key={link.num}
                            href="#"
                            className="text-[14px] text-[#5C5F66] hover:text-white/70 transition-colors py-3 border-t border-white/[.06]"
                            id={`framework-sub-${link.num}`}
                        >
                            <span className="font-mono text-[12px] mr-2 text-[#5C5F66]/60">
                                {link.num}
                            </span>
                            <span className="font-medium">{link.label}</span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
