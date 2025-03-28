"use client"
import { ScrollAnimation } from "../SlideAnimation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const route = useRouter()
    return (
        <div className="bg-[#2ec4b6] overflow-">
                        <ScrollAnimation from={-200} to={0}>
                                <Image src='/Group 177.svg' width={10} height={20} alt="about" className="md:w-[130rem] h-[20rem] w-[100rem] hidden md:block"/>
                                <Image src='/Group 199.svg' width={10} height={20} alt="about" className="w-[130rem] md:hidden block"/>
                            </ScrollAnimation>
                      <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-24 ">
                        <div className="h-[92rem] md:h-[38.5rem] rounded-2xl flex flex-col items-center justify-between md:flex-row md:px-[3.5rem] bg-[#cbf3f0] p-8 text-black">
                            <ScrollAnimation yfrom={200} to={0}>
                                 <Image src='/Rectangle 67.svg' width={0} height={20} alt="about" className="md:w-[23rem] w-full"/>
                            </ScrollAnimation>
                            <ScrollAnimation from={200} to={0} className="pt-4">
                                <h1 className="text-[2.8rem] font-semibold leading-tight">Smart Financial Solutions <br className="hidden md:block"/> for a Better Future</h1>
                                <p className="text-[#818f96] text-[1.15rem] pt-8">Manage your money effortlessly with our all-in-one financial <br className="hidden md:block"/>
                                    platform. Enjoy fee-free overdrafts, high-yield savings, and <br className="hidden md:block"/>
                                    commission-free investments, all in a 100% secure system with <br className="hidden md:block"/>
                                    no risk of hacks. Send money with super-fast one-click <br className="hidden md:block"/>
                                    transactions while accessing powerful budgeting tools to help <br className="hidden md:block"/> 
                                    you stay on track. Save time and simplify your finances— <br className="hidden md:block"/>
                                    all in one place.</p>
                            <div className="flex flex-col">
                                <div className="pt-8 flex gap-3">
                                    <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96] hidden md:block"> Set spending limits and track expenses effortlessly.</h4>
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96] md:hidden block"> Spending Limits & Tracking</h4>
                                </div>
                                <div className="pt-3 flex gap-3">
                                    <Image src='/ri_checkbox-circle-fill.png' width={25} height={10} alt="check" />
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96] md:hidden block"> Auto Bill Payments</h4>
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96] hidden md:block">Pay bills and subscriptions automatically with ease.</h4>
                                </div>
                                <div className="pt-3 flex gap-3">
                                    <Image src='/ri_checkbox-circle-fill.png' width={25} height={20} alt="check" />
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96] md:hidden block"> 24/7 Support</h4>
                                    <h4 className="md:text-[1rem] text-[.9rem] text-[#818f96] hidden md:block">Get assistance anytime with our dedicated support team.</h4>
                                </div>
                            </div>
                            <div className="md:ml-[26rem] ml-[6.5rem] pt-8">
                                <button className="text-white w-[10rem] h-[3rem] bg-[#2ec4b6] p-3 rounded-2xl cursor-pointer" onClick={() => {
                                    route.push('/login')
                                }}>Get Started</button>
                            </div> 
                            </ScrollAnimation>
                        </div>
                      </div>
        </div>
    );
}