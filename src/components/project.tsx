"use client";
import type { Project } from "@/types/project";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Github, ArrowRight } from "lucide-react";

export const SingleProject = ({ product }: { product: Project }) => {
    const [activeImage, setActiveImage] = useState<StaticImageData | string>(product.thumbnail);
    const t = useTranslations(product.id);
    const tp = useTranslations("ProjectsPage");
    return (
        <div className="py-10">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className="relative"
            >
                <Image
                    src={activeImage}
                    alt="thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-md object-contain"
                />
                <div className="absolute bottom-0 h-40 w-full bg-white [mask-image:linear-gradient(to_bottom,transparent,white)]" />
            </motion.div>
            <div className="my-8 flex flex-row flex-wrap justify-center">
                {product.images.map((image, index) => (
                    <button onClick={() => setActiveImage(image)} key={`image-thumbnail-${index}`}>
                        <Image
                            src={image}
                            alt="product thumbnail"
                            height="1000"
                            width="1000"
                            className="mr-4 h-14 w-16 rounded-lg border border-neutral-100 object-cover object-top md:h-40 md:w-60"
                        />
                    </button>
                ))}
            </div>
            <div className="mt-20 flex flex-col items-center justify-between lg:flex-row">
                <Heading className="mb-2 pb-1 font-black"> {product.title}</Heading>
                <div className="mt-2 flex max-w-sm flex-wrap space-x-2 md:mb-1 md:mt-0 md:block md:max-w-none">
                    {product.stack?.map((stack: string) => (
                        <span
                            key={stack}
                            className="rounded-sm bg-gray-50 px-2 py-1 text-xs text-secondary md:text-xs lg:text-xs"
                        >
                            {stack}
                        </span>
                    ))}
                </div>
            </div>
            {product.repo ? (
                <div>
                    <a
                        href={product.repo}
                        target="__blank"
                        className="inline-flex items-center gap-1 text-muted transition duration-200 hover:text-primary"
                    >
                        <Github className="size-4 shrink-0" />
                        <span className="text-sm ">Repo</span>
                    </a>
                    <Paragraph className="mt-4 max-w-xl">{t("description")}</Paragraph>
                </div>
            ) : null}
            <div className="prose prose-sm max-w-none text-neutral-600 md:prose-base">{product?.content}</div>

            <a
                href={product.href}
                target="__blank"
                className="group inline-flex origin-left transform-gpu items-center justify-around gap-2 rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-black/20 transition-all hover:scale-105"
            >
                <span>{tp("preview")}</span>
                <ArrowRight className="size-3.5 transform-gpu transition-all group-hover:translate-x-1" />
            </a>
        </div>
    );
};
