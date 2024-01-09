import React from 'react'
import search from "../assets/searchsearch.png";
import polygon from "../assets/Polygon 2down.png";
import how from "../assets/Helphow.png";
import Message from "../assets/Groupmessage.png";

const Header = () => {
  return (
    <div className="flex justify-between z-30 px-8 pl-16 py-3 h-16 fixed w-[calc(100%-180px)] bg-white border-b-2">
      <div className="flex w-[29.61%] gap-4">
        <p className="text-lg font-semibold my-auto">Payments</p>
        <div className="flex text-xs w-full m-auto gap-2 hover:cursor-pointer">
          <img src={how} alt="" className="w-3 h-3 my-auto" />
          <p>How it works</p>
        </div>
      </div>
      <div className="bg-gray-200 w-[32.89%] px-4  h-[40px] flex rounded-md">
        <img src={search} alt="" className="w-4 h-4 m-auto mr-2" />
        <input
          type="text"
          className=" bg-gray-200 w-[400px] h-[40px]   hover:cursor-pointer outline-none"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="flex w-[29.61%] ">
        <div className="flex ml-auto w-[92px] gap-2">
          <div className="w-9 h-9 bg-[#E6E6E6] rounded-full flex hover:cursor-pointer">
            <img src={Message} alt="" className="w-4 h-4 m-auto" />
          </div>
          <div className="w-9 h-9 bg-[#E6E6E6] rounded-full flex hover:cursor-pointer ">
            <img src={polygon} alt="" className="w-3 h-2 m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
