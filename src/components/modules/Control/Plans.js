import Card from "@/components/Card"
import { usePlans } from "@/hooks/usePlans"
import Image from "next/image"

export default async function Plans() {
    const  {plans} = usePlans();

    return (
        <Card 
            title="Planes anuales de acción"
            subtitle="Listado de planes anuales de acción"
        >
            <div className="grid grid-cols-2 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="flex items-center space-x-4 border-b pb-4"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {plan.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}