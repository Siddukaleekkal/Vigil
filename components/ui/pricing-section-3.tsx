"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Shield, FileText, Bot, Headphones, CheckCheck } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const plans = [
    {
        name: "Starter",
        description:
            "For teams beginning their AI governance journey with a small portfolio of systems.",
        price: 1500,
        yearlyPrice: 14400,
        buttonText: "Get started",
        buttonVariant: "outline" as const,
        features: [
            { text: "Up to 5 AI systems", icon: <Bot size={20} /> },
            { text: "Risk classification", icon: <Shield size={20} /> },
            { text: "Basic documentation", icon: <FileText size={20} /> },
        ],
        includes: [
            "What's included:",
            "Annex III risk tiers",
            "Gap analysis reports",
            "Email support",
        ],
    },
    {
        name: "Pro",
        description:
            "Full Article 9–15 compliance automation for growing enterprises preparing for Aug 2026.",
        price: 5000,
        yearlyPrice: 48000,
        popular: true,
        buttonText: "Get started",
        buttonVariant: "default" as const,
        features: [
            { text: "Up to 25 AI systems", icon: <Bot size={20} /> },
            { text: "Full Art. 9–15 compliance", icon: <Shield size={20} /> },
            { text: "Auto audit reports", icon: <FileText size={20} /> },
        ],
        includes: [
            "Everything in Starter, plus:",
            "Automated Annex IV docs",
            "Bias & data quality audits",
            "Dedicated CSM",
        ],
    },
    {
        name: "Enterprise",
        description:
            "Unlimited scale with EU Authorised Representative service, API integrations, and SLA guarantees.",
        price: 0,
        yearlyPrice: 0,
        isCustom: true,
        buttonText: "Contact Sales",
        buttonVariant: "outline" as const,
        features: [
            { text: "Unlimited AI systems", icon: <Bot size={20} /> },
            { text: "EU Auth. Rep. service", icon: <Shield size={20} /> },
            { text: "API + integrations", icon: <FileText size={20} /> },
        ],
        includes: [
            "Everything in Pro, plus:",
            "Multi-framework cross-walk",
            "Custom CI/CD pipelines",
            "24/7 SLA",
        ],
    },
];

const PricingSwitch = ({
    onSwitch,
    className,
}: {
    onSwitch: (value: string) => void;
    className?: string;
}) => {
    const [selected, setSelected] = useState("0");

    const handleSwitch = (value: string) => {
        setSelected(value);
        onSwitch(value);
    };

    return (
        <div className={cn("flex justify-center", className)}>
            <div className="relative z-10 mx-auto flex w-fit rounded-full bg-[#1A1A1A] border border-white/[0.08] p-1">
                <button
                    onClick={() => handleSwitch("0")}
                    className={cn(
                        "relative z-10 w-fit sm:h-12 cursor-pointer h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
                        selected === "0"
                            ? "text-white"
                            : "text-[#8A8F98] hover:text-white",
                    )}
                >
                    {selected === "0" && (
                        <motion.span
                            layoutId={"pricing-switch"}
                            className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-white/[0.15] bg-gradient-to-t from-[#222] via-[#333] to-[#444] shadow-lg shadow-black/30"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative">Monthly</span>
                </button>

                <button
                    onClick={() => handleSwitch("1")}
                    className={cn(
                        "relative z-10 w-fit cursor-pointer sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
                        selected === "1"
                            ? "text-white"
                            : "text-[#8A8F98] hover:text-white",
                    )}
                >
                    {selected === "1" && (
                        <motion.span
                            layoutId={"pricing-switch"}
                            className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-white/[0.15] bg-gradient-to-t from-[#222] via-[#333] to-[#444] shadow-lg shadow-black/30"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative flex items-center gap-2">
                        Yearly
                        <span className="rounded-full bg-[#5E6AD2]/20 px-2 py-0.5 text-xs font-medium text-[#5E6AD2]">
                            Save 20%
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);
    const pricingRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.4,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };

    const togglePricingPeriod = (value: string) =>
        setIsYearly(Number.parseInt(value) === 1);

    return (
        <div
            className="px-4 pt-20 pb-20 min-h-screen max-w-7xl mx-auto relative"
            ref={pricingRef}
            id="pricing"
        >
            <article className="flex sm:flex-row flex-col sm:pb-0 pb-4 sm:items-center items-start justify-between">
                <div className="text-left mb-6">
                    <p className="text-[12px] font-medium text-[#5E6AD2] uppercase tracking-widest mb-3">
                        Business Model
                    </p>
                    <h2 className="text-4xl font-medium leading-[130%] text-white mb-4">
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            reverse={true}
                            containerClassName="justify-start"
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 40,
                                delay: 0,
                            }}
                        >
                            SaaS. Enterprise. Compliance-Critical.
                        </VerticalCutReveal>
                    </h2>

                    <TimelineContent
                        as="p"
                        animationNum={0}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                        className="text-[#8A8F98] w-[80%]"
                    >
                        Built for teams navigating the EU AI Act. Choose the plan that
                        matches your compliance scope.
                    </TimelineContent>
                </div>

                <TimelineContent
                    as="div"
                    animationNum={1}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                >
                    <PricingSwitch onSwitch={togglePricingPeriod} className="shrink-0" />
                </TimelineContent>
            </article>

            <TimelineContent
                as="div"
                animationNum={2}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="grid md:grid-cols-3 gap-4 mx-auto bg-gradient-to-b from-[#111] to-[#1A1A1A] sm:p-3 rounded-lg"
            >
                {plans.map((plan, index) => (
                    <TimelineContent
                        as="div"
                        key={plan.name}
                        animationNum={index + 3}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                    >
                        <Card
                            className={`relative flex-col flex justify-between ${plan.popular
                                ? "scale-110 ring-2 ring-white/20 bg-gradient-to-t from-[#0D0D0D] to-[#1A1A1A] text-white"
                                : "border-none shadow-none bg-transparent pt-4 text-white"
                                }`}
                        >
                            <CardContent className="pt-0">
                                <div className="space-y-2 pb-3">
                                    {plan.popular && (
                                        <div className="pt-4">
                                            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/[0.08]">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-baseline">
                                        {"isCustom" in plan && plan.isCustom ? (
                                            <span className="text-4xl font-semibold text-[#5E6AD2]">
                                                Custom
                                            </span>
                                        ) : (
                                            <>
                                                <span className="text-4xl font-semibold text-[#5E6AD2]">
                                                    $
                                                    <NumberFlow
                                                        format={{
                                                            style: "decimal",
                                                            useGrouping: true,
                                                        }}
                                                        value={isYearly ? plan.yearlyPrice : plan.price}
                                                        className="text-4xl font-semibold"
                                                    />
                                                </span>
                                                <span className="text-[#8A8F98] ml-1">
                                                    /{isYearly ? "year" : "mo"}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <h3 className="text-3xl font-semibold mb-2">{plan.name}</h3>
                                </div>
                                <p className="text-sm text-[#8A8F98] mb-4">
                                    {plan.description}
                                </p>

                                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                                    <h4 className="font-medium text-base mb-3 text-white/80">
                                        {plan.includes[0]}
                                    </h4>
                                    <ul className="space-y-2 font-semibold">
                                        {plan.includes.slice(1).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <span
                                                    className={
                                                        plan.popular
                                                            ? "text-[#5E6AD2] h-6 w-6 bg-[#5E6AD2]/10 border border-[#5E6AD2]/20 rounded-full grid place-content-center mt-0.5 mr-3"
                                                            : "text-white h-6 w-6 bg-white/[0.06] border border-white/[0.1] rounded-full grid place-content-center mt-0.5 mr-3"
                                                    }
                                                >
                                                    <CheckCheck className="h-4 w-4" />
                                                </span>
                                                <span className="text-sm text-[#8A8F98]">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <a
                                    href="https://calendly.com/siddukaleekkal/new-meeting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full mb-6 p-4 text-xl rounded-xl text-center font-semibold block transition-all duration-200 ${plan.popular
                                        ? "bg-gradient-to-t from-white to-neutral-200 shadow-lg shadow-white/10 border border-white/20 text-black hover:opacity-90"
                                        : "bg-gradient-to-t from-[#222] to-[#444] shadow-lg shadow-black/30 border border-white/[0.08] text-white hover:border-white/[0.2]"
                                        }`}
                                >
                                    {plan.buttonText}
                                </a>
                            </CardFooter>
                        </Card>
                    </TimelineContent>
                ))}
            </TimelineContent>
        </div>
    );
}
