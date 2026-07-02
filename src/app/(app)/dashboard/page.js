import Header from '@/app/(app)/Header'
import Card from '@/components/Card'
import Apps from '@/components/modules/Dashboard/Apps'
import Web from '@/components/modules/Dashboard/Web'
import Birthdays from '@/components/modules/Employees/Birthdays'
import DashboardDatePicker from '@/components/modules/Dashboard/DashboardDatePicker'
import Information from '@/components/ia/Information'
import Image from 'next/image'
import News from '@/components/modules/Dashboard/News'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const socialMedia = [
    {
        name: 'Facebook',
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/sigep.salta.gob.ar'
    },
    {
        name: 'Twitter',
        icon: <FaTwitter />,
        link: 'https://www.twitter.com/sigep.salta.gob.ar'
    },
    {
        name: 'Instagram',
        icon: <FaInstagram/>,
        link: 'https://www.instagram.com'
    },
    {
        name: 'YouTube',
        icon: <FaYoutube/>,
        link: 'https://www.youtube.com'
    },
];
const Dashboard = () => {
    return (
        <>
            <Header title="Dashboard" />
            <Apps />
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 p-4">
                <div className='col-span-1 w-[360px] min-w-[360px] flex flex-col gap-4'>
                    <Card>
                        <DashboardDatePicker />
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>SEGUINOS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-row gap-4">
                            {socialMedia.map((item) => (
                                <div key={item.name} className="flex items-center justify-center space-x-2 border rounded-md p-4">
                                    <Link href={item.link} target="_blank">
                                            {item.icon}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='w-full'>
                    <News />
                </div>
            </div>
            <Information/>
        </>
    )
}

export default Dashboard