"use client"
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar'

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
         <motion.div variants={variants} initial="hidden" animate="show" className=' bg-white w-full min-h-screen'>
            <Sidebar />
        </motion.div>
    );
}