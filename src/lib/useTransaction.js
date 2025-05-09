import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase-config";
export async function transferMoney(senderEmail, receiverEmail, amount) {
  if (amount <= 0) throw new Error("Amount must be greater than 0");
  const senderData = await getUserByEmail(senderEmail);
  if (!senderData) throw new Error("Sender not found");
  const receiverData = await getUserByEmail(receiverEmail);
  if (!receiverData) throw new Error("Receiver not found");

  if (senderData.balance < amount) throw new Error("Insufficient balance");
  const newSenderBalance = senderData.balance - amount;
  const newReceiverBalance = receiverData.balance + amount;
  await updateDoc(doc(db, "users", senderData.id), {
    balance: newSenderBalance,
  });
  await updateDoc(doc(db, "users", receiverData.id), {
    balance: newReceiverBalance,
  });

  return { success: true, newSenderBalance, newReceiverBalance };
}
async function getUserByEmail(email) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;

  const docSnap = snapshot.docs[0];
  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
}
