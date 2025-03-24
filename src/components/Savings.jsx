"use client"
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation } from "./SlideAnimation";
import { motion } from "framer-motion";

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (       
    <div className="bg-[#cbf3f0] overflow-hidden">
        <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-24 ">
            <motion.div variants={variants} initial="hidden" animate="show">
                <h3 className="md:text-[2.8rem] text-[2rem] text-[#2EC4B6] text-center font-bold">Boost your Savings</h3>
                <div className="flex flex-col md:flex-row justify-between pt-18 gap-[4rem] md:gap-[0rem]">
                    <ScrollAnimation yfrom={200} to={0} >
                        <Image src='/Rectangle 31.png' width={350} height={50} alt="background" className=""/>
                        <div className="flex-col gap-5 mt-[-30rem] absolute">
                            <div className="w-[4.5rem] h-[2.3rem] bg-[#CBF3F0] text-black p-2 ml-[1rem] md:mt-[0rem] mt-8 rounded-3xl"><h3 className="ml-3 -mt-[.1rem] font-bold">One</h3></div>
                            <div className="flex flex-col pt-10 pl-6">
                                <Image src='/fluent-color_savings-32.png' width={130} height={50} alt="pig" />
                                <div className="flex flex-col text-black font-semibold pt-6 pl-3">
                                    <h3 className="text-[1.3rem] font-bold">Spend Better</h3>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Get fee-free overdrafts</h4>
                                    </div>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={10} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Get paid up to 2 days faster</h4>
                                    </div>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Build Credit with every swipe</h4>
                                    </div>
                                </div>
                                <div className="flex pt-8 pl-3">
                                    <button className="bg-[#cbf3f0] w-[2.5rem] rounded-xl p-1"><Image src='/mingcute_arrow-right-fill.png' width={30} height={50} alt="arrow"/></button>
                                    <button className="bg-[#cbf3f0] w-[14rem] rounded-xl p-1 text-[#2EC4B6]">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation yfrom={-200} to={0} >
                        <Image src='/Rectangle 31.png' width={350} height={50} alt="background" className=""/>
                        <div className="flex-col gap-5 mt-[-30rem] absolute">
                            <div className="w-[4.5rem] h-[2.3rem] bg-[#CBF3F0] text-black p-2 md:mt-[0rem] mt-8 ml-[1rem] rounded-3xl"><h3 className="ml-3 -mt-[.1rem] font-bold">Two</h3></div>
                            <div className="flex flex-col pt-10 pl-6">
                                <Image src='/fxemoji_moneybag.png' width={130} height={50} alt="pig" />
                                <div className="flex flex-col text-black font-semibold pt-6 pl-3">
                                    <h3 className="text-[1.3rem] font-bold">Save Better</h3>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Saving pods or goals</h4>
                                    </div>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={10} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Earn up to 30% on savings</h4>
                                    </div>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Round up feature to aid change</h4>
                                    </div>
                                </div>
                                <div className="flex pt-8 pl-3">
                                    <button className="bg-[#2EC4B6] w-[2.5rem] rounded-xl p-1"><Image src='/mingcute_arrow-right-fill white.png' width={30} height={50} alt="arrow"/></button>
                                    <button className="bg-[#2EC4B6] w-[14rem] rounded-xl p-1 text-white">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation yfrom={200} to={0} >
                        <Image src='/Rectangle 31.png' width={350} height={50} alt="background" className=""/>
                        <div className="flex-col gap-5 mt-[-30rem] absolute">
                            <div className="w-[4.5rem] h-[2.3rem] bg-[#CBF3F0] text-black p-2 md:mt-[0rem] mt-8 ml-[1rem] rounded-3xl"><h3 className="ml-1 -mt-[.1rem] font-bold">Three</h3></div>
                            <div className="flex flex-col pt-10 pl-6">
                                <Image src='/streamline_investment-selection-solid.png' width={130} height={50} alt="pig" />
                                <div className="flex flex-col text-black font-semibold pt-6 pl-3">
                                    <h3 className="text-[1.3rem] font-bold">Invest Better</h3>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Access to investment tools</h4>
                                    </div>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={10} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">Start with as little as 1000</h4>
                                    </div>
                                    <div className="pt-3 flex gap-3">
                                        <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                        <h4 className="md:text-[.9rem] text-[.9rem]">No fees on crypto or stock trading</h4>
                                    </div>
                                </div>
                                <div className="flex pt-8 pl-3">
                                    <button className="bg-[#cbf3f0] w-[2.5rem] rounded-xl p-1"><Image src='/mingcute_arrow-right-fill.png' width={30} height={50} alt="arrow"/></button>
                                    <button className="bg-[#cbf3f0] w-[14rem] rounded-xl p-1 text-[#2EC4B6]">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </motion.div>
        </div>
    </div>
    );
}