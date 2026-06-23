'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import App from './App'

interface AppItem {
    id: number
    name: string
    description: string
    url: string
    icon?: string
}

export default function Apps() {
    const { user } = useAuth()
    const [apps, setApps] = useState<AppItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user?.id) return

        let cancelled = false
        ;(async () => {
            try {
                const { data } = await axios.get(`/api/v1/users/${user.id}?include_apps=1`)
                if (!cancelled) setApps(data.data?.apps ?? [])
            } finally {
                if (!cancelled) setLoading(false)
            }
        })()
        return () => { cancelled = true }
    }, [user?.id])

    if (loading) return (
        <section className="px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-3">
                Accesos rápidos · Por rol
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-[104px] rounded-xl bg-gray-100 animate-pulse" />
                ))}
            </div>
        </section>
    )

    if (apps.length === 0) return null

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-3">
                Accesos rápidos · Por rol
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-10 gap-4">
                {apps.map((app, i) => (
                    <App
                        key={app.id}
                        url={app.url}
                        name={app.name}
                        description={app.description}
                        icon={app.icon}
                        colorIndex={i}
                    />
                ))}
            </div>
        </section>
    )
}
