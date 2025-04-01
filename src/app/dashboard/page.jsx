"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase-config";
import { useRouter } from "next/navigation";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase-config";
import { motion } from "framer-motion";
import Sidebar from '@/components/Sidebar'

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
      <Sidebar />
    </motion.div>
  );
}
