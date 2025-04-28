"use client "
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Card from '@/components/Dashboard/Card'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Page() {
    const [budget, setBudget] = useState([]);
    const [user, setUser] = useState(null)
    const [show, setShow] = useState(false)
    const route = useRouter()

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
            <div className="md:ml-[5rem] md:w-[78rem] md:h-[45rem] border-8 border-[#cbf3f0] rounded-tr-4xl rounded-bl-4xl p-8">
                <div className="ml-[64rem]">
                        <button className="border-3 w-[9rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer text-[#2ec4b6] border-[#2ec4b6]" onClick={() => {setShow(true)}}>
                            Add Budget +
                        </button>
                </div>

                {show && (
                  <div className='fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0' onClick={() => {setShow(false)}}>
                      <div onClick={(e) => {e.stopPropagation()}} className='bg-[#cbf3f0] h-[25rem] w-[30rem] rounded-2xl flex flex-col gap-5 p-6'>
                        <div className='flex justify-between'>
                          <h2 className='text-[2rem] font-semibold'>New Budget</h2>
                          <button onClick={() => {setShow(false)}} 
                          className="cursor-pointer"><Image src={'/material-symbols_cancel-outline.svg'} width={50} height={20} alt="s"/></button>
                          
                        </div>
                      </div>
                  </div>

                )}

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
            
        </div>
    );
}