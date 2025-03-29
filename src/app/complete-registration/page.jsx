"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "@/firebase-config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Page() {
    const [accountType, setAccountType] = useState("Personal Account")
    const [deposit, setDeposit] = useState(0)
    const route = useRouter()

    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };

      const complete = async() => {
        const user = auth.currentUser
            if (user) {
                try{
                    await setDoc(doc(db, "users", user.uid), {
                        accountType: accountType,
                        balance: deposit
                    }, { merge: true })
                    route.push('/dashboard')
                    toast.success('Account Succesfully Created')
                }catch (error) {
                    console.log(error)
                }   
            }else{
                console.log('No user logged in')
            }
      }

    return (
        <>
        <motion.div variants={variants} initial="hidden" animate="show" className="bg-[#2EC4B6] w-full min-h-screen">
            <nav className="py-6 px-2 md:px-18 w-[20rem]">
                <Link href="/">
                    <Image src="/Group 5.png" width={150} height={38} alt="ElphBank Logo"/>
                </Link>
            </nav>
            <div className="w-full block max-w-7xl mx-auto px-4 md:py-18 md:pb-22">
                <div className=" h-[40rem] md:flex shadow-2xl border border-transparent rounded-br-3xl">
                    <div className="md:w-[40rem] h-[40rem] bg-[#eaeaea] bg-opacity-10 border rounded-tl-3xl hidden md:block">
                            <Image src="/Mirae_Asset_Mutual_Fund_launches_Banking___Financial_Services_Fund-removebg-preview (1) 1.png" width={500} height={38} alt="ElphBank Logo" className="ml-[4rem] mt-[6rem]"/>
                        </div>
                    <div className="md:w-[40rem] h-[40rem] bg-[#71D5CB] bg-opacity-10 border border-transparent  rounded-br-3xl">
                        <div className="flex py-[3rem] md:px-[7rem] px-7 flex-col justify-center">
                            <h2 className="font-bold text-2xl md:text-3xl ">Complete Regsitration</h2>
                            <p className="font-semibold text-[1rem] md:text-[1rem] flex gap-1"><span className="hidden">Welcome new user! </span>Please fill in the adeqate details.</p>
                        <div className="pt-20">
                        <label htmlFor="" className="text-[1rem] font-semibold">Account Type</label>
                                <br />
                                <select onChange={(e) => {
                                    setAccountType(e.target.value)
                                }}className="w-[17rem] md:w-[23rem] h-[2.5rem] mt-2 border-2 border-white rounded-tl-xl rounded-br-xl bg-white p-2 font-medium text-[#757575] focus:outline-none focus:border-none focus:border-b-2 focus:">
                                    <option className=" text-[#757575] font-medium">Personal Account</option>
                                    <option className=" text-[#757575] font-medium">Business Account</option>
                                    <option className=" text-[#757575] font-medium">Savings Account</option>
                                </select>

                            <div className="pt-3">
                                    <label htmlFor="" className="text-[1rem] font-semibold">Deposit</label>
                                    <br />
                                    <input type="number" placeholder="min $5000" required onChange={(e) => {
                                        setDeposit(e.target.value)
                                    }} className="border-2 border-white w-[17rem] md:w-[23rem] h-[2.5rem] mt-2 rounded-tr-xl font-medium rounded-bl-xl placeholder-[#757575] p-2 outline-none"/>    
                                </div>
                        </div>
                        <div className="pt-10 flex flex-col gap-4">
                            <button className="cursor-pointer w-[17rem] md:w-[23rem] h-[3rem] bg-white border-4 border-[#2EC4B6] rounded-tl-xl font-semibold rounded-br-xl text-[#2EC4B6]" onClick={complete}>Complete Registration </button>                        </div>
                        <div className="pt-4 md:ml-16 ml-7">
                            <p className="text-white font-semibold text-[.9rem]">Already have an account? <Link href="/login" className="text-black">Sign In</Link></p>
                        </div>
                    </div>
                 </div>
                </div>    
            </div>    
        </motion.div>
        </>
        
    );
}