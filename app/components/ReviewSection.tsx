"use client";

import { motion } from "framer-motion";
import { Shield, MessageSquare, Check, X, AlertTriangle } from "lucide-react";

const beforeAssessment = [
    { num: 1, content: "// Risk Management System — Art. 9", type: "normal" as const },
    { num: 2, content: "risk_identification: 'manual'", type: "remove" as const },
    { num: 3, content: "risk_assessment: 'ad-hoc spreadsheet'", type: "remove" as const },
    { num: 4, content: "", type: "normal" as const },
    { num: 5, content: "// Data Governance — Art. 10", type: "normal" as const },
    { num: 6, content: "training_data_audit: false", type: "remove" as const },
    { num: 7, content: "bias_detection: 'none'", type: "remove" as const },
    { num: 8, content: "data_provenance: 'undocumented'", type: "remove" as const },
    { num: 9, content: "", type: "normal" as const },
    { num: 10, content: "// Human Oversight — Art. 14", type: "normal" as const },
    { num: 11, content: "override_capability: false", type: "remove" as const },
    { num: 12, content: "escalation_path: 'undefined'", type: "remove" as const },
    { num: 13, content: "", type: "normal" as const },
    { num: 14, content: "conformity_status: 'NON_COMPLIANT'", type: "remove" as const },
    { num: 15, content: "", type: "normal" as const },
];

const afterAssessment = [
    { num: 1, content: "// Risk Management System — Art. 9", type: "normal" as const },
    { num: 2, content: "risk_identification: vigil.continuous({", type: "add" as const },
    { num: 3, content: "  library: 'EU_AI_ACT_RISK_CATALOG',", type: "add" as const },
    { num: 4, content: "  lifecycle: 'full_span',", type: "add" as const },
    { num: 5, content: "})", type: "add" as const },
    { num: 6, content: "", type: "normal" as const },
    { num: 7, content: "// Data Governance — Art. 10", type: "normal" as const },
    { num: 8, content: "training_data_audit: vigil.audit({", type: "add" as const },
    { num: 9, content: "  bias_detection: 'demographic_parity',", type: "add" as const },
    { num: 10, content: "  data_provenance: 'sha256_verified',", type: "add" as const },
    { num: 11, content: "  representativeness: 0.95,", type: "add" as const },
    { num: 12, content: "})", type: "add" as const },
    { num: 13, content: "", type: "normal" as const },
    { num: 14, content: "// Human Oversight — Art. 14", type: "normal" as const },
    { num: 15, content: "oversight: vigil.humanLoop({", type: "add" as const },
    { num: 16, content: "  override: true,", type: "add" as const },
    { num: 17, content: "  escalation: 'compliance_officer',", type: "add" as const },
    { num: 18, content: "})", type: "add" as const },
    { num: 19, content: "", type: "normal" as const },
    { num: 20, content: "conformity_status: 'COMPLIANT' // ✓", type: "add" as const },
];

function CodeLine({
    num,
    content,
    type,
}: {
    num: number;
    content: string;
    type: "normal" | "add" | "remove";
}) {
    const bgClass =
        type === "add"
            ? "bg-[#4CAF50]/8 border-l-[3px] border-l-[#4CAF50]/40"
            : type === "remove"
                ? "bg-[#E5484D]/8 border-l-[3px] border-l-[#E5484D]/40"
                : "border-l-[3px] border-l-transparent";

    const prefix = type === "add" ? "+" : type === "remove" ? "-" : " ";
    const textColor =
        type === "add"
            ? "text-[#4CAF50]/80"
            : type === "remove"
                ? "text-[#E5484D]/80"
                : "text-[#8A8F98]/60";

    return (
        <div className={`flex items-center ${bgClass} px-2 hover:bg-white/[.02]`}>
            <span className="w-8 text-right text-[11px] text-[#5C5F66]/50 select-none flex-shrink-0 font-mono">
                {num}
            </span>
            <span className="w-5 text-center text-[11px] font-mono select-none flex-shrink-0" style={{ color: type === "add" ? "#4CAF50" : type === "remove" ? "#E5484D" : "transparent" }}>
                {prefix}
            </span>
            <code className={`text-[12px] font-mono whitespace-pre ${textColor}`}>
                {content}
            </code>
        </div>
    );
}

const subLinks = [
    { num: "4.1", label: "Conformity Assessment" },
    { num: "4.2", label: "Gap Remediation" },
    { num: "4.3", label: "Incident Reporting" },
    { num: "4.4", label: "Audit Trail" },
];

export default function ReviewSection() {
    return (
        <section className="py-24 relative" id="review">
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
                            Conformity assessment,
                            <br />
                            simplified
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            See the gap between where you are and where Article 9–15 requires
                            you to be. Vigil shows the before and after of every compliance
                            control, with automated remediation recommendations.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[14px] text-[#5C5F66] hover:text-white/70 transition-colors group"
                            id="review-link"
                        >
                            <span className="font-mono text-[13px]">4.0</span>
                            <span>Assess</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Compliance diff mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    id="compliance-diff"
                >
                    {/* Assessment header */}
                    <div className="px-5 py-3 border-b border-white/[.04] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Shield size={16} className="text-[#4CAF50]" />
                            <span className="text-[14px] font-medium text-white/90">
                                Conformity Assessment: Credit Scoring Engine
                            </span>
                            <span className="text-[11px] text-[#5C5F66] bg-white/[.04] px-2 py-0.5 rounded-full">
                                SYS-001
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1.5 text-[12px] text-[#8A8F98] hover:text-white transition-colors px-2.5 py-1 rounded border border-white/[.06] hover:border-white/[.15]">
                                <MessageSquare size={12} />
                                Comment
                            </button>
                            <button className="flex items-center gap-1.5 text-[12px] text-[#4CAF50] hover:text-[#4CAF50] transition-colors px-2.5 py-1 rounded bg-[#4CAF50]/10 border border-[#4CAF50]/20 hover:border-[#4CAF50]/40">
                                <Check size={12} />
                                Approve
                            </button>
                            <button className="flex items-center gap-1.5 text-[12px] text-[#E5484D] hover:text-[#E5484D] transition-colors px-2.5 py-1 rounded border border-white/[.06] hover:border-[#E5484D]/30">
                                <X size={12} />
                            </button>
                        </div>
                    </div>

                    {/* File header */}
                    <div className="px-4 py-2 border-b border-white/[.04] flex items-center gap-2 text-[12px] text-[#5C5F66] font-mono bg-white/[.01]">
                        <span className="text-[#4CAF50]">+14 controls</span>
                        <span className="text-[#E5484D]">-8 gaps</span>
                        <span className="mx-2 text-white/20">|</span>
                        <span>governance/SYS-001-conformity.yaml</span>
                        <AlertTriangle size={12} className="text-[#F2C94C] ml-auto" />
                        <span className="text-[#F2C94C]">2 findings</span>
                    </div>

                    {/* Split diff view */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-white/[.04]">
                        {/* Before */}
                        <div>
                            <div className="px-4 py-1.5 border-b border-white/[.04] text-[11px] text-[#5C5F66] font-mono bg-[#E5484D]/5">
                                Before — Non-Compliant
                            </div>
                            <div className="py-1">
                                {beforeAssessment.map((line) => (
                                    <CodeLine key={`b-${line.num}`} {...line} />
                                ))}
                            </div>
                        </div>
                        {/* After */}
                        <div>
                            <div className="px-4 py-1.5 border-b border-white/[.04] text-[11px] text-[#5C5F66] font-mono bg-[#4CAF50]/5">
                                After — Vigil Remediation
                            </div>
                            <div className="py-1">
                                {afterAssessment.map((line) => (
                                    <CodeLine key={`a-${line.num}`} {...line} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

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
                            id={`review-sub-${link.num}`}
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
