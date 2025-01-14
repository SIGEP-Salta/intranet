import Card from "@/components/Card";
import axios from "axios";

async function loadEmployees() {
    const response = await fetch(`http://localhost:3000/api/control/plans`);
    const employees = await response.json();
    return employees;
}

export default async function Plans() {
    const employees = await loadEmployees();
    return (
        <Card 
            title="Planes anuales de acción"
            subtitle="Listado de planes anuales de acción"
        >
            <div className="grid grid-cols-2 gap-6">
                {employees.map((employee) => (
                    <div
                        key={employee.id}
                        className="flex items-center space-x-4 border-b pb-4"
                    >
                        {/* Avatar */}
                        <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="w-12 h-12 rounded-full object-cover"
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