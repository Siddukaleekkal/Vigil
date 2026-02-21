"use client";

import { motion } from "framer-motion";

const footerColumns = [
    {
        title: "Product",
        links: [
            "Build",
            "Reviews",
            "Monitor",
            "Pricing",
        ],
    },
    {
        title: "Features",
        links: [
            "Asks",
            "Agents",
            "Customer Requests",
            "Insights",
            "Mobile",
            "Integrations",
            "Changelog",
        ],
    },
    {
        title: "Company",
        links: ["About", "Customers", "Careers", "Blog", "Method", "Quality", "Brand"],
    },
    {
        title: "Resources",
        links: [
            "Switch",
            "Download",
            "Documentation",
            "Developers",
            "Status",
            "Enterprise",
            "Startups",
        ],
    },
    {
        title: "Connect",
        links: ["Contact us", "Community", "X (Twitter)", "GitHub", "YouTube"],
    },
];

export default function Footer() {
    return (
        <footer className="relative" id="footer">
            <div className="section-divider" />

            <div className="mx-auto max-w-[1200px] px-6 py-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
                >
                    {/* Logo */}
                    <div className="col-span-2 sm:col-span-3 md:col-span-1">
                        <img
                            src="/vigil-logo.png"
                            alt="Vigil"
                            className="h-5 w-auto invert mix-blend-screen opacity-40"
                        />
                    </div>

                    {/* Columns */}
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-[13px] font-medium text-white/60 mb-4">
                                {col.title}
                            </h4>
                            <ul className="space-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-[13px] text-[#5C5F66] hover:text-white/60 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom legal */}
                <div className="mt-16 pt-6 border-t border-white/[.04] flex flex-wrap items-center gap-4 text-[12px] text-[#5C5F66]">
                    <a href="#" className="hover:text-white/50 transition-colors">
                        Privacy
                    </a>
                    <a href="#" className="hover:text-white/50 transition-colors">
                        Terms
                    </a>
                    <a href="#" className="hover:text-white/50 transition-colors">
                        DPA
                    </a>
                </div>
            </div>
        </footer>
    );
}
