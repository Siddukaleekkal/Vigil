"use client";

import { motion } from "framer-motion";
import { FileText, Terminal, CheckCircle2, Circle, AlertCircle } from "lucide-react";

const documentationTasks = [
    {
        title: "Generate Annex IV technical documentation for SYS-001",
        status: "done" as const,
        agent: "Vigil Agent",
        time: "8min",
    },
    {
        title: "Compile training data provenance report for SYS-004",
        status: "in-progress" as const,
        agent: "Vigil Agent",
        time: "2min",
    },
    {
        title: "Run bias audit on HR screening model",
        status: "todo" as const,
        agent: "Vigil Agent",
        time: "Queued",
    },
];

const subLinks = [
    { num: "3.1", label: "Auto-Documentation" },
    { num: "3.2", label: "Data Provenance" },
    { num: "3.3", label: "Bias Auditing" },
    { num: "3.4", label: "Conformity Checks" },
];

function StatusIcon({ status }: { status: "done" | "in-progress" | "todo" }) {
    switch (status) {
        case "done":
            return <CheckCircle2 size={14} className="text-[#4CAF50]" />;
        case "in-progress":
            return (
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#F2C94C] relative">
                    <div className="absolute inset-0 rounded-full bg-[#F2C94C] opacity-30" />
                </div>
            );
        case "todo":
            return <Circle size={14} className="text-[#5C5F66]" />;
    }
}

export default function BuildSection() {
    return (
        <section className="py-24 relative" id="documentation">
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
                        <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.02em] text-gradient">
                            Technical documentation
                            <br />
                            on autopilot
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            Articles 10–15 mandate exhaustive documentation. Vigil&apos;s AI agents
                            automatically compile training data provenance, performance metrics,
                            and risk mitigation records into audit-ready Annex IV documentation.
                        </p>
                    </motion.div>
                </div>

                {/* Documentation automation mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Documentation task list */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    >
                        <div className="px-4 py-3 border-b border-white/[.04] flex items-center gap-2">
                            <FileText size={14} className="text-[#8B5CF6]" />
                            <span className="text-[13px] font-medium text-white/80">
                                Compliance Tasks
                            </span>
                            <span className="text-[11px] text-[#5C5F66] bg-white/[.04] px-1.5 py-0.5 rounded-full ml-1">
                                3
                            </span>
                        </div>

                        <div className="divide-y divide-white/[.04]">
                            {documentationTasks.map((task, i) => (
                                <motion.div
                                    key={task.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                    className="px-4 py-3 hover:bg-white/[.02] transition-colors cursor-pointer"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5">
                                            <StatusIcon status={task.status} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[13px] text-white/90 mb-1">
                                                {task.title}
                                            </div>
                                            <div className="flex items-center gap-2 text-[11px] text-[#5C5F66]">
                                                <span className="flex items-center gap-1">
                                                    <AlertCircle size={10} className="text-[#8B5CF6]" />
                                                    {task.agent}
                                                </span>
                                                <span>·</span>
                                                <span>{task.time}</span>
                                            </div>
                                        </div>
                                        {task.status === "in-progress" && (
                                            <div className="flex-shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F2C94C] animate-pulse" />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Agent terminal mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    >
                        <div className="px-4 py-3 border-b border-white/[.04] flex items-center gap-2">
                            <Terminal size={14} className="text-[#4CAF50]" />
                            <span className="text-[13px] font-medium text-white/80">
                                Vigil Agent
                            </span>
                            <span className="ml-auto flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                                <span className="text-[11px] text-[#4CAF50]">Active</span>
                            </span>
                        </div>

                        <div className="p-4 font-mono text-[12px] leading-relaxed space-y-3">
                            <div className="text-[#4CAF50]">
                                →{" "}
                                <span className="text-[#8A8F98]">
                                    Generating Annex IV documentation for SYS-001...
                                </span>
                            </div>
                            <div className="text-[#5C5F66]">
                                ├── Extracting training data metadata from 847 records
                            </div>
                            <div className="text-[#5C5F66]">
                                ├── Mapping performance metrics against Art. 15 thresholds
                            </div>
                            <div className="text-[#5C5F66]">
                                └── Compiling risk mitigation strategies (Art. 9)
                            </div>

                            <div className="border-t border-white/[.04] pt-3">
                                <div className="text-[#4191E2]">
                                    ↳ Writing to{" "}
                                    <span className="text-white/70">
                                        /docs/annex-iv/SYS-001-credit-scoring.pdf
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white/[.02] rounded-lg p-3 border border-white/[.04]">
                                <div className="text-[#5C5F66] mb-1">
                                    // Annex IV §2(b) — Data Governance Summary
                                </div>
                                <div className="diff-add px-2 py-0.5 rounded text-[#4CAF50]">
                                    + Training data: 2.4M records | Validation split: 80/10/10
                                </div>
                                <div className="diff-add px-2 py-0.5 rounded text-[#4CAF50]">
                                    + Bias assessment: Passed (demographic parity Δ &lt; 0.05)
                                </div>
                                <div className="diff-add px-2 py-0.5 rounded text-[#4CAF50]">
                                    + Data provenance: Verified (SHA-256 checksums attached)
                                </div>
                            </div>

                            <div className="text-[#F2C94C] flex items-center gap-2">
                                <span>⏳</span>
                                <span className="text-[#8A8F98]">
                                    Generating human oversight requirements (Art. 14)...
                                </span>
                                <span className="cursor-blink text-white/50">▊</span>
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
                            id={`doc-sub-${link.num}`}
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
