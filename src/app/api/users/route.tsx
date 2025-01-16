import { NextResponse } from "next/server"

export async function GET() {
    //const searchParams = request.nextUrl.searchParams
    const res = await fetch("http://localhost:3000/api/users")
    const data = await res.json()
    return NextResponse.json(data)
}