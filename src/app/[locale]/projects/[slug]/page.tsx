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
              description: "Gauthier Chapon projects",
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
            <SingleProject project={product} />
        </Container>
    );
}
