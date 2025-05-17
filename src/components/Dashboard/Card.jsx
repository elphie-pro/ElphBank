"use client";;
import { useState } from "react";
import Image from "next/image";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page({ bud }) {
  const [show, setShow] = useState(false)
  return (
    <div className="md:w-[18rem] bg-[#cbf3f0] rounded-2xl md:h-[12.5rem] p-5 shadow-[6px_6px_#C0C0C0] pb-6">
      <div className="md:w-[10rem] h-[2rem] bg-[#2ec4b6] rounded-3xl text-center text-white pt-1">
          <h2>{bud.budgetName}:</h2>
        </div>
        <div className="p-4 pt-8 dark:text-black">
          <h2>Starting Balance: <span className="font-bold">₦ {bud.startingAmount ? bud.startingAmount.toLocaleString() : bud.startingAmount}</span></h2>
          <h2>Current Balance: <span className="font-bold">₦ {bud.currentAmount ? bud.currentAmount.toLocaleString() : bud.currentAmount}</span></h2>
        </div>
        <div className="md:pl-[8rem] pl-[6rem]">
          <button className="bg-[#ff0000] text-white w-[8rem] h-[2rem] font-light rounded-xl text-[1rem] cursor-pointer shadow-[3px_3px_#99b7b5]" onClick={() => {setShow(true)}}>Delete Budget</button>
        </div>
        { show && (
            <div onClick={() => {setShow(false)}} className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 ">
                <div onClick={(e) => {e.stopPropagation()}} className=""> 
                   <ScrollAnimation yfrom={200} className='bg-[#cbf3f0] h-[18rem] md:w-[30rem] rounded-2xl flex flex-col gap-5 p-6'>
                      <div className='flex justify-between'>
                          <h2 className='text-[2rem] text-black font-bold'>Delete Budget?</h2>
                          <button onClick={() => {setShow(false)}} 
                          className="cursor-pointer"><Image src={'/material-symbols_cancel-outline.svg'} width={50} height={20} alt="s"/></button>    
                      </div>
                      <div className="text-black pt-5">
                        <p>Are you sure you want to delete this budget? Deleting this budget means the current balance returns to your main balance.</p>
                      </div>
                      <div className="flex justify-between pt-5">
                          <button className="bg-gray-500 text-white w-[8rem] h-[2rem] font-light rounded-xl text-[1rem] cursor-pointer shadow-[3px_3px_#99b7b5]" onClick={() => {setShow(false)}}>Cancel</button>
                          <button className="bg-[#ff0000] text-white w-[8rem] h-[2rem] font-light rounded-xl text-[1rem] cursor-pointer shadow-[3px_3px_#99b7b5]">Delete Budget</button>
                      </div>
                  </ScrollAnimation>
                    
                </div>
            </div>
        )}
    </div>
  );
}
