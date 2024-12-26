"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

interface SectionProps {
    section: string;
}

const toggleSection = (section: SectionProps['section']): void => {
    if (openSection === section) {
        setOpenSection(null);
    } else {
        setOpenSection(section);
    }
};

  return (
    <div className="w-[398px] sm:w-[897px] md:w-[1184px] py-8 sm:py-16 mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex flex-col gap-8 md:flex-1">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="text-[#191825] text-2xl font-black font-['Circular Std'] leading-10">
                Travlog
              </div>
            </div>
            <div className="text-[#191825]/50 text-base sm:text-[23px] font-['Circular Std'] leading-relaxed sm:leading-[36.80px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-8 h-8 relative">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={32}
                height={32}
              />
            </div>
            <div className="w-8 h-8 relative">
              <Image src="/twitter.svg" alt="Twitter" width={32} height={32} />
            </div>
            <div className="w-8 h-8 relative">
              <Image
                src="/insta.svg"
                alt="Instagram"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>

        <div className="md:flex-1 flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection("company")}
            >
              <div className="text-[#191825] text-[23px] font-bold font-['Circular Std'] leading-7">
                Company
              </div>
              <div className="md:hidden w-6 h-6 relative">
                <Image
                  src="/arrow-circle-down.svg"
                  alt="Toggle"
                  width={24}
                  height={24}
                  className={`transform transition-transform ${
                    openSection === "company" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 mt-8 ${
                openSection === "company" || window.innerWidth >= 768
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                About
              </div>
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Career
              </div>
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Mobile
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection("contact")}
            >
              <div className="text-[#191825] text-[23px] font-bold font-['Circular Std'] leading-7">
                Contact
              </div>
              <div className="md:hidden w-6 h-6 relative">
                <Image
                  src="/arrow-circle-down.svg"
                  alt="Toggle"
                  width={24}
                  height={24}
                  className={`transform transition-transform ${
                    openSection === "contact" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 mt-8 ${
                openSection === "contact" || window.innerWidth >= 768
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Why Travlog?
              </div>
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Partner with us
              </div>
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                FAQ&apos;s
              </div>
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Blog
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection("meetUs")}
            >
              <div className="text-[#191825] text-[23px] font-bold font-['Circular Std'] leading-7">
                Meet Us
              </div>
              <div className="md:hidden w-6 h-6 relative">
                <Image
                  src="/arrow-circle-down.svg"
                  alt="Toggle"
                  width={24}
                  height={24}
                  className={`transform transition-transform ${
                    openSection === "meetUs" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 mt-8 ${
                openSection === "meetUs" || window.innerWidth >= 768
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                +00 92 1234 56789
              </div>
              <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                info@travlog.com
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                  205. R Street, New York
                </div>
                <div className="text-[#191825]/75 text-lg font-normal font-['Inter'] leading-[28.80px]">
                  BD23200
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
