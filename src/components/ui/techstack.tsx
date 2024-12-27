import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import { getTranslations } from "next-intl/server";

export const TechStack = async () => {
    const stack = [
        {
            title: "React",
            src: "/images/logo/react.svg",
            className: "h-10 w-10",
        },
        {
            title: "Tailwind CSS",
            src: "/images/logo/tailwindcss.svg",
            className: "h-10 w-24",
        },
        {
            title: "Next.js",
            src: "/images/logo/next.svg",
            className: "h-10 w-14",
        },
        {
            title: "Nest.js",
            src: "/images/logo/nest.svg",
            className: "h-10 w-24",
        },
        {
            title: "Node.js",
            src: "/images/logo/node.svg",
            className: "h-10 w-14",
        },
        {
            title: "PostgreSQL",
            src: "/images/logo/postgres.svg",
            className: "h-10 w-14",
        },
        {
            title: "Git",
            src: "/images/logo/git.svg",
            className: "h-10 w-14",
        },
        {
            title: "Docker",
            src: "/images/logo/docker.svg",
            className: "h-10 w-24",
        },
    ];
    const t = await getTranslations("Stack");
    return (
        <div>
            <Heading as="h2" className="mb-4 mt-20 text-lg font-black md:text-lg lg:text-lg">
                {t("title")}
            </Heading>
            <div className="flex flex-wrap">
                {stack.map((item, index) => (
                    <Image
                        src={item.src}
                        key={index}
                        width={`200`}
                        height={`200`}
                        alt={item.title}
                        className={cn("object-contain mr-4 mb-4", item.className)}
                    />
                ))}
            </div>
        </div>
    );
};
