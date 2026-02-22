"use client";

import { motion } from "framer-motion";
import {
    Shield,
    MoreHorizontal,
    ChevronDown,
    AlertTriangle,
    CheckCircle2,
    Search,
    Bell,
    BarChart3,
    FileText,
    Activity,
    Layers,
    Settings,
} from "lucide-react";

function SidebarItem({
    icon,
    label,
    active = false,
    badge,
}: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    badge?: string;
}) {
    return (
        <div
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] cursor-pointer transition-colors ${active
                ? "bg-white/[.06] text-white"
                : "text-[#8A8F98] hover:text-white hover:bg-white/[.04]"
                }`}
        >
            {icon}
            <span className="flex-1">{label}</span>
            {badge && (
                <span className="text-[10px] bg-white/[.06] px-1.5 py-0.5 rounded-full text-[#8A8F98]">
                    {badge}
                </span>
            )}
        </div>
    );
}

function SidebarSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mt-4">
            <div className="px-3 text-[11px] text-[#5C5F66] uppercase tracking-wider mb-1 flex items-center gap-1">
                {title} <ChevronDown size={10} />
            </div>
            {children}
        </div>
    );
}

export default function HeroSection() {
    return (
        <section className="relative pt-8 pb-4 overflow-hidden" id="hero-mockup">
            {/* Background glow */}
            <div className="hero-glow" />

            <div className="mx-auto max-w-[1200px] px-6">
                {/* App mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-xl border border-white/[.08] overflow-hidden bg-[#0A0A0A] shadow-2xl shadow-black/50"
                    id="governance-mockup"
                >
                    <div className="flex min-h-[420px] md:min-h-[480px]">
                        {/* Sidebar */}
                        <div className="hidden md:block w-[220px] border-r border-white/[.06] p-3 bg-[#0D0D0D]/50 flex-shrink-0">
                            {/* Sidebar header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-gradient-to-br from-[#5E6AD2] to-[#8B5CF6] flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-white">V</span>
                                    </div>
                                    <span className="text-[13px] font-medium flex items-center gap-1">
                                        Vigil <ChevronDown size={12} className="text-[#5C5F66]" />
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#5C5F66]">
                                    <Search size={14} />
                                    <Bell size={14} />
                                </div>
                            </div>

                            {/* Nav items */}
                            <SidebarItem
                                icon={<BarChart3 size={14} />}
                                label="Dashboard"
                                active
                            />
                            <SidebarItem
                                icon={<Layers size={14} />}
                                label="AI Registry"
                                badge="47"
                            />
                            <SidebarItem
                                icon={<Shield size={14} />}
                                label="Risk Assessment"
                            />
                            <SidebarItem
                                icon={<Activity size={14} />}
                                label="Monitoring"
                            />

                            <SidebarSection title="Compliance">
                                <SidebarItem
                                    icon={
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#5E6AD2]" />
                                    }
                                    label="EU AI Act"
                                    badge="78%"
                                />
                                <SidebarItem
                                    icon={
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#4191E2]" />
                                    }
                                    label="NIST AI RMF"
                                    badge="52%"
                                />
                                <SidebarItem
                                    icon={
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                                    }
                                    label="ISO 42001"
                                    badge="44%"
                                />
                            </SidebarSection>

                            <SidebarSection title="Operations">
                                <SidebarItem
                                    icon={<FileText size={14} />}
                                    label="Documentation"
                                />
                                <SidebarItem
                                    icon={<AlertTriangle size={14} />}
                                    label="Incidents"
                                    badge="2"
                                />
                                <SidebarItem
                                    icon={<Settings size={14} />}
                                    label="Settings"
                                />
                            </SidebarSection>
                        </div>

                        {/* Main content */}
                        <div className="flex-1 flex flex-col">
                            {/* Top bar */}
                            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[.06]">
                                <div className="flex items-center gap-2 text-[13px]">
                                    <span className="text-white font-medium">
                                        Governance Dashboard
                                    </span>
                                    <MoreHorizontal size={14} className="text-[#5C5F66]" />
                                </div>
                                <div className="flex items-center gap-2 text-[12px] text-[#5C5F66]">
                                    <span className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                                        All systems nominal
                                    </span>
                                </div>
                            </div>

                            {/* Dashboard content */}
                            <div className="p-5 flex-1">
                                {/* Stats row */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                                    {[
                                        { label: "Total Systems", value: "47", trend: null },
                                        { label: "High Risk", value: "12", trend: "warning" },
                                        { label: "Compliance Score", value: "94%", trend: "up" },
                                        { label: "Days to Deadline", value: "161", trend: "urgent" },
                                    ].map((stat) => (
                                        <div key={stat.label} className="bg-[#141414] rounded-lg p-3 border border-white/[.04]">
                                            <div className="text-[10px] text-[#5C5F66] uppercase tracking-wider mb-1">{stat.label}</div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[18px] font-medium text-white">{stat.value}</span>
                                                {stat.trend === "warning" && <AlertTriangle size={12} className="text-[#F2C94C]" />}
                                                {stat.trend === "up" && <CheckCircle2 size={12} className="text-[#4CAF50]" />}
                                                {stat.trend === "urgent" && (
                                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EB5757]/10 text-[#EB5757] border border-[#EB5757]/20">AUG 2026</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Recent activity */}
                                <h3 className="text-[13px] font-medium mb-3 text-white/80">Recent Activity</h3>
                                <div className="space-y-2">
                                    <ActivityItem
                                        icon="🤖"
                                        text={
                                            <>
                                                <span className="text-white">Vigil Agent</span> completed
                                                Annex IV documentation for{" "}
                                                <span className="text-[#4191E2]">SYS-001 Credit Scoring</span>
                                            </>
                                        }
                                        time="2min ago"
                                    />
                                    <ActivityItem
                                        icon="⚡"
                                        text={
                                            <>
                                                <span className="text-white">
                                                    Model Drift Alert
                                                </span>{" "}
                                                triggered for{" "}
                                                <span className="text-[#F2C94C]">SYS-007 Patient Triage</span>
                                                {" "}— accuracy dropped below threshold
                                            </>
                                        }
                                        time="14min ago"
                                    />
                                    <ActivityItem
                                        icon="✅"
                                        text={
                                            <>
                                                <span className="text-white">Conformity Assessment</span>{" "}
                                                passed for{" "}
                                                <span className="text-[#4CAF50]">SYS-012 Support Chatbot</span>
                                                {" "}(Limited Risk — Art. 50)
                                            </>
                                        }
                                        time="1hr ago"
                                    />
                                </div>

                                {/* Incident card */}
                                <div className="mt-4 bg-[#141414] rounded-lg p-3 border border-[#F2C94C]/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <AlertTriangle size={14} className="text-[#F2C94C]" />
                                        <span className="text-[13px] text-white font-medium">
                                            Active Finding
                                        </span>
                                        <span className="text-[11px] text-[#F2C94C] bg-[#F2C94C]/10 px-1.5 py-0.5 rounded">
                                            Art. 15 — Robustness
                                        </span>
                                        <span className="text-[11px] text-[#5C5F66] ml-auto">
                                            · 14 min ago
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                                        SYS-007 accuracy dropped to 89.2%, below the 92% threshold defined in your risk management policy. Automated re-evaluation initiated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ActivityItem({
    icon,
    text,
    time,
}: {
    icon: string;
    text: React.ReactNode;
    time: string;
}) {
    return (
        <div className="flex items-start gap-2.5">
            <span className="text-[14px] mt-0.5">{icon}</span>
            <div className="text-[13px] text-[#8A8F98] leading-relaxed">
                {text}{" "}
                <span className="text-[#5C5F66]">· {time}</span>
            </div>
        </div>
    );
}
