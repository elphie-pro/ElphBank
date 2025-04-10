"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Page() {
    return (
        <div className="text-black ml-[15rem] flex justify-between">
            <div className="flex flex-col gap-14">
                <h3 className="text-[1.3rem] font-semibold">Your Balance is ₦360,000<span className="text-[#818f96]">.25</span></h3>
                <div className="pt-8">
                    <Image src='/Group 23.svg' width={300} height={10} alt="pic"/>
                    <div className="absolute mt-[-5.5rem] ml-4 text-white">
                        <div className="flex">
                            <p className="text-[1.5rem] font-bold">₦ 180,000</p>
                            <button></button>
                        </div>
                        <p className="text-[.9rem]">Naira Account</p>
                    </div>
                </div>
                <div className="pt-8">
                    <Image src='/Group 24.svg' width={300} height={10} alt="pic"/>
                    <div className="absolute mt-[-5.5rem] ml-4 text-black">
                        <div className="flex">
                            <p className="text-[1.5rem] font-bold">₦ 180,000</p>
                            <button></button>
                        </div>
                        <p className="text-[.9rem]">Naira Account</p>
                    </div>
                </div>
                <div className="pt-8">
                    <button className="w-[19rem] h-[4rem] bg-[#cbf3f0] rounded-2xl">+ Add new Account</button>
                </div>
            </div>
        </div>
    );
}