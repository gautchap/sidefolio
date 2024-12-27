import type { Project } from "@/types/project";
import { Heading } from "@/components/ui/heading";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Paragraph } from "@/components/ui/paragraph";
// eslint-disable-next-line import/no-namespace
import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import { Github } from "lucide-react";

export const Projects = async ({ product, index }: { product: Project; index: number }) => {
    const t = await getTranslations(product.id);
    return (
        <motion.div
            key={product.href}
            initial={{
                opacity: 0,
                x: -50,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
        >
            <Link
                href={product.slug ? `/projects/${product.slug}` : product.href}
                key={product.href}
                className="group flex flex-col space-y-4 rounded-2xl pt-4 transition duration-200 hover:bg-gray-50 md:flex-row md:space-x-4 md:space-y-0"
            >
                <Image src={product.thumbnail} alt="thumbnail" height="200" width="200" className="rounded-md" />
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <Heading as="h4" className="text-lg font-black md:text-lg lg:text-lg">
                                {product.title}
                            </Heading>
                            {product.repo ? <Github className="size-4 text-muted" /> : null}
                        </div>

                        <Paragraph className="mt-2 max-w-xl text-sm md:text-sm lg:text-sm">
                            {t("description")}
                        </Paragraph>
                    </div>
                    <div className="mt-2 flex max-w-sm flex-wrap space-x-2 md:mb-1 md:mt-0 md:block md:max-w-none">
                        {product.stack?.map((stack: string) => (
                            <span
                                key={stack}
                                className="rounded-sm  bg-gray-50 px-2 py-1 text-xs text-secondary md:text-xs lg:text-xs"
                            >
                                {stack}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
