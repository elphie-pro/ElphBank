"use client"
import { motion } from "framer-motion";
import Sidebar from '@/components/Sidebar'
import Button from '@/components/Dashboard/Buttons'
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
        <motion.div variants={variants} initial="hidden" animate="show" className=' bg-white w-full overflow-hidden min-h-screen'>
            <nav className="bg-[#2ec4b6] absolute w-full p-4 md:hidden block">
                <div className="w-[10rem] ">
                    <Link href="/" className="">
                    <Image
                        src="/Group 5.png"
                        width={150}
                        height={38}
                        alt="ElphBank Logo"
                    />
                    </Link>
                </div>
            </nav>
            <Sidebar />
            <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-2">
                <h1 className=' ml-[20rem] mt-[1rem] absolute text-[2.3rem] text-[#2ec4b6] font-bold'>Transaction History</h1>
                <Button />
            </div>
        </motion.div>
    );
}