"use client";
import { useState, useEffect } from "react";
import { db, auth } from "@/firebase-config";
import { doc, getDoc } from "firebase/firestore";

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
    };
    getBudget();
  }, []);

  console.log("what is popping", budget);
  return (
    <div className="flex">
      {budget && budget.length > 0 && budget.length == 2 ? (
        budget.map((bud, index) => (
          <div key={index}>
            <h2>{bud.budgetName}</h2>
          </div>
        ))
      ) : (
        <p>No budgets found</p>
      )}
    </div>
  );
}
