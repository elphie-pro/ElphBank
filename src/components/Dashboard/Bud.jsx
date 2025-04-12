"use client"
import Card from '@/components/Dashboard/Card'
import Trans from '@/components/Dashboard/Trans'
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';

export default function Page() {
    const [budget, setBudget] = useState([]);
    const [transaction, setTransaction] = useState([])
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
        <div className="text-black flex flex-col gap-10">
            {/* Quick Transfer */}
            <div>
                <h1 className="text-[1.3rem] font-bold">Quick Transfer</h1> 
                <div className="flex gap-4 pt-10">
                    <input type="text" placeholder="Enter Account id or Email" className="w-[24rem] p-4 h-[2.5rem] bg-[#f6f6f6] rounded-lg"/>
                    <input type="text" placeholder="Enter Account id or Email" className="w-[19rem] p-4 h-[2.5rem] bg-[#f6f6f6] rounded-lg"/>
                    <button className="w-[2.5rem] h-[2.5rem] bg-[#2ec4b6] text-white rounded-lg text-[1.5rem]">&gt;</button>
                </div>
            </div>
            {/* Budgets */}
            <div className="pt-6">
                <div className="flex justify-between">
                     <h1 className="text-[1.3rem] font-bold">Budgets</h1> 
                        <div className="flex gap-5">
                        <button className=" w-[9rem] h-[2.5rem] font-semibold text-center rounded-[0.6rem] bg-[#2ec4b6] text-[white] cursor-pointer">
                            View Budgets
                        </button>
                        <button className="border-3 w-[9rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer text-[#2ec4b6] border-[#2ec4b6]">
                            Add Budget +
                        </button>
                        </div>
                </div>
                {/* Budget Card */}
                <div className='flex justify-between pt-10'>
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
                        <div className="flex gap-5">
                            <button className=" w-[11rem] h-[2.5rem] font-semibold text-center rounded-[0.6rem] bg-[#2ec4b6] text-[white] cursor-pointer">
                                View Trasactions
                            </button>
                        </div>
                </div>
                <div className='flex justify-between pt-4 text-[#818f96]'>
                            <p className='text-[.9rem]'>Name of transaction</p>
                            <p className='text-[.9rem]'>Description</p>
                            <p className='text-[.9rem]'>Date & Time</p>
                            <p className='text-[.9rem]'>Amount</p>
                        </div>
                </div>
                {/* Transactions */}
                <div className='flex  flex-col gap-5 mt-[-2rem]'>
                {transaction && transaction.length > 0 ? (
                    transaction.slice(0,2).map((tran, index) => (
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