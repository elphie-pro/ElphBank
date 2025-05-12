"use client"
import Card from '@/components/Dashboard/Card'
import Trans from '@/components/Dashboard/Trans'
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ScrollAnimation } from '../SlideAnimation';

export default function Page() {
    const [budget, setBudget] = useState([]);
    const [transaction, setTransaction] = useState([])
    const [show, setShow] = useState(false)
    const currentUser = auth.currentUser;
    const collectionRef = doc(db, "users", currentUser.uid);
    const route = useRouter()
  
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
        <div className="text-black dark:text-white flex flex-col gap-10">
            {/* Quick Transfer */}
            <div className='pt-10 md:pt-0'>
                <h1 className="text-[1.3rem] font-bold">Quick Transfer</h1> 
                <div className="flex flex-col gap-5 md:flex-row items-center pt-10 dark:text-[#757575]">
                    <input type="text" placeholder="Enter Account id or Email" className="w-[19rem] md:w-[24rem] p-4 h-[2.5rem] bg-[#f6f6f6] rounded-lg placeholder-[#757575]"/>
                    <input type="number" placeholder="Enter Amount" className="w-[19rem] p-4 h-[2.5rem] bg-[#f6f6f6] rounded-lg placeholder-[#757575]"/>
                    <button className="w-[2.5rem] h-[2.5rem] bg-[#2ec4b6] text-white rounded-lg text-[1.5rem] hidden md:block">&gt;</button>
                    <button className="w-[19rem] h-[2.5rem] bg-[#2ec4b6] text-white rounded-lg font-semibold md:hidden block">Transfer</button>
                </div>
            </div>
            {/* Budgets */}
            <div className="pt-6">
                <div className="flex  justify-between">
                     <h1 className="text-[1.3rem] font-bold">Budgets</h1>
                     <div className='hidden md:block'>
                        <div className="flex gap-5 ">
                            <button className=" w-[9rem] h-[2.5rem] font-semibold text-center rounded-[0.6rem] bg-[#2ec4b6] text-[white] cursor-pointer" onClick={() => {route.push('/budget')}}>
                                View Budgets
                            </button>
                            <button className="border-3 w-[9rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer text-[#2ec4b6] border-[#2ec4b6]" onClick={() => {setShow(true)}}>
                                Add Budget +
                            </button>
                        </div>
                    </div> 
                </div>
                 {show && (
                    <div className='fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 dark:text-black' onClick={() => {setShow(false)}}>
                        <ScrollAnimation yfrom={200} onClick={(e) => {e.stopPropagation()}} className='bg-[#cbf3f0] h-[25rem] md:w-[30rem] rounded-2xl flex flex-col gap-5 p-6'>
                        <div className='flex justify-between'>
                            <h2 className='text-[2rem] font-semibold'>New Budget</h2>
                            <button onClick={() => {setShow(false)}} 
                            className="cursor-pointer"><Image src={'/material-symbols_cancel-outline.svg'} width={50} height={20} alt="s"/></button>
                            
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <h1 className="text-[1.3rem] font-semibold">Budget Name:</h1>
                            <input type="text" className=" h-[3rem] border-4 rounded-xl border-[#2ec4b6] outline-none"/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[1.3rem] font-semibold">Deposit Starting Amount:</h1>
                            <input type="number" className=" h-[3rem] border-4 rounded-xl border-[#2ec4b6] outline-none"/>
                        </div>
                        <button className="md:w-[19rem] h-[2.5rem] text-[1.1rem] md:ml-[4rem] text-white rounded-xl font-semibold bg-[#2ec4b6]">
                            Create Budget
                        </button>
                        </ScrollAnimation>
                    </div>

                )}
                {/* Budget Card */}
                <div className='flex flex-col md:flex-row gap-10 items-center justify-between pt-10'>
                {budget && budget.length > 0 ? (
                    budget.slice(0,2).map((bud, index) => (
                    <div key={index}>
                         <Card key={bud.id} bud={bud}/>
                    </div>
                    ))
                ) : (
                    <p>No budgets found</p>
                )}
                </div>
            </div>
            {/* Trnsactions heading */}
             <div className="pt-6">
                <div className="flex justify-between">
                     <h1 className="text-[1.3rem] font-bold">Transactions</h1> 
                        <div className="flex gap-5 hidden md:block">
                            <button className=" w-[11rem] h-[2.5rem] font-semibold text-center rounded-[0.6rem] bg-[#2ec4b6] text-[white] cursor-pointer" onClick={() => {route.push('/history')}}>
                                View Trasactions
                            </button>
                        </div>
                </div>
                <div className='flex justify-between pt-4 text-[#818f96]'>
                            <p className='text-[.9rem] hidden md:block'>Name of transaction</p>
                            <p className='text-[.9rem] md:hidden block'>Account Name</p>
                            <p className='text-[.9rem] hidden md:block'>Description</p>
                            <p className='text-[.9rem]'>Date & Time</p>
                            <p className='text-[.9rem]'>Amount</p>
                        </div>
                </div>
                {/* Transactions */}
                <div className='flex  flex-col gap-5 mt-[-2rem]'>
                {transaction && transaction.length > 0 ? (
                    transaction.slice(0,3).map((tran, index) => (
                    <div key={index}>
                         <Trans key={tran.id} tran={tran}/>
                    </div>
                    ))
                ) : (
                    <p>No transactions found</p>
                )}
                </div>
                
        </div>
    );
}