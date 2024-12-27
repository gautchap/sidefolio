"use client";

import { Drawer } from "vaul";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { SidebarHeader } from "@/components/ui/side-bar-header";
import { navlinks } from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "@/i18n/routing";
import { Heading } from "@/components/ui/heading";
import { socials } from "@/constants/socials";
import { cn } from "@/lib/utils";

export function MenuMobile() {
    const pathname = usePathname();
    const t = useTranslations("NavBar");
    const isActive = (href: string) => pathname === href;
    return (
        <Drawer.Root direction="left">
            <Drawer.Trigger asChild>
                <Menu className="m-2 lg:hidden" />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur" />
                <Drawer.Content className="fixed inset-y-0 left-0 z-50 flex max-w-56 transform-gpu flex-col justify-between bg-neutral-100 px-6 py-10 outline-none drop-shadow-lg lg:hidden">
                    <Drawer.Title />
                    <Drawer.Description />
                    <div className="absolute right-4 top-1/2 h-32 w-2 -translate-y-1/2 rounded-sm bg-neutral-200"></div>
                    <div className="flex-1 overflow-auto">
                        <SidebarHeader status={t("status")} />
                        <div className="relative z-[100] my-10 flex flex-col space-y-1">
                            {navlinks.map((link) => (
                                <Drawer.Close key={link.href} asChild>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                                            isActive(link.href) && "bg-white shadow-lg text-primary"
                                        )}
                                    >
                                        {link.icon}

                                        <span>{t(link.label)}</span>
                                    </Link>
                                </Drawer.Close>
                            ))}

                            <Heading as="p" className="px-2 pt-10 text-sm md:text-sm lg:text-sm">
                                {t("socials")}
                            </Heading>
                            {socials.map((link) => (
                                <Link
                                    target="_blank"
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
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
