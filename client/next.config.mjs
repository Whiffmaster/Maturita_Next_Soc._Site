import {nextui} from "@nextui-org/react";

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI: "mongodb+srv://Whiffmaster:MVngsAWnAFFGCSma@cluster0.pvkvq1u.mongodb.net/Mat",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "FUCKINGDICKEDIHOPEUDIE",
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
