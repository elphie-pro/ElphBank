"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Page() {
    const {theme, setTheme} = useTheme()

    return (
        <div className="">
            <button onClick={() => {setTheme(theme === "light" ? "dark" : "light")}} className="cursor-pointer">
                <Image src={theme === "dark" ? 'Group 33.svg' : 'Group 34.svg'} width={40} height={20} alt="20" className="absolute "/>
                {/* <Image src='Group 34.svg' width={40} height={20} alt="20" className="absolute rotate-90 scale-0 dark:-rotate-0 dark:scale-100"/> */}
            </button>
        </div>
    );
}