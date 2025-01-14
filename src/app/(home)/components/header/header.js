"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "/public/assets/logo.svg";
import flagBrazil from "/public/assets/flags/flag-brazil.svg";
import { MenuIcon } from "@/components/ui/button-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black flex flex-col items-center justify-center py-2 lg:py-10">
      <nav className="container flex items-center justify-between px-4 sm:px-6 py-2.5">
        {/* Logo */}
        <Link href="/">
          <Image
            src={brandLogo}
            alt="Tiago Diniz Logo"
            className="w-[74px] h-auto"
            priority
          />
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex items-center space-x-20">
          <Link href="/">
            <p className="text-sm uppercase text-[#F4F6FA] font-bold opacity-100 hover:text-[#F4F6FA] hover:opacity-100 transition ease-in-out cursor-pointer">
              Home
            </p>
          </Link>
          <Link href="/cases">
            <p className="text-sm uppercase text-[#F4F6FA] opacity-80 hover:text-[#F4F6FA] hover:opacity-100 transition ease-in-out cursor-pointer">
              Cases
            </p>
          </Link>
          <Link href="/about">
            <p className="text-sm uppercase text-[#F4F6FA] opacity-80 hover:text-[#F4F6FA] hover:opacity-100 transition ease-in-out cursor-pointer">
              Sobre
            </p>
          </Link>
          <Link href="/resume">
            <p className="text-sm uppercase text-[#F4F6FA] opacity-80 hover:text-[#F4F6FA] hover:opacity-100 transition ease-in-out cursor-pointer">
              Resume CV
            </p>
          </Link>
        </div>

        <div className="flex space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-3">
            <Image
              src={flagBrazil} // Substitua pelo ícone da bandeira brasileira
              alt="Português"
              width={16}
              height={16}
              className="h-auto"
            />
            <span className="text-sm text-[#F4F6FA] font-bold">PT / EN</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MenuIcon onClick={toggleMobileMenu} />
          </div>
          
        </div>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black transition-all`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link href="/">
              <p className="text-[#F4F6FA] hover:opacity-100 opacity-80 font-medium">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/cases">
              <p className="text-[#F4F6FA] hover:opacity-100 opacity-80 font-medium">
                Cases
              </p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-[#F4F6FA] hover:opacity-100 opacity-80 font-medium">
                Sobre
              </p>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <p className="text-[#F4F6FA] hover:opacity-100 opacity-80 font-medium">
                Resume CV
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}