import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase-config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export default function Page() {
    const route = useRouter()

    const logOut = async() => {
        try{
            await signOut(auth)
            toast.success('You have successfully signed out')
            route.push('/')
        }
        catch(error) {
            toast.error(error)
        }
    }

    return (
        <div className="text-black ml-[90rem] pt-7">
            <div className="flex gap-5">
                <button  className="cursor-pointer"><Image src={'/Group 25.svg'} width={50} height={20} alt="s"/></button>
                <button className="cursor-pointer"><Image src={'/Group 26.svg'} width={50} height={20} alt="s"/></button>
                <button className="cursor-pointer" onClick={logOut}><Image src={'/Group 27.svg'} width={55} height={20} alt="s"/></button>
                <button className="cursor-pointer"><Image src={'/Group 28.svg'} width={50} height={20} alt="s"/></button>
            </div>
        </div>
    );
}