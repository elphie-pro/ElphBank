"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase-config";
import { useRouter } from "next/navigation";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase-config";
import { motion } from "framer-motion";
import Image from "next/image";
import Sidebar from '@/components/Sidebar'
import Buttons from '@/components/Dashboard/Buttons'
import Main from '@/components/Dashboard/Main'
import Bud from '@/components/Dashboard/Bud'
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null)
  const [userData, setUserData] = useState([])

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async(user) => {
      if (!user) {
        router.push("/login"); 
      }
        else {
          setUser(user);
  
          try {
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);
    
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setUsername(userData.username);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      
    });

    

    return () => unsubscribe();
  }, [router]);

useEffect(() => {
  const fetchUserData = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("No user is logged in");
      }
    });
  };

  fetchUserData();
}, [])

  if (!user) return <p>Redirecting...</p>;

  return (
    <motion.div variants={variants} initial="hidden" animate="show" className=' bg-white w-full min-h-screen'>
      
      <Sidebar />
      <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-2 pb-1">
      <h1 className=' ml-[2rem] md:mt-[1rem] md:ml-[15rem] md:absolute md:text-[2.3rem] text-[2rem] pb-3 text-[#2ec4b6] font-bold'>Welcome Back, {userData ? userData.name : 'Name'}.</h1>
        <Buttons />
        <div className="flex justify-between flex-col md:flex-row">
          <Main />
          <Bud />
        </div>
        {/* copyright */}
        <div className="mt-[1.4rem] ml-[50rem]">
            <p className="md:text-[.9rem] md:ml-[25.3rem]  text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
        </div>
      </div>
    </motion.div>
  );
}
