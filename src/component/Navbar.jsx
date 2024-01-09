import React from 'react'
import { NAVBAR_ICONS } from '../services/const';
import logo from "../assets/Imagelogo.png";
import downA4rrow from "../assets/Vectordown.png";
import wallet from "../assets/walletwallet.png";

const Navbar = () => {
  return (
    <div className="w-[224px] bg-secondary min-h-screen fixed flex flex-col z-50 ">
      <div className="w-[208px] h-full mx-auto  flex flex-col">
        <div className="w-[192px] h-[42px] mx-auto mt-4 flex justify-between ">
          <div className="my-auto flex">
            <img
              src={logo}
              alt=""
              className=" w-[39px] h-[39px] rounder-[4px] hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-start w-[108px]">
            <p className="text-base font-semibold text-white h-5">Nishyan</p>
            <p className="text-xs mt-1 underline text-gray-400 ">
              <a href="">Visit Store</a>
            </p>
          </div>
          <div className="my-auto flex w-[20px] h-[20px]">
            <img
              src={downA4rrow}
              alt=""
              className=" w-[15px] h-[8.68px] m-auto hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="">
          <ul className="mt-5 flex flex-col gap-1">
            {NAVBAR_ICONS.map((icon, i) => (
              <li
                key={i}
                className={`flex  w-[208px] h-[34px] mx-auto px-[16px] py-[10px] hover:cursor-pointer rounded-[4px] ${
                  icon.id == 9 ? "bg-[#353C53]" : ""
                }`}
              >
                <div className="flex justify-center">
                  <img
                    src={icon.icon}
                    alt=""
                    className=" w-[16px]  h-[16px] m-auto hover:cursor-pointer"
                  />
                  <p className="text-[14px] my-auto text-white h-full leading-[14px]  ml-3">
                    {icon.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[192px] mb-3 h-[54px] bg-[#353C53] rounded-[4px] mx-auto mt-auto  flex gap-3 ">
        <div className="my-auto flex w-[36px] h-[36px] rounded-[4px] hover:cursor-pointer bg-[#535b78]  shadow-2xl shadow-black ml-3 ">
          <img
            src={wallet}
            alt=""
            className=" w-[23.65px] h-[19.6px] m-auto "
          />
        </div>
        <div className="flex flex-col mt-1 justify-start w-[101px]">
          <p className="text-xs mt-1  text-gray-400 ">Available credits</p>
          <p className=" text-base text-white ">222.10</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar
