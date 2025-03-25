"use client"
import Started from '../components/Started'
import Navbar from '../components/Navbar.jsx'
import Why from '../components/Why.jsx'
import Savings from '../components/Savings.jsx'
import Feature from '../components/Feature.jsx'
import { motion } from 'framer-motion'

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  return (
    <motion.div variants={variants} initial="hidden" animate="show" className='overflow-x-hidden'>
      <Navbar />
      <Started />
      <Why />
      <Savings />
      <Feature />
    </motion.div>
      
  );
}
