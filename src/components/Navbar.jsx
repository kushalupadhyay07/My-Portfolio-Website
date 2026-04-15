import React, { useState } from "react";
// import mylogo from "../assets/Portfolio website/kushallogo.png"
import { FiMenu } from "react-icons/fi";
import Overlaymenu from "./Overlaymenu";
export default function Navbar() {
  let [menu, setmenu] = useState(false);
  let [visble, setvisible] = useState(true);
  return (
   <>
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-55 transition-transform duration-300 ${visble ? "translate-y-0" : "-translate-y-full"}  box-border`}
    >
      <div className="flex items-center">
        <h1 className="font-bold text-3xl text-red-600">K</h1>
        <div className="font-bold text-white sm:block hidden text-xl ">
          ushal
        </div>
      </div>
      <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <button
          className="text-3xl text-white focus:outline-none cursor-pointer "
          onClick={() => setmenu(true)}
        >
          <FiMenu />
        </button>
      </div>

      <div className="hidden lg:block">
        <a
          href="#contact"
          className=" bg-gradient-to-r from-pink-500 to to-blue-500  px-5 py-2 rounded-full shadow-2xl hover:opacity-90 transition-opacity duration-300"
        >
          Reach Out
        </a>
      </div>
    </div>

    <Overlaymenu  isOpen ={menu}  isClose ={()=>setmenu(false)}></Overlaymenu>
   </>
  );
}
