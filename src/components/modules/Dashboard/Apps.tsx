import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/assets/logo_blanco.png"
import App from "./App"

const apps = [
    {
        name: <>SIGA</>,
        description: <>Actuaciones</>,
        url: "/employees"
    },
    {
        name: <>SIGePA</>,
        description: <>Plan Anual</>,
        url: "http://rrhh.sigep.local"
    },
    {
        name: <>Patrimonio</>,
        description: <>Bienes</>,
        url: "http://patrimonio.sigep.local"
    },
    {
        name: <>Firma Digital</>,
        description: <>Plataforma</>,
        url: "https://firmar.gob.ar/firmador/#/"
    },
    {
        name: <>Autogestión Gobierno de Salta</>,
        description: <>Autogestión del Gobierno de Salta</>,
        url: "https://login.salta.gob.ar/login"
    },
    {
        name: <>Correo electrónico <br />oficial (gob.ar)</>,
        description: <>Correo electrónico oficial (gob.ar)</>,
        url: "https://mail.salta.gob.ar/"
    },
    {
        name: <>Pagina Web</>,
        description: <>Pagina web de la empresa</>,
        url: "https://sigep.salta.gob.ar/"
    },
];

export default function Apps() {
    return (
        <section className="">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-7 gap-4">
                {apps.map((app, index) => (
                    <App 
                        key={index}
                        url={app.url}
                        name={app.name}
                        description={app.description}
                    />
                ))}
            </div>
        </section>
    )
}