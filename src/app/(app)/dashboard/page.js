import Header from '@/app/(app)/Header'
import Card from '@/components/Card'
import Apps from '@/components/modules/Dashboard/Apps'
import Web from '@/components/modules/Dashboard/Web'
import Birthdays from '@/components/modules/Employees/Birthdays'
import Image from 'next/image'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <Header title="Dashboard" />
            <Apps />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <Birthdays />
                <Web />
                <Card
                    title="Novedades"
                    subtitle="Ultimas novedades para todo el personal"
                >
                    <div className="flex items-center space-x-3 pb-6">
                        <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-gray-300" />
                        <div>
                            <p className="font-semibold">Daniel Murillo</p>
                            <p className="text-sm text-gray-500">Publicado hace 2 dias</p>
                            <p className="mt-3 text-gray-700">Desde el Area de Recursos Humanos se les recuerda que deben completar el formulario para asignaciones familiares antes del 31 de Enero 2025.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 pb-6">
                        <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-gray-300" />
                        <div>
                            <p className="font-semibold">Daniel Murillo</p>
                            <p className="text-sm text-gray-500">Publicado hace 2 dias</p>
                            <p className="mt-3 text-gray-700">Desde el Area de Recursos Humanos se les recuerda que deben completar el formulario para asignaciones familiares antes del 31 de Enero 2025.</p>
                        </div>
                    </div>
                </Card>
                <div className="grid grid-cols-1 gap-6">
                    <Card title="Notificaciones">
                        <div className="relative">
                            <div className="flex items-center space-x-[-10px]">
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                            </div>
                        </div>

                    </Card>
                    <Card title="Notificaciones">
                        <div className="relative">
                            <div className="flex items-center space-x-[-10px]">
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                                <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white" />
                            </div>
                        </div>

                    </Card>
                </div>
            </div>
        </>
    )
}

export default Dashboard