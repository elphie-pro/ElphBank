"use client"
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar'
import Link from 'next/link';
import Image from 'next/image';
import Buttons from '@/components/Dashboard/Buttons'

export default function Page() {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      };
    return (
         <motion.div variants={variants} initial="hidden" animate="show" className=' bg-white dark:bg-[#161616] w-full overflow-hidden min-h-screen'>
            <Sidebar />
            <div className="w-full block max-w-[100rem] mx-auto px-4 py-8 pb-1">
                <h1 className=' md:ml-[15rem] mt-[1rem] absolute text-[2.3rem] text-[#2ec4b6] font-bold'>Your Questions <br /> Resolved in One Place</h1>
                <p className=' md:ml-[15rem] mt-[8rem] absolute text-[1rem] text-[#2ec4b6] font-semibols'>Here you’ll get a brief explanation of each page available and  <br />
                    where you can get certain features</p>
                <Buttons />
                <div className='flex justify-between pt-22 font-black text-black dark:text-white ml-[15rem]'>
            <div className='flex flex-col gap-4'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facere recusandae perferendis ducimus dolorum dolor ipsa repellendus similique eligendi dicta fugit quo ipsum itaque non deleniti voluptatum labore voluptatem praesentium!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam laudantium exercitationem dignissimos eos illo quasi libero distinctio natus explicabo. Deserunt veniam hic culpa sit, itaque consectetur, in illum qui, porro sequi quos et nemo quia voluptatum molestias. Tenetur expedita necessitatibus architecto libero totam, quas fugit labore laboriosam iusto illum.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim a, sit iure repellendus dolore accusantium culpa qui beatae doloremque mollitia non accusamus, esse aperiam excepturi praesentium explicabo atque similique itaque? Ea nostrum officiis distinctio quae quasi soluta aspernatur tempora, perspiciatis nihil sapiente, dignissimos similique ipsa libero corporis sit doloribus recusandae maiores inventore vel tempore explicabo minima? Nemo veritatis iste iure, sed fugiat non vero soluta et ratione libero magni? Repudiandae sint nesciunt non doloribus eaque hic quos possimus dolorum, excepturi molestiae fugiat rem, obcaecati eum. Cum possimus soluta doloremque?</p>

            </div>
            <div className='flex flex-col gap-4'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facere recusandae perferendis ducimus dolorum dolor ipsa repellendus similique eligendi dicta fugit quo ipsum itaque non deleniti voluptatum labore voluptatem praesentium!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam laudantium exercitationem dignissimos eos illo quasi libero distinctio natus explicabo. Deserunt veniam hic culpa sit, itaque consectetur, in illum qui, porro sequi quos et nemo quia voluptatum molestias. Tenetur expedita necessitatibus architecto libero totam, quas fugit labore laboriosam iusto illum.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim a, sit iure repellendus dolore accusantium culpa qui beatae doloremque mollitia non accusamus, esse aperiam excepturi praesentium explicabo atque similique itaque? Ea nostrum officiis distinctio quae quasi soluta aspernatur tempora, perspiciatis nihil sapiente, dignissimos similique ipsa libero corporis sit doloribus recusandae maiores inventore vel tempore explicabo minima? Nemo veritatis iste iure, sed fugiat non vero soluta et ratione libero magni? Repudiandae sint nesciunt non doloribus eaque hic quos possimus dolorum, excepturi molestiae fugiat rem, obcaecati eum. Cum possimus soluta doloremque?</p>


            </div>
          
            </div>
                {/* copyright */}
        <div className="mt-[3rem] ml-[50rem]">
            <p className="md:text-[.9rem] md:ml-[25.3rem]  text-[.7rem] text-[#2EC4BE] font-semibold">© 2025 ElphBank Technologies. All rights reserved</p>
        </div>
            </div>
        </motion.div>
    );
}