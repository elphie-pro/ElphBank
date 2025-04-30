'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page() {
    const route = useRouter()
    const path = usePathname()
    const [show, setShow] = useState(false)
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState(0)

    const updateDetails = async () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
            try {
                const userDoc = doc(db, "users", user.uid);
                await updateDoc(userDoc, {
                name: newName,
                Number: newNumber,
                });
                window.location.reload();
                toast.success("Account details updated");
            } catch (error) {
                toast.error(error);
            }
            }
        });
    };
        
    return (
        <div className="md:ml-[18rem] pt-4 text-black">
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button  className="cursor-pointer" onClick={() => {route.back()}}><Image src={'/Group 31.svg'} width={45} height={20} alt="s"/></button>
                    <button className={path === "/account" ? "cursor-pointer" : "hidden"}  onClick={() => {setShow(true)}}><Image src={'/Group 26.svg'} width={50} height={20} alt="s"/></button>
                </div>
                <div>
                        <h1 className="md:text-[2.3rem] text-[2rem] text-[#2ec4b6] font-bold">My Account</h1>
                </div>
            </div>
            {/* settings popup */}
            {show && (
                <div className='fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0' onClick={() => {setShow(false)}}>
                    <div onClick={(e) => {e.stopPropagation()}}>
                        <ScrollAnimation yfrom={200} className='bg-[#cbf3f0] h-[25rem] md:w-[30rem] rounded-2xl flex flex-col gap-5 p-6'>
                            <div className='flex justify-between'>
                                <h2 className='text-[2rem] font-bold'>Update Account</h2>
                                <button onClick={() => {setShow(false)}} 
                                className="cursor-pointer"><Image src={'/material-symbols_cancel-outline.svg'} width={50} height={20} alt="s"/></button>    
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className="font-semibold text-[1.15rem]">New Name:</p>
                                <input type="text" className="border-3 h-[2.5rem] border-[#2ec4b6] outline-none rounded-xl" onChange={(e) => {setNewName(e.target.value)}}/>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className="font-semibold text-[1.15rem]">New Number:</p>
                                <input type="number" className="border-3 h-[2.5rem] border-[#2ec4b6] outline-none rounded-xl" onChange={(e) => {setNewNumber(e.target.value)}}/>  
                            </div>
                            <div className="text-center text-white font-semibold pb-2">
                                <button className="w-[17rem] h-[2.5rem] bg-[#2ec4b6] rounded-xl cursor-pointer" onClick={updateDetails}>Update Information</button>
                            </div>  
                        </ScrollAnimation>
                    </div>
                    
                </div>
            )}
        </div>
    );
}