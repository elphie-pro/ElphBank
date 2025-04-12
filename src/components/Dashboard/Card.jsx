"use client";;

export default function Page({ bud }) {
  return (
    <div className="w-[18rem] bg-[#cbf3f0] rounded-2xl h-[12.5rem] p-5 shadow-[6px_6px_#C0C0C0] pb-6">
      <div className="w-[10rem] h-[2rem] bg-[#2ec4b6] rounded-3xl text-center text-white pt-1">
          <h2>{bud.budgetName}:</h2>
        </div>
        <div className="p-4 pt-8">
          <h2>Starting Balance: <span className="font-bold">₦ {bud.startingAmount}</span></h2>
          <h2>Current Balance: <span className="font-bold">₦ {bud.currentAmount}</span></h2>
        </div>
        <div className="pl-[8rem]">
          <button className="bg-white border-1 text-[#2ec4b6] border-[#2ec4b6] w-[7rem] h-[2rem] font-light rounded-xl text-[1rem] cursor-pointer">Edit Budget</button>
        </div>
    </div>
  );
}
