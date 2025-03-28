"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase-config";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login"); 
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) return <p>Redirecting...</p>;

  return <h1>Welcome, {user.displayName}!</h1>;
}
