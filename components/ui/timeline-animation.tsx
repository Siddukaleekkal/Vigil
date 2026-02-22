"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";

interface TimelineContentProps {
    children: React.ReactNode;
    animationNum: number;
    timelineRef: React.RefObject<HTMLDivElement | null>;
    className?: string;
    as?: React.ElementType;
    customVariants?: Variants;
}

const defaultVariants: Variants = {
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.3,
            duration: 0.5,
        },
    }),
    hidden: {
        filter: "blur(10px)",
        y: -20,
        opacity: 0,
    },
};

const TimelineContent = ({
    children,
    animationNum,
    timelineRef,
    className,
    as: Component = "div",
    customVariants,
}: TimelineContentProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const MotionComponent = motion.create(Component as React.ElementType);

    return (
        <MotionComponent
            ref={ref}
            custom={animationNum}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={customVariants || defaultVariants}
            className={cn(className)}
        >
            {children}
        </MotionComponent>
    );
};

export { TimelineContent };
