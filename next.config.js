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
            {
                protocol: 'http',
                hostname: '131.107.4.111',
                port: '8000',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'core.sigep.local',
                port: '',
                pathname: '/**',
            },
        ],
    },
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true,
    },
}