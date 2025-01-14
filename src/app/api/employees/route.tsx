import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const res = await fetch("http://localhost:8081/api/v1/employees/birthdays");
    const data = await res.json();
    return NextResponse.json(data.data);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ message: "User created" });
}