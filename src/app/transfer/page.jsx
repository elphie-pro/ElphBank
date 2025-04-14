"use client"
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar'
import Button from '@/components/Dashboard/Buttons'

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
         <motion.div variants={variants} initial="hidden" animate="show" className=' bg-white w-full min-h-screen'>
            <Sidebar />
            <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-24">
                <Button />
            </div>
        </motion.div>
    );
}