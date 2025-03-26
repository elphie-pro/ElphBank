"use client"
import Navbar from '@/components/Navbar'
import Smart from '@/components/About/Smart'
import Vision from '@/components/About/Vision'
import { motion } from 'framer-motion';

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
        <motion.div variants={variants} initial="hidden" animate="show" className='overflow-x-hidden'>
            <Navbar />
            <Smart />
            < Vision/>
        </motion.div>
    );
}