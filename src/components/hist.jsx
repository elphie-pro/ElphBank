"use client"
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Trans from '@/components/Dashboard/Trans'

export default function Page() {
    const [transaction, setTransaction] = useState([])
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
        if (userDoc.exists() && userDoc.data().Transactions) {
            setTransaction(userDoc.data().Transactions);
        } else {
            console.log("No Transactions yet found for this user");
            setTransaction([]);
        }
      };
      getBudget();
    }, [user]);
    return (
        <div className="text-black md:ml-[18rem] mt-[5rem] md:mt-[2rem]">
            <div className='flex flex-col gap-5'>
                <div className='flex justify-between pt-4 text-[#818f96]'>
                    <p className='text-[.9rem] hidden md:block'>Name of transaction</p>
                    <p className='text-[.9rem] md:hidden block'>Account Name</p>
                    <p className='text-[.9rem] hidden md:block'>Description</p>
                    <p className='text-[.9rem]'>Date & Time</p>
                    <p className='text-[.9rem]'>Amount</p>
                </div>
                {/* Transactions */}
                <div className='flex  flex-col gap-[2.5rem] mt-[1rem]'>
                    {transaction && transaction.length > 0 ? (
                        transaction.map((tran, index) => (
                        <div key={index}>
                                <Trans key={tran.id} tran={tran}/>
                        </div>
                        ))
                    ) : (
                        <p>No transactions found</p>
                    )}
                </div>
            </div>      
                              
        </div>
    );
}