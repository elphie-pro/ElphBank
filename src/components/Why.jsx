"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollAnimation } from "./SlideAnimation";

export default function Page() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  return (
    <div className="bg-white">
      <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-24 ">
        <motion.div variants={variants} initial="hidden" animate="show">
          <h3 className="md:text-[2.8rem] text-[2rem] font-bold text-black text-center">
            Why Elph<span className="text-[#2EC4B6]">Bank?</span>
          </h3>
          <div className="flex gap-[4rem] md:gap-[12rem] md:pt-20 pt-10 flex-col md:flex-row">
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
                    100% Secure
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
                <h3 className="text-[2.3rem] text-[#2EC4B6] font-semibold">Our Services</h3>
                <div>
                    <div className="flex gap-9">
                        -
                    </div>
                </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
