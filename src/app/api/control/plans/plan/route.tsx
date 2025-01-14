import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {plan}) {
    const searchParams = request.nextUrl.searchParams
    const res = await fetch(`http://localhost:8081/api/v1/plans/${plan}`);
    const data = await res.json();
    return NextResponse.json(data.data);
}
