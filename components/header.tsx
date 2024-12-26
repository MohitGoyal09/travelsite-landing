import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className=" w-[398px] h-28  md:w-[1184px] md:h-[113px] py-8 md:justify-between items-center md:inline-flex px-8 mx-auto gap-8">
      <div className="justify-center h-10 items-center gap-4 inline-flex">
        <Image src="/Vector.svg" alt="Logo" width={40} height={40} />
        <div className="text-[#191825] text-2xl font-black font-['Circular Std'] leading-10">
          Travlog
        </div>
        <Image
          src="/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          className="w-12 h-12 relative overflow-hidden"
        />
      </div>
      <div className=" hidden md:h-[17px] justify-start items-start gap-16 md:inline-flex">
        <a
          href="#"
          className="hover:text-[#222831] text-[#191825]/50 text-sm font-bold font-['Circular Std'] leading-[16.80px]"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[#191825]/50  hover:text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px]"
        >
          Discover
        </a>
        <a
          href="#"
          className="text-[#191825]/50  hover:text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px]"
        >
          Special Deals
        </a>
        <a
          href="#"
          className="text-[#191825]/50  hover:text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px]"
        >
          Contact
        </a>
      </div>
      <div className="hidden gap-1 md:flex-inline">
        <button className="text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px] h-[49px] px-8 py-4 bg-white rounded-[100px] justify-start items-start gap-2 inline-flex">
          Login
        </button>
        <button className="h-[49px] px-8 py-4 bg-[#5d50c6] rounded-[100px] justify-start items-start gap-2 inline-flex text-[#eeeeee] text-sm font-bold font-['Circular Std'] leading-[16.80px]">
          Sign Up
        </button>
      </div>
    </div>
  );
}
