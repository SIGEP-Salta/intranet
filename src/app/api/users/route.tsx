import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();
    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ message: "User created" });
}