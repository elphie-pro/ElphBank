export default function Page() {
    return (
        <div className="text-black flex flex-col gap-10">
            {/* Quick Transfer */}
            <div>
                <h1 className="text-[1.3rem] font-bold">Quick Transfer</h1> 
                <div className="flex gap-4 pt-10">
                    <input type="text" placeholder="Enter Account id or Email" className="w-[24rem] p-4 h-[2.5rem] bg-[#f6f6f6] rounded-lg"/>
                    <input type="text" placeholder="Enter Account id or Email" className="w-[19rem] p-4 h-[2.5rem] bg-[#f6f6f6] rounded-lg"/>
                    <button className="w-[2.5rem] h-[2.5rem] bg-[#2ec4b6] text-white rounded-lg text-[1.5rem]">&gt;</button>
                </div>
            </div>
            {/* Budgets */}
            <div className="pt-10">
                <div className="flex justify-between">
                     <h1 className="text-[1.3rem] font-bold">Budgets</h1> 
                        <div className="flex gap-5">
                        <button className=" w-[9rem] h-[2.5rem] font-semibold text-center rounded-[0.6rem] bg-[#2ec4b6] text-[white] cursor-pointer">
                            View Budgets
                        </button>
                        <button className="border-3 w-[9rem] h-[2.5rem] text-center font-semibold rounded-[0.6rem] cursor-pointer text-[#2ec4b6] border-[#2ec4b6]">
                            Add Budget +
                        </button>
                        </div>
                </div>
            </div>
        </div>
    );
}