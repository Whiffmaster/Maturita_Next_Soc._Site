import {nextui} from "@nextui-org/react";

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true,
    },
    env: {
    },
    experimental: {
        esmExternals: "loose",
        serverComponentsExternalPackages: ["mongoose"],
    },
    webpack: (config) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        };
        return config;
    }
};

export default nextConfig;
