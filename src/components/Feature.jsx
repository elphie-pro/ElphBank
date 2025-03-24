"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
        <div className="bg-white overflow-hidden text-black">
            <div className="w-full block max-w-[100rem] mx-auto px-4 py-12 md:pb-24 ">
                <motion.div variants={variants} initial="hidden" animate="show">
                    <div className="text-center">
                        <h1 className="text-[3.2rem] font-bold">All features in one web app</h1>
                        <p className="text-[1.1rem]">We have over 120+ features available in this bank, that’s why our clients<br />are more than others, we always try to add new features</p>
                        <div className="flex flex-col md:flex-row">
                            <div> 
                                <div className="w-[7.5rem] h-[7.5rem] bg-red-400 rounded-[120rem]">
                                        Fish
                                </div>
                                <div className="w-[7.5rem] h-[7.5rem] bg-red-400 rounded-[120rem] pt-3">
                                        Fish
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}