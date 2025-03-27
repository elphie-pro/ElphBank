"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollAnimation } from "../SlideAnimation";
import Marquee from "react-fast-marquee";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-24 ">
          <h3 className="md:text-[2.8rem] text-[2rem] font-bold text-black text-center">
            Why Elph<span className="text-[#2EC4B6]">Bank?</span>
          </h3>
          <div className="flex gap-[4rem] justify-between md:gap-[0rem] md:pt-20 pt-10 items-center flex-col md:flex-row">
            <ScrollAnimation from={-200} to={0}>
              <div className="md:w-[25rem] md:h-[23rem] rounded-3xl bg-[#cbf3f0] p-8">
                <Image
                  src="/hugeicons_lock.png"
                  width={50}
                  height={38}
                  alt="keylock"
                />
                <div className="pt-[4.5rem]">
                  <h3 className="text-black font-semibold text-[1.8rem]">
                    100% Secure
                  </h3>
                  <p className="font-light text-black  pt-3">
                    Our service is highly secure. There is no chance of getting
                    hacked
                  </p>
                  <button className="mt-7 rounded-xl text-black w-[8rem] h-[2.5rem] bg-[#2EC4B6]">
                    Learn More
                  </button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation yfrom={200} yto={0}>
              <div className="md:w-[25rem] md:h-[23rem] rounded-3xl bg-[#cbf3f0] p-8">
                <Image src="/Icon.png" width={50} height={38} alt="keylock" />
                <div className="pt-[4.5rem]">
                  <h3 className="text-black font-semibold text-[1.8rem]">
                    All in One
                  </h3>
                  <p className="font-light text-black  pt-3">
                    All the features available in this one would definitely save
                    you some time.
                  </p>
                  <button className="mt-7 rounded-xl text-black w-[8rem] h-[2.5rem] bg-[#2EC4B6]">
                    Learn More
                  </button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation from={200} to={0}>
              <div className="md:w-[25rem] md:h-[23rem] rounded-3xl bg-[#cbf3f0] p-8">
                <Image
                  src="/mingcute_lightning-line.png"
                  width={50}
                  height={38}
                  alt="keylock"
                />
                <div className="pt-[4.5rem]">
                  <h3 className="text-black font-semibold text-[1.8rem]">
                    Super Fast
                  </h3>
                  <p className="font-light text-black  pt-3">
                    You can send money with one click. As we pride ourselves
                    with fast delivery
                  </p>
                  <button className="mt-7 rounded-xl text-black w-[8rem] h-[2.5rem] bg-[#2EC4B6]">
                    Learn More
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="pt-16">
                <h3 className="md:text-[2.3rem] text-[1.5rem] text-[#2EC4B6] font-semibold">Our Services</h3>
                <div className="p-10 ml-6 flex flex-col gap-16">
                  <Marquee behavior="" direction="" autoFill = {true} pauseOnHover>
                     <div className="flex gap-">
                        <Image src="/Group 7.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]"/>
                        <Image src="/Group 8.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]" />
                        <Image src="/Group 9.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]" />
                        <Image src="/Group 10.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]"/>
                    </div>
                  </Marquee>
                  <Marquee behavior="" direction="left" autoFill = {true} pauseOnHover>
                     <div className="flex gap-">
                        <Image src="/Group 12.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]"/>
                        <Image src="/Group 13.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]" />
                        <Image src="/Group 14.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]" />
                        <Image src="/Group 15.png" width={300} height={20} alt="airtime" className="px-10 md:w-[20rem]"/>
                    </div>
                  </Marquee>
                </div>
          </div>
      </div>
    </div>
  );
}
