"use client"

import { useMemo, useState } from "react"
import { SendHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Chat from "@/components/modules/Control/Chat"
import History from "@/components/modules/Control/History"

const INITIAL_MESSAGE = {
    id: 1,
    role: "assistant",
    content: "Hola, soy tu asistente de Control. Que necesitas buscar hoy?",
}

export default function Research() {
    const [query, setQuery] = useState("")
    const [messages, setMessages] = useState([INITIAL_MESSAGE])
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const canSend = useMemo(() => query.trim().length > 0, [query])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!canSend || isLoading) return

        const prompt = query.trim()
        const userMessage = {
            id: Date.now(),
            role: "user",
            content: prompt,
        }

        setMessages((prev) => [...prev, userMessage])
        setHistory((prev) => [{ id: Date.now() + 2, prompt }, ...prev].slice(0, 8))
        setQuery("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/control/research", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error(data?.error || "No se pudo obtener respuesta del asistente.")
            }

            const assistantMessage = {
                id: Date.now() + 1,
                role: "assistant",
                content: data.answer || "No se obtuvo respuesta.",
            }

            setMessages((prev) => [...prev, assistantMessage])
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    role: "assistant",
                    content: error.message || "Error inesperado al consultar el asistente.",
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
                <div className="lg:col-span-2">
                    <Chat messages={messages} />
                </div>
                { /*
                <div className="lg:col-span-1">
                    <History items={history} onReuse={setQuery} onClear={() => setHistory([])} />
                </div>
                */ }
            </div>

            <form
                onSubmit={handleSubmit}
                className="sticky bottom-4 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg"
            >
                <div className="flex items-center gap-2">
                    <Input
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Preguntame sobre auditorias, planes o normativa..."
                        className="h-11 border-0 bg-transparent text-sm shadow-none focus-visible:ring-0"
                    />
                    <Button
                        type="submit"
                        size="icon"
                        disabled={!canSend || isLoading}
                        className="h-10 w-10 rounded-xl"
                    >
                        <SendHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </form>
        </section>
    )
}
