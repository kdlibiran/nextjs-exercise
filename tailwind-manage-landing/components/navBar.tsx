"use client";
import Image from "next/image";
import { DATA } from "@/app/data";
import { useState, useRef } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  function toggleMenu(): void {
    if (menu.current && menuBtn.current) {
      menuBtn.current.classList.toggle("open", !menuOpen);
      menu.current.classList.toggle("hidden", menuOpen);
      menu.current.classList.toggle("flex", !menuOpen);
      setMenuOpen(!menuOpen);
    }
  }

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src={DATA.logo} width={100} height={100} alt="logo" />
        </div>

        <div className="hidden md:flex space-x-6">
          {DATA.navLinks.map((link: string, index: number) => (
            <a key={index} href="#" className="hover:text-darkGrayishBlue">
              {link}
            </a>
          ))}
        </div>

        <a className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
          Get Started
        </a>

        <button
          ref={menuBtn}
          id="menu-btn"
          className="block md:hidden hamburger focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="menu"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden mt-6 space-y-4">
        <div
          ref={menu}
          id="menu"
          className="absolute hidden flex-col items-center self-end py-8 my-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          {DATA.navLinks.map((link: string, index: number) => (
            <a key={index} href="#" className="hover:text-darkGrayishBlue">
              {link}
            </a>
          ))}
          <a className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
