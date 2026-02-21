"use client";

import { motion } from "framer-motion";

const initiatives = [
    {
        icon: "🚀",
        name: "Core Product",
        count: 55,
        color: "#5E6AD2",
    },
    {
        icon: "🏗️",
        name: "Infra stability",
        count: 28,
        color: "#4191E2",
    },
    {
        icon: "✨",
        name: "Autonomous systems",
        count: 16,
        color: "#8B5CF6",
    },
    {
        icon: "📱",
        name: "Mobile apps",
        count: 8,
        color: "#4CAF50",
    },
];

const subInitiatives = [
    { icon: "🎯", name: "APAC Expansion", count: 21, color: "#EB5757" },
    { icon: "🗾", name: "Japan Launch", count: 12, color: "#F2C94C", indent: true },
    { icon: "💬", name: "Customer-driven priorities", count: 9, color: "#4191E2" },
];

const subLinks = [
    { num: "2.1", label: "Projects" },
    { num: "2.2", label: "Documents" },
    { num: "2.3", label: "Initiatives" },
    { num: "2.4", label: "Visual planning" },
];

export default function PlanSection() {
    return (
        <section className="py-24 relative" id="plan">
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
                            Define the product
                            <br />
                            direction
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            Set the vision with roadmaps and initiatives. Align teams with
                            shared goals, strategic projects, and living PRDs.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[14px] text-[#5C5F66] hover:text-white/70 transition-colors group"
                            id="plan-link"
                        >
                            <span className="font-mono text-[13px]">2.0</span>
                            <span>Plan</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Mockups */}
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
                    {/* Initiatives list */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    >
                        <div className="divide-y divide-white/[.04]">
                            {initiatives.map((item) => (
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
                                        {item.count}
                                    </span>
                                </div>
                            ))}

                            {/* Divider sub-section */}
                            <div>
                                {subInitiatives.map((item) => (
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
                                            {item.count}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Roadmap timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden p-6"
                    >
                        {/* Timeline header */}
                        <div className="flex items-center gap-12 mb-6 text-[11px] text-[#5C5F66] font-mono uppercase tracking-wider">
                            <span>Core screens</span>
                            <span>Polish</span>
                        </div>

                        {/* Project bars */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-4 h-4 rounded bg-[#4CAF50]/20 flex items-center justify-center">
                                        <span className="text-[9px]">📊</span>
                                    </div>
                                    <span className="text-[13px] text-white/80">
                                        Split fares
                                    </span>
                                    <span className="text-[#4CAF50]">~</span>
                                </div>
                                {/* Timeline bar */}
                                <div className="relative h-6 bg-white/[.03] rounded">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#5E6AD2] to-[#5E6AD2]/60 rounded"
                                        style={{ width: "65%" }}
                                    />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-2 h-2 rounded-full bg-white/30" />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-2 h-2 rounded-full bg-white/30" />
                                </div>
                                <div className="flex justify-between mt-1 text-[10px] text-[#5C5F66] font-mono">
                                    <span>Internal</span>
                                    <span>Public Beta</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-4 h-4 rounded bg-[#4191E2]/20 flex items-center justify-center">
                                        <span className="text-[9px]">🧩</span>
                                    </div>
                                    <span className="text-[13px] text-white/80">
                                        Autonomy status clarity
                                    </span>
                                    <span className="text-[#4CAF50]">~</span>
                                </div>
                                <div className="relative h-6 bg-white/[.03] rounded">
                                    <div
                                        className="absolute top-0 left-[20%] h-full bg-gradient-to-r from-[#4191E2] to-[#4191E2]/60 rounded"
                                        style={{ width: "55%" }}
                                    />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-2 h-2 rounded-full bg-white/30" />
                                </div>
                                <div className="flex justify-end mt-1 text-[10px] text-[#5C5F66] font-mono">
                                    <span>Alpha</span>
                                </div>
                            </div>

                            {/* S-Curve chart */}
                            <div className="mt-4">
                                <svg viewBox="0 0 400 120" className="w-full h-auto">
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(94,106,210,0.15)" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>
                                    {/* Grid lines */}
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
                                    {/* S-curve path */}
                                    <path
                                        d="M 0 110 C 80 108, 120 100, 160 80 S 280 10, 400 5"
                                        fill="none"
                                        stroke="rgba(94,106,210,0.5)"
                                        strokeWidth="2"
                                        className="chart-line"
                                    />
                                    {/* Fill */}
                                    <path
                                        d="M 0 110 C 80 108, 120 100, 160 80 S 280 10, 400 5 L 400 120 L 0 120 Z"
                                        fill="url(#chartGrad)"
                                        opacity="0.5"
                                    />
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
                            id={`plan-sub-${link.num}`}
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
