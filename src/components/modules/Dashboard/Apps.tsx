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
        <section>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-7 gap-4">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-[104px] rounded-xl bg-gray-100 animate-pulse" />
                ))}
            </div>
        </section>
    )

    if (apps.length === 0) return null

    return (
        <section>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-7 gap-4">
                {apps.map((app) => (
                    <App
                        key={app.id}
                        url={app.url}
                        name={app.name}
                        description={app.description}
                        icon={app.icon}
                    />
                ))}
            </div>
        </section>
    )
}
