import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/Portfolio-Website/' : '',
    basePath: isProd ? '/Portfolio-Website' : '',
};

export default nextConfig;
