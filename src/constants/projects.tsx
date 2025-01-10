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
        description: "Application SaaS pour le secteur funéraire.",
        thumbnail: resobseques,
        images: [resobseques],
        stack: ["React", "Nextjs", "BootStrap", "Sass"],
        slug: "resobseques",
        content: (
            <div>
                <p>
                    Projet visant à établir un lien entre les professionnels du funéraire (pompes funèbres, funérarium,
                    crématorium, …) pour soulager les collectivités territoriales et les services publics de cette
                    tâche.
                </p>
                <p>
                    Projet d&apos;une durée de 1 an, en collaboration avec une équipe de 4 personnes, sur le
                    développement d&apos;une solution de recherche de professionnels à l’échelle nationale,
                    authentication, la mise en place un système de prise de rendez-vous entre professionnels.
                </p>
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
                    Projet de fin d&apos;étude e-commerce avec boutique en ligne, gestion de panier, authentification.
                </p>
                <p>
                    Projet full stack (CRUD) d&apos;une durée de 3 mois, mise en place d&apos;une boutique en ligne,
                    gestion de panier, authentication, espace admin pour la gestion des produits, des commandes, des
                    utilisateurs.
                </p>
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
                <p>En construction 🚧</p>
            </div>
        ),
    },
    {
        href: "/",
        title: "Restaurant Saas",
        id: "project-1",
        description: "Restaurant SaaS application to manage your restaurant with a 2D floor plan.",
        thumbnail: about,
        images: [about, about],
        stack: ["React", "Nextjs", "Tailwindcss", "Motion", "Stripe", "AdonisJs", "PostgreSQL"],
        slug: "restaurant",
        content: (
            <div>
                <p>En construction 🚧</p>
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
                <p>En construction 🚧</p>
            </div>
        ),
    },
] satisfies Project[];
