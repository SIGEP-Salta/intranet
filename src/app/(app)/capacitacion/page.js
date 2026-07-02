import CursosGrid from "@/components/modules/capacitacion/CursosGrid"
import Header from "@/components/common/Header"

export const metadata = {
    title: 'Control',
}

const Posts = () => {
    return (
        <>
            <Header
                title="Capacitación"
                description="Administrar los cursos de capacitación"
            />
            <CursosGrid />
        </>
    )
}
export default Posts