"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MotionConfig } from "framer-motion";

export default function Page() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };

    return (
        <>
        <motion.div variants={variants} initial="hidden" animate="show" className="bg-[#2EC4B6] w-full min-h-screen">
            <nav className="py-6 px-2 md:px-18 w-[20rem]">
                <Link href="/">
                    <Image src="/Group 5.png" width={150} height={38} alt="ElphBank Logo"/>
                </Link>
            </nav>
            <div className="w-full block max-w-7xl mx-auto px-4 md:py-18 md:pb-2">
                <div className=" h-[40rem] md:flex shadow-2xl border border-transparent rounded-br-3xl">
                    <div className="md:w-[40rem] h-[40rem] bg-[#eaeaea] bg-opacity-10 border rounded-tl-3xl hidden md:block">
                            <Image src="/Mirae_Asset_Mutual_Fund_launches_Banking___Financial_Services_Fund-removebg-preview (1) 1.png" width={500} height={38} alt="ElphBank Logo" className="ml-[4rem] mt-[6rem]"/>
                        </div>
                    <div className="md:w-[40rem] h-[40rem] bg-[#71D5CB] bg-opacity-10 border border-transparent  rounded-br-3xl">
                        <div className="flex py-[3rem] md:px-[7rem] px-7 flex-col justify-center">
                            <h2 className="font-bold text-2xl md:text-3xl ">Sign Up</h2>
                            <p className="font-semibold text-[1rem] md:text-[1rem] flex gap-1"><span className="hidden md:block">Welcome new user! </span>Please enter your details.</p>
                        <div className="py-8">
                        <label htmlFor="" className="text-[1rem] font-semibold">Username</label>
                                <br />
                                <input type="text" placeholder="Username" required onChange={(e) => {
                                    setUserName(e.target.value)
                                }} className="border-2 border-white w-[17rem] md:w-[23rem] h-[2.5rem] mt-2 rounded-tl-xl font-semibold rounded-br-xl placeholder-[#757575] p-2 outline-none"/>
                            <div className="pt-3">
                                <label htmlFor="" className="text-[1rem] font-semibold">Email Address</label>
                                <br />
                                <input type="email" placeholder="Email Address" required onChange={(e) => {
                                    setEmail(e.target.value)
                                }} className="border-2 border-white w-[17rem] md:w-[23rem] h-[2.5rem] mt-2 rounded-tl-xl font-semibold rounded-br-xl placeholder-[#757575] p-2 outline-none"/>
                                <br />
                                <div className="pt-3">
                                    <label htmlFor="" className="text-[1rem] font-semibold">Password</label>
                                    <br />
                                    <input type="password" placeholder="Password" required onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} className="border-2 border-white w-[17rem] md:w-[23rem] h-[2.5rem] mt-2 rounded-tr-xl font-semibold rounded-bl-xl placeholder-[#757575] p-2 outline-none"/>    
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 flex flex-col gap-4">
                            <button className="cursor-pointer w-[17rem] md:w-[23rem] h-[3rem] bg-white border-4 border-[#2EC4B6] rounded-tl-xl font-semibold rounded-br-xl text-[#2EC4B6]">Create Account </button>
                            <button className=" cursor-pointer w-[17rem] md:w-[23rem] h-[3rem] bg-white border-4 border-[#2EC4B6] rounded-tl-xl font-semibold rounded-br-xl text-[#2EC4B6] flex gap-2 p-1"><Image src="/devicon_google.png" width={30} height={38} alt="ElphBank Logo" className="ml-8  md:ml-[4.5rem]"/> <span className="mt-1">Sign up with Google?</span></button>
                        </div>
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