import Image from "next/image"

const ApplicationLogo = props => (
    <Image
        {...props}
        src="/assets/logo.png"
        width={400}
        height={400}
        alt="Picture of the author"
        title={`${process.env.NEXT_PUBLIC_APP_NAME}`}
    />
)

export default ApplicationLogo
