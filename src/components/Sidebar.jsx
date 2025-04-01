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
    <div className="bg-[#2EC4B6] h-[62rem] w-[15rem]">
      <div className="    px-4 md:pb-2 ">
        <nav className="py-6 flex flex-col gap-[8rem] ">
          <div className="w-[10rem] ">
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
            <ul className="flex flex-col gap-[5rem] text-black">
              <li className={path === '/' ?  "font-bold w-[5rem] pl-4 pt-1 h-[2rem] bg-[#cbf3f0] -mt-1 rounded-xl": "text-white "}>
                <Image src='/control panel.svg' width={10} height={10} alt="con"/>
                <Link href="/" >Home</Link>
              </li>
              <li className={path === '/features' ?  "font-bold w-[6rem] pl-3 pt-1 h-[2rem] bg-[#cbf3f0] -mt-1 rounded-xl": "text-white "}>
                <Link href="/features">Features</Link>
              </li>
              <li className={path === '/about' ?  "font-bold w-[5rem] pl-4   pt-1 h-[2rem] bg-[#cbf3f0] -mt-1 rounded-xl": "text-white "}>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col gap-[5rem]">
              <button
                href="/login"
                className="border-2 w-[8rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer" onClick={() => route.push('/login')}
              >
                Sign In
              </button>
              <button
                href="/sign-up"
                className=" w-[8rem] h-[2.5rem] font-semibold text-center rounded-[0.6rem] bg-white text-[#2ec4b6] cursor-pointer" onClick={() => route.push('/sign-up')}
              >
                Sign Up
              </button>
            </div>
          </div>
          </nav>
          </div>
          </div>
  )}