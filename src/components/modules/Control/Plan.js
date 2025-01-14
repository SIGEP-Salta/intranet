import Widget from "@/components/Widget"
import { useYear } from "@/context/YearContext"

export default async function Plan() {
    const year = useYear
    console.log(year)
    return (
        <>
            <Widget>
                <div className="bg-primary px-6 py-12">
                    <h2 className="text-lg font-bold text-white text-center">
                        Plan Anual 2025
                    </h2>
                </div>
                <div className="p-6 bg-white">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Presentación desde</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Presentación hasta</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                        </div>
                    </dl>
                </div>
            </Widget>
            <Widget className="mt-6 bg-white p-6">
                Descargar Resolución
            </Widget>
        </>
    )
}