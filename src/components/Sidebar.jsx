"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { auth } from "@/firebase-config";
import { signOut } from "firebase/auth";


export default function Page() {
  const [open, setOpen] = useState(false);
  const path = usePathname()
  const route = useRouter()

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  
      const logOut = async() => {
          try{
              await signOut(auth)
              toast.success('You have successfully signed out')
              route.push('/')
          }
          catch(error) {
              toast.error(error)
          }
      }
  return (
    <div className="bg-[#2EC4B6] h-screen w-[18rem] fixed overflow-y-hidden hidden md:block">
      <div className="py-7 px-4 md:pb-">
        <nav className="py-6 flex flex-col gap-[10rem] justify-between">
          <div className="w-[10rem]">
            <Link href="/" className="md:absolute">
              <Image
                src="/Group 5.png"
                width={150}
                height={38}
                alt="ElphBank Logo"
              />
            </Link>
          </div>
          <div className=" pl-2 hidden md:block">
            <ul className="flex flex-col gap-[1.8rem] text-white">
              <li className={path === '/dashboard' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/control panel.svg' width={30} height={10} alt="con"/>
                <Link href="/dashboard" className="pl-2 pt-1">Dashboard</Link>
              </li>
              <li className={path === '/transfer' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Exchange.svg' width={30} height={10} alt="con"/>
                <Link href="/transfer" className="pl-2 pt-1">Transfers</Link>
              </li>
              
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Accounting.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">Budgets</Link>
              </li>
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Ledger.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">History</Link>
              </li>
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Help.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">Help</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col gap-[5rem] pt-[18rem] pl-2">
              <button className="font-semibold flex cursor-pointer" onClick={logOut}>
                  <Image src='/Move Up.svg' width={30} height={10} alt="con"/>
                  <h2 className="pl-2 pt-1">Sign Out</h2>
              </button>
            </div>
          </div>
          </nav>
          </div>
          </div>
  )}