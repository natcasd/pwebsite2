
import { TbBrandNextjs } from "react-icons/tb";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow bg-white bg-opacity-80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Branding or Logo */}
        <div className="text-2xl font-bold flex space-x-1">
<TbBrandNextjs/>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-800">
          <li>
            <a href="#about" className="hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
