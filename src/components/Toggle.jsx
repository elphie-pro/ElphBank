"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Page() {
    const {theme, setTheme} = useTheme()

    return (
        <div className="absolute mt-[.5rem] ml-[110em] w-[10rem]">
            <button onClick={() => {setTheme(theme === "light" ? "dark" : "light")}} className="cursor-pointer">
                <Image src='Group 33.svg' width={40} height={20} alt="20" className="absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0"/>
                <Image src='Group 34.svg' width={40} height={20} alt="20" className="absolute rotate-90 scale-0 dark:-rotate-0 dark:scale-100"/>
            </button>
        </div>
    );
}