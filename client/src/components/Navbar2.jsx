import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 mx-auto h-full">
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
        } mt-4 w-full block flex-grow lg:flex lg:items-center lg:w-auto items-center`}
      >
        <div className=" flex justify-end gap-12 text-sm lg:flex-grow sm:flex items-center">
          <a
            href="#about"
            className="text-xl text-white hover:text-xl transition-all duration-10 transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#work"
            className="text-xl text-white hover:text-xl transition-all duration-10 transform hover:scale-105"
          >
            Work
          </a>
          <a
            href="#skills"
            className="text-xl text-white hover:text-xl transition-all duration-10 transform hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-xl text-white hover:text-xl transition-all duration-10 transform hover:scale-105"
          >
            Contact
          </a>
        </div>
        <div className="w-56 space-x-4 lg:text-center mx-auto items-center">
          <a
            className="text-white hover:text-xl transition-all duration-10 "
            target="_blank"
            href="https://www.linkedin.com/in/peter-disney-5063bb130/"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedin} className="mx-auto" />
          </a>
          <a
            className="text-white hover:text-xl transition-all duration-10"
            target="_blank"
            href="https://github.com/PeterDisney"
          >
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
