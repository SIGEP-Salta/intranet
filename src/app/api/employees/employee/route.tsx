import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {employee}) {
    //const { employee } = params;
    const searchParams = request.nextUrl.searchParams
    const res = await fetch(`http://localhost:8081/api/v1/employees/${employee}`);
    console.log('algo');
    //const data = await res.json();
    //return NextResponse.json(data.data);
}
