"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Solutions", href: "#solutions" },
    { label: "Frameworks", href: "#frameworks" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
    { label: "Demo", href: "/demo" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const onScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black ${hidden ? "-translate-y-full" : "translate-y-0"
                } ${scrolled
                    ? "border-b border-white/[.06]"
                    : "border-b border-transparent"
                }`}
        >
            <nav className="mx-auto max-w-[1200px] flex items-center justify-between px-6 h-14">
                {/* Logo */}
                <a href="/" className="relative flex items-center justify-center w-28 h-14 overflow-hidden group" id="nav-logo">
                    <img
                        src="/vigil-logo.png"
                        alt="Vigil"
                        className="absolute h-28 max-w-none object-contain invert mix-blend-screen transition-opacity duration-300 group-hover:opacity-80"
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            id={`nav-${link.label.toLowerCase()}`}
                            className="px-3 py-1.5 text-[13px] text-[#8A8F98] hover:text-white transition-colors duration-200 rounded-md hover:bg-white/[.05]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Auth buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="w-px h-4 bg-white/[.1]" />
                    <a
                        href="/login"
                        id="nav-login"
                        className="text-[13px] text-[#8A8F98] hover:text-white transition-colors duration-200 px-2"
                    >
                        Log in
                    </a>
                    <a
                        href="#"
                        id="nav-get-started"
                        className="text-[13px] font-medium bg-white text-black px-4 py-1.5 rounded-md hover:bg-white/90 transition-all duration-200"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white/70 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    id="nav-mobile-toggle"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden glass border-t border-white/[.06] overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[14px] text-[#8A8F98] hover:text-white py-2 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="h-px bg-white/[.06] my-2" />
                            <a
                                href="/login"
                                className="text-[14px] text-[#8A8F98] hover:text-white py-2"
                            >
                                Log in
                            </a>
                            <a
                                href="#"
                                className="text-[14px] font-medium bg-white text-black px-4 py-2 rounded-md text-center mt-1"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
