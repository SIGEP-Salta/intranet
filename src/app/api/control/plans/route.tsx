import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const res = await fetch("http://localhost:8081/api/v1/plans");
    const data = await res.json();
    return NextResponse.json(data.data);
}