export default function manifest() {
    return {
        name: 'Intranet',
        short_name: 'Intranet',
        description: 'Aplicacion interna',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone', 'minimal-ui', 'browser'],
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        lang: 'es',
        icons: [
            {
                src: '/icons/icon-192.svg',
                sizes: '192x192',
                type: 'image/svg+xml',
                purpose: 'any',
            },
            {
                src: '/icons/icon-512.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
                purpose: 'any maskable',
            },
        ],
    }
}
