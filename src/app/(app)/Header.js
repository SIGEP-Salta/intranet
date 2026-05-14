'use client'
import { useAuth } from "@/hooks/auth"

const Header = ({ title }) => {
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <header>
            <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">

                <h2 className="font-semibold text-xl leading-tight">
                    Buen día, {user.name}
                </h2>
            </div>
        </header>
    )
}

export default Header