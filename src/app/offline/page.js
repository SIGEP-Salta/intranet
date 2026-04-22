export const metadata = {
    title: 'Sin conexion',
}

export default function OfflinePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Sin conexion</h1>
            <p className="mt-3 max-w-md text-sm text-gray-600">
                No pudimos cargar esta pagina porque no hay internet. Cuando vuelva la conexion,
                recarga para continuar.
            </p>
        </main>
    )
}
