import { TbBrandNextjs } from "react-icons/tb";
import { RiToolsLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow bg-white bg-opacity-95 h-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-full">
        {/* Branding or Logo */}
        <div className="text-2xl font-bold flex space-x-1">
          <TbBrandNextjs/>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-500">
          <li>
            <a href="#about" className="hover:text-gray-800 transition duration-200 flex items-center space-x-1 font-medium">
              <span className="hidden sm:inline">About</span>
              <MdOutlinePersonOutline className="text-xl sm:text-2xl"/>
            </a>
          </li>
          <li>
          <a href="#projects" className="hover:text-gray-800 transition duration-200 flex items-center space-x-1 font-medium">
            <span className="hidden sm:inline">Projects</span>
            <RiToolsLine className="text-xl"/>
          </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-800 transition duration-200 flex items-center space-x-1 font-medium">
              <span className="hidden sm:inline">Contact</span>
              <MdMailOutline className="text-xl"/>
            </a>
          </li>
          {/* <li>
            <a href="/resume.pdf" className="hover:text-gray-800 transition duration-200 flex items-center space-x-1 font-medium">
              <span className="hidden sm:inline">Resume</span>
              <RiArticleLine className="text-xl"/>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
