"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
  const [open, setOpen] = useState(false);
  const path = usePathname()

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-[#2EC4B6]">
      <div className="w-full block max-w-[100rem] mx-auto px-4 md:pb-2 ">
        <nav className="py-6 flex justify-between">
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
          <div className="pt-2 pl-2 hidden md:block">
            <ul className="flex gap-20 text-black">
              <li className={path === '/' ?  "font-bold w-[5rem] pl-4 pt-1 h-[2rem] bg-[#cbf3f0] -mt-1 rounded-xl": "text-white "}>
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
            <div className="flex gap-5">
              <Link
                href="/login"
                className="border-2 w-[8rem] h-[2.5rem] text-center pt-[.4rem] font-semibold rounded-[0.6rem]"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className=" w-[8rem] h-[2.5rem] font-semibold text-center pt-[.5rem] rounded-[0.6rem] bg-white text-[#2ec4b6]"
              >
                Sign Up
              </Link>
            </div>
          </div>
            <button onClick={handleToggle} className="md:hidden block"><Image src='/Group 122.png' width={30} height={50} alt="toggle"/></button>
            <div
              className={`${
                !open ? "hidden" : "block"
              } md:hidden bg-[#2EC4B6] shadow-2xl absolute top-16 right-0 w-[24rem] p-8`}
            >
              <ul className="flex flex-col gap-5 text-black">
                <li className={path === '/' ?  "font-bold w-[5rem] pl-4 pt-1 h-[2rem] bg-[#cbf3f0] -mt-1 rounded-xl": "text-white "}>
                  <Link href="/">Home</Link>
                </li>
                <li className={path === '/features' ?  "font-bold w-[6.5rem] pl-4 pt-1 h-[2rem] bg-[#cbf3f0] -mt-1 rounded-xl": "text-white "}>
                  <Link href="/features">Features</Link>
                </li>
                <li className={path === '/about' ?  "font-bold w-[5rem] pl-4 pt-1 h-[2rem] bg-[#cbf3f0] -mt-1 rounded-xl": "text-white "}>
                  <Link href="/about">About</Link>
                </li>
              </ul>
              <div className={` ${!open ? "hidden" : "block"} mt-4`}>
                <div className="flex gap-5">
                  <Link
                    href="/login"
                    className="border-2 w-[8rem] h-[2.5rem] text-center pt-[.4rem] font-semibold rounded-[0.6rem]"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className=" w-[8rem] h-[2.5rem] font-semibold text-center pt-[.5rem] rounded-[0.6rem] bg-white text-[#2ec4b6]"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
        </nav>
      </div>
    </div>
  );
}
