import Widget from "@/components/Widget"
import Header from "../Header"
import Card from "@/components/Card"
import Image from "next/image"

export const metadata = {
    title: 'Institucional',
}

const Control = () => {
    return (
        <>
            <Header title="Institucional" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                <div className="col-span-1">
                    <Widget>
                        <div className="bg-primary px-6 py-12">
                            <a href="/assets/files/tes.pdf" target="_blank" download>
                                <h2 className="text-lg font-bold text-white text-center">
                                    Organigrama
                                </h2>
                            </a>
                        </div>
                    </Widget>
                    <Widget className="mt-6 bg-white p-6 text-center">
                        <a href="/assets/files/test.pdf" target="_blank" rel="noopener noreferrer">
                            Descargar Manual Prestacional / Operativo
                        </a>
                    </Widget>
                </div>
                <div className="col-span-2">
                    <Card
                        title="Contactos"
                        subtitle="Informacion de contacto SIGEP"
                        className="mb-6"
                    >
                        <ul role="list" className="divide-y divide-gray-100">
                            <li className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="size-12 flex-none rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm/6 font-semibold text-gray-900">Leslie Alexander</p>
                                        <p className="mt-1 truncate text-xs/5 text-gray-500">leslie.alexander@example.com</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm/6 text-gray-900">Co-Founder / CEO</p>
                                    <p className="mt-1 text-xs/5 text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                                </div>
                            </li>
                        </ul>
                    </Card>
                    <Card
                        title="Plantillas"
                        subtitle="Formularios/Plantillas de uso interno/externo SIGEP"
                    >
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Plantilla de presentación jurada</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <a href="/assets/files/test.pdf" target="_blank" download>Descargar</a>
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Plantilla de nota SIGA</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <a href="/assets/files/test.pdf" target="_blank" download>Descargar</a>
                                </dd>
                            </div>
                        </dl>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Control