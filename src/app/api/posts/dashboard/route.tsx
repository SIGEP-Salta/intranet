import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {
    const url = `${process.env.EMPLOYEES_URL}/api/v1/posts/dashboard`

    try {
        const res = await fetch(url, { cache: 'no-store' })

        if (!res.ok) {
            console.error(`holidays: upstream respondió ${res.status}`, url)
            return NextResponse.json({ error: 'upstream error', status: res.status }, { status: res.status })
        }

        const data = await res.json()
        return NextResponse.json(data.data ?? data)
    } catch (err) {
        console.error('holidays: no se pudo contactar el servicio', url, err)
        return NextResponse.json({ error: 'service unavailable' }, { status: 503 })
    }
}