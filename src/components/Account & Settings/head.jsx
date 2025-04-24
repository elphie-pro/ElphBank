'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const route = useRouter()
    return (
        <div className="md:ml-[18rem] pt-4 text-black">
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button  className="cursor-pointer" onClick={() => {route.back()}}><Image src={'/Group 31.svg'} width={45} height={20} alt="s"/></button>
                    <button className="cursor-pointer" onClick={() => {route.push('/')}}><Image src={'/Group 26.svg'} width={50} height={20} alt="s"/></button>
                </div>
                <div>
                    <h1 className="md:text-[2.3rem] text-[#2ec4b6] font-bold">My Account</h1>
                </div>
            </div>
        </div>
    );
}