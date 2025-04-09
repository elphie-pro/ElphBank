"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const [open, setOpen] = useState(false);
  const path = usePathname()
  const route = useRouter()

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-[#2EC4B6] h-screen w-[15rem] fixed overflow-y-hidden hidden md:block">
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
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Exchange.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">Transfers</Link>
              </li>
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Insert Card.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">Withdraw</Link>
              </li>
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Accounting.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">Budgets</Link>
              </li>
              <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Ledger.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">History</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col gap-[5rem] pt-[15rem] pl-2">
            <li className={path === '/' ?  "font-bold flex text-underline": "text-white flex text-center"}>
                <Image src='/Help.svg' width={30} height={10} alt="con"/>
                <Link href="/" className="pl-2 pt-1">Help</Link>
              </li>
            </div>
          </div>
          </nav>
          </div>
          </div>
  )}