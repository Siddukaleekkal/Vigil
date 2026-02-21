"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Built for purpose",
        description:
            "Linear is shaped by the practices and principles of world-class product teams.",
        illustration: (
            <svg viewBox="0 0 300 200" className="w-full h-auto opacity-20">
                <defs>
                    <linearGradient id="grid1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#5E6AD2" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                {/* Abstract geometric shape - purpose/structure */}
                <rect x="60" y="30" width="180" height="140" rx="8" fill="none" stroke="url(#grid1)" strokeWidth="1" />
                <line x1="60" y1="70" x2="240" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="60" y1="110" x2="240" y2="110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="140" y1="30" x2="140" y2="170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <circle cx="140" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="140" cy="100" r="8" fill="rgba(94,106,210,0.3)" />
                {/* Corner details */}
                <path d="M60 30 L80 30 L80 50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <path d="M240 30 L220 30 L220 50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <path d="M60 170 L80 170 L80 150" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <path d="M240 170 L220 170 L220 150" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        title: "Powered by AI agents",
        description:
            "Designed for workflows shared by humans and agents, from PRD to PR.",
        illustration: (
            <svg viewBox="0 0 300 200" className="w-full h-auto opacity-20">
                <defs>
                    <linearGradient id="ai1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#5E6AD2" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                {/* Neural network inspired */}
                <circle cx="80" cy="60" r="6" fill="rgba(139,92,246,0.3)" />
                <circle cx="80" cy="100" r="6" fill="rgba(139,92,246,0.3)" />
                <circle cx="80" cy="140" r="6" fill="rgba(139,92,246,0.3)" />
                <circle cx="150" cy="80" r="6" fill="rgba(94,106,210,0.4)" />
                <circle cx="150" cy="120" r="6" fill="rgba(94,106,210,0.4)" />
                <circle cx="220" cy="100" r="8" fill="rgba(94,106,210,0.5)" />
                {/* Connections */}
                <line x1="86" y1="60" x2="144" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="86" y1="60" x2="144" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="86" y1="100" x2="144" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="86" y1="100" x2="144" y2="120" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="86" y1="140" x2="144" y2="80" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="86" y1="140" x2="144" y2="120" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="156" y1="80" x2="212" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="156" y1="120" x2="212" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {/* Pulse rings */}
                <circle cx="220" cy="100" r="16" fill="none" stroke="rgba(94,106,210,0.15)" strokeWidth="1" />
                <circle cx="220" cy="100" r="24" fill="none" stroke="rgba(94,106,210,0.08)" strokeWidth="1" />
            </svg>
        ),
    },
    {
        title: "Designed for speed",
        description:
            "Reduces noise and restores momentum to help teams ship with high velocity and focus.",
        illustration: (
            <svg viewBox="0 0 300 200" className="w-full h-auto opacity-20">
                <defs>
                    <linearGradient id="speed1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                    </linearGradient>
                </defs>
                {/* Speed lines */}
                <line x1="40" y1="60" x2="260" y2="60" stroke="url(#speed1)" strokeWidth="1.5" />
                <line x1="80" y1="80" x2="260" y2="80" stroke="url(#speed1)" strokeWidth="1" />
                <line x1="60" y1="100" x2="260" y2="100" stroke="url(#speed1)" strokeWidth="2" />
                <line x1="100" y1="120" x2="260" y2="120" stroke="url(#speed1)" strokeWidth="1" />
                <line x1="50" y1="140" x2="260" y2="140" stroke="url(#speed1)" strokeWidth="1.5" />
                {/* Arrow */}
                <polygon points="260,90 260,110 280,100" fill="rgba(255,255,255,0.12)" />
                {/* Dot trail */}
                <circle cx="250" cy="100" r="3" fill="rgba(255,255,255,0.2)" />
                <circle cx="240" cy="100" r="2" fill="rgba(255,255,255,0.1)" />
                <circle cx="232" cy="100" r="1.5" fill="rgba(255,255,255,0.06)" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function BentoGrid() {
    return (
        <section className="py-20" id="bento">
            <div className="mx-auto max-w-[1200px] px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={itemVariants}
                            className="gradient-border card-hover rounded-2xl p-6 flex flex-col justify-between min-h-[280px] group"
                        >
                            {/* Illustration */}
                            <div className="flex-1 flex items-center justify-center mb-6 transition-opacity duration-500 group-hover:opacity-100 opacity-70">
                                {f.illustration}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-[15px] font-medium mb-1.5 text-white">
                                    {f.title}
                                </h3>
                                <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
