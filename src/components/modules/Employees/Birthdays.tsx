import Card from "@/components/Card"
import Image from "next/image"

async function loadEmployees() {
    try {
        const response = await fetch(`http://localhost:3000/api/employees`)
        if (!response.ok) {
            throw new Error("Failed to fetch employees")
        }
        const employees = await response.json()
        return employees
    } catch (error) {
        return []
    }
    
}

export default async function Birthdays() {
    const employees = await loadEmployees()
    return (
        <Card 
            title="Próximos cumpleaños"
            subtitle="Cumpleaños de los próximos 30 días"
        >
            <div className="grid grid-cols-2 gap-6">
                {employees.map((employee) => (
                    <div
                        key={employee.id}
                        className="flex items-center space-x-4 border-b pb-4"
                    >
                        {/* Avatar */}
                        <Image
                            src={employee.avatar}
                            alt={employee.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />

                        {/* Información del empleado */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {employee.name}
                            </h3>
                            <p className="text-sm text-gray-500">{employee.position}</p>
                            <p className="text-xs text-gray-400">{employee.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}