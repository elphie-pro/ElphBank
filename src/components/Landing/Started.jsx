"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page() {
  const route = useRouter()
  return (
    <div className="bg-[#2EC4B6] w-full ">
      <div className="w-full block max-w-[100rem] mx-auto px-4 pb-12 md:pb-0 overflow-hidden">
        <div
          className="flex flex-col md:flex-row md:justify-between pt-18"
        >
          <ScrollAnimation from={-200} to={0}>
              <div className="flex flex-col gap-5">
              <h2 className="text-[3rem] md:text-[4rem] leading-tight font-bold">
                Effortless <br /> Easy <br /> Encrypted.
              </h2>
              <p className=" text-[.9rem] md:text-[1.2rem]">
                Connect your money to your friends, <br /> family & brands
              </p>
              <button
                className="bg-black w-[12rem] h-[3rem] text-center rounded-xl pt-[.1rem] text-[1.2rem] cursor-pointer" onClick={() => route.push('/login')}
              >
                Get Started
              </button>
            </div>
          </ScrollAnimation>
          
          <div className="mt-28">
            <div>
              <ScrollAnimation from={200} to={0} className="">
                <Image
                  src="/group 11.svg"
                  width={600}
                  height={50}
                  alt="Phone"
                  className=" ml-[1.5rem]   hidden md:block"
                />
              </ScrollAnimation>
              <ScrollAnimation from={200} to={0}>
                <Image
                src="/frame 21.png"
                width={250}
                height={50}
                alt="Phone"
                className=" ml-[2.4rem] mt-[-4rem] md:hidden block"
              />
              </ScrollAnimation>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// w-full block max-w-[100rem] mx-auto px-4 pb-12 md:pb-2

const mobile = true;
