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
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

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

  if (!user) return <p>Redirecting...</p>;

  return (
    <motion.div variants={variants} initial="hidden" animate="show" className='overflow-x-hidden overflow-y-hidden bg-white w-full min-h-screen'>
      <nav className="bg-[#2ec4b6] w-full p-4 md:hidden block">
        <div className="w-[10rem] ">
            <Link href="/" className="md:solute">
              <Image
                src="/Group 5.png"
                width={150}
                height={38}
                alt="ElphBank Logo"
              />
            </Link>
        </div>
      </nav>
      <Sidebar />
      <Buttons />
    </motion.div>
  );
}
