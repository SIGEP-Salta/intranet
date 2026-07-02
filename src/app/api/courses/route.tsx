import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
    const url = `${process.env.CORE_URL}/api/v1/courses`

    try {
        const res = await fetch(url, { cache: 'no-store' })

        if (!res.ok) {
            console.error(`news: upstream respondió ${res.status}`, url)
            return NextResponse.json({ error: 'upstream error', status: res.status }, { status: res.status })
        }

        const data = await res.json()
        return NextResponse.json(data.data ?? data)
    } catch (err) {
        console.error('news: no se pudo contactar el servicio', url, err)
        return NextResponse.json({ error: 'service unavailable' }, { status: 503 })
    }
}
