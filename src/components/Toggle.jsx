"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    // Only run on client-side
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) {
        return <div className="w-10 h-5"></div>; // Placeholder with same dimensions
    }
    
    return (
        <div className="">
            <button 
                onClick={() => {setTheme(theme === "light" ? "dark" : "light")}} 
                className="cursor-pointer"
            >
                <Image 
                    src={theme === "dark" ? '/Group 33.svg' : '/Group 34.svg'} 
                    width={40} 
                    height={20} 
                    alt="Theme toggle" 
                    className="absolute"
                />
            </button>
        </div>
    );
}