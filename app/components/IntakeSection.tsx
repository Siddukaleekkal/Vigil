"use client";

import { motion } from "framer-motion";
import { Hash, MoreVertical, Plus, MoreHorizontal } from "lucide-react";

// Mock issue data
const todoIssues = [
    {
        id: "ENG-926",
        title: "Redesign onboarding flow",
        labels: [{ name: "Design", color: "#8B5CF6" }],
        avatar: "from-[#EB5757] to-[#F2C94C]",
    },
    {
        id: "ENG-928",
        title: "Add dark mode toggle to settings",
        labels: [
            { name: "Feature", color: "#4191E2" },
            { name: "UI", color: "#5E6AD2" },
        ],
        avatar: "from-[#4CAF50] to-[#4191E2]",
    },
    {
        id: "ENG-930",
        title: "Migrate auth to Passkeys",
        labels: [{ name: "Security", color: "#EB5757" }],
        avatar: "from-[#5E6AD2] to-[#8B5CF6]",
    },
];

const inProgressIssues = [
    {
        id: "ENG-1457",
        title: "Implement real-time collaboration",
        labels: [{ name: "Feature", color: "#4191E2" }],
        avatar: "from-[#4191E2] to-[#5E6AD2]",
    },
    {
        id: "ENG-1460",
        title: "Fix memory leak in WebSocket handler",
        labels: [
            { name: "Bug", color: "#EB5757" },
            { name: "Performance", color: "#F2C94C" },
        ],
        avatar: "from-[#F2C94C] to-[#EB5757]",
    },
];

function SlackThread() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#141414] rounded-xl border border-white/[.06] overflow-hidden max-w-[400px]"
        >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[.04]">
                <div className="flex items-center gap-2 text-[13px]">
                    <Hash size={14} className="text-[#5C5F66]" />
                    <span className="text-white/70">
                        Thread in <span className="font-semibold text-white">#feedback</span>
                    </span>
                </div>
                <MoreVertical size={14} className="text-[#5C5F66]" />
            </div>

            <div className="p-4 space-y-3">
                <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4191E2] to-[#5E6AD2] flex-shrink-0" />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[13px] font-medium text-white">lena</span>
                            <span className="text-[11px] text-[#5C5F66]">2:39 PM</span>
                        </div>
                        <p className="text-[13px] text-[#8A8F98] leading-relaxed mt-0.5">
                            Hey team, customer <span className="text-[#4191E2]">@acme</span> reported that
                            the export feature is timing out on large datasets. Can someone look into this?
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#F2C94C] to-[#EB5757] flex-shrink-0" />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[13px] font-medium text-white">kai</span>
                            <span className="text-[11px] text-[#5C5F66]">2:41 PM</span>
                        </div>
                        <p className="text-[13px] text-[#8A8F98] leading-relaxed mt-0.5">
                            I&apos;ll create a Linear issue for this. Sounds like a priority fix.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function IssueRow({
    issue,
    statusIcon,
}: {
    issue: (typeof todoIssues)[0];
    statusIcon: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/[.02] transition-colors rounded group cursor-pointer">
            {statusIcon}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-[13px] text-white truncate">{issue.title}</span>
                </div>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
                {issue.labels.map((label) => (
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
            <div
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${issue.avatar} flex-shrink-0`}
            />
        </div>
    );
}

function KanbanColumn({
    title,
    count,
    issues,
    statusIcon,
}: {
    title: string;
    count: number;
    issues: typeof todoIssues;
    statusIcon: React.ReactNode;
}) {
    return (
        <div className="flex-1 min-w-[250px]">
            <div className="flex items-center gap-2 px-3 py-2 text-[13px]">
                <Plus size={12} className="text-[#5C5F66] opacity-0 group-hover:opacity-100" />
                <MoreHorizontal size={12} className="text-[#5C5F66]" />
                {statusIcon}
                <span className="text-white/70 font-medium">{title}</span>
                <span className="text-[#5C5F66] text-[12px]">{count}</span>
            </div>
            <div className="space-y-0.5">
                {issues.map((issue) => (
                    <IssueRow key={issue.id} issue={issue} statusIcon={statusIcon} />
                ))}
            </div>
        </div>
    );
}

export default function IntakeSection() {
    return (
        <section className="py-24 relative" id="intake">
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
                            Make product
                            <br />
                            operations self-driving
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            Turn conversations and customer feedback into actionable issues
                            that are routed, labeled, and prioritized for the right team.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[14px] text-[#5C5F66] hover:text-white/70 transition-colors group"
                            id="intake-link"
                        >
                            <span className="font-mono text-[13px]">1.0</span>
                            <span>Intake</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Mockup: Slack + Kanban */}
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
                    <SlackThread />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    >
                        <div className="flex overflow-x-auto">
                            <KanbanColumn
                                title="Todo"
                                count={71}
                                issues={todoIssues}
                                statusIcon={
                                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#8A8F98]" />
                                }
                            />
                            <div className="w-px bg-white/[.04] flex-shrink-0" />
                            <KanbanColumn
                                title="In Progress"
                                count={3}
                                issues={inProgressIssues}
                                statusIcon={
                                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#F2C94C] relative">
                                        <div className="absolute inset-0 rounded-full bg-[#F2C94C] opacity-30" />
                                    </div>
                                }
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
