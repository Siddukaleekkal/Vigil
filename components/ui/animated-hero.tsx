"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["seamless.", "continuous.", "absolute.", "instant."],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full relative overflow-hidden bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col relative z-10">
                    <div className="flex gap-4 flex-col items-center">
                        <h1 className="text-4xl md:text-7xl max-w-4xl tracking-tighter text-center font-medium leading-[1.1]">
                            <span className="text-white block mb-4">Governance evolved.</span>
                            <span className="text-white/60">Vigil makes conformity testing</span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold text-white"
                                        initial={{ opacity: 0, y: "-100%" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#8A8F98] max-w-2xl text-center mt-6">
                            Deploy the first AI-powered platform designed to navigate complex regulatory landscapes. Vigil monitors your infrastructure in real time to ensure every system meets global standards without manual intervention.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-8">
                        <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90 rounded-full px-6 font-medium">
                            Start Free Trial <MoveRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-2 border-white/10 text-white hover:bg-white/10 rounded-full px-6 transition-colors" variant="outline">
                            Watch Demo <PlayCircle className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Background glow effect for premium feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
        </div>
    );
}

export { Hero };
