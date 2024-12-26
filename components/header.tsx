"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-[398px] sm:w-[896px] md:w-[1184px] h-28 sm:h-[113px] py-8 px-8 mx-auto flex justify-between items-center relative">
        {/* Menu Icon - Only visible on tablet */}
        <div className="hidden sm:block md:hidden">
          <Image
            src="/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className="w-12 h-12 relative overflow-hidden cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Logo and Site Name */}
        <div className="flex items-center">
          {/* For mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <Image
              src="/Vector.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <div className="text-[#191825] text-xl font-black font-['Circular Std'] leading-normal">
              Travlog
            </div>
          </div>

          {/* For tablet - centered */}
          <div className="hidden sm:flex md:hidden items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/Vector.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="text-[#191825] text-2xl font-black font-['Circular Std'] leading-10">
              Travlog
            </div>
          </div>

          {/* For desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Image
              src="/Vector.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="text-[#191825] text-2xl font-black font-['Circular Std'] leading-10">
              Travlog
            </div>
          </div>
        </div>

        {/* Navigation Links - Only visible on desktop */}
        <div className="hidden md:flex items-center gap-16">
          <a
            href="#"
            className="text-[#191825]/50 hover:text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px]"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#191825]/50 hover:text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px]"
          >
            Discover
          </a>
          <a
            href="#"
            className="text-[#191825]/50 hover:text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px]"
          >
            Special Deals
          </a>
          <a
            href="#"
            className="text-[#191825]/50 hover:text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px]"
          >
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Auth Buttons - Visible on tablet and desktop */}
          <div className="hidden sm:flex gap-2">
            <button className="text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px] px-8 py-4 bg-white rounded-[100px]">
              Login
            </button>
            <button className="text-[#eeeeee] text-sm font-bold font-['Circular Std'] leading-[16.80px] px-8 py-4 bg-[#5d50c6] rounded-[100px]">
              Sign Up
            </button>
          </div>

          {/* Menu Icon - Only visible on mobile */}
          <div className="block sm:hidden">
            <Image
              src="/menu.svg"
              alt="Menu"
              width={24}
              height={24}
              className="w-12 h-12 relative overflow-hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-8 right-8 text-gray-600"
              title="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <div className="flex flex-col pt-20 px-8 gap-6">
              <a
                href="#"
                className="text-[#191825] text-lg font-bold font-['Circular Std'] hover:text-[#5d50c6]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[#191825] text-lg font-bold font-['Circular Std'] hover:text-[#5d50c6]"
              >
                Discover
              </a>
              <a
                href="#"
                className="text-[#191825] text-lg font-bold font-['Circular Std'] hover:text-[#5d50c6]"
              >
                Special Deals
              </a>
              <a
                href="#"
                className="text-[#191825] text-lg font-bold font-['Circular Std'] hover:text-[#5d50c6]"
              >
                Contact
              </a>

              {/* Mobile-only Auth Buttons */}
              <div className="sm:hidden flex flex-col gap-4 mt-6">
                <button className="text-[#222831] text-sm font-bold font-['Circular Std'] leading-[16.80px] px-8 py-4 bg-white border border-[#5d50c6] rounded-[100px]">
                  Login
                </button>
                <button className="text-[#eeeeee] text-sm font-bold font-['Circular Std'] leading-[16.80px] px-8 py-4 bg-[#5d50c6] rounded-[100px]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
