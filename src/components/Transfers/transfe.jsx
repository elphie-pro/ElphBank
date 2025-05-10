// "use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { transferMoney } from "@/lib/useTransaction";

export default function Page() {
  const [senderEmail, setSenderEmail] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();

    try {
      const result = await transferMoney(senderEmail, receiverEmail, parseFloat(amount));
      if(result) return alert("transfer successfull, this is your new balance")
      console.log("Transfer successful:", result);
    } catch (error) {
      console.error("Transfer failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleTransfer} className="text-black dark:text-white md:ml-[32rem] mt-[5rem]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.2rem] text-[#2ec4b6] font-semibold">Sender Email</h2>
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="md:w-[45rem] h-[3.5rem] border-4 border-[#2ec4b6] rounded-2xl outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.2rem] text-[#2ec4b6] font-semibold">Receiver Email</h2>
          <input
            type="email"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            className="md:w-[45rem] h-[3.5rem] border-4 border-[#2ec4b6] rounded-2xl outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.2rem] text-[#2ec4b6] font-semibold">Amount</h2>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="md:w-[45rem] h-[3.5rem] border-4 border-[#2ec4b6] rounded-2xl outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.2rem] text-[#2ec4b6] font-semibold">Description</h2>
          <textarea
            className="md:w-[45rem] h-[15rem] border-4 border-[#2ec4b6] rounded-2xl outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="md:w-[45rem] h-[3.5rem] text-white font-semibold bg-[#2ec4b6] rounded-2xl"
          >
            Transfer Amount
          </button>
        </div>
      </div>
    </form>
  );
}
