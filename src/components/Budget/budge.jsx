"use client "
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';

export default function Page() {
    const [budget, setBudget] = useState([]);
    const currentUser = auth.currentUser;
    const collectionRef = doc(db, "users", currentUser.uid);
  
    useEffect(() => {
      const getBudget = async () => {
        const userDoc = await getDoc(collectionRef);
        if (userDoc.exists() && userDoc.data().Budgets) {
          setBudget(userDoc.data().Budgets);
        } else {
          console.log("No budgets found for this user");
          setBudget([]);
        }
        if (userDoc.exists() && userDoc.data().Transactions) {
            setTransaction(userDoc.data().Transactions);
          } else {
            console.log("No Transactions yet found for this user");
            setTransaction([]);
          }
      };
      getBudget();
    }, []);
    return (
        <div className="text-black md:ml-[15rem] mt-[5rem]">
            <div className="ml-[5rem] md:w-[78rem] h-[45rem] border-8 border-[#cbf3f0] rounded-tr-4xl rounded-bl-4xl p-8">
                <div className="ml-[64rem]">
                        <button className="border-3 w-[9rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer text-[#2ec4b6] border-[#2ec4b6]">
                            Add Budget +
                        </button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}