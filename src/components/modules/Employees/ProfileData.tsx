'use client'
import Card from "@/components/Card"
import { useEffect, useState } from "react"
/*
async function loadEmployees(userId) {
    try {
        const response = await fetch(`http://localhost:3000/api/employees`);
        if (!response.ok) {
            throw new Error("Failed to fetch employees");
        }
        const employees = await response.json();
        return employees;
    } catch (error) {
        console.error("Error al cargar los empleados:", error.message);
        return [];
    }

}
*/
export default function ProfileData() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const loadEmployees = async () => {
            try {
                //const response = await fetch(`http://localhost:3000/api/employees/${user.id}`);
                //const response = await fetch(`/api/employees/22`);
                //console.log('espero')
                // if (!response.ok) {
                //     throw new Error("Failed to fetch employees");
                // }
                // const employeesData = await response.json();
                // setEmployees(employeesData);
            } catch (error) {

                //console.error("Error al cargar los empleados:", error.message)
            } finally {
                setLoading(false)
            }
        }

        loadEmployees()
    }, [])

    if (loading) {
        return <p>Cargando empleados...</p>
    }
    //const employees = await loadEmployees(3);
    return (
        <Card
            title="Información de perfil"
            subtitle=""
        >
            <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Nombre completo</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Domicilio</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Email</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Teléfono</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                <div className="flex w-0 flex-1 items-center">

                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                        <span className="shrink-0 text-gray-400">2.4mb</span>
                                    </div>
                                </div>
                                <div className="ml-4 shrink-0">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                <div className="flex w-0 flex-1 items-center">

                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                        <span className="shrink-0 text-gray-400">4.5mb</span>
                                    </div>
                                </div>
                                <div className="ml-4 shrink-0">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Descargar
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </dd>
                </div>
            </dl>
        </Card>
    )
}