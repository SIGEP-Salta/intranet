import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import Image from 'next/image'


export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 relative h-screen overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale"
                    style={{ backgroundImage: "url('/assets/salta2.jpg')" }}
                />

                {/* Logo arriba izquierda */}
                <div className="absolute top-4 left-4">
                    <img src="/assets/logo_solo_blanco.png" alt="Logo 1" className="w-32" />
                </div>

                {/* Logo abajo derecha */}
                <div className="absolute bottom-4 right-4">
                    <img src="/assets/nombre_blanco.png" alt="Logo 2" className="w-32" />
                </div>
            </div>
            {/* Panel de inicio de sesión */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white">
                <AuthCard
                    logo={
                        <Link href="/">
                            <ApplicationLogo className="fill-current text-gray-500" />
                        </Link>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
