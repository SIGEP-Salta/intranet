import { NextResponse } from "next/server"

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const year = searchParams.get('year')
    const res = await fetch(`${process.env.SIGEPA_URL}/api/v1/audits?year=${year}`)
    const data = await res.json()
    return NextResponse.json(data.data)
}