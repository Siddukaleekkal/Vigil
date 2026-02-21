"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "Vercel", width: 82 },
    { name: "Cursor", width: 78 },
    { name: "OpenAI", width: 80 },
    { name: "Coinbase", width: 90 },
    { name: "Cash App", width: 80 },
    { name: "Ramp", width: 66 },
    { name: "Retool", width: 72 },
    { name: "Arc", width: 48 },
    { name: "Loom", width: 68 },
    { name: "Notion", width: 76 },
];

function LogoText({ name, width }: { name: string; width: number }) {
    return (
        <div
            className="flex-shrink-0 flex items-center justify-center mx-8"
            style={{ minWidth: width }}
        >
            <span className="text-[15px] font-medium tracking-wide text-white/25 uppercase">
                {name}
            </span>
        </div>
    );
}

export default function LogoTicker() {
    return (
        <section className="py-16 overflow-hidden" id="logos">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-[1200px] px-6"
            >
                <p className="text-[13px] text-[#5C5F66] text-center mb-8 uppercase tracking-widest">
                    Trusted by the best product teams
                </p>
            </motion.div>

            <div className="relative">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                {/* Ticker */}
                <div className="flex logo-ticker">
                    {[...logos, ...logos].map((logo, i) => (
                        <LogoText key={`${logo.name}-${i}`} {...logo} />
                    ))}
                </div>
            </div>
        </section>
    );
}
