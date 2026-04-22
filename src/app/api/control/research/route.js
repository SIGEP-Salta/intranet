import { NextResponse } from "next/server"
import { Ollama } from "ollama"

const DEFAULT_BASE_URL = "http://131.107.4.131:11434"
const DEFAULT_MODEL = "qwen"
const DEFAULT_SYSTEM_PROMPT =
    "Sos un asistente para el area de Control. Responde en espanol claro y conciso."

export async function POST(request) {
    try {
        const { prompt } = await request.json()

        if (!prompt || typeof prompt !== "string") {
            return NextResponse.json({ error: "El campo prompt es obligatorio." }, { status: 400 })
        }

        const baseUrl = process.env.OLLAMA_BASE_URL || DEFAULT_BASE_URL
        const model = process.env.OLLAMA_MODEL || DEFAULT_MODEL
        const systemPrompt = process.env.OLLAMA_SYSTEM_PROMPT || DEFAULT_SYSTEM_PROMPT

        const client = new Ollama({ host: baseUrl })
        const data = await client.chat({
            model,
            stream: false,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: prompt.trim() },
            ],
        })
console.log(data)
        const answer = data?.message?.content || "No se obtuvo contenido de respuesta."
        return NextResponse.json({ answer })
    } catch (error) {
        console.log('el error es: ', error)
        return NextResponse.json(
            { error: error.message || "No se pudo procesar la consulta." },
            { status: 400 }
        )
    }
}
