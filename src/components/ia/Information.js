import React from "react"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Bot,
  FileText,
  Brain,
  BookOpen,
  FileSearch,
  PenTool,
} from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const tools = [
  {
    name: "ChatGPT",
    description:
      "ChatGPT es un asistente de inteligencia artificial versátil que permite interactuar mediante lenguaje natural para redactar textos, generar ideas y resumir información.",
    url: "https://chat.openai.com",
    icon: Bot,
    badge: "Free",
  },
  {
    name: "Claude",
    description:
      "Claude es una herramienta enfocada en el análisis de documentos extensos y comprensión de textos complejos como normativa o informes.",
    url: "https://claude.ai",
    icon: Brain,
    badge: "Free",
  },
  {
    name: "Gemini",
    description:
      "Gemini permite analizar información y trabajar con documentos integrados en el ecosistema de Google de forma colaborativa.",
    url: "https://gemini.google.com",
    icon: Sparkles,
    badge: "Free",
  },
  {
    name: "NotebookLM",
    description:
      "NotebookLM permite cargar documentos propios y generar resúmenes o respuestas basadas en ese contenido específico.",
    url: "https://notebooklm.google.com",
    icon: BookOpen,
    badge: "Free",
  },
  {
    name: "ChatPDF",
    description:
      "ChatPDF permite interactuar directamente con archivos PDF para hacer consultas y obtener respuestas rápidas.",
    url: "https://www.chatpdf.com",
    icon: FileSearch,
    badge: "Free",
  },
  {
    name: "QuillBot",
    description:
      "QuillBot ayuda a reformular y resumir textos, mejorando la claridad y calidad de la redacción.",
    url: "https://quillbot.com",
    icon: PenTool,
    badge: "Free",
  },
]

export default function Information() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border bg-white shadow-lg hover:bg-slate-100"
          aria-label="Abrir información"
        >
          <Sparkles className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-white dark:bg-white">
        <DrawerHeader>
          <DrawerTitle>Herramientas de IA</DrawerTitle>
          <DrawerDescription>
            Soluciones útiles para el trabajo diario
          </DrawerDescription>
        </DrawerHeader>

        <div className="no-scrollbar overflow-y-auto px-4 space-y-4">
          {tools.map((tool) => {
            const Icon = tool.icon

            return (
              <div
                key={tool.name}
                className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-base">
                      {tool.name}
                    </h3>
                  </div>

                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                    {tool.badge}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {tool.description}
                </p>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Ir a la herramienta →
                </a>
              </div>
            )
          })}
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cerrar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}