import { NextResponse } from "next/server"

export async function GET() {
    console.log(process.env.EMPLOYEES_URL, 'llegamos')
    //const searchParams = request.nextUrl.searchParams
    //const res = await fetch("http://localhost:8081/api/v1/employees/birthdays")
    const res = await fetch(`${process.env.EMPLOYEES_URL}/api/v1/employees/birthdays`)
    const data = await res.json()
    return NextResponse.json(data.data)
}