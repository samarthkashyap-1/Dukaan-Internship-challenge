import React from 'react'

import search from "../assets/searchsearch.png";
import polygon from "../assets/Polygon 2down.png";

import i from "../assets/Vectori.png";
import Orderdetail from "../component/Orderdetail";
import arrow from "../assets/Vectordown.png";
import download from "../assets/Combined Shapedownload.png";
import Sortimg from "../assets/Sortsort.png";


const Transaction = () => {
     const orderArray = Array.from({ length: 19 });
 
  return (
    <div className="h-[1144px] flex flex-col gap-5">
      <div>
        <h1 className=" text-xl font-semibold">Transactions | This Month</h1>
      </div>

      <div className="p-3 pb-6 bg-white rounded-md shadow">
        <div className="h-[92px] flex flex-col gap-3">
          <div className="flex">
            <div className="border-2   px-4  h-[40px] flex rounded-md">
              <img src={search} alt="" className="w-4 h-4 m-auto mr-2" />
              <input
                type="text"
                className="cursor-pointer outline-none"
                placeholder="Search by order ID..."
              />
            </div>
            <div className="flex ml-auto gap-3 ">
              <div className="flex h-9 w-20 border-2 gap-1 rounded-md justify-center">
                <p className="text-gray-600 my-auto text-base">Sort</p>
                <img src={Sortimg} alt="" className=" w-4 h-4 my-auto" />
              </div>
              <div className="w-9 h-9 border-2 rounded-md flex">
                <img src={download} alt="" className="w-5 h-5 m-auto" />
              </div>
            </div>
          </div>
          <div className="flex gap-10 rounded-md justify-between py-[10px] px-3 h-10 bg-[#F2F2F2] text-[#4D4D4D] text-[14px] font-medium ">
            <div className="flex gap-1 flex-1  h-5">
              <p className="my-auto">Order ID</p>
            </div>
            <div className="flex gap-1 flex-1  h-5  ">
              <p className="my-auto ">Order date</p>
              <img src={polygon} alt="" className="w-2 h-2 my-auto" />
            </div>
            <div className="flex gap-1 flex-1  h-5 justify-end">
              <p className="my-auto ">Order amount</p>
            </div>
            <div className="flex gap-1 flex-1 h-5  justify-end">
              <p className="my-auto ">Transaction Fees</p>
              <img src={i} alt="" className="1-3 h-3 my-auto" />
            </div>
          </div>
        </div>
        <div>
          {orderArray.map((item, index) => {
            return <Orderdetail key={index} />;
          })}
          <div className="w-[610px] h-8 mt-6 mx-auto flex justify-between">
            <div className="flex gap-2  w-[100px] h-8 justify-center border-2 rounded-md hover:cursor-pointer">
              <img
                src={arrow}
                alt=""
                className=" h-[6px] w-[10px] invert rotate-90 my-auto"
              />
              <p className="text-base mt-0.5">Previous</p>
            </div>

            {/* pagination */}

            <div className="w-[388px] flex justify-evenly my-auto">
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer text-gray-500">
                <p className="text-base m-auto">1</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">...</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer bg-[#146EB4]">
                <p className=" text-sm m-auto  text-white">10</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">11</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">12</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">13</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">14</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">15</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">16</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">17</p>
              </div>
              <div className="w-7 h-7 flex justify-center rounded-md hover:cursor-pointer">
                <p className="text-sm m-auto">18</p>
              </div>
            </div>

            <div className="flex gap-2  w-[74px] h-8 justify-center border-2 rounded-md hover:cursor-pointer">
              <p className="text-base mt-0.5">Next</p>
              <img
                src={arrow}
                alt=""
                className=" h-[6px] w-[10px] invert -rotate-90 my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction
