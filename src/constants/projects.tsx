import type { Project } from "@/types/project";
import about from "../../public/images/about.webp";
import ecomLight from "../../public/images/ecom-light.webp";
import ecomDark from "../../public/images/ecom-dark.webp";
import tunetracerLight from "../../public/images/tunetracer-light.webp";
import tunetracerDark from "../../public/images/tunetracer-dark.webp";
import resobseques from "../../public/images/resobseques.webp";

export const projects = [
    {
        href: "https://www.resobseques.fr",
        title: "Résobsèques",
        id: "project-1",
        description: "Ecommerce application for the end-of-course project.",
        thumbnail: resobseques,
        images: [resobseques],
        stack: ["React", "Nextjs", "BootStrap", "Sass"],
        slug: "resobseques",
        content: (
            <div>
                <p>
                    Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt
                    est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
                    cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit
                    ut culpa et.{" "}
                </p>
                <p>
                    Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco
                    exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat
                    proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
                    reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia
                    enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
                </p>{" "}
            </div>
        ),
    },
    {
        href: "https://ecom-rsc.vercel.app",
        title: "Ecom",
        id: "project-1",
        repo: "https://github.com/gautchap/ecom-rsc",
        description: "Ecommerce application for the end-of-course project.",
        thumbnail: ecomLight,
        images: [ecomLight, ecomDark],
        stack: ["React", "Nextjs", "Tailwindcss", "Motion", "Prisma", "PostgreSQL"],
        slug: "ecom",
        content: (
            <div>
                <p>
                    Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt
                    est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
                    cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit
                    ut culpa et.{" "}
                </p>
                <p>
                    Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco
                    exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat
                    proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
                    reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia
                    enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
                </p>{" "}
            </div>
        ),
    },
    {
        href: "https://github.com/gautchap/next-boilerplate",
        title: "KickStart Boilerplate",
        id: "project-2",
        repo: "https://github.com/gautchap/next-boilerplate",
        description: "NextJs boilerplate to quickly start your next project.",
        thumbnail: about,
        images: [about, about],
        stack: ["React", "Nextjs", "Tailwindcss", "Motion", "Stripe", "Prisma", "PostgreSQL", "Docker", "Redis"],
        slug: "boilerplate",
        content: (
            <div>
                <p>
                    Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt
                    est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
                    cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit
                    ut culpa et.{" "}
                </p>
                <p>
                    Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco
                    exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat
                    proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
                    reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia
                    enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
                </p>{" "}
            </div>
        ),
    },
    {
        href: "https://gomoonbeam.com",
        title: "Restaurant Saas",
        id: "project-1",
        description: "Never write from scratch again with Moonbeam, your AI first writing tool",
        thumbnail: about,
        images: [about, about],
        stack: ["React", "Nextjs", "Tailwindcss", "Motion", "Stripe", "AdonisJs", "PostgreSQL"],
        slug: "restaurant",
        content: (
            <div>
                <p>
                    Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt
                    est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
                    cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit
                    ut culpa et.{" "}
                </p>
                <p>
                    Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco
                    exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat
                    proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
                    reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia
                    enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
                </p>{" "}
            </div>
        ),
    },
    {
        href: "https://tunetracer.vercel.app",
        title: "Tunetracer",
        id: "project-1",
        description:
            "Development of an application to track your favorite artists and music on Spotify and play the music directly on your browser, with playlist creation, authentication with Spotify, Spotify SDK. lzanke zae lnzae nkzae l azne e",
        thumbnail: tunetracerLight,
        images: [tunetracerLight, tunetracerDark],
        stack: ["TypeScript", "React", "NextJS", "Spotify API & SDK", "Tailwind"],
        slug: "tunetracer",
        content: (
            <div>
                <p>
                    Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt
                    est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
                    cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit
                    ut culpa et.{" "}
                </p>
                <p>
                    Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco
                    exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat
                    proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
                    reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia
                    enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
                </p>{" "}
            </div>
        ),
    },
    // {
    //     href: "https://tailwindmasterkit.com",
    //     title: "Tailwind Master Kit",
    //     id: "project-1",
    //     repo: "https://github.com/gautchap/next-boilerplate",
    //     description:
    //         "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    //     thumbnail: about,
    //     images: [about, about],
    //     stack: ["Nextjs", "Tailwindcss"],
    //     slug: "tailwindmasterkit",
    //     content: (
    //         <div>
    //             <p>
    //                 Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt
    //                 est ipsum. Dolor laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
    //                 cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris non cupidatat duis esse velit
    //                 ut culpa et.{" "}
    //             </p>
    //             <p>
    //                 Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco
    //                 exercitation quis et dolor sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat
    //                 proident fugiat id. Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
    //                 reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit adipisicing minim et officia
    //                 enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
    //             </p>{" "}
    //         </div>
    //     ),
    // },
] satisfies Project[];
