import dynamicIconImports from "lucide-react/dynamicIconImports";

export type Navlink = {
    href: string;
    label: string;
    icon: keyof typeof dynamicIconImports;
};
