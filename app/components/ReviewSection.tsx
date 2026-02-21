"use client";

import { motion } from "framer-motion";
import { GitPullRequest, MessageSquare, Check, X } from "lucide-react";

const beforeCode = [
    { num: 1, content: "export function AppLauncher() {", type: "normal" as const },
    { num: 2, content: "  const [state, setState] = useState(null);", type: "remove" as const },
    { num: 3, content: "  const [loading, setLoading] = useState(true);", type: "remove" as const },
    { num: 4, content: "", type: "normal" as const },
    { num: 5, content: "  useEffect(() => {", type: "normal" as const },
    { num: 6, content: "    fetchVehicleState().then(data => {", type: "remove" as const },
    { num: 7, content: "      setState(data);", type: "remove" as const },
    { num: 8, content: "      setLoading(false);", type: "remove" as const },
    { num: 9, content: "    });", type: "remove" as const },
    { num: 10, content: "  }, []);", type: "normal" as const },
    { num: 11, content: "", type: "normal" as const },
    { num: 12, content: "  if (loading) return <Spinner />;", type: "remove" as const },
    { num: 13, content: "", type: "normal" as const },
    { num: 14, content: "  return <Dashboard data={state} />;", type: "remove" as const },
    { num: 15, content: "}", type: "normal" as const },
];

const afterCode = [
    { num: 1, content: "export function AppLauncher() {", type: "normal" as const },
    { num: 2, content: "  const { data, isReady } = useVehicleState({", type: "add" as const },
    { num: 3, content: "    strategy: 'progressive',", type: "add" as const },
    { num: 4, content: "    requiredFields: ['location', 'battery'],", type: "add" as const },
    { num: 5, content: "  });", type: "add" as const },
    { num: 6, content: "", type: "normal" as const },
    { num: 7, content: "  return (", type: "add" as const },
    { num: 8, content: "    <Suspense fallback={<ShellUI />}>", type: "add" as const },
    { num: 9, content: "      <Dashboard", type: "add" as const },
    { num: 10, content: "        data={data}", type: "add" as const },
    { num: 11, content: "        progressive={!isReady}", type: "add" as const },
    { num: 12, content: "      />", type: "add" as const },
    { num: 13, content: "    </Suspense>", type: "add" as const },
    { num: 14, content: "  );", type: "add" as const },
    { num: 15, content: "}", type: "normal" as const },
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
    { num: "4.1", label: "Pull Requests" },
    { num: "4.2", label: "Agent review" },
    { num: "4.3", label: "Approvals" },
    { num: "4.4", label: "Merge workflow" },
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
                            Review PRs and
                            <br />
                            agent output
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-[clamp(18px,1.6vw,22px)] text-[#8A8F98] leading-relaxed mb-4">
                            Review pull requests and agent-generated code changes directly
                            within Linear. Approve, comment, and merge without context switching.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[14px] text-[#5C5F66] hover:text-white/70 transition-colors group"
                            id="review-link"
                        >
                            <span className="font-mono text-[13px]">4.0</span>
                            <span>Reviews</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Code diff mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-[#0D0D0D] rounded-xl border border-white/[.06] overflow-hidden"
                    id="code-diff"
                >
                    {/* PR header */}
                    <div className="px-5 py-3 border-b border-white/[.04] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <GitPullRequest size={16} className="text-[#4CAF50]" />
                            <span className="text-[14px] font-medium text-white/90">
                                feat: Progressive vehicle state loading
                            </span>
                            <span className="text-[11px] text-[#5C5F66] bg-white/[.04] px-2 py-0.5 rounded-full">
                                #2703
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
                        <span className="text-[#4CAF50]">+28</span>
                        <span className="text-[#E5484D]">-14</span>
                        <span className="mx-2 text-white/20">|</span>
                        <span>src/components/AppLauncher.tsx</span>
                    </div>

                    {/* Split diff view */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-white/[.04]">
                        {/* Before */}
                        <div>
                            <div className="px-4 py-1.5 border-b border-white/[.04] text-[11px] text-[#5C5F66] font-mono bg-[#E5484D]/5">
                                Before
                            </div>
                            <div className="py-1">
                                {beforeCode.map((line) => (
                                    <CodeLine key={`b-${line.num}`} {...line} />
                                ))}
                            </div>
                        </div>
                        {/* After */}
                        <div>
                            <div className="px-4 py-1.5 border-b border-white/[.04] text-[11px] text-[#5C5F66] font-mono bg-[#4CAF50]/5">
                                After
                            </div>
                            <div className="py-1">
                                {afterCode.map((line) => (
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
