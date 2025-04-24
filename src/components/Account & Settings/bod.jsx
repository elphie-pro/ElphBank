"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "@/firebase-config";

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
        <div className="md:ml-[25rem] mt-[5rem] text-black">
            <div className="w-[60rem] h-[40rem] bg-[#cbf3f0] rounded-tl-4xl rounded-br-4xl flex flex-col gap-4 p-8 items-center">
                <div className="flex flex-col gap-1 items-center">
                      <button className="cursor-pointer"><Image src={'/Group 28.svg'} width={200} height={20} alt="s"/></button>
                      <p className="text-[1.3rem] font-bold">User ID : <span>aA7nJY9jkLdzSNN9jJWzNK2sBB43</span></p>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <p className="text-[1.25rem] text-[#2ec4b6] font-bold">Account Information</p>
                    <div className="w-[30rem] h-[15rem] bg-[#2ec4b6] rounded-3xl p-10 shadow-[6px_6px_#99B7B5] flex flex-col gap-6 text-white px-[5rem]">
                        <div className="flex justify-between">
                            <p className="font-semibold">Full Name:</p>
                            <p>{userData ? userData.name : 'Nil'}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Email:</p>
                            <p>{userData ? userData.email : 'Nil'}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">No of Budgets:</p>
                            <p>{userData && userData.Budgets ? userData.Budgets.length : 'Nil'}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Phone Number:</p>
                            <p>+234 {userData ? userData.Number : 'Nil'}</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}