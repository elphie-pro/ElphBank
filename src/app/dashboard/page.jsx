"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase-config";
import { useRouter } from "next/navigation";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase-config";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async(user) => {
      if (!user) {
        router.push("/login"); 
      }
        else {
          setUser(user);
  
          try {
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);
    
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setUsername(userData.username);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      
    });

    

    return () => unsubscribe();
  }, [router]);

  if (!user) return <p>Redirecting...</p>;

  return (
    <div>
      FIshes re ceazyyy
    </div>
  );
}
