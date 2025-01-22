import { NextResponse } from "next/server"

export async function GET(request, {employee}) {
    //const { employee } = params;
    const res = await fetch(`${process.env.EMPLOYEES_URL}/api/v1/employees/${employee}`)
    const data = await res.json()
    return NextResponse.json(data.data)
}
