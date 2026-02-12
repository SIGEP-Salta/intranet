import Image from "next/image"

const ApplicationLogo = props => (
    <Image
        {...props}
        src="/assets/logo.png"
        width={250}
        height={250}
        alt="Sindicatura General de la Provincia de Salta"
        title="Sindicatura General de la Provincia de Salta"
    />
)

export default ApplicationLogo
