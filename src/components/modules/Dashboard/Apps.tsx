import Link from "next/link"
import Image from "next/image"
import logo from "../../../../public/logo.png"

export default function Apps() {
    return (
        <section className="bg-alternative text-white">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-7">
                <Link href="/employees">
                    <div className="flex flex-col items-center py-6 bg-alternative hover:bg-primary cursor-pointer">
                        <div className="bg-white py-4 px-5 rounded-full">
                            <span className="text-3xl">
                                <Image src={logo} width={20} height={20} alt="Employees" />
                            </span>
                        </div>
                        <p className="mt-2 font-semibold text-center">Sistema de <br />Gestion del Plan Anual</p>
                    </div>
                </Link>
                <Link href="/employees">
                    <div className="flex flex-col items-center py-6 bg-alternative hover:bg-primary cursor-pointer">
                        <div className="bg-white py-4 px-5 rounded-full">
                            <span className="text-3xl">
                                <Image src={logo} width={20} height={20} alt="Employees" />
                            </span>
                        </div>
                        <p className="mt-2 font-semibold text-center">Sistema de <br />Recursos Humanos</p>
                    </div>
                </Link>
                <Link href="/employees">
                    <div className="flex flex-col items-center py-6 bg-alternative hover:bg-primary cursor-pointer">
                        <div className="bg-white py-4 px-5 rounded-full">
                            <span className="text-3xl">
                                <Image src={logo} width={20} height={20} alt="Employees" />
                            </span>
                        </div>
                        <p className="mt-2 font-semibold text-center">Sistema de <br />Gestión de Patrimonio</p>
                    </div>
                </Link>
                <Link href="https://firmar.gob.ar/firmador/#/">
                    <div className="flex flex-col items-center py-6 bg-alternative hover:bg-primary cursor-pointer">
                    <div className="bg-white py-4 px-5 rounded-full">
                            <span className="text-3xl">
                                <Image src={logo} width={20} height={20} alt="Employees" />
                            </span>
                        </div>
                        <p className="mt-2 font-semibold text-center">Plataforma de <br />firma digital</p>
                    </div>
                </Link>
                <Link href="https://login.salta.gob.ar/login">
                    <div className="flex flex-col items-center py-6 bg-alternative hover:bg-primary cursor-pointer">
                    <div className="bg-white py-4 px-5 rounded-full">
                            <span className="text-3xl">
                                <Image src={logo} width={20} height={20} alt="Employees" />
                            </span>
                        </div>
                        <p className="mt-2 font-semibold text-center">Autogestión <br />Gobierno de Salta</p>
                    </div>
                </Link>
                <Link href="https://mail.salta.gob.ar/" target="_blank">
                    <div className="flex flex-col items-center py-6 bg-alternative hover:bg-primary cursor-pointer">
                    <div className="bg-white py-4 px-5 rounded-full">
                            <span className="text-3xl">
                                <Image src={logo} width={20} height={20} alt="Employees" />
                            </span>
                        </div>
                        <p className="mt-2 font-semibold text-center">Correo electrónico <br />oficial (gob.ar)</p>
                    </div>
                </Link>
                <Link href="https://sigep.salta.gob.ar/">
                    <div className="flex flex-col items-center py-6 bg-alternative hover:bg-primary cursor-pointer">
                    <div className="bg-white py-4 px-5 rounded-full">
                            <span className="text-3xl">
                                <Image src={logo} width={20} height={20} alt="Employees" />
                            </span>
                        </div>
                        <p className="mt-2 font-semibold text-center">Pagina <br />web</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}