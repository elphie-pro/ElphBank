"use client "
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Card from '@/components/Dashboard/Card'

export default function Page() {
    const [budget, setBudget] = useState([]);
    const [user, setUser] = useState(null)

    useEffect(() => {
        // Set up auth state listener
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        
        // Clean up subscription
        return () => unsubscribe();
      }, []);
  
    useEffect(() => {
      const getBudget = async () => {
        if (!user) return
        const collectionRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(collectionRef);
        if (userDoc.exists() && userDoc.data().Budgets) {
          setBudget(userDoc.data().Budgets);
        } else {
          console.log("No budgets found for this user");
          setBudget([]);
        }
      };
      getBudget();
    }, [user]);
    return (
        <div className="text-black md:ml-[15rem] mt-[5rem]">
            <div className="ml-[5rem] md:w-[78rem] h-[45rem] border-8 border-[#cbf3f0] rounded-tr-4xl rounded-bl-4xl p-8">
                <div className="ml-[64rem]">
                        <button className="border-3 w-[9rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer text-[#2ec4b6] border-[#2ec4b6]">
                            Add Budget +
                        </button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[9rem] pt-8'>
                    {budget && budget.length > 0 ? (
                        budget.map((bud, index) => (
                        <div key={index}>
                                <Card key={bud.id} bud={bud}/>
                        </div>
                        ))
                    ) : (
                        <p>No budgets found</p>
                    )}
                </div>
            </div>
            {/* copyright */}
            <div className="mt-[1rem] ml-[35rem]">
                        <p className="md:text-[.9rem] md:ml-[25.3rem]  text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
              </div>
        </div>
    );
}