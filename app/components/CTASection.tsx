"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-32 relative" id="cta">
            <div className="section-divider mb-32" />

            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[400px] bg-radial from-[#5E6AD2]/10 to-transparent blur-[120px] opacity-50" />
            </div>

            <div className="mx-auto max-w-[1200px] px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Countdown urgency */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 text-[13px] text-[#8A8F98] mb-8 border border-white/[.08] rounded-full px-4 py-1.5 bg-white/[.02]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB5757] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB5757]" />
                        </span>
                        <span>The Aug 2026 deadline is approaching. Fines up to <strong className="text-white">7% of global turnover</strong>.</span>
                    </motion.div>

                    <h2 className="text-[clamp(36px,5vw,60px)] font-medium leading-[1.05] tracking-[-0.03em] mb-4">
                        Don&apos;t wait for the audit.
                        <br />
                        Be ready before it arrives.
                    </h2>

                    <p className="text-[18px] text-[#8A8F98] max-w-[560px] mx-auto leading-relaxed mb-8">
                        Join the enterprises already using Vigil to operationalize EU AI Act
                        compliance. Start free, scale with confidence.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <a
                            href="https://calendly.com/siddukaleekkal/new-meeting"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="cta-get-started"
                            className="px-6 py-2.5 text-[14px] font-medium bg-white text-black rounded-md hover:bg-white/90 transition-all duration-200 hover:shadow-lg hover:shadow-white/10"
                        >
                            Start Free Trial
                        </a>
                        <a
                            href="https://calendly.com/siddukaleekkal/new-meeting"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="cta-contact-sales"
                            className="px-6 py-2.5 text-[14px] font-medium text-white/80 rounded-md border border-white/[.15] hover:border-white/[.3] hover:text-white transition-all duration-200"
                        >
                            Talk to Sales
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
