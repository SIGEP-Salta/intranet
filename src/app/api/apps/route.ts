import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const cookieHeader = request.headers.get('cookie') ?? ''
    const headers = {
        cookie: cookieHeader,
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
    }

    const userRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user`, {
        headers,
        cache: 'no-store',
    })

    if (!userRes.ok) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await userRes.json()

    const appsRes = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${user.id}?include_apps=1`,
        { headers, cache: 'no-store' },
    )

    if (!appsRes.ok) {
        return NextResponse.json({ error: 'Error al obtener apps' }, { status: appsRes.status })
    }

    const data = await appsRes.json()

    return NextResponse.json(data.apps ?? [])
}
