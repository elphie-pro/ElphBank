"use client"

import { fetchUserByEmail, useTransaction } from "@/lib/useTransaction";
import React, { useState } from "react";

const Test = () => {
  const [email, getEmail] = useState();

  const useGetEmail = () => {
    console.log("working")
    useTransaction(email);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <form action="" onSubmit={(e) =>{
          e.preventDefault();
          useGetEmail()
        }} className="bg-red-400">
          <input type="email" onChange={(e) => getEmail(e.target.value)} />
          <button type="submit" className="bg-black">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Test;
