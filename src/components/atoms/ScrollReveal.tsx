"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
    children,
    className,
    delay = 0,
    direction = "up",
}: ScrollRevealProps) {
    // Set initial offset based on direction
    const offsets = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offsets[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{
                once: true, // Only animate once when it enters the screen
                margin: "-80px", // Trigger slightly before it's fully in view
            }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.22, 1, 0.36, 1], // The smooth, professional easing curve we used earlier
            }}
        >
            {children}
        </motion.div>
    );
}