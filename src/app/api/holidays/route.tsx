import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'


export async function GET() {
    const res = await fetch(`${process.env.EMPLOYEES_URL}/api/v1/holidays`, { cache: 'no-store' })
    const data = await res.json()
    return NextResponse.json(data.data)
}