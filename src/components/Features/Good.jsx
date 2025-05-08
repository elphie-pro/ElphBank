import Image from "next/image";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page() {
    return (
        <div className="bg-[#2ec4b6] dark:bg-[#161616] overflow- ">
            <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-3 ">
                <div className=" md:h-[40rem] rounded-2xl flex flex-col items-center justify-between md:flex-row px-[3.5rem] bg-[#cbf3f0] dark:bg-[#2ec4b6] p-8 text-black">
                    <ScrollAnimation yfrom={-200} to={0}>
                        <Image src='/Rectangle 71.svg' width={0} height={20} alt="about" className="md:w-[23rem] w-full"/>
                    </ScrollAnimation>
                    <ScrollAnimation from={200} to={0} className="pt-14 ">
                        <h3 className="md:text-[3.2rem] text-[1.9rem] font-semibold">Relax, You are <br className="hidden md:block"/> in Good Hands</h3>
                        <div className="flex gap-10">
                            <div className="flex-col gap-3">
                                <div className="pt-3">
                                    <h1 className="font-semibold text-[1rem]">Fast and AI Powered</h1>
                                    <p className="text-[#818f96] text-[.9rem]">Our AI-driven technology <br className="hidden md:block"/>
                                        ensures instant transactions, <br className="hidden md:block"/>
                                        smart automation and <br className="hidden md:block"/>
                                        seamless banking experiences.</p>
                                </div>
                                <div className="pt-3">
                                    <h1 className="font-semibold text-[1rem]">Transparent</h1>
                                    <p className="text-[#818f96] text-[.9rem]">No hidden fees, no surprises <br className="hidden md:block"/>
                                        just clear, honest banking with <br className="hidden md:block"/>
                                        top-tier security.</p>
                                </div>
                                <div className="pt-3">
                                    <h1 className="font-semibold text-[1rem]">Efficient</h1>
                                    <p className="text-[#818f96] text-[.9rem]">From payments to customer <br className="hidden md:block"/>
                                        support, everything is optimized <br className="hidden md:block"/>
                                        for speed and reliability.</p>
                                </div>
                            </div>
                            <div className="flex-col gap-3 text-right">
                                <div className="pt-3">
                                    <h1 className="font-semibold text-[1rem]">Experieced</h1>
                                    <p className="text-[#818f96] text-[.9rem]">With years of expertise, <br className="hidden md:block"/>
                                        we deliver reliable banking <br className="hidden md:block"/>
                                        solutions trusted by thousands.</p>
                                </div>
                                <div className="pt-3">
                                    <h1 className="font-semibold text-[1rem]">Best Rates</h1>
                                    <p className="text-[#818f96] text-[.9rem]">Enjoy competitive rates on <br className="hidden md:block"/>
                                        savings, loans, and investments <br className="hidden md:block"/>
                                        to maximize your money.</p>
                                </div>
                                <div className="pt-3">
                                    <h1 className="font-semibold text-[1rem]">Easy to Use</h1>
                                    <p className="text-[#818f96] text-[.9rem]">A simple, intuitive interface <br className="hidden md:block"/> makes 
                                        managing your finances <br className="hidden md:block"/> effortless 
                                        —no complications, <br className="hidden md:block"/> just convenience.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="md:pt-24 pt-18">
                        <p className="md:text-[.9rem] text-[.7rem] text-[white] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
                </div>
            </div>
        </div>
    );
}