"use client"

export default function History({ items = [], onReuse, onClear }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800">Historial</h3>
                <button
                    type="button"
                    onClick={onClear}
                    className="text-xs text-gray-500 transition hover:text-gray-800"
                >
                    Limpiar
                </button>
            </div>

            {!items.length ? (
                <p className="text-sm text-gray-500">Todavia no hay consultas.</p>
            ) : (
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li key={item.id}>
                            <button
                                type="button"
                                onClick={() => onReuse(item.prompt)}
                                className="w-full rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-100"
                            >
                                {item.prompt}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
