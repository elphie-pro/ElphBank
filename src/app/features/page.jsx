"use client"
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar'
import Solutions from '@/components/Features/Solutions'

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
        <motion.div variants={variants} initial="hidden" animate="show" className='overflow-x-hidden'>
            <Navbar />
            <Solutions />
        </motion.div>
    );
}