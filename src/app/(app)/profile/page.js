import Header from "../Header"
import ProfileData from "@/components/modules/Employees/ProfileData"
import Widget from "@/components/Widget"
import Image from "next/image"

export const metadata = {
    title: 'Mi perfil',
}

const Profile = () => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                <Widget className="bg-white p-6">
                
      <div className="flex flex-col items-center">
        {/* Vista previa de la imagen */}
        <div className="w-24 h-24 mb-4">
          <Image 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile Preview"
            className="w-full h-full rounded-full object-cover"
            width={256}
            height={256}
          />
        </div>
        {/* Botón para editar */}
        <label
          htmlFor="profileImageInput"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 transition"
        >
          Editar Imagen
        </label>
        <input
          id="profileImageInput"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>
    
                </Widget>
                <div className="col-span-2">
                    <ProfileData />
                </div>
            </div>
        </>
    )
}
export default Profile