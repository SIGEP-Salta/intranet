import { NextResponse } from "next/server";

export function GET(request, { user }) {
    return NextResponse.json({ message: "Hello from the API!" });
}