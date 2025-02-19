import Card from "@/components/Card"

async function loadEmployees(year) {
    console.log('year', year)
    try {
        const response = await fetch(`http://localhost:3000/api/control?year=${year}`)
        const employees = await response.json()
        if (!response.ok) {
            throw new Error(employees.message || "Something went wrong")
        }
        return employees
    } catch (error) {
        return []
    }
}

export default async function Audits({ year }) {
    const employees = await loadEmployees(year)
    return (
        <Card 
            title="Acciones de control"
            subtitle="Listado de acciones de control"
            className="w-full"
        >
            
                {employees.map((employee) => (
                    <div
                        key={employee.id}
                        className="flex items-center space-x-4 border-b pb-4"
                    >
                        {/* Información del empleado */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {employee.code}
                            </h3>
                            <p className="text-sm text-gray-500">{employee.area}</p>
                            <p className="text-xs text-gray-400">{employee.scope}</p>
                        </div>
                    </div>
                ))}
        </Card>
    )
}