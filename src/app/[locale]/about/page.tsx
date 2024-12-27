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
                    <Paragraph className=" mt-4">
                        Hey there, I&apos;m John Doe - a passionate developer, avid writer, and a connoisseur of awesome
                        design. Welcome to my corner of the digital world!
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Since the early days of my journey, I&apos;ve been captivated by the art of crafting exceptional
                        digital experiences. As a developer, I thrive on turning lines of code into functional and
                        elegant solutions. My goal is to not just create software, but to build digital marvels that
                        seamlessly merge form and function.
                    </Paragraph>

                    <Paragraph className=" mt-4">
                        But my journey doesn&apos;t stop at coding. With a heart full of words and a mind brimming with
                        ideas, I&apos;ve ventured into the realm of writing. From tech articles that unravel complex
                        concepts to creative tales that ignite the imagination, I weave words to inform, entertain, and
                        inspire.
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        What sets me apart is my unwavering appreciation for design. I believe that aesthetics and
                        usability go hand in hand. My eye for awesome design ensures that every project I undertake not
                        only works flawlessly under the hood but also looks stunning on the surface.
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Through this website, I aim to share my insights, experiences, and creations with you. Whether
                        you&apos;re a fellow developer seeking solutions, a fellow writer in search of inspiration, or
                        simply someone who appreciates the finer aspects of design, there&apos;s something here for you.
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together,
                        we can explore the boundless possibilities of technology and storytelling, all while reveling in
                        the sheer beauty of thoughtful design.
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Thank you for being here, and I can&apos;t wait to embark on this adventure with you.
                    </Paragraph>
                </div>
            </div>
        </Container>
    );
}
