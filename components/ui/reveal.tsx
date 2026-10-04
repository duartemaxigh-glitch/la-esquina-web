"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
};

export function Reveal({
    children,
    className = "",
}: RevealProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.18,
            }}
            transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}