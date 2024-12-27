import Image from "next/image";
import heroMemoji from "../../../public/images/hero-memoji.webp";

export const SidebarHeader = ({ status }: { status: string }) => {
    return (
        <div className="flex space-x-2">
            <Image
                src={heroMemoji}
                alt="Avatar"
                height="40"
                width="40"
                quality="100"
                className="shrink-0 rounded-full object-cover object-top"
            />
            <div className="flex flex-col text-sm">
                <p className="font-bold text-primary">Gauthier Chapon</p>
                <p className="font-light text-secondary">{status}</p>
            </div>
        </div>
    );
};
