module.exports = {
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