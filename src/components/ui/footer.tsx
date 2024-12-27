import { getTranslations } from "next-intl/server";

export const Footer = async () => {
    const t = await getTranslations("Footer");
    const year = new Date().getFullYear();
    const list = ["❤️", "💛", "💚", "💙", "💜"];
    const random = list[Math.floor(Math.random() * list.length)];

    return (
        <div className="justify-center border-t border-neutral-100 p-4 text-center text-xs text-neutral-500">
            <span className="font-semibold">{year} </span>
            &#8212; {t("build")} {random} {t("by")}{" "}
            <a
                className="underline decoration-transparent transition duration-300 hover:decoration-secondary"
                href="https://ggaut.dev"
            >
                Gauthier Chapon
            </a>
        </div>
    );
};
