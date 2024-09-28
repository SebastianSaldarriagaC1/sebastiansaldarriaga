"use client";
import React, { useState } from "react";
import { Navbartext, SectionText } from "../atoms/Text";
import { FaBars } from "react-icons/fa";

interface section {
  text: string;
  href: string;
}

interface NavbarProps {
  title: string;
  sections: section[];
}

const Navbar: React.FC<NavbarProps> = ({ title, sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex justify-between mx-5 my-2 items-center">
        <SectionText text={title}></SectionText>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FaBars size={24} />
          </button>
        </div>

        {/* Navbar for desktop */}
        <ul className="hidden md:flex items-center">
          {sections.map((section) => (
            <li className="mx-5" key={section.text}>
              <Navbartext text={section.text} href={section.href} />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden flex flex-col items-center transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {sections.map((section) => (
          <ul className="my-2" key={section.text}>
            <Navbartext text={section.text} href={section.href} />
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
