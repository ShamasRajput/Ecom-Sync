"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className=" bg-custom_black bg-transparent px-[24px] w-full mx-auto py-[36px] flex items-center max-w-[1062px] justify-center sm:justify-between">
      <div className='cursor-pointer relative text-custom_white font-boldWide text-2xl w-[120px]'>
        <p>Ecom</p>
        <p className='text-end'>Sync</p>
      </div>
      {/* <Image className='cursor-pointer' src={"/assets/logo.png"} alt="DigitallyServed" width={145} height={48} /> */}
      {/* <div className='bg-red-200 w-full items-center'> */}
      <ul className='hidden md:flex items-center bg-custom_gray rounded-[100px]'>
        {["home", "about", "services", "work"].map((section) => (
          <a key={section} href={`#${section}`} onClick={() => setActiveSection(section)}>
            <li
              className={`cursor-pointer px-[21px] py-[12px] rounded-[100px] font-medium text-[16px] transition-all duration-200 ${activeSection === section ? "bg-custom_white text-black" : "hover:bg-custom_white hover:bg-opacity-10 text-custom_white"
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          </a>
        ))}
        {/* <li className='cursor-pointer bg-custom_white px-[21px] py-[12px] rounded-[100px] font-medium text-[16px]'>Home</li>
        <a href="#about">
          <li className='hover:bg-custom_white hover:bg-opacity-10 transition-all duration-200 cursor-pointer bg-transparent px-[21px] py-[12px] text-custom_white rounded-[100px] font-medium text-[16px]'>About</li>
        </a>
        <a href="#services">
          <li className='hover:bg-custom_white hover:bg-opacity-10 transition-all duration-200 cursor-pointer bg-transparent px-[21px] py-[12px] text-custom_white rounded-[100px] font-medium text-[16px]'>Services</li>
        </a>
        <a href="#work">
          <li className='hover:bg-custom_white hover:bg-opacity-10 transition-all duration-200 cursor-pointer bg-transparent px-[21px] py-[12px] text-custom_white rounded-[100px] font-medium text-[16px]'>Work</li>
        </a> */}
      </ul>
      {/* </div> */}
      <a href="#contact">
        <button className='overflow-hidden relative group hover:shadow-sm hover:shadow-custom_white transition-all cursor-pointer hidden sm:flex bg-custom_gray px-[21px] py-[12px] text-custom_white rounded-[100px] font-medium text-[16px]'>
          <p className='z-30'>Contact us</p>
          <div className='absolute bg-custom_black left-0 top-0 right-0 bottom-0 rounded-full origin-right w-0 group-hover:w-full transition-all duration-300 z-10'></div>
        </button>
      </a>
    </nav>
  )
}

export default Nav