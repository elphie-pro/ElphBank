"use client";
import Image from "next/image";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import { useRef } from "react";

export default function Page() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  return (
    <div className="bg-[#2EC4B6] w-full">
      <div className="w-full block max-w-[100rem] mx-auto px-4 pb-12 md:pb-2">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="flex justify-between pt-8"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-[3rem] md:text-[4rem] leading-tight font-bold">
              Effortless <br /> Easy <br /> Encrypted.
            </h2>
            <p className=" text-[.9rem] md:text-[1.2rem]">
              Connect your money to your friends, <br /> family & brands
            </p>
            <Link
              href=""
              className="bg-black w-[12rem] h-[3rem] text-center rounded-xl pt-[.6rem] text-[1.2rem] block"
            >
              Get Started
            </Link>
          </div>
          <div className="mt-28">
            <div>
              <motion.div className="">
                <Image
                  src="/frame 2.png"
                  width={300}
                  height={50}
                  alt="Phone"
                  className="pt-14 ml-[-18rem]  hidden md:block"
                />
              </motion.div>
              <Image
                src="/frame 1.png"
                width={300}
                height={60}
                alt="Phone"
                className="md:mt-[-39rem] mt-[-70rem] md:ml-[2rem] md:w-[20rem] ml-[3rem]"
              />
              <Image
                src="/frame 21.png"
                width={300}
                height={50}
                alt="Phone"
                className="pt-4 w-[40rem] md:hidden block"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// w-full block max-w-[100rem] mx-auto px-4 pb-12 md:pb-2

const mobile = true;
