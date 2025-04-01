"use client"
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar'
import Solutions from '@/components/Features/Solutions'
import Benefits from '@/components/Features/Benefits'
import Good from '@/components/Features/Good'

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
        <motion.div variants={variants} initial="hidden" animate="show" className='overflow-x-hidden'>
            <Navbar />
            <Solutions />
            <Benefits />
            <Good />
        </motion.div>
    );
}