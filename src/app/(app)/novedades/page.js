import Plan from "@/components/modules/Control/Plan"
import Audits from "@/components/modules/Control/Audits"
import Research from "@/components/modules/Control/Research"
import NovedadesGrid from "@/components/modules/novedades/NovedadesGrid"
import { YearProvider } from '@/context/YearContext'
import Header from "@/components/common/Header"

export const metadata = {
    title: 'Control',
}

const Posts = () => {
    return (
        <>
            <Header
                title="Novedades"
                description="Administrar todas las novedades"
            />
            <NovedadesGrid />
        </>
    )
}
export default Posts