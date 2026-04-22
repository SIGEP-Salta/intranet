import { Nunito } from 'next/font/google'
//import '@/app/global.css'
import './global.css'
import PWARegister from '@/components/PWARegister'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="es" className={nunitoFont.className}>
            <body className="antialiased">
                <PWARegister />
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Intranet',
    description: 'Aplicacion interna',
    applicationName: 'Intranet',
    icons: {
        apple: '/icons/apple-touch-icon.svg',
        icon: ['/icons/icon-192.svg', '/icons/icon-512.svg'],
    },
}

export default RootLayout
