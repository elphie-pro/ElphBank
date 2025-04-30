"use client"
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar'
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Account & Settings/head'
import Body from '@/components/Account & Settings/bod'

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
         <motion.div variants={variants} initial="hidden" animate="show" className=' bg-white w-full overflow-hidden min-h-screen'>
            <Sidebar />
            <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-2">
                <Header />
                <Body />
                {/* copyright */}
        <div className="mt-[6rem] md:ml-[75rem] ml-[2rem]">
            <p className="md:text-[.9rem]  text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
        </div>
            </div>
        </motion.div>
    );
}