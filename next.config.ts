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
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        // Use this option with extreme caution.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
