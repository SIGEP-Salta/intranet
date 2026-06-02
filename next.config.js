module.exports = {
    env: {
        NEXT_PUBLIC_EMPLOYEES_URL: process.env.EMPLOYEES_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true,
    },
}