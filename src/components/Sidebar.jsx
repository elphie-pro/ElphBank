"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { auth } from "@/firebase-config";
import { signOut } from "firebase/auth";
import { ScrollAnimation } from "./SlideAnimation";


export default function Page() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false)
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
    <div className="">
      <div>
      <nav className="bg-[#2ec4b6]  h-[5rem] w-screen px-[1.5rem] p-4 md:hidden block">
        <div className="flex justify-between">
          <div className=" pl-[rem] pt-[1rem] md:hidden block  ">
            <button onClick={handleToggle} className=" w-"><Image src='/Group 122.png' width={30} height={50} alt="toggle" className=""/></button>
          </div>
          <div className="w-[10rem] ml-[7rem] mt-[.5rem]">
                <Link href="/" className="">
                  <Image
                    src="/Group 5.png"
                    width={150}
                    height={38}
                    alt="ElphBank Logo"
                  />
                </Link>
            </div>
        </div>
         
        </nav>
      <div className="bg-[#2EC4B6] h-screen md:w-[18rem] fixed overflow-y-hidden hidden md:block">
      <div className="py-7 px-4 md:pb-">
        <nav className="py-9 flex flex-col gap-[10rem] justify-between">
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
              <button className="font-semibold flex cursor-pointer" onClick={() => {setShow(true)}}>
                  <Image src='/Move Up.svg' width={30} height={10} alt="con"/>
                  <h2 className="pl-2 pt-1">Sign Out</h2>
              </button>
            </div>
          </div>
          {/* Sign out */}
          { show && (
              <div onClick={() => {setShow(false)}} className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 text-black">
                  <div onClick={(e) => {e.stopPropagation()}} className=""> 
                      <ScrollAnimation yfrom={200} className='bg-[#cbf3f0] h-[11rem] md:w-[25rem] rounded-2xl flex flex-col gap-5 p-6'>
                        <div className='flex justify-between'>
                            <h2 className='text-[2rem] font-bold'>Confirm Sign Out</h2>
                            <button onClick={() => {setShow(false)}} 
                            className="cursor-pointer"><Image src={'/material-symbols_cancel-outline.svg'} width={50} height={20} alt="s"/></button>    
                        </div>
                        <div className="flex justify-between pt-5">
                            <button className="bg-gray-500 text-white w-[8rem] h-[2rem] font-light rounded-xl text-[1rem] cursor-pointer shadow-[3px_3px_#99b7b5]" onClick={() => {setShow(false)}}>Cancel</button>
                            <button className="bg-green-300 text-white w-[8rem] h-[2rem] font-light rounded-xl text-[1rem] cursor-pointer shadow-[3px_3px_#99b7b5]" onClick={logOut}>Sign Out</button>
                        </div>
                    </ScrollAnimation>
                      
                  </div>
              </div>
            )}
             
          </nav>
          </div>
      </div>
      <div
                className={`${
                  !open ? "hidden" : "block"
                } bg-[#2ec4b6] h-[45rem] w-1/2 z-10 mt-[4rem] flex flex-col gap-5 pl-4 top-0 left-0 text-black absolute`}
              >
                <div className="pt-[7rem] ">
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
                <div className="flex flex-col gap-[5rem] pt-[12rem] text-white">
                  <button className="font-semibold flex cursor-pointer" onClick={() => {setShow(true)}}>
                      <Image src='/Move Up.svg' width={30} height={10} alt="con"/>
                      <h2 className="pl-2 pt-1">Sign Out</h2>
                  </button>
                </div>
              </div>
          </div>
    </div>
    
  )}