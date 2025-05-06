"use client"
import Started from '../components/Landing/Started'
import Navbar from '../components/Navbar.jsx'
import Why from '../components/Landing/Why.jsx'
import Savings from '../components/Landing/Savings.jsx'
import Feature from '../components/Landing/Feature.jsx'
import Toggle from '../components/Toggle'
import { motion } from 'framer-motion'
import { useState } from 'react'
// import { fetchUserByEmailAndGetBalance } from '@/lib/useTransaction'

export default function Home() {
  const [email,getEmail] = useState()
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const useGetEmail = () => {
      fetchUserByEmail(email)
  }
  return (
    <motion.div variants={variants} initial="hidden" animate="show" className='overflow-x-hidden'>
       <div className=''>
        <Toggle />
      </div>
      <Navbar />
      <Started />
      <Why />
      <Savings />
      <Feature />
    </motion.div>
      
  );
}
