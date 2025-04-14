import Image from "next/image";

export default function Page() {
    

    return (
        <div className="text-black ml-[90.5rem] pt-[1rem] pb-[2rem]">
            <div className="flex gap-5">
                <button  className="cursor-pointer"><Image src={'/Group 25.svg'} width={50} height={20} alt="s"/></button>
                <button className="cursor-pointer"><Image src={'/Group 28.svg'} width={50} height={20} alt="s"/></button>
            </div>
        </div>
    );
}