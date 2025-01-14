
import Card from "@/components/Card"
import Widget from "@/components/Widget"
import Header from "../Header"
import Plan from "@/components/modules/Control/Plan"
import Audits from "@/components/modules/Control/Audits"
import { YearProvider } from '@/context/YearContext'

export const metadata = {
    title: 'Control',
}

const YEAR = 2024//new Date().getFullYear()

async function loadEmployees() {
    const response = await fetch(`http://localhost:3000/api/control/plans`);
    const employees = await response.json();
    return employees;
}

const Control = () => {
    return (
        
        <YearProvider year={YEAR}>
            <>
            <Header title="Control" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                <div className="col-span-1">
                    <Plan />
                </div>
                <div className="col-span-2">
                    <Audits />
                </div>
            </div>
            </>
        </YearProvider>
        
    )
}
export default Control