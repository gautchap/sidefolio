import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type Project = {
    title: string;
    id: string;
    description: string;
    thumbnail: StaticImageData;
    images: StaticImageData[] | string[];
    href: string;
    repo?: string;
    slug?: string;
    stack?: string[];
    content?: ReactNode | string;
};
