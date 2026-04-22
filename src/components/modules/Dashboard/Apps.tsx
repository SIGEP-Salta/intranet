import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/assets/logo_blanco.png"
import App from "./App"

const apps = [
    {
        title: <>Sistema de <br />Gestión del Plan Anual</>,
        url: "/employees"
    },
    {
        title: <>Sistema de <br />Recursos Humanos</>,
        url: "http://rrhh.sigep.local"
    },
    {
        title: <>Sistema de <br />Gestión de Patrimonio</>,
        url: "http://patrimonio.sigep.local"
    },
    {
        title: <>Plataforma de <br />firma digital</>,
        url: "https://firmar.gob.ar/firmador/#/"
    },
    {
        title: <>Autogestión <br />Gobierno de Salta</>,
        url: "https://login.salta.gob.ar/login"
    },
    {
        title: <>Correo electrónico <br />oficial (gob.ar)</>,
        url: "https://mail.salta.gob.ar/"
    },
    {
        title: <>Pagina <br />web</>,
        url: "https://sigep.salta.gob.ar/"
    },
];

export default function Apps() {
    return (
        <section className=" text-primary ">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-7">
                {apps.map((app, index) => (
                    <App 
                        key={index}
                        url={app.url}
                        title={app.title}
                    />
                ))}
            </div>
        </section>
    )
}