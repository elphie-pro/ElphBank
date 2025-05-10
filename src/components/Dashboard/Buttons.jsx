import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Toggle from '@/components/Toggle'

export default function Page() {
    const route = useRouter()
    const [showm, setShowm] = useState(false)

    return (
        <div className="text-black ml-[87.5rem] pt-[1rem] pb-[2rem] hidden md:block">
            <div className="flex gap-5">
                <button  className="cursor-pointer" onClick={() => {setShowm(true)}}><Image src={'/Group 25.svg'} width={50} height={20} alt="s"/></button>
                <button className="cursor-pointer" onClick={() => {route.push('/account')}}><Image src={'/Group 28.svg'} width={50} height={20} alt="s"/></button>
                <div className="mt-[-.7rem]">
                   <Toggle /> 
                </div>
                
                { showm && (
                    <div onClick={() => {setShowm(false)}} className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 ">
                        <div onClick={(e) => {e.stopPropagation()}} className="bg-white p-4 relative"> 
                            <div className="flex flex-col gap-4 w-[20rem] items-center">
                                <h2>Welcome Back</h2>
                                 <p>sign in sha</p>
                                <div className="flex gap-4">
                                    <button className="bg-green-400 text-white px-4 py-2 rounded">Sign In</button>
                                    <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => {setShowm(false)}}>Cancel</button>
                                </div>
                            </div>
                            <div className="absolute top-2 right-2">
                                <button onClick={() => {setShowm(false)}} className="cursor-pointer"><Image src={'/material-symbols_cancel-outline.svg'} width={50} height={20} alt="s"/></button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}