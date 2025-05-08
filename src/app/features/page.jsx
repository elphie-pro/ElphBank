"use client"
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar'
import Solutions from '@/components/Features/Solutions'
import Benefits from '@/components/Features/Benefits'
import Good from '@/components/Features/Good'
import Toggle from '@/components/Toggle'

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
        <motion.div variants={variants} initial="hidden" animate="show" className='overflow-x-hidden'>
            <div className='absolute mt-[.5rem] ml-[110em] w-[8rem]'>
                    <Toggle />
            </div>
            <Navbar />
            <Solutions />
            <Benefits />
            <Good />
        </motion.div>
    );
}