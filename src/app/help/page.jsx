"use client"
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar'
import Link from 'next/link';
import Image from 'next/image';
import Buttons from '@/components/Dashboard/Buttons'

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
                <Buttons />
                {/* copyright */}
        <div className="mt-[6rem] ml-[50rem]">
            <p className="md:text-[.9rem] md:ml-[25.3rem]  text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
        </div>
            </div>
        </motion.div>
    );
}