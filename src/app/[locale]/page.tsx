import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { TechStack } from "@/components/ui/techstack";
import { getTranslations } from "next-intl/server";
import { ProjectList } from "@/components/project-list";

export default async function Home() {
    const t = await getTranslations("HomePage");
    return (
        <Container>
            <span className="text-4xl">👋</span>
            <Heading className="font-black">{t("title")}</Heading>
            <Paragraph className="mt-4 max-w-xl">{t("description")}</Paragraph>
            <Paragraph className="mt-4 max-w-xl">{t("description2")}</Paragraph>
            <Heading as="h2" className="mb-4 mt-20 text-lg font-black md:text-lg lg:text-lg">
                {t("working")}
            </Heading>
            <ProjectList />
            <TechStack />
        </Container>
    );
}
