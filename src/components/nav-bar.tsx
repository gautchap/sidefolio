// eslint-disable-next-line import/no-namespace
import * as motion from "motion/react-client";
import { AnimateClient } from "@/components/ui/animate-client";
import { SidebarHeader } from "@/components/ui/side-bar-header";
import { Navigation } from "@/components/navigation";
import { getTranslations } from "next-intl/server";
import { MenuMobile } from "@/components/sidebar-mobile";

export async function NavBar() {
    const t = await getTranslations("NavBar");

    return (
        <>
            <AnimateClient>
                <motion.div
                    key="sidebar-desktop"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    className="fixed left-0 z-[100] hidden h-screen max-w-56 flex-col justify-between bg-neutral-100  px-6 py-10 lg:relative lg:flex lg:w-fit"
                >
                    <div className="flex-1 overflow-auto">
                        <SidebarHeader status={t("status")} />
                        <Navigation />
                    </div>
                    <div className="flex"></div>
                </motion.div>
            </AnimateClient>

            <MenuMobile />
        </>
    );
}
