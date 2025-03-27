"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page() {
    return (   
            <div className="bg-[#2ec4b6] overflow-hidden">
                <ScrollAnimation from={-200} to={0}>
                        <Image src='/Group 17.svg' width={10} height={20} alt="about" className="md:w-[130rem] h-[20rem] w-[100rem] hidden md:block"/>
                        <Image src='/Group 19.svg' width={10} height={20} alt="about" className="w-[130rem] md:hidden block"/>
                    </ScrollAnimation>
              <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-24 ">
                <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:pt-10 justify-between">
                    <ScrollAnimation yfrom={200} to={0} className="">
                        <Image src='/Group 18.svg' width={0} height={20} alt="about" className="md:w-[35rem] hidden md:block"/>
                    </ScrollAnimation>
                    <ScrollAnimation from={200} to={0} className="md:w-[50rem] w-[21.5rem] h-[47rem] md:h-[33rem] bg-[#cbf3f0] rounded-3xl pt-7 pl-2 md:pl-28 flex flex-col gap-5 text-black">
                        <div className="flex flex-col gap-3">
                        <h1 className="text-[#2ec4b6] text-[1.3rem]">About <span className="font-bold">Elph<span className="text-black">Bank</span></span></h1>
                        <h1 className="text-[2.8rem] leading-tight">Smart Strategies for <br />  Maximizing Your Savings</h1>
                        <p className="text-[1.15rem] text-[#818f96]">Building a strong financial future requires strategic savings <br />
                            habits that ensure long-term prosperity. By implementing <br />
                            the right approaches, you can grow your savings effortlessly <br />
                            while securing financial stability.</p>
                            <div className="flex flex-col">
                                <div className="pt-3 flex gap-3">
                                    <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96]">Reduce Unnecessary Expenses</h4>
                                </div>
                                <div className="pt-3 flex gap-3">
                                    <Image src='/ri_checkbox-circle-fill.png' width={25} height={10} alt="check" />
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96]">Leverage High-Interest Accounts</h4>
                                </div>
                                <div className="pt-3 flex gap-3">
                                    <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96]">Take Advantage of Rewards & Discounts</h4>
                                </div>
                            </div>
                        </div>
                        
                        <div className="md:ml-[25rem] ml-[10rem] pt-5">
                            <button className="text-white w-[10rem] h-[3rem] bg-[#2ec4b6] p-3 rounded-2xl">Learn More</button>
                        </div> 
                    </ScrollAnimation>
                    
                </div>
              </div>
            </div>
    );
}