import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const params = new URLSearchParams({
        page: searchParams.get('page') ?? '1',
        per_page: searchParams.get('per_page') ?? '8',
        search: searchParams.get('search') ?? '',
    });

    const url = `${process.env.CORE_URL}/api/v1/courses?${params}`;

    try {
        const res = await fetch(url, { cache: 'no-store' });

        if (!res.ok) {
            console.error(`courses: upstream respondió ${res.status}`, url);

            return NextResponse.json(
                { error: 'upstream error', status: res.status },
                { status: res.status }
            );
        }

        const data = await res.json();

        // Conservamos data, links y meta de Laravel.
        return NextResponse.json(data);

    } catch (err) {
        console.error('courses: no se pudo contactar el servicio', url, err);

        return NextResponse.json(
            { error: 'service unavailable' },
            { status: 503 }
        );
    }
}
