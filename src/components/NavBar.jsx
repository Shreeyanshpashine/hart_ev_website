/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

function NavBar() {
  return (
    <div className="nav h-full w-full bg-black">
      <div className="h-[12vh] container flex items-center justify-between p-12 text-white">
        <div>
          <img src="images/d2.png" alt="logo" className="w-[30%]" />
        </div>

        <div className="flex justify-evenly w-1/2">
          <ul className="flex items-center justify-evenly w-3/4 text-xl">
            <li className="hover:text-red-500 cursor-pointer hover:scale-[1.15] transition-[3000ms]">
              Home
            </li>
            <li className="hover:text-red-500 cursor-pointer hover:scale-[1.15] transition-[3000ms]">
              About Us
            </li>
            <li className="hover:text-red-500 cursor-pointer hover:scale-[1.15] transition-[3000ms]">
              Features
            </li>
          </ul>

          <ul className="social flex item-center justify-evenly w-1/4 text-2xl">
            <li className="hover:text-red-500 cursor-pointer hover:scale-[1.3] transition-[3000ms]">
              <FaFacebook />
            </li>
            <li className="hover:text-red-500 cursor-pointer hover:scale-[1.3] transition-[3000ms]">
              <FaSquareInstagram />
            </li>
            <li className="hover:text-red-500 cursor-pointer hover:scale-[1.3] transition-[3000ms]">
              <GrLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
