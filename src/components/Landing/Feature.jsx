"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page() {
    return (
        <div className="bg-white dark:bg-black overflow-hidden text-black dark:text-white">
            <div className="w-full block max-w-[100rem] mx-auto px-4 md:py-12 pb-4 ">
                    <div className="text-center">
                        <h1 className="md:text-[3.2rem] text-[2.8rem] font-bold">All features in one web app</h1>
                        <p className="text-[1.1rem]">We have over 120+ features available in this bank, that’s why our clients<br />are more than others, we always try to add new features</p>
                        <div className="flex flex-col items-center justify-between pt-14 md:flex-row">
                            <div className="flex flex-col gap-4"> 
                                <ScrollAnimation yfrom={-200} to={0} className="w-[7.5rem] h-[7.5rem] bg-[#cbf3f0] dark:bg-[#2ec4b6] rounded-[120rem] p-4">
                                    <div className="flex flex-col ">
                                    <Image src='/hugeicons_money-send-circle.png' width={50} height={50} alt="send" className="ml-[1.2rem] dark:hidden block"/>
                                    <Image src='/hugeicons_money-send-circle.svg' width={50} height={50} alt="send" className="ml-[1.2rem] hidden dark:block"/>
                                    <h2 className="pt-4 font-bold">Save</h2>
                                    </div>
                                </ScrollAnimation>
                                <div className="pl-[14rem]">
                                    <ScrollAnimation yfrom={200} to={0} className="w-[7.5rem] h-[7.5rem] bg-[#cbf3f0] dark:bg-[#2ec4b6] rounded-[120rem] p-4">
                                        <div className="flex flex-col ">
                                            <Image src='/solar_ticket-broken.png' width={50} height={50} alt="send" className="ml-[1.2rem] dark:hidden block"/>
                                            <Image src='/solar_ticket-broken.svg' width={50} height={50} alt="send" className="ml-[1.2rem] hidden dark:block"/>
                                            <h2 className="pt-4 font-bold">Ticket</h2>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4"> 
                                <ScrollAnimation yfrom={-200} to={0} className="w-[7.5rem] h-[7.5rem] bg-[#cbf3f0] dark:bg-[#2ec4b6] rounded-[120rem] p-4">
                                    <div className="flex flex-col ">
                                    <Image src='/Invoice.png' width={50} height={50} alt="send" className="ml-[1.2rem] dark:hidden block"/>
                                    <Image src='/solar_bill-list-bold.svg' width={50} height={50} alt="send" className="ml-[1.2rem] hidden dark:block"/>
                                    <h2 className="pt-4 font-bold">Bill</h2>
                                    </div>
                                </ScrollAnimation>
                                <div className="pl-[14rem]">
                                    <ScrollAnimation yfrom={200} to={0} className="w-[7.5rem] h-[7.5rem] bg-[#cbf3f0] dark:bg-[#2ec4b6] rounded-[120rem] p-4">
                                        <div className="flex flex-col ">
                                            <Image src='/Shopping-cart.svg' width={50} height={50} alt="send" className="ml-[1.2rem] dark:hidden block"/>
                                            <Image src='/mdi-light_cart.svg' width={50} height={50} alt="send" className="ml-[1.2rem] hidden dark:block"/>
                                            <h2 className="pt-4 font-bold">Shopping</h2>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4"> 
                                <ScrollAnimation yfrom={-200} to={0} className="w-[7.5rem] h-[7.5rem] bg-[#cbf3f0] dark:bg-[#2ec4b6] rounded-[120rem] p-4">
                                    <div className="flex flex-col ">
                                    <Image src='/Vector.png' width={50} height={50} alt="send" className="ml-[1.2rem] dark:hidden block"/>
                                    <Image src='/Vectoer.svg' width={50} height={50} alt="send" className="ml-[1.2rem] hidden dark:block"/>
                                    <h2 className="pt-4 font-bold">Invest</h2>
                                    </div>
                                </ScrollAnimation>
                                <div className="pl-[14rem]">
                                    <ScrollAnimation yfrom={200} to={0} className="w-[7.5rem] h-[7.5rem] bg-[#cbf3f0] dark:bg-[#2ec4b6] rounded-[120rem] p-4">
                                        <div className="flex flex-col ">
                                            <Image src='/pepicons-pencil_internet.png' width={50} height={50} alt="send" className="ml-[1.2rem] dark:hidden block"/>
                                            <Image src='/pepicons-pencil_internet.svg' width={50} height={50} alt="send" className="ml-[1.2rem] hidden darl:block"/>
                                            <h2 className="pt-4 font-bold">Internet</h2>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-34">
                        <p className="md:text-[.9rem] text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
                    </div>
            </div>
        </div>
    );
}