"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
    return (
        <div className="text-black md:ml-[32rem] mt-[5rem]">
            <div className="flex flex-col gap-8 ">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[1.2rem] text-[#2ec4b6] font-semibold">Enter Account Name or Email</h2>
                    <input type="text" className="md:w-[45rem] h-[3.5rem] border-4 border-[#2ec4b6] rounded-2xl outline-none"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-[1.2rem] text-[#2ec4b6] font-semibold">Enter Amount</h2>
                    <input type="text" className="md:w-[45rem] h-[3.5rem] border-4 border-[#2ec4b6] rounded-2xl outline-none"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-[1.2rem] text-[#2ec4b6] font-semibold">Description</h2>
                    <textarea type="text" className="md:w-[45rem] h-[15rem] border-4 border-[#2ec4b6] rounded-2xl outline-none"/>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="md:w-[45rem] h-[3.5rem] text-white font-semibold bg-[#2ec4b6] rounded-2xl">Transfer Amount</button>
                </div>
            </div>
            <div className="mt-[8rem] ml-[18rem]">
                        <p className="md:text-[.9rem] ml-[25.3rem] text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
            </div>
        </div>
    );
}