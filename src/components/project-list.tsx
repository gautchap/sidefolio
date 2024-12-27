import { Project } from "@/types/project";
import { Projects } from "@/components/projects";
import { projects } from "@/constants/projects";

export const ProjectList = () => {
    return (
        <div className="grid grid-cols-1  gap-10">
            {projects.map((product: Project, index: number) => (
                <Projects key={product.slug} product={product} index={index} />
            ))}
        </div>
    );
};
