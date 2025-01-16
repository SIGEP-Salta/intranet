import Card from "@/components/Card"
import Link from "next/link"

async function loadEmployees() {
    try {
        const response = await fetch(`http://localhost:3000/api/web`)
        if (!response.ok) {
            throw new Error("Failed to fetch employees")
        }
        const employees = await response.json()
        return employees
    } catch (error) {
        return []
    }
    
}

export default async function Web() {
    const employees = await loadEmployees()
    return (
        <Card 
            title="Novedades"
            subtitle="Últimas novedades publicadas en nuestra web"
        >
            <div className="grid grid-cols-1 gap-6">
                {employees.map((employee) => (
                    <div
                        key={employee.id}
                        className="flex items-center space-x-4 border-b pb-4"
                    >
                        <div>
                            <Link 
                                href={employee.link}
                                target="_blank"
                            >
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {employee.title.rendered}
                                </h3>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}