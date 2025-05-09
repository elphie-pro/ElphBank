"use client ";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Card from "@/components/Dashboard/Card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page() {
  const [budget, setBudget] = useState([]);
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const route = useRouter();

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
      if (!user) return;
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

  const handleCreateBudget = async () => {
    if (!budgetName || !budgetAmount || isNaN(budgetAmount)) {
      alert("Please fill in all fields with valid values");
      return;
    }

    const budgetData = {
      name: budgetName,
      amount: parseFloat(budgetAmount),
      createdAt: new Date().toISOString(),
      id: Date.now(), // You can use UUID if preferred
    };

    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) return;

    const userData = userDoc.data();
    const currentAmount = userData.amount;

    if (currentAmount < budgetData.amount) {
      alert("Insufficient balance to allocate this budget");
      return;
    }

    const updatedAmount = currentAmount - budgetData.amount;

    try {
      await updateDoc(userRef, {
        Budgets: arrayUnion(budgetData),
        amount: updatedAmount,
      });

      setBudget((prev) => [...prev, budgetData]);
      setShow(false);
      setBudgetName("");
      setBudgetAmount("");
    } catch (error) {
      console.error("Error creating budget:", error);
    }
  };
  return (
    <div className="text-black md:ml-[15rem] mt-[5rem]">
      <div className="md:ml-[5rem] md:w-[78rem] md:h-[45rem] border-8 border-[#cbf3f0] rounded-tr-4xl rounded-bl-4xl p-8">
        <div className="md:ml-[64rem] ml-[9rem] text-center">
          <button
            className="border-3 md:w-[9rem] w-[7.5rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer text-[#2ec4b6] border-[#2ec4b6]"
            onClick={() => {
              setShow(true);
            }}
          >
            Add Budget +
          </button>
        </div>
        {/* Pop up */}
        {show && (
          <div
            className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0"
            onClick={() => {
              setShow(false);
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ScrollAnimation
                yfrom={200}
                className="bg-[#cbf3f0] h-[25rem] md:w-[30rem] rounded-2xl flex flex-col gap-5 p-6"
              >
                <div className="flex justify-between">
                  <h2 className="text-[2rem] font-bold">New Budget</h2>
                  <button
                    onClick={() => {
                      setShow(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Image
                      src={"/material-symbols_cancel-outline.svg"}
                      width={50}
                      height={20}
                      alt="s"
                    />
                  </button>
                </div>
                <div className="flex flex-col gap-3 ">
                  <h1 className="text-[1.3rem] font-semibold">Budget Name:</h1>
                  <input
                    type="text"
                    value={budgetName}
                    onChange={(e) => setBudgetName(e.target.value)}
                    className="h-[3rem] border-4 rounded-xl border-[#2ec4b6] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[1.3rem] font-semibold">
                    Deposit Starting Amount:
                  </h1>
                  <input
                    type="number"
                    value={budgetAmount}
                    onChange={(e) => setBudgetAmount(e.target.value)}
                    className="h-[3rem] border-4 rounded-xl border-[#2ec4b6] outline-none"
                  />
                </div>
                <button
                  className="md:w-[19rem] h-[2.5rem] text-[1.1rem] md:ml-[4rem] text-white rounded-xl font-semibold bg-[#2ec4b6]"
                  onClick={handleCreateBudget}
                >
                  Create Budget
                </button>
              </ScrollAnimation>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[9rem] pt-8">
          {budget && budget.length > 0 ? (
            budget.map((bud, index) => (
              <div key={index}>
                <Card key={bud.id} bud={bud} />
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
