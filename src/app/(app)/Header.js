'use client'
import { useAuth } from "@/hooks/auth"

function formatDate(date) {
    const weekday = date.toLocaleDateString('es-AR', { weekday: 'long' })
    const day = date.getDate()
    const month = date.toLocaleDateString('es-AR', { month: 'long' })
    const year = date.getFullYear()
    return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} ${day} de ${month} ${year}`
}

const Header = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const firstName = user?.name?.split(' ')[0] ?? ''
    const dateStr = formatDate(new Date())

    return (
        <header>
            <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-start justify-between">
                <div>
                    <h2 className="font-semibold text-xl leading-tight text-gray-900">
                        Buen día, <span className="text-primary">{firstName}</span>
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">{dateStr}</p>
                </div>
                {user?.role && (
                    <span className="mt-1 px-3 py-1 rounded-full bg-rose-100 text-primary text-sm font-medium">
                        {user.role}
                    </span>
                )}
            </div>
        </header>
    )
}

export default Header