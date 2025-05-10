"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { auth, db } from "@/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


export default function Page() {
      const [userData, setUserData] = useState([])

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
    return (
        <div className="text-black  md:ml-[15rem] flex justify-center md:justify-start">
            <div className="flex flex-col gap-14 items-center">
                <h3 className="text-[1.3rem] font-bold dark:text-white">Your Balance is ₦{userData && userData.balance ? userData.balance.toLocaleString() : 'Name'}<span className="text-[#818f96]">.25</span></h3>
                <div className="pt-8">
                    <Image src='/Group 23.svg' width={300} height={10} alt="pic"/>
                    <div className="absolute mt-[-5.5rem] ml-4 text-white">
                        <div className="flex">
                            <p className="text-[1.5rem] font-bold">₦ 180,000</p>
                            <button></button>
                        </div>
                        <p className="text-[.9rem]">Naira Account</p>
                    </div>
                </div>
                <div className="pt-8">
                    <Image src='/Group 24.svg' width={300} height={10} alt="pic"/>
                    <div className="absolute mt-[-5.5rem] ml-4 text-black">
                        <div className="flex">
                            <p className="text-[1.5rem] font-bold">₦ 180,000</p>
                            <button></button>
                        </div>
                        <p className="text-[.9rem]">Naira Account</p>
                    </div>
                </div>
                <div className="pt-8">
                    <button className="w-[19rem] h-[4rem] bg-[#cbf3f0] rounded-2xl">+ Add new Account</button>
                </div>
            </div>
        </div>
    );
}