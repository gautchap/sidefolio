"use client";

import { navlinks } from "@/constants/navlinks";
import { Link } from "next-view-transitions";
import { usePathname } from "@/i18n/routing";
import { Heading } from "@/components/ui/heading";
import { socials } from "@/constants/socials";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const Navigation = () => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const t = useTranslations("NavBar");

    return (
        <div className="relative z-[100] my-10 flex flex-col space-y-1">
            {navlinks.map((link) => (
                <Link
                    key={link.href}
                    href={encodeURI(link.href)}
                    className={cn(
                        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                        isActive(link.href) && "bg-white shadow-lg text-primary"
                    )}
                >
                    {link.icon}

                    <span>{t(link.label)}</span>
                </Link>
            ))}

            <Heading as="p" className="px-2 pt-10 text-sm md:text-sm lg:text-sm">
                {t("socials")}
            </Heading>
            {socials.map((link) => (
                <Link
                    target="__blank"
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
                    )}
                >
                    {link.icon}

                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
};
