import { GoogleGenAI } from "@google/genai"
import { NextResponse } from "next/server"

const DEFAULT_MODEL = "gemini-3.5-flash-lite"

const DEFAULT_SYSTEM_PROMPT =  `
Sos un asistente especializado en organismos de control público de la Provincia de Salta, Argentina.

Tu función es brindar respuestas útiles, completas y concretas sobre:
- organismos de control público de la Provincia de Salta;
- funciones y competencias de cada organismo;
- auditorías y controles;
- administración pública;
- procedimientos de control;
- normativa relacionada con el control público;
- relaciones entre los distintos organismos de control.

Cuando el usuario haga una pregunta, no te limites a responder "sí" o "no".
Desarrollá la respuesta y proporcioná los datos relevantes que conozcas.

Si preguntan por organismos de control público de Salta, mencioná los principales organismos que correspondan y explicá brevemente qué función cumple cada uno.

No inventes organismos, leyes, artículos ni datos específicos.
Si no estás seguro de un dato, indicá claramente que no podés confirmarlo.

Respondé en español claro y profesional.
Priorizá respuestas concretas pero suficientemente desarrolladas para que sean útiles.
`   

async function obtenerPlanes() {
    return [
        {
            id: 1,
            nombre: "Auditoría de Compras",
            estado: "Activo",
        },
        {
            id: 2,
            nombre: "Control de Recursos Humanos",
            estado: "Activo",
        },
    ]
}

export async function POST(request) {
    try {
        const { prompt } = await request.json()

        const tools = [
            {
                functionDeclarations: [
                    {
                        name: "obtener_planes",
                        description: "Obtiene los planes de auditoría registrados en el sistema.",
                        parameters: {
                            type: "OBJECT",
                            properties: {},
                        },
                    },
                ],
            },
        ]

        if (!prompt || typeof prompt !== "string") {
            return NextResponse.json(
                { error: "El campo prompt es obligatorio." },
                { status: 400 }
            )
        }

        const model = process.env.GEMINI_MODEL || DEFAULT_MODEL
        const systemPrompt =
            process.env.GEMINI_SYSTEM_PROMPT || DEFAULT_SYSTEM_PROMPT

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        })

        const response = await ai.models.generateContent({
            model,
            contents: prompt.trim(),
            config: {
                systemInstruction: systemPrompt,
                tools,
                toolConfig: {
                    functionCallingConfig: {
                        mode: "ANY",
                    },
                },
            },
        })

        console.log("========== GEMINI ==========")
        console.log(JSON.stringify(response, null, 2))

        console.log("========== FUNCTION CALLS ==========")
        console.log(response.functionCalls)

        if (response.functionCalls?.length > 0) {
            const functionCall = response.functionCalls[0]

            console.log("🔥 FUNCIÓN SOLICITADA:")
            console.log(functionCall.name)

            let result

            if (functionCall.name === "obtener_planes") {
                result = [
                    {
                        id: 1,
                        nombre: "Auditoría de Compras",
                        estado: "Activo",
                    },
                    {
                        id: 2,
                        nombre: "Control de Recursos Humanos",
                        estado: "Activo",
                    },
                    {
                        id: 3,
                        nombre: "Auditoría de Contrataciones",
                        estado: "Finalizado",
                    },
                ]
            }

            if (functionCall.name === "obtener_planes") {
                result = [
                    {
                        id: 1,
                        nombre: "Auditoría de Compras",
                        estado: "Activo",
                    },
                    {
                        id: 2,
                        nombre: "Control de Recursos Humanos",
                        estado: "Activo",
                    },
                    {
                        id: 3,
                        nombre: "Auditoría de Contrataciones",
                        estado: "Finalizado",
                    },
                ]
            }

            console.log("🔥 RESULTADO DE obtener_planes:")
            console.log(result)

            // ------------------------------------------------
            // SEGUNDA LLAMADA A GEMINI
            // ------------------------------------------------

            const finalResponse = await ai.models.generateContent({
                model,
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: prompt.trim(),
                            },
                        ],
                    },

                    // Le pasamos a Gemini su propio functionCall
                    response.candidates[0].content,

                    // Le pasamos el resultado de ejecutar la función
                    {
                        role: "user",
                        parts: [
                            {
                                functionResponse: {
                                    name: functionCall.name,
                                    response: {
                                        result: result,
                                    },
                                    id: functionCall.id,
                                },
                            },
                        ],
                    },
                ],
                config: {
                    systemInstruction: systemPrompt,
                    tools,
                },
            })

            console.log("========== RESPUESTA FINAL ==========")
            console.log(finalResponse.text)

            return NextResponse.json({
                answer:
                    finalResponse.text ||
                    "No se obtuvo contenido de respuesta.",
            })
        }
        const answer = response.text || "No se obtuvo contenido de respuesta."

        return NextResponse.json({ answer })
    } catch (error) {
        console.error("Error Gemini:", error)

        return NextResponse.json(
            {
                error:
                    error?.message ||
                    "No se pudo procesar la consulta.",
            },
            { status: 500 }
        )
    }
}