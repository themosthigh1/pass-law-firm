"use client";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX, BsLinkedin } from "react-icons/bs";
import { headerMenuLinks } from "./headerMenuLinks";
import { GoLaw } from "react-icons/go";
import { FC, useState } from "react";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const socialIcons = [
    {
      linkIcon: <BsLinkedin size={30} />,
      linkPath: "https://www.linkedin.com/in/andrew-horn-9a4a3b1a",
    },
    {
      linkIcon: <GoLaw size={30} />,
      linkPath: "https://www.lawyer.com/keesta-pass.html",
    },
  ];
  return (
    <header>
      <nav className="w-full h-24 shadow-xl z-40">
        {/* Desktop Menu*/}
        <div className="flex items-center justify-between w-full h-full px-4">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="Pass Law Firm Logo"
              width={205}
              height={100}
            />
          </Link>
          <div className="text-[#36454f] hidden sm:flex">
            <ul className="hidden sm:flex md:flex items-center">
              {headerMenuLinks.map((link, i) => (
                <li
                  key={i}
                  className="ml-5 uppercase border-b text-lg hover:text-[#99272D] hover:border-[#99272D]"
                >
                  <Link href={`/${link.linkPath}`}>{link.linkName}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">
                  <button className="bg-[#99272D] hover:bg-[#36454f] py-2 px-8 text-white ml-5 ease-in-out duration-300">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="sm:hidden cursor-pointer pl-24 " onClick={toggleMenu}>
            <BsList className="h-8 w-8 text-[#99272D]" />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen p-10 ease-in-out bg-[#ecf0f3] duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end ">
            <div className="cursor-pointer" onClick={toggleMenu}>
              <BsX className="h-8 w-8 text-[#99272D]" />
            </div>
          </div>
          {/* Mobile Menu Links */}
          <div className="flex flex-col py-4 text-[#36454f] text-xl">
            <ul>
              {headerMenuLinks.map((link, i) => (
                <li
                  onClick={() => setMenuOpen(false)}
                  key={i}
                  className="py-4 hover:underline hover:decoration-[#99272D] hover:text-[#99272D]"
                >
                  <Link href={`/${link.linkPath}`}>{link.linkName}</Link>
                </li>
              ))}
              <li>
                <button className="shadow-xl hover:bg-[#36454f] bg-[#99272D] text-white w-50 py-2 px-8 mt-5 ease-in-out duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-around mt-10">
            {socialIcons.map((link, i) => (
              <div
                onClick={() => setMenuOpen(false)}
                key={i}
                className=" hover:text-[#36454f] text-[#99272D]"
              >
                <Link href={`${link.linkPath}`}>{link.linkIcon}</Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Pass Law Firm Logo"
                width={205}
                height={100}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
