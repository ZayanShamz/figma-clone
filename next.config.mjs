/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "liveblocks.io",
                port: "",
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
        // Add a rule to ignore .node files
        config.module.rules.push({
            test: /\.node$/,
            use: 'ignore-loader'
        });

        return config;
    },
};

export default nextConfig;
