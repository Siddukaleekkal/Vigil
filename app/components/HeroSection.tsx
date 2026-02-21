"use client";

import { motion } from "framer-motion";
import {
    Star,
    MoreHorizontal,
    ChevronUp,
    ChevronDown,
    Link2,
    Copy,
    GitBranch,
    Inbox,
    Search,
    PenSquare,
    BarChart3,
    X,
} from "lucide-react";

function SidebarItem({
    icon,
    label,
    active = false,
}: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] cursor-pointer transition-colors ${active
                ? "bg-white/[.06] text-white"
                : "text-[#8A8F98] hover:text-white hover:bg-white/[.04]"
                }`}
        >
            {icon}
            <span>{label}</span>
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
        <section className="relative pt-28 pb-4 overflow-hidden" id="hero">
            {/* Background glow */}
            <div className="hero-glow" />

            {/* Hero heading */}
            <div className="mx-auto max-w-[1200px] px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-[800px]"
                >
                    <h1 className="text-[clamp(36px,5.5vw,64px)] font-medium leading-[1.05] tracking-[-0.03em] mb-5">
                        The product development system for teams and agents
                    </h1>
                    <p className="text-[clamp(16px,1.4vw,18px)] text-[#8A8F98] leading-relaxed max-w-[500px]">
                        Purpose-built for planning and building products. Designed for the
                        AI era.
                    </p>
                </motion.div>

                {/* New badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex justify-end mt-2 mb-8"
                >
                    <a
                        href="#"
                        className="flex items-center gap-2 text-[13px] text-[#8A8F98] hover:text-white transition-colors group"
                        id="hero-new-badge"
                    >
                        <span className="text-white font-medium text-[12px] bg-white/[.08] px-2 py-0.5 rounded">
                            New
                        </span>
                        <span>Linear Reviews (Beta)</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">
                            →
                        </span>
                    </a>
                </motion.div>

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
                    id="hero-mockup"
                >
                    <div className="flex min-h-[420px] md:min-h-[480px]">
                        {/* Sidebar */}
                        <div className="hidden md:block w-[220px] border-r border-white/[.06] p-3 bg-[#0D0D0D]/50 flex-shrink-0">
                            {/* Sidebar header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-gradient-to-br from-[#5E6AD2] to-[#8B5CF6] flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-white">L</span>
                                    </div>
                                    <span className="text-[13px] font-medium flex items-center gap-1">
                                        Linear <ChevronDown size={12} className="text-[#5C5F66]" />
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#5C5F66]">
                                    <Search size={14} />
                                    <PenSquare size={14} />
                                </div>
                            </div>

                            {/* Nav items */}
                            <SidebarItem
                                icon={<Inbox size={14} />}
                                label="Inbox"
                            />
                            <SidebarItem
                                icon={
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                        <circle cx="8" cy="8" r="3" />
                                        <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                                    </svg>
                                }
                                label="My issues"
                            />
                            <SidebarItem
                                icon={
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                        <rect x="2" y="4" width="12" height="2" rx="1" />
                                        <rect x="2" y="8" width="8" height="2" rx="1" />
                                        <rect x="2" y="12" width="10" height="2" rx="1" />
                                    </svg>
                                }
                                label="Reviews"
                            />
                            <SidebarItem
                                icon={<BarChart3 size={14} />}
                                label="Pulse"
                            />

                            <SidebarSection title="Workspace">
                                <SidebarItem
                                    icon={
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M3 3h10v2H3zM3 7h7v2H3zM3 11h10v2H3z" />
                                        </svg>
                                    }
                                    label="Initiatives"
                                />
                                <SidebarItem
                                    icon={<GitBranch size={14} />}
                                    label="Projects"
                                />
                                <SidebarItem
                                    icon={<MoreHorizontal size={14} />}
                                    label="More"
                                />
                            </SidebarSection>

                            <SidebarSection title="Favorites">
                                <SidebarItem
                                    icon={
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#F2C94C]" />
                                    }
                                    label="Faster app launch"
                                    active
                                />
                                <SidebarItem
                                    icon={
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" opacity="0.5">
                                            <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                    label="Agent tasks"
                                />
                                <SidebarItem
                                    icon={
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#5E6AD2]" />
                                    }
                                    label="UI Refresh"
                                />
                            </SidebarSection>
                        </div>

                        {/* Main content */}
                        <div className="flex-1 flex flex-col md:flex-row">
                            {/* Issue detail */}
                            <div className="flex-1 border-r border-white/[.06]">
                                {/* Issue header bar */}
                                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[.06]">
                                    <div className="flex items-center gap-2 text-[13px]">
                                        <span className="text-white font-medium">
                                            Faster app launch
                                        </span>
                                        <Star
                                            size={14}
                                            className="text-[#F2C94C] fill-[#F2C94C]"
                                        />
                                        <MoreHorizontal size={14} className="text-[#5C5F66]" />
                                    </div>
                                    <div className="flex items-center gap-2 text-[12px] text-[#5C5F66]">
                                        <span>02 / 145</span>
                                        <ChevronUp size={14} />
                                        <ChevronDown size={14} />
                                    </div>
                                </div>

                                {/* Issue content */}
                                <div className="p-5">
                                    <h2 className="text-[20px] font-medium mb-3 tracking-[-0.01em]">
                                        Faster app launch
                                    </h2>
                                    <p className="text-[14px] text-[#8A8F98] leading-relaxed mb-6">
                                        Render UI before{" "}
                                        <code className="bg-white/[.06] px-1.5 py-0.5 rounded text-[13px] text-white/80 font-mono">
                                            vehicle_state
                                        </code>{" "}
                                        sync when minimum required state is present, instead of
                                        blocking on full refresh during iOS startup.
                                    </p>

                                    <h3 className="text-[14px] font-medium mb-3">Activity</h3>

                                    <div className="space-y-3">
                                        <ActivityItem
                                            icon="🤖"
                                            text={
                                                <>
                                                    <span className="text-white">Linear</span> created
                                                    the issue via{" "}
                                                    <span className="text-[#4191E2]">Slack</span> on
                                                    behalf of{" "}
                                                    <span className="text-white">karri</span>
                                                </>
                                            }
                                            time="2min ago"
                                        />
                                        <ActivityItem
                                            icon="⚡"
                                            text={
                                                <>
                                                    <span className="text-white">
                                                        Triage Intelligence
                                                    </span>{" "}
                                                    added the label{" "}
                                                    <span className="text-[#4191E2]">Performance</span>{" "}
                                                    and <span className="text-[#4191E2]">iOS</span>
                                                </>
                                            }
                                            time="2min ago"
                                        />
                                    </div>

                                    {/* Comment */}
                                    <div className="mt-4 bg-[#141414] rounded-lg p-3 border border-white/[.04]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4191E2] to-[#5E6AD2]" />
                                            <span className="text-[13px] text-white font-medium">
                                                karri
                                            </span>
                                            <span className="text-[11px] text-[#5C5F66]">
                                                · 4 min ago
                                            </span>
                                        </div>
                                        <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                                            Right now we show a spinner forever, which makes it look
                                            like the car disappeared...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right panel - Metadata & Agent */}
                            <div className="w-full md:w-[260px] flex-shrink-0 bg-[#0A0A0A]">
                                {/* Issue metadata bar */}
                                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[.06]">
                                    <span className="text-[13px] text-[#5C5F66] font-mono">
                                        ENG-2703
                                    </span>
                                    <div className="flex items-center gap-2 text-[#5C5F66]">
                                        <Link2 size={14} />
                                        <Copy size={14} />
                                        <GitBranch size={14} />
                                    </div>
                                </div>

                                {/* Metadata */}
                                <div className="p-4 space-y-3 text-[13px]">
                                    <MetaRow
                                        label="Status"
                                        value={
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#F2C94C] border-2 border-[#F2C94C]/30" />
                                                In Progress
                                            </span>
                                        }
                                    />
                                    <MetaRow
                                        label="Priority"
                                        value={
                                            <span className="flex items-center gap-1.5">
                                                <BarChart3 size={12} className="text-[#EB5757]" />
                                                High
                                            </span>
                                        }
                                    />
                                    <MetaRow
                                        label="Assignee"
                                        value={
                                            <span className="flex items-center gap-1.5">
                                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#4191E2]" />
                                                jori
                                            </span>
                                        }
                                    />
                                    <MetaRow
                                        label=""
                                        value={
                                            <span className="flex items-center gap-1.5 text-[#8A8F98]">
                                                <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border border-white/[.1] flex items-center justify-center">
                                                    <svg
                                                        width="10"
                                                        height="10"
                                                        viewBox="0 0 24 24"
                                                        fill="white"
                                                    >
                                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                                    </svg>
                                                </div>
                                                GitHub Copilot
                                            </span>
                                        }
                                    />
                                </div>

                                {/* Labels section */}
                                <div className="px-4 pb-3">
                                    <div className="text-[11px] text-[#5C5F66] uppercase tracking-wider mb-2">
                                        Labels
                                    </div>
                                </div>

                                {/* Agent chat card */}
                                <div className="mx-3 mb-3 bg-[#141414] rounded-lg border border-white/[.06] overflow-hidden">
                                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/[.04]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border border-white/[.1] flex items-center justify-center">
                                                <svg
                                                    width="10"
                                                    height="10"
                                                    viewBox="0 0 24 24"
                                                    fill="white"
                                                >
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                            </div>
                                            <span className="text-[12px] text-white font-medium">
                                                GitHub Copilot
                                            </span>
                                        </div>
                                        <X size={12} className="text-[#5C5F66]" />
                                    </div>
                                    <div className="p-3 text-[12px] text-[#8A8F98] leading-relaxed space-y-2">
                                        <p>
                                            I&apos;ll start by exploring the repository structure to
                                            understand the codebase and then implement the necessary
                                            changes to render UI before{" "}
                                            <code className="text-[#F2C94C] font-mono text-[11px]">
                                                vehicle_state
                                            </code>{" "}
                                            sync
                                        </p>
                                        <div className="text-[11px]">
                                            <span className="text-white font-medium">Bash:</span>{" "}
                                            Check current directory and list repository contents
                                        </div>
                                        <div className="text-[11px]">
                                            <span className="text-white font-medium">View</span>{" "}
                                            <span className="text-[#4191E2] font-mono">
                                                /home/runner/kinetic/kinetic-ios
                                            </span>
                                        </div>
                                        <div className="text-[11px] text-[#5C5F66]">
                                            Worked for 2min
                                        </div>
                                    </div>
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

function MetaRow({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-3">
            {label && (
                <span className="text-[#5C5F66] w-16 flex-shrink-0">{label}</span>
            )}
            <span className="text-white/90">{value}</span>
        </div>
    );
}
