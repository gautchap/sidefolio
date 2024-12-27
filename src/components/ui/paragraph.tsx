import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Paragraph = ({ className, children }: { className?: string; children: ReactNode }) => {
    return <p className={cn("text-sm lg:text-base font-normal text-secondary", className)}>{children}</p>;
};
