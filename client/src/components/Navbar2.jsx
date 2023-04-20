import React, { useState } from "react";
import Logo from "./Logo";
import Resume from "../Assets/Peter.Disney.Resume.October.2022.pdf";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-b from-gray-900 to-gray-800 p-6 mx-auto h-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Logo />
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h14v2H3v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } mt-4 w-full block lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow">
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#work"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Work
          </a>
          <a
            href="#skills"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Contact
          </a>
          <a
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            href={Resume}
            download={isMobile ? "Peter.Disney.Resume.October.2022.pdf" : undefined}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;