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
    <div>
      <nav className="bg-[#2ec4b6] pt-4 h-[5rem] p-4 md:hidden block">
          <div className="w-[10rem] ml-[13rem] mt-[.5rem]">
              <Link href="/" className="">
                <Image
                  src="/Group 5.png"
                  width={150}
                  height={38}
                  alt="ElphBank Logo"
                />
              </Link>
          </div>
        </nav>
      <div className="bg-[#2EC4B6] h-screen md:w-[18rem] fixed overflow-y-hidden hidden md:block">
      <div className="py-7 px-4 md:pb-">
        <nav className="py-16 flex flex-col gap-[10rem] justify-between">
          <div className="w-[10rem] hidden md:block">
            <Link href="/dashboard" className="md:absolute">
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
              
              <li className={path === '/budget' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Accounting.svg' width={30} height={10} alt="con"/>
                <Link href="/budget" className="pl-2 pt-1">Budgets</Link>
              </li>
              <li className={path === '/history' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Ledger.svg' width={30} height={10} alt="con"/>
                <Link href="/history" className="pl-2 pt-1">History</Link>
              </li>
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Help.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">Help</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col gap-[5rem] md:pt-[15rem] pl-2">
              <button className="font-semibold flex cursor-pointer" onClick={logOut}>
                  <Image src='/Move Up.svg' width={30} height={10} alt="con"/>
                  <h2 className="pl-2 pt-1">Sign Out</h2>
              </button>
            </div>
          </div>
          <button onClick={handleToggle} className="md:hidden block absolute w-[10rem] mt-[-20rem]"><Image src='/Group 122.png' width={30} height={50} alt="toggle"/></button>
                      <div
                        className={`${
                          !open ? "hidden" : "block"
                        } md:hidden bg-[#2EC4B6] shadow-2xl absolute top-16 right-0 w-[10rem] p-8`}
                      >

                      </div>
          </nav>
          </div>
          </div>
    </div>
    
  )}