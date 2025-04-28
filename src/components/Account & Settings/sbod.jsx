"use client"
import Image from "next/image";
import { useState, useEffect, use } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/firebase-config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Page() {
  const [userData, setUserData] = useState([])
  const [docId, setDocId] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState(0)
  const route = useRouter()


    useEffect(() => {
        const fetchUserData = () => {
          onAuthStateChanged(auth, async (user) => {
            if (user) {
                setDocId(user.uid)
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

      const updateDetails = async() => {
        try {
          onAuthStateChanged(auth, async (user) => {
            const userDoc = doc(db, 'users', user.uid);
             await updateDoc(userDoc, {
               name: newName,
               Number: newNumber
             })
             route.push('/account')
             toast.success('Account details updated')
            })
        } catch (error) {
          toast.error(error)
        }
      }
      
    return (
        <div className="md:ml-[25rem] mt-[5rem] text-black">
            <div className="md:w-[60rem] md:h-[40rem] bg-[#cbf3f0] rounded-tl-4xl rounded-br-4xl flex flex-col gap-4 p-8 items-center">
                <div className="flex flex-col gap-1 items-center">
                      <Image src={'/Group 28.svg'} width={200} height={20} alt="s"/>
                      <p className="md:text-[1.3rem] font-bold">User ID : <span>{docId || "Loading..."}</span></p>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <p className="text-[1.25rem] text-[#2ec4b6] font-bold">Update Information</p>
                    <div className="md:w-[30rem] md:h-[14.5rem] bg-[#2ec4b6] rounded-3xl p-7 md:p-10 shadow-[6px_6px_#99B7B5] flex flex-col gap-7 text-white md:px-[3.5rem]">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="font-semibold">New Name:</p>
                            <input type="text" className="border-3 border-[#cbf3f0] outline-none rounded-lg" onChange={(e) => {setNewName(e.target.value)}}/>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="font-semibold">New Number:</p>
                            <input type="number" className="border-3 border-[#cbf3f0] outline-none rounded-lg" onChange={(e) => {setNewNumber(e.target.value)}}/>  
                        </div>
                        <div className="text-center text-black font-semibold">
                            <button className="w-[15rem] h-[2.5rem] bg-[#cbf3f0] rounded-xl " onClick={updateDetails}>Update Information</button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}