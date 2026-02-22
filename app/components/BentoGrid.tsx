"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Risk-based classification",
        description:
            "Automatically classify every AI system into the Act's four risk tiers — Unacceptable, High, Limited, and Minimal — with structured evidence trails.",
        illustration: (
            <svg viewBox="0 0 300 200" className="w-full h-auto opacity-20">
                <defs>
                    <linearGradient id="grid1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#EB5757" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#F2C94C" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.15" />
                    </linearGradient>
                </defs>
                {/* Risk pyramid */}
                <polygon points="150,25 260,170 40,170" fill="none" stroke="url(#grid1)" strokeWidth="1.5" />
                <line x1="80" y1="110" x2="220" y2="110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="105" y1="75" x2="195" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="60" y1="145" x2="240" y2="145" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                {/* Risk level indicators */}
                <circle cx="150" cy="50" r="6" fill="rgba(235,87,87,0.4)" />
                <circle cx="150" cy="90" r="6" fill="rgba(242,201,76,0.3)" />
                <circle cx="150" cy="125" r="6" fill="rgba(65,145,226,0.3)" />
                <circle cx="150" cy="155" r="6" fill="rgba(76,175,80,0.3)" />
                {/* Labels */}
                <text x="170" y="54" fill="rgba(235,87,87,0.5)" fontSize="8" fontFamily="monospace">PROHIBITED</text>
                <text x="170" y="94" fill="rgba(242,201,76,0.4)" fontSize="8" fontFamily="monospace">HIGH</text>
                <text x="170" y="129" fill="rgba(65,145,226,0.4)" fontSize="8" fontFamily="monospace">LIMITED</text>
                <text x="170" y="159" fill="rgba(76,175,80,0.4)" fontSize="8" fontFamily="monospace">MINIMAL</text>
            </svg>
        ),
    },
    {
        title: "Extraterritorial reach",
        description:
            "If your AI outputs reach the EU market, you're in scope. Vigil maps your global exposure and identifies compliance obligations automatically.",
        illustration: (
            <svg viewBox="0 0 300 200" className="w-full h-auto opacity-20">
                <defs>
                    <linearGradient id="ai1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#5E6AD2" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                {/* Globe representation */}
                <circle cx="150" cy="100" r="60" fill="none" stroke="rgba(94,106,210,0.15)" strokeWidth="1.5" />
                <ellipse cx="150" cy="100" rx="60" ry="25" fill="none" stroke="rgba(94,106,210,0.1)" strokeWidth="1" />
                <ellipse cx="150" cy="100" rx="25" ry="60" fill="none" stroke="rgba(94,106,210,0.1)" strokeWidth="1" />
                {/* Connection lines - US to EU */}
                <circle cx="110" cy="85" r="4" fill="rgba(65,145,226,0.5)" />
                <text x="96" y="78" fill="rgba(65,145,226,0.4)" fontSize="7" fontFamily="monospace">US</text>
                <circle cx="170" cy="80" r="4" fill="rgba(139,92,246,0.5)" />
                <text x="178" y="78" fill="rgba(139,92,246,0.4)" fontSize="7" fontFamily="monospace">EU</text>
                <line x1="114" y1="85" x2="166" y2="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 3" />
                {/* More nodes */}
                <circle cx="140" cy="120" r="3" fill="rgba(76,175,80,0.4)" />
                <circle cx="180" cy="105" r="3" fill="rgba(242,201,76,0.4)" />
                <circle cx="130" cy="95" r="3" fill="rgba(235,87,87,0.4)" />
                {/* Pulse rings */}
                <circle cx="170" cy="80" r="12" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
                <circle cx="170" cy="80" r="20" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
            </svg>
        ),
    },
    {
        title: "Audit-ready by design",
        description:
            "Automated documentation generation, tamper-resistant logging, and versioned compliance records that meet Articles 11-12 requirements out of the box.",
        illustration: (
            <svg viewBox="0 0 300 200" className="w-full h-auto opacity-20">
                <defs>
                    <linearGradient id="speed1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                    </linearGradient>
                </defs>
                {/* Document stack */}
                <rect x="90" y="25" width="120" height="150" rx="6" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <rect x="95" y="30" width="110" height="140" rx="4" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                {/* Document lines */}
                <line x1="108" y1="55" x2="190" y2="55" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                <line x1="108" y1="70" x2="175" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="108" y1="85" x2="185" y2="85" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="108" y1="100" x2="165" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                {/* Checkmarks */}
                <circle cx="108" cy="120" r="8" fill="rgba(76,175,80,0.15)" stroke="rgba(76,175,80,0.3)" strokeWidth="1" />
                <path d="M104 120 L107 123 L113 117" fill="none" stroke="rgba(76,175,80,0.5)" strokeWidth="1.5" />
                <text x="120" y="123" fill="rgba(76,175,80,0.4)" fontSize="8" fontFamily="monospace">VERIFIED</text>
                {/* Shield */}
                <path d="M150 140 L150 155 Q150 165 160 165 Q170 165 170 155 L170 140 Q160 135 150 140Z" fill="rgba(94,106,210,0.15)" stroke="rgba(94,106,210,0.3)" strokeWidth="1" />
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
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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
