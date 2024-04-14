import {nextui} from "@nextui-org/react";

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true,
    },
    env: {
        MONGODB_URI: "mongodb+srv://Whiffmaster:MVngsAWnAFFGCSma@cluster0.pvkvq1u.mongodb.net/Mat",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "FUCKINGDICKEDIHOPEUDIE",
        MAIL_HOST:"tuesday.mxrouting.net",
        MAIL_PORT:"587",
        MAIL_ENCRYPTION:"tls",
        MAIL_USERNAME:"chat@waifuu.com",
        MAIL_PASSWORD:"17861177"
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
