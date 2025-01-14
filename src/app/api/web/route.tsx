import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const res = await fetch("https://sigep.salta.gob.ar/wp-json/wp/v2/posts");
    const data = await res.json();
    return NextResponse.json(data);
}
