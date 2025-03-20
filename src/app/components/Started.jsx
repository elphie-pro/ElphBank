"use client"
import Image from "next/image";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";

export default function Page() {
     const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } }
      };
    return (
        <div className="bg-[#2EC4B6] w-full">
            <div className="w-full block max-w-[100rem] mx-auto px-4 md:pb-2">
                <motion.div variants={variants} 
                    initial="hidden" 
                    animate="show" className="flex pt-8 gap-[57.5rem]">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[3rem] md:text-[4rem] leading-tight font-bold">Effortless <br /> Easy <br /> Encrypted.</h2>
                    <p className=" text-[.9rem] md:text-[1.2rem]">Connect your money to your friends, <br /> family & brands</p>
                    <Link href="" className="bg-black w-[12rem] h-[3rem] text-center rounded-xl pt-[.6rem] text-[1.2rem] block">Get Started</Link>
                </div>
                <div className="pt-[16.5rem]">
                <motion.div>
                    <Image src='/frame 2.png' width={300} height={50} alt="Phone" className="pt-14 ml-[-18rem] "/>
                </motion.div>
                <Image src='/frame 1.png' width={300} height={60} alt="Phone" className="mt-[-38rem] ml-[2rem]"/>
                </div>
                </motion.div>
            </div>
      </div>
    );
}