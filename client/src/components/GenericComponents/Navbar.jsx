import React, { useState } from "react";
import { Fragment } from "react";
import "../../styles/Navbar.css";
import { Transition, Menu } from "@headlessui/react";
// import ReorderIcon from "@material-ui/icons/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className=" w-full text-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      {/* OG background bg-stone-800  */}
      <div
        className=" mx-auto max-w-screen-xl w-full flex justify-center md:justify-between items-center py-2 px-4 xsm:justify-between items-center py-2 px-4  text-white bg-transparent font-body flex-wrap"
        id={expandNavbar ? "open" : "closed"}
      >
        {/*----------- Personal Logo ------------ */}
        <img src="../../../Static/favicon.ico" alt=""></img>
        {/* ------------- Links ----------------- */}

        <ul className="flex items-center toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            {/* <ReorderIcon /> */}
          </button>
          {/* ------------- Menu ------------- */}

          <li className="p-4 text-white">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>About</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/about"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                          onMouseOver={() => "bg-gray-100 text-gray-900"}
                          onMouseLeave={() => console.log("left item")}
                        >
                          Peter Disney
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          {/* --------------Resume Menu --------------- */}

          <li className="p-4 text-white">
            <Menu as="div" className="relative text-center">
              <Menu.Button>Resume</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/resume/coding"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          Coding
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/resume/general"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          General
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          {/* ----------- Testimonials Menu -------------- */}

          <li className="p-4 text-white">
            <Menu as="div" className="relative inline-block text-right">
              <Menu.Button>Testimonials</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/testimonials"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          Refrences
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          {/* ----------- Projects Menu -------------- */}
          <li className="p-4 text-white">
            <Menu as="div" className="relative inline-block text-right">
              <Menu.Button>Projects</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/projects"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          Projects
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          {/* ----------- Contact Menu -------------- */}
          <li className="p-4 text-white">
            <Menu as="div" className="relative inline-block text-center">
              <Menu.Button>Contact</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/contact/email"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          Email
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="https://www.linkedin.com/in/peter-disney-5063bb130/"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          LinkedIn
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          {/* <li>
            <a></a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
