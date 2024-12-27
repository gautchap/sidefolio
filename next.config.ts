import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: process.env.NODE_ENV === "production" ? true : undefined,
    },
};

export default withNextIntl(nextConfig);
