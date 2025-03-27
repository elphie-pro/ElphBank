import Image from "next/image";
import { ScrollAnimation } from "../SlideAnimation";

export default function Page() {
    return (
        <div className="bg-[#2ec4b6] overflow- ">
            <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-24 ">
                <ScrollAnimation from={200} to={0} className="flex flex-col md:flex-row justify-between">
                    <h1 className="text-[3rem] font-semibold leading-tight">Benefits of Smarter <br className="hidden md:block"/> Financial Management</h1>
                    <p className="pt-[2.2rem]">Take control of your money with a smarter financial solution—spend with <br className="hidden md:block"/>
                        fee-free overdrafts and faster payments, save with high-yield options and <br className="hidden md:block"/>
                        round-up savings, and invest with zero trading fees.</p>
                </ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-between pt-18 text-black">
                    <ScrollAnimation from={-200} to={0} className="w-[18rem] h-[18rem] bg-[#cbf3f0] p-4 text-center rounded-2xl">
                        <div className="pl-12 -mt-5">
                            <Image src='/bar chart.svg' width={150} height={20} alt="about" className=""/>
                        </div>
                        <h1 className="text-[1.25rem] font-semibold">Automated Expense <br /> Tracker</h1>
                        <p className="text-[.9rem] pt-3"> Gain insights into your <br /> spending habits effortlessly.</p>
                    </ScrollAnimation>
                    <ScrollAnimation yfrom={200} to={0} className="w-[18rem] h-[18rem] bg-[#cbf3f0] p-6 text-center rounded-2xl">
                        <div className="pl-12 -mt-3">
                            <Image src='/lighting icon.svg' width={150} height={20} alt="about" className=""/>
                        </div>
                        <h1 className="text-[1.25rem] font-semibold pt-1">Instant Money <br /> Transer</h1>
                        <p className="text-[.9rem] pt-2"> Send and receive funds <br /> in real time.</p>
                    </ScrollAnimation>
                    <ScrollAnimation from={200} to={0} className="w-[18rem] h-[18rem] bg-[#cbf3f0] p-6 text-center rounded-2xl">
                        <div className="pl-12 -mt-3">
                            <Image src='/target.svg' width={150} height={20} alt="about" className=""/>
                        </div>
                        <h1 className="text-[1.25rem] font-semibold pt-1">Customizable Financial <br /> Goals</h1>
                        <p className="text-[.9rem] pt-2"> Set personalized milestones <br /> and track progress with ease.</p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}