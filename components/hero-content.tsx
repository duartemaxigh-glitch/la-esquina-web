"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function HeroContent({
    children,
}: {
    children: ReactNode;
}) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                reduceMotion
                    ? false
                    : { opacity: 0, y: 16 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}