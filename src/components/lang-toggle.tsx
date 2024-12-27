"use client";

import { Languages } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "@/i18n/routing";
import { switchLang } from "@/actions/switch-lang";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LangToggle() {
    const router = useRouter();
    const { locale } = useParams();
    const pathName = usePathname();
    const t = useTranslations("NavBar");

    const handleClick = async (_locale: "fr" | "en") => {
        if (_locale === locale) return;
        await switchLang(_locale);
        router.replace(`/${_locale}${pathName}`);
    };

    return (
        <div className="fixed bottom-5 right-7 inline-block">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button title={t("lang")} className="p-2">
                        <Languages className="size-4" />
                        <span className="sr-only">{t("lang")}</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        className={cn(
                            "justify-between cursor-pointer text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                            locale === "fr" ? "bg-white shadow-lg text-primary" : ""
                        )}
                        onClick={() => handleClick("fr")}
                    >
                        <p className="font-semibold uppercase">Français</p>

                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                            <path fill="#fff" d="M0 0h640v480H0z" />
                            <path fill="#002654" d="M0 0h213.3v480H0z" />
                            <path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
                        </svg>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className={cn(
                            "justify-between cursor-pointer text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                            locale === "en" ? "bg-white shadow-lg text-primary" : ""
                        )}
                        onClick={() => handleClick("en")}
                    >
                        <p className="font-semibold uppercase">English</p>
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                            <path fill="#bd3d44" d="M0 0h640v480H0" />
                            <path
                                stroke="#fff"
                                strokeWidth="37"
                                d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                            />
                            <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                            <marker id="us-a" markerHeight="30" markerWidth="30">
                                <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
                            </marker>
                            <path
                                fill="none"
                                markerMid="url(#us-a)"
                                d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
                            />
                        </svg>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
