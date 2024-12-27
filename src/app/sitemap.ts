import type { MetadataRoute } from "next";
import { routing, getPathname } from "@/i18n/routing";
import { projects } from "@/constants/projects";

// Adapt this as necessary
const host = process.env.SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
    // Adapt this as necessary
    return [
        getEntry("/"),
        getEntry("/about"),
        getEntry("/projects"),
        ...projects.map((product) => getEntry(`/projects/${product.slug}`)),
    ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href) {
    return {
        url: getUrl(href, routing.defaultLocale),
        changeFrequency: "yearly" as const,
        priority: 1,
        lastModified: new Date(),
        alternates: {
            languages: Object.fromEntries(routing.locales.map((locale) => [locale, getUrl(href, locale)])),
        },
    };
}

function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
    const pathname = getPathname({ locale, href });
    return host + pathname;
}
