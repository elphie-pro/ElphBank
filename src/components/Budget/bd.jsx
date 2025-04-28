"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
    return (
        <div className="text-black md:ml-[35rem] mt-[7rem]">
            <h1 className="text-[2rem] font-semibold ml-[5rem] pb-6">Enter Appropriate Details</h1>
            <div className="w-[35rem] h-[25rem] bg-[#cbf3f0] ml-1 rounded-4xl p-10 flex flex-col gap-6 pt-[4rem]">
                <div className="flex flex-col gap-3 ml-[2.5rem]">
                    <h1 className="text-[1.3rem] font-semibold">Budget Name:</h1>
                    <input type="text" className="w-[25rem] h-[3rem] border-4 rounded-xl border-[#2ec4b6] outline-none"/>
                </div>
                <div className="flex flex-col gap-3 ml-[2.5rem]">
                    <h1 className="text-[1.3rem] font-semibold">Deposit Starting Amount:</h1>
                    <input type="number" className="w-[25rem] h-[3rem] border-4 rounded-xl border-[#2ec4b6] outline-none"/>
                </div>
                <button className="w-[19rem] h-[2.5rem] text-[1.1rem] ml-[6rem] text-white rounded-xl font-semibold bg-[#2ec4b6]">
                    Create Budget
                </button>
            </div>
        </div>
    );
}