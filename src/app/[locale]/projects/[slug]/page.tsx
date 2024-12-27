import type { Project } from "@/types/project";
import { Container } from "@/components/ui/container";
import { SingleProject } from "@/components/project";
import { projects } from "@/constants/projects";
import { redirect } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const product = projects.find((p) => p.slug === slug) as Project | undefined;
    return product
        ? {
              title: product.title,
              description: product.description,
          }
        : {
              title: "Projects | John Doe",
              description:
                  "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
          };
}

export default async function SingleProjectPage({ params }: Props) {
    const { slug } = await params;
    const product = projects.find((p) => p.slug === slug);

    if (!product) {
        redirect("/projects");
    }
    return (
        <Container>
            <SingleProject product={product} />
        </Container>
    );
}
