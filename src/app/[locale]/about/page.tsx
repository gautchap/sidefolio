import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";
// eslint-disable-next-line import/no-namespace
import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "AboutPage" });
    return {
        title: t("title"),
        description:
            "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
}

export default async function AboutPage() {
    const t = await getTranslations("AboutPage");

    const images = ["/images/about.webp", "/images/about.webp", "/images/about.webp", "/images/about.webp"];
    return (
        <Container>
            <span className="text-4xl">💬</span>
            <Heading className="font-black">{t("title")}</Heading>
            <div>
                <div className="my-10 grid grid-cols-2 gap-10 md:grid-cols-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: -50,
                                rotate: 0,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                rotate: index % 2 === 0 ? 3 : -3,
                            }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                            <Image
                                src={image}
                                width={200}
                                height={400}
                                alt="about"
                                className="block h-40 w-full rotate-3 rounded-md object-cover shadow-xl transition duration-200 hover:rotate-0 md:h-60"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-4xl">
                    <Paragraph className=" mt-4">{t("paragraph-1")}</Paragraph>
                    <Paragraph className=" mt-4">{t("paragraph-2")}</Paragraph>
                    <Paragraph className=" mt-4">{t("paragraph-3")}</Paragraph>
                    <Paragraph className=" mt-4">{t("paragraph-4")}</Paragraph>
                    <Paragraph className=" mt-4">{t("paragraph-5")}</Paragraph>
                    <Paragraph className=" mt-4">{t("paragraph-6")}</Paragraph>
                    <Paragraph className=" mt-4">{t("paragraph-7")}</Paragraph>
                </div>
            </div>
        </Container>
    );
}
