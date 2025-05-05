import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase-config";

export async function useTransaction(email) {
  // Fetch user by email and get the balance details
  const balance = await fetchUserByEmailAndGetBalance(email);
}

export const fetchUserByEmailAndGetBalance = async (email) => {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const balances = querySnapshot.docs.map((doc) => {
    
    return doc.data()?.balance;
  });

  return balances[0];
};
