"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    distance?: number;
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    direction = "up",
    duration = 0.6,
    distance = 40,
}: ScrollRevealProps) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: "easeOut"
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};
