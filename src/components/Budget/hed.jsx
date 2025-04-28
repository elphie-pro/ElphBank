'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Button from '@/components/Dashboard/Buttons'

export default function Page() {
    const route = useRouter()
    const path = usePathname()
    return (
        <div className="md:ml-[18rem] pt-4 text-black">
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button  className="cursor-pointer" onClick={() => {route.back()}}><Image src={'/Group 31.svg'} width={45} height={20} alt="s"/></button>
                </div>
                <div>
                    <h1 className="md:text-[2.3rem] text-[2rem] text-[#2ec4b6] font-bold">Create New Budget</h1>
                </div>
            </div>
        </div>
    );
}