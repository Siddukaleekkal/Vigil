"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

// Generate mock data points
function generateData(count: number, base: number, variance: number) {
    return Array.from({ length: count }, (_, i) => ({
        x: i,
        y: base + Math.sin(i * 0.5) * variance + (Math.random() - 0.5) * variance * 0.5,
    }));
}

function pointsToPath(points: { x: number; y: number }[], width: number, height: number, padding = 20) {
    const maxY = Math.max(...points.map((p) => p.y));
    const minY = Math.min(...points.map((p) => p.y));
    const xStep = (width - padding * 2) / (points.length - 1);

    const mapped = points.map((p, i) => ({
        x: padding + i * xStep,
        y: padding + ((maxY - p.y) / (maxY - minY || 1)) * (height - padding * 2),
    }));

    // Create smooth curve through points
    let d = `M ${mapped[0].x} ${mapped[0].y}`;
    for (let i = 1; i < mapped.length; i++) {
        const prev = mapped[i - 1];
        const curr = mapped[i];
        const cpx = (prev.x + curr.x) / 2;
        d += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
    }

    return { d, mapped, maxY, minY };
}

const stats = [
    {
        label: "Issues Completed",
        value: "847",
        change: "+12%",
        trend: "up" as const,
        color: "#4CAF50",
    },
    {
        label: "Cycle Time",
        value: "2.4d",
        change: "-18%",
        trend: "down" as const,
        color: "#4191E2",
    },
    {
        label: "Throughput",
        value: "142/wk",
        change: "+7%",
        trend: "up" as const,
        color: "#8B5CF6",
    },
];

function AnimatedChart() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [data] = useState(() => generateData(24, 50, 20));
    const width = 600;
    const height = 200;

    const { d } = pointsToPath(data, width, height);

    // Fill path
    const { mapped } = pointsToPath(data, width, height);
    const lastPoint = mapped[mapped.length - 1];
    const firstPoint = mapped[0];
    const fillD = `${d} L ${lastPoint.x} ${height} L ${firstPoint.x} ${height} Z`;

    return (
        <div ref={ref} className="w-full">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                <defs>
                    <linearGradient id="pulseGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(94,106,210,0.2)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <clipPath id="chartClip">
                        <motion.rect
                            x="0"
                            y="0"
                            height={height}
                            initial={{ width: 0 }}
                            animate={isInView ? { width } : { width: 0 }}
                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </clipPath>
                </defs>

                {/* Grid lines */}
                {[0, 50, 100, 150, 200].map((y) => (
                    <line
                        key={y}
                        x1="20"
                        y1={y}
                        x2={width - 20}
                        y2={y}
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                    />
                ))}

                {/* Chart area */}
                <g clipPath="url(#chartClip)">
                    <path d={fillD} fill="url(#pulseGrad)" />
                    <path
                        d={d}
                        fill="none"
                        stroke="rgba(94,106,210,0.6)"
                        strokeWidth="2"
                    />
                </g>

                {/* Current value dot */}
                {isInView && (
                    <motion.circle
                        cx={lastPoint.x}
                        cy={lastPoint.y}
                        r="4"
                        fill="#5E6AD2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.3 }}
                    />
                )}
            </svg>
        </div>
    );
}

function CycleTimeChart() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [data] = useState(() => generateData(24, 4, 1.5));
    const width = 600;
    const height = 160;

    const { d } = pointsToPath(data, width, height);

    return (
        <div ref={ref} className="w-full">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                <defs>
                    <linearGradient id="cycleGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(65,145,226,0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <clipPath id="cycleClip">
                        <motion.rect
                            x="0"
                            y="0"
                            height={height}
                            initial={{ width: 0 }}
                            animate={isInView ? { width } : { width: 0 }}
                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        />
                    </clipPath>
                </defs>

                {[0, 40, 80, 120, 160].map((y) => (
                    <line
                        key={y}
                        x1="20"
                        y1={y}
                        x2={width - 20}
                        y2={y}
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                    />
                ))}

                <g clipPath="url(#cycleClip)">
                    <path
                        d={d}
                        fill="none"
                        stroke="rgba(65,145,226,0.5)"
                        strokeWidth="2"
                    />
                </g>
            </svg>
        </div>
    );
}

export default function PulseSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <section className="py-24 relative" id="pulse">
            <div className="section-divider mb-24" />

            <div className="mx-auto max-w-[1200px] px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Activity size={16} className="text-[#5E6AD2]" />
                            <span className="text-[13px] font-mono text-[#5C5F66] uppercase tracking-wider">
                                Pulse
                            </span>
                        </div>
                        <h2 className="text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.1] tracking-[-0.02em] mb-4">
                            Stay in sync with your team
                        </h2>
                        <p className="text-[16px] text-[#8A8F98] max-w-[500px] mx-auto leading-relaxed">
                            Real-time analytics and insights to keep your product development
                            on track.
                        </p>
                    </motion.div>
                </div>

                {/* Stats cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-[#0D0D0D] rounded-xl border border-white/[.06] p-5 card-hover"
                        >
                            <div className="text-[12px] text-[#5C5F66] mb-2 uppercase tracking-wider">
                                {stat.label}
                            </div>
                            <div className="flex items-end gap-3">
                                <span className="text-[28px] font-medium tracking-tight">
                                    {stat.value}
                                </span>
                                <span
                                    className="flex items-center gap-1 text-[13px] mb-1"
                                    style={{ color: stat.color }}
                                >
                                    {stat.trend === "up" ? (
                                        <TrendingUp size={14} />
                                    ) : (
                                        <TrendingDown size={14} />
                                    )}
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Charts */}
                {mounted && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="bg-[#0D0D0D] rounded-xl border border-white/[.06] p-5 card-hover"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[13px] font-medium text-white/80">
                                    Issues Completed
                                </span>
                                <span className="text-[11px] text-[#5C5F66] font-mono">
                                    Last 24 weeks
                                </span>
                            </div>
                            <AnimatedChart />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="bg-[#0D0D0D] rounded-xl border border-white/[.06] p-5 card-hover"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[13px] font-medium text-white/80">
                                    Cycle Time
                                </span>
                                <span className="text-[11px] text-[#5C5F66] font-mono">
                                    Avg: 2.4 days
                                </span>
                            </div>
                            <CycleTimeChart />
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
