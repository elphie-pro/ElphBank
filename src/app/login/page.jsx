"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { auth, provider, signInWithPopup } from "@/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function Page() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hide, setHide] = useState(false)
    const route = useRouter()

    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };

      const handleToggle = () => {
        setHide((prev) => !prev)
      }

      const passwordLogin = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            route.push('/dashboard')
            toast.success('Login Successful')
        } catch (error) {
            console.log(error)
        }
      }

      const googleLogin = async() => {
        try {
            await signInWithPopup(auth, provider)
            route.push('/dashboard')
            toast.success('Login Successful')
        } catch (error) {
            console.log(error)
        }
      }

    return (
        <>
        <motion.div variants={variants} initial="hidden" animate="show" className="bg-[#2EC4B6] w-full min-h-screen dark:bg-">
            <nav className="py-6 px-2 md:px-18 w-[20rem]">
                <Link href="/">
                    <Image src="/Group 5.png" width={150} height={38} alt="ElphBank Logo"/>
                </Link>
            </nav>
            <div className="w-full block max-w-7xl mx-auto px-4 md:py-18 md:pb-2">
                <div className=" h-[40rem] md:flex shadow-2xl border border-transparent rounded-br-3xl">
                    <div className="md:w-[40rem] h-[40rem] bg-[#71D5CB] bg-opacity-10 rounded-tl-3xl border border-transparent md:rounded-br-none rounded-br-3xl">
                        <div className="flex py-[3.5rem] md:px-[7rem] px-7 flex-col justify-center">
                            <h2 className="font-bold text-2xl md:text-3xl ">Welcome Back</h2>
                            <p className="font-semibold text-[1rem] md:text-[1rem] flex gap-1"><span className="hidden md:block">Welcome back user! </span>Please enter your details.</p>
                        <div className="py-8">
                            <label htmlFor="" className="text-[1rem] font-semibold">Email Address</label>
                            <br />
                            <input type="email" placeholder="Email Address" required onChange={(e) => {
                                setEmail(e.target.value)
                            }} className="border-2 border-white w-[17rem] md:w-[23rem] h-[2.5rem] mt-2 rounded-tl-xl font-semibold rounded-br-xl placeholder-[#757575] p-2 outline-none"/>
                            <br />
                            <div className="pt-9">
                                <label htmlFor="" className="text-[1rem] font-semibold">Password</label>
                                <br />
                                <input type={!hide ? "password" : "text"}  placeholder="Password" required onChange={(e) => {
                                    setPassword(e.target.value)
                                }} className="border-2 border-white w-[17rem] md:w-[23rem] h-[2.5rem] mt-2 rounded-tr-xl font-semibold rounded-bl-xl placeholder-[#757575] p-2 outline-none"/> 
                                
                                <button className="absolute ml-[-3rem] mt-[.7rem] cursor-pointer" onClick={handleToggle}><Image src={hide ? '/Eye.svg' : '/Eye-closed.svg'} width={30} height={20} alt="w"/></button>  
                            </div>
                           <div className="flex gap-[8.5rem] md:gap-[15rem] pt-4">
                                <div>  
                                </div>
                                <div className="md:-mt-[.4.5rem]">
                                    <Link href="/forgot-password" className="text-black font-semibold text-[.8rem] md:text-[.9rem]">Forgot Password?</Link>
                                </div>
                           </div>
                        </div>
                        <div className="pt-6 flex flex-col gap-4">
                            <button className="cursor-pointer w-[17rem] md:w-[23rem] h-[3rem] bg-white border-4 border-[#2EC4B6] rounded-tl-xl font-semibold rounded-br-xl text-[#2EC4B6]" onClick={passwordLogin}>Sign In </button>
                            <button className=" cursor-pointer w-[17rem] md:w-[23rem] h-[3rem] bg-white border-4 border-[#2EC4B6] rounded-tl-xl font-semibold rounded-br-xl text-[#2EC4B6] flex gap-2 p-1" onClick={googleLogin}><Image src="/devicon_google.png" width={30} height={38} alt="ElphBank Logo" className="ml-8  md:ml-[4.5rem]"/> <span className="mt-1">Sign in with Google?</span></button>
                        </div>
                        <div className="pt-4 md:ml-16 ml-7">
                            <p className="text-white font-semibold text-[.9rem]">Dont have an account? <Link href="/sign-up" className="text-black">Sign Up</Link></p>
                        </div>
                    </div>
                 </div>
                    <div className="md:w-[40rem] h-[40rem] bg-[#eaeaea] bg-opacity-10 border rounded-br-3xl hidden md:block">
                        <Image src="/Mirae_Asset_Mutual_Fund_launches_Banking___Financial_Services_Fund-removebg-preview (1) 1.png" width={500} height={38} alt="ElphBank Logo" className="ml-[4rem] mt-[6rem]"/>
                    </div>
                </div>    
            </div>    
            <div className="md:pt-[8rem] pt-18 md:pl-16 pl-4">
                        <p className="md:text-[.9rem] text-[.7rem] text-[white] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
            </div>
        </motion.div>
        </>
        
    );
}