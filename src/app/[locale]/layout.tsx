import "../globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import LangToggle from "@/components/lang-toggle";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: {
        template: "Gauthier | %s",
        default: "Gauthier",
    },
    description:
        "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    icons: "/favicon.ico",
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <ViewTransitions>
            <html lang={locale} className={inter.className} suppressHydrationWarning>
                <body className="flex h-screen overflow-hidden bg-gray-100 antialiased">
                    <NextIntlClientProvider messages={messages}>
                        <NavBar />
                        <div className="flex-1 overflow-y-auto bg-gray-100 lg:pl-2 lg:pt-2">
                            <div className="min-h-screen flex-1 overflow-y-auto border border-transparent bg-white lg:rounded-tl-xl lg:border-neutral-200">
                                {children}
                                <LangToggle />
                                <Footer />
                            </div>
                        </div>
                    </NextIntlClientProvider>
                    <Analytics />
                </body>
            </html>
        </ViewTransitions>
    );
}
