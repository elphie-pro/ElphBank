"use client";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Dashboard/Buttons";
import Transfer from "@/components/Transfers/transfe";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase-config";
import { doc, getDoc } from "firebase/firestore";

export default function Page() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);

        try {
          const userDocRef = doc(db, "users", user.uid);
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



  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className=" bg-white dark:bg-[#161616] w-full overflow-hidden min-h-screen"
    >
      <Sidebar />
      <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 pb-1">
        <h1 className=" md:ml-[20rem] mt-[1rem] absolute text-[2.3rem] text-[#2ec4b6] font-bold">
          Send Money
        </h1>
        <Button />
        <Transfer />

        <div className="mt-[3rem] md:ml-[75rem] pb-2">
          <p className="md:text-[.9rem] text-[.8rem] text-[#2EC4BE] font-semibold">
            © 2025 ElphBank Technologies. All rights reserved
          </p>
        </div>
      </div>
    </motion.div>
  );
}
