"use client"

export default function Chat({ messages = [] }) {
    if (!messages.length) {
        return (
            <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-500">
                Escribi una pregunta para iniciar la conversacion.
            </div>
        )
    }

    return (
        <div className="flex h-[420px] flex-col gap-3 overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                        message.role === "user"
                            ? "ml-auto bg-primary text-white"
                            : "mr-auto bg-gray-100 text-gray-800"
                    }`}
                >
                    {message.content}
                </div>
            ))}
        </div>
    )
}
