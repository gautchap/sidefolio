import type { JSX, ReactNode } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const CalSans = localFont({
    src: [{ path: "../../app/fonts/CalSans-SemiBold.woff2" }],
    display: "swap",
});

export const Heading = ({
    className,
    children,
    as: Tag = "h1",
}: {
    className?: string;
    children: ReactNode;
    as?: keyof JSX.IntrinsicElements;
}) => {
    return (
        <Tag
            className={cn(
                CalSans.className,
                "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
                className
            )}
        >
            {children}
        </Tag>
    );
};
