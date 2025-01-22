import { NextResponse } from "next/server"

export async function GET(request, {plan}) {
    const res = await fetch(`${process.env.SIGEPA_URL}/api/v1/plans/${plan}`)
    const data = await res.json()
    return NextResponse.json(data.data)
}
