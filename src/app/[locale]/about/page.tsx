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
        description: "Gauthier Chapon about",
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
                    <Paragraph className=" mt-4">{t("description")}</Paragraph>
                    <Paragraph className=" mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt officia asperiores impedit
                        facilis dolore dolorem reiciendis provident repudiandae ullam! Quia dolores, id voluptatum totam
                        repellat perspiciatis mollitia reiciendis nesciunt suscipit. Illum aut illo suscipit explicabo
                        minima, corrupti ipsa velit dolor exercitationem veritatis nisi laudantium dolorem tempore quas
                        maiores doloremque est ullam, perferendis expedita, iusto odio ad tenetur fuga facilis? Itaque.
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis. Non molestiae
                        minus mollitia error modi nesciunt quis culpa fugit, ex tempore, fugiat esse fuga dicta
                        cupiditate consequatur. Possimus, officiis? Corporis, explicabo. Assumenda totam nobis neque
                        minus cum hic corrupti, velit quod nulla fugit consequatur ipsa architecto ipsum cumque sequi
                        tenetur impedit nostrum. Ullam quasi expedita ducimus nam a possimus?
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, neque quo. Distinctio dolores
                        vero iste voluptatibus omnis blanditiis, eos provident, consectetur suscipit alias recusandae
                        perferendis mollitia. In fuga architecto laboriosam! Qui ullam totam saepe. Ratione odio est
                        dolore quaerat, maxime blanditiis atque in aperiam modi expedita facere, fugit molestias animi
                        tenetur, alias iste pariatur! Voluptatum suscipit repellendus veritatis molestiae a!
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat dicta commodi optio sint
                        quis ipsam at, ullam incidunt qui fugit, tempora laudantium officiis voluptas nam illo. Officia,
                        architecto sed. Placeat repellat minus soluta dignissimos cumque? Mollitia architecto error
                        officiis voluptate accusantium quasi fuga, repudiandae facilis tempore, aut vero blanditiis
                        voluptatem eaque consequuntur rem ipsa eos neque tempora assumenda! Sunt.
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet voluptate
                        necessitatibus quam veniam hic odit. Fugiat delectus maxime in ab minima ducimus nostrum cum ad,
                        unde alias! Corporis, inventore. Illo corporis culpa dolore voluptatem, dicta ipsum ducimus ad
                        necessitatibus eveniet libero rem excepturi maiores adipisci reiciendis dignissimos nobis
                        commodi dolorum omnis veritatis perferendis corrupti. Nostrum illo consequuntur culpa harum.
                    </Paragraph>
                    <Paragraph className=" mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab doloremque blanditiis?
                        Excepturi vitae rem aperiam adipisci praesentium, autem fugiat magni iste, tenetur porro totam
                        voluptatibus labore vero eius asperiores.
                    </Paragraph>
                </div>
            </div>
        </Container>
    );
}
