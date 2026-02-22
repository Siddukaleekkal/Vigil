"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, Info, CheckCircle2, XOctagon, MoreHorizontal } from "lucide-react";

// AI System inventory
const highRiskSystems = [
    {
        id: "SYS-001",
        title: "Credit Scoring Engine v3.2",
        riskLevel: "high" as const,
        labels: [{ name: "Finance", color: "#F2C94C" }, { name: "Annex III", color: "#EB5757" }],
        article: "Art. 6(2)",
    },
    {
        id: "SYS-004",
        title: "Resume Screening & CV Analyzer",
        riskLevel: "high" as const,
        labels: [{ name: "HR", color: "#8B5CF6" }, { name: "Annex III", color: "#EB5757" }],
        article: "Art. 6(2)",
    },
    {
        id: "SYS-007",
        title: "Patient Triage Recommendation",
        riskLevel: "high" as const,
        labels: [{ name: "Healthcare", color: "#4CAF50" }],
        article: "Art. 6(2)",
    },
];

const limitedRiskSystems = [
    {
        id: "SYS-012",
        title: "Customer Support Chatbot",
        riskLevel: "limited" as const,
        labels: [{ name: "Transparency", color: "#4191E2" }],
        article: "Art. 50",
    },
    {
        id: "SYS-015",
        title: "Marketing Content Generator",
        riskLevel: "limited" as const,
        labels: [{ name: "GenAI", color: "#5E6AD2" }],
        article: "Art. 50",
    },
];

function RiskBadge({ level }: { level: "high" | "limited" | "minimal" | "unacceptable" }) {
    const config = {
        unacceptable: { color: "#EB5757", icon: <XOctagon size={12} />, label: "Prohibited" },
        high: { color: "#F2C94C", icon: <AlertTriangle size={12} />, label: "High Risk" },
        limited: { color: "#4191E2", icon: <Info size={12} />, label: "Limited" },
        minimal: { color: "#4CAF50", icon: <CheckCircle2 size={12} />, label: "Minimal" },
    };
    const c = config[level];
    return (
        <span
            className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border font-medium"
            style={{ color: c.color, borderColor: `${c.color}40`, backgroundColor: `${c.color}10` }}
        >
            {c.icon}
            {c.label}
        </span>
    );
}

function SystemRow({ system }: { system: { id: string; title: string; riskLevel: "high" | "limited" | "minimal" | "unacceptable"; labels: { name: string; color: string }[]; article: string } }) {
    return (
        <div className="flex items-center gap-3 px-4 py-3 hover:bg-white/[.02] transition-colors cursor-pointer group">
            <RiskBadge level={system.riskLevel} />
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#5C5F66] font-mono">{system.id}</span>
                    <span className="text-[13px] text-white truncate">{system.title}</span>
                </div>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
                {system.labels.map((label) => (
                    <span
                        key={label.name}
                        className="text-[10px] px-1.5 py-0.5 rounded-full border"
                        style={{
                            color: label.color,
                            borderColor: `${label.color}40`,
                            backgroundColor: `${label.color}10`,
                        }}
                    >
                        {label.name}
                    </span>
                ))}
            </div>
            <span className="text-[11px] text-[#5C5F66] font-mono">{system.article}</span>
        </div>
    );
}

export default function IntakeSection() {
    return (
        <section className="py-24 relative" id="classify">
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
                            Classify every AI
                            <br />
                            system automatically
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            Map your entire AI portfolio to the Act&apos;s risk hierarchy. Vigil scans
                            metadata, use cases, and deployment contexts to determine whether each
                            system is prohibited, high-risk, limited, or minimal.
                        </p>
                    </motion.div>
                </div>

                {/* AI System Registry mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
                    {/* Risk distribution card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden p-5"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <Shield size={14} className="text-[#5E6AD2]" />
                            <span className="text-[13px] font-medium text-white/80">Risk Distribution</span>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "High Risk", count: 12, total: 47, color: "#F2C94C" },
                                { label: "Limited Risk", count: 18, total: 47, color: "#4191E2" },
                                { label: "Minimal Risk", count: 15, total: 47, color: "#4CAF50" },
                                { label: "Unclassified", count: 2, total: 47, color: "#5C5F66" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="text-[12px] text-[#8A8F98]">{item.label}</span>
                                        <span className="text-[12px] text-[#5C5F66] font-mono">{item.count}</span>
                                    </div>
                                    <div className="h-1.5 bg-white/[.04] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: item.color }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(item.count / item.total) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/[.04]">
                            <div className="flex items-center justify-between">
                                <span className="text-[12px] text-[#5C5F66]">Total Systems</span>
                                <span className="text-[18px] font-medium text-white">47</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* System registry list */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    >
                        {/* Section: High Risk */}
                        <div className="px-4 py-2.5 border-b border-white/[.04] flex items-center gap-2">
                            <AlertTriangle size={12} className="text-[#F2C94C]" />
                            <span className="text-[12px] font-medium text-[#F2C94C]">HIGH RISK</span>
                            <span className="text-[11px] text-[#5C5F66] bg-white/[.04] px-1.5 py-0.5 rounded-full ml-1">12</span>
                            <MoreHorizontal size={12} className="text-[#5C5F66] ml-auto" />
                        </div>
                        <div className="divide-y divide-white/[.04]">
                            {highRiskSystems.map((system) => (
                                <SystemRow key={system.id} system={system} />
                            ))}
                        </div>

                        {/* Section: Limited Risk */}
                        <div className="px-4 py-2.5 border-t border-b border-white/[.04] flex items-center gap-2">
                            <Info size={12} className="text-[#4191E2]" />
                            <span className="text-[12px] font-medium text-[#4191E2]">LIMITED RISK</span>
                            <span className="text-[11px] text-[#5C5F66] bg-white/[.04] px-1.5 py-0.5 rounded-full ml-1">18</span>
                            <MoreHorizontal size={12} className="text-[#5C5F66] ml-auto" />
                        </div>
                        <div className="divide-y divide-white/[.04]">
                            {limitedRiskSystems.map((system) => (
                                <SystemRow key={system.id} system={system} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
