"use client"

export default function Page({tran}) {
    let dateTime = "No date";
    let datet = "No data"
    let timet = "No time"
    
    // Check if tran.Time exists and has seconds property
    if (tran && tran.Time && tran.Time.seconds) {
        // Convert Firestore Timestamp to JavaScript Date
        const date = new Date(tran.Time.seconds * 1000);
        
        // Get date components
        const month = date.getMonth() + 1; // Months are 0-indexed
        const day = date.getDate();
        const year = date.getFullYear().toString().slice(-2); // Get last 2 digits
        
        // Get Time components
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        
        // Format as MM-DD-YY || HH:MM:SS
        dateTime = `${month}-${day}-${year} || ${hours}:${minutes}:${seconds}`;
        datet = `${month}-${day}-${year}`
        timet  = `${hours}:${minutes}:${seconds}`
        console.log("Custom formatted date and Time:", dateTime);
    }

    return (
        <div className="flex h-[3.5rem] rounded-xl border-2 border-[#2ec4b6] p-3  -px-5 justify-between">
            <p className="md:w-[10rem] w-[7rem] mt-[-.5rem] md:mt-0">{tran.accountName}</p>
            <p className="hidden md:block md:w-[9rem] text-center">{tran.Description}</p>
            <p className="hidden md:block">{dateTime}</p>
            <div className="flex flex-col md:hidden block mt-[-.5rem]">
                <p>{datet}</p>
                <p>{timet}</p>
            </div>
            <p>₦{tran.amout}</p>
        </div> 
    );
}