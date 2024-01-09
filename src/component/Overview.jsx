import React from 'react'
import arrow from "../assets/Vectordown.png";


const Overview = () => {
  return (
    <div className="h-[178px] mt-16 flex flex-col gap-5">
      <div className="h-9 flex">
        <h1 className=" text-lg font-semibold">Overview</h1>
        <div className="flex ml-auto gap- ">
          <div className="flex h-9 w-36 border-2 bg-white cursor-pointer gap-3 rounded-md justify-center">
            <p className="text-gray-600 my-auto text-base">Last Month</p>
            <img src={arrow} alt="" className=" w-3 h-2 my-auto invert" />
          </div>
        </div>
      </div>
      
      <div className="flex gap-5">
        <div className="flex flex-1 flex-col p-5 rounded-md shadow bg-white h-[118px] ">
          <div className="h-[78px] flex flex-col justify-between gap-1">
            <p className="text-base text-gray-500">Total orders</p>
            <p className="text-[32px] font-semibold">231</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 rounded-md shadow bg-white h-[118px]">
          <div className="h-[78px] flex flex-col justify-between gap-1">
            <p className="text-base text-gray-500">Amount received</p>
            <p className="text-[32px] font-semibold">₹23,92,312.19</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Overview
