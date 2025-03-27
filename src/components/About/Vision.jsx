"use client"
import Image from "next/image";
import { ScrollAnimation } from "../SlideAnimation";
export default function Page() {
    return (
    <div className="bg-white overflow-hidden">
        <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 md:pb-3 ">
            <div className="flex flex-col md:flex-row gap-4 justify-between pt-18">
                <div className="flex flex-col items-center gap-9">
                    <ScrollAnimation from={-200} to={0} className="md:w-[35rem] md:h-[13rem] h-[16rem] rounded-3xl bg-[#cbf3f0] items-center flex flex-col gap-3 md:p-5">
                        <div className="w-[8rem] h-[2.3rem] bg-white text-[#2ec4b6] p-2 md:mt-[0rem] mt-8 -ml-[12rem] rounded-3xl">
                            <h3 className="ml-3 -mt-[.1rem] font-bold">Our Vision</h3>
                        </div>
                        <div className="px-4">
                            <p className="text-[#818f96] text-[.9rem]">We envision a world where banking is not just a necessity but a seamless 
                            experience that empowers people. By leveraging technology and customer 
                            -centric services, we aim to redefine the future of finance, making it more 
                            accessible, inclusive, and innovative for all.</p>
                        </div>
                        
                    </ScrollAnimation>
                    <ScrollAnimation from={200} to={0} className="md:w-[35rem] md:h-[13rem] h-[16rem] rounded-3xl bg-[#cbf3f0] items-center flex flex-col gap-3 md:p-5">
                        <div className="w-[8rem] h-[2.3rem] bg-white text-[#2ec4b6] p-2 md:mt-[0rem] mt-8 -ml-[12rem] rounded-3xl">
                            <h3 className="ml-2 -mt-[.1rem] font-bold">Our Mission</h3>
                        </div>
                        <div className="px-4">
                            <p className="text-[#818f96] text-[.9rem]">Our mission is to empower individuals and businesses by providing seamless,
                            secure, and accessible banking solutions. We believe that financial freedom 
                            should be within everyone's reach, and we strive to make banking effortless, 
                            transparent, and rewarding for our customers.</p>
                        </div>
                        
                    </ScrollAnimation>
                    <ScrollAnimation from={-200} to={0} className="md:w-[35rem] md:h-[15rem] h-[21.5rem] rounded-3xl bg-[#2ec4b6] items-center flex flex-col gap-3 md:p-5">
                        <div className="w-[8rem] h-[2.3rem] bg-white text-[#2ec4b6] p-2 md:mt-[0rem] mt-8 -ml-[12rem] rounded-3xl">
                            <h3 className="ml-3 -mt-[.1rem] font-bold">Our History</h3>
                        </div>
                        <div className="px-4">
                            <p className="text-[#818f96] text-[.9rem]">Established in 2025, ElphBank began with a vision to provide secure,
                            accessible, and innovative banking solutions for individuals and businesses.
                            Over the years, we have grown into a trusted financial institution, embracing 
                            cutting-edge technology and customer-centric services. Our commitment to 
                            financial empowerment and excellence continues to drive us forward, ensuring 
                            a stronger, smarter future for all.</p>
                        </div>
                        
                    </ScrollAnimation>
                </div>
                <ScrollAnimation yfrom={200} to={0}>
                    <Image src='/Group 16.svg' width={0} height={20} alt="about" className="w-full"/>
                </ScrollAnimation>
            </div>
            <div className="pt-34">
                        <p className="md:text-[.9rem] text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
             </div>
        </div>
    </div>
    );
}