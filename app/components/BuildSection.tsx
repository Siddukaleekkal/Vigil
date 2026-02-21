"use client";

import { motion } from "framer-motion";
import { Bot, Terminal, CheckCircle2, Circle, Zap } from "lucide-react";

const agentTasks = [
    {
        title: "Investigate memory leak in rendering pipeline",
        status: "done" as const,
        agent: "Linear Agent",
        time: "12min",
    },
    {
        title: "Create migration for new schema changes",
        status: "in-progress" as const,
        agent: "GitHub Copilot",
        time: "3min",
    },
    {
        title: "Write integration tests for auth flow",
        status: "todo" as const,
        agent: "Linear Agent",
        time: "Queued",
    },
];

const subLinks = [
    { num: "3.1", label: "Issues" },
    { num: "3.2", label: "Cycles" },
    { num: "3.3", label: "Agents" },
    { num: "3.4", label: "Automations" },
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
        <section className="py-24 relative" id="build">
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
                            Move work forward
                            <br />
                            across teams and agents
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            Build and deploy AI agents that work alongside your team. Work on
                            complex tasks together or delegate entire issues end-to-end.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[14px] text-[#5C5F66] hover:text-white/70 transition-colors group"
                            id="build-link"
                        >
                            <span className="font-mono text-[13px]">3.0</span>
                            <span>Build</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Agent tasks mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Agent task list */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    >
                        <div className="px-4 py-3 border-b border-white/[.04] flex items-center gap-2">
                            <Bot size={14} className="text-[#8B5CF6]" />
                            <span className="text-[13px] font-medium text-white/80">
                                Agent Tasks
                            </span>
                            <span className="text-[11px] text-[#5C5F66] bg-white/[.04] px-1.5 py-0.5 rounded-full ml-1">
                                3
                            </span>
                        </div>

                        <div className="divide-y divide-white/[.04]">
                            {agentTasks.map((task, i) => (
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
                                                    <Zap size={10} className="text-[#8B5CF6]" />
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
                                Linear Agent
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
                                    Analyzing issue ENG-1460...
                                </span>
                            </div>
                            <div className="text-[#5C5F66]">
                                ├── Reading codebase context from 12 files
                            </div>
                            <div className="text-[#5C5F66]">
                                ├── Identified WebSocket reconnect handler
                            </div>
                            <div className="text-[#5C5F66]">
                                └── Found root cause: event listeners not cleaned up
                            </div>

                            <div className="border-t border-white/[.04] pt-3">
                                <div className="text-[#4191E2]">
                                    ↳ Creating fix in{" "}
                                    <span className="text-white/70">
                                        src/handlers/websocket.ts
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white/[.02] rounded-lg p-3 border border-white/[.04]">
                                <div className="text-[#5C5F66] mb-1">
                  // Fix: Clean up event listeners on disconnect
                                </div>
                                <div className="diff-add px-2 py-0.5 rounded text-[#4CAF50]">
                                    + socket.removeAllListeners(&apos;reconnect&apos;);
                                </div>
                                <div className="diff-add px-2 py-0.5 rounded text-[#4CAF50]">
                                    + clearInterval(heartbeatTimer);
                                </div>
                            </div>

                            <div className="text-[#F2C94C] flex items-center gap-2">
                                <span>⏳</span>
                                <span className="text-[#8A8F98]">
                                    Generating PR description...
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
                            id={`build-sub-${link.num}`}
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
