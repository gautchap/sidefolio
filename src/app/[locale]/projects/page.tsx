import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { ProjectList } from "@/components/project-list";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "ProjectsPage" });
    return {
        title: t("title"),
        description:
            "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
}

export default async function Projects() {
    const t = await getTranslations("ProjectsPage");
    return (
        <Container>
            <span className="text-4xl">⚡</span>
            <Heading className="mb-10 font-black">{t("subtitle")}</Heading>
            <ProjectList />
        </Container>
    );
}
