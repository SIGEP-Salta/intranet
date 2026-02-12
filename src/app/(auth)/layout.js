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
            {/* Imagen de fondo */}
            <div className="w-1/2 relative">
                <Image
                    src="/assets/panoramica_salta.jpg"
                    alt="Panorámica Salta"
                    fill
                    className="object-cover grayscale"

                />
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
