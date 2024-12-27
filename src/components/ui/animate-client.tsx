"use client";

import type { ReactNode } from "react";
import { AnimatePresence } from "motion/react";

export const AnimateClient = ({ children }: { children: ReactNode }) => {
    return <AnimatePresence>{children}</AnimatePresence>;
};
