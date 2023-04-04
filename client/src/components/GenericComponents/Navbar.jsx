import React from "react";
import { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className=' w-full text-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        {/* OG background bg-stone-800  */}
        <div className=' mx-auto max-w-screen-xl w-full flex justify-center md:justify-between items-center py-2 px-4 xsm:justify-between items-center py-2 px-4  text-white bg-transparent font-body flex-wrap'>

            {/*----------- Personal Logo ------------ */}
            
            {/* ------------- Links ----------------- */}

            <ul className='flex items-center '>

                {/* ------------- Menu ------------- */}

                <li className='p-4 text-white'>
                    <Menu as="div" className="relative inline-block text-right">
                        <Menu.Button>
                            About
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute Left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                <div className='py-1'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/products/subcategory/street"
                                                className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
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

                {/* --------------Components Menu --------------- */}

                <li className='p-4 text-white'>
                    <Menu as="div" className="relative inline-block text-right">
                        <Menu.Button>
                            Resume
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute Left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                <div className='py-1'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/resume"
                                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                            >
                                                Coding Resume
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>

                {/* ----------- Accessories Menu -------------- */}

                <li className='p-4 text-white'>
                    <Menu as="div" className="relative inline-block text-right">
                        <Menu.Button>
                            Testimonials
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                <div className='py-1'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/products/subcategory/bags"
                                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
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
                <li className='p-4 text-white'>
                    <Menu as="div" className="relative inline-block text-right">
                        <Menu.Button>
                            Works
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                <div className='py-1'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/products/subcategory/bags"
                                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
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
                <li className='p-4 text-white'>
                    <Menu as="div" className="relative inline-block text-right">
                        <Menu.Button>
                            Contact
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                <div className='py-1'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/contact"
                                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                            >
                                                Email
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li>
                    <a></a>
                </li>
            </ul>
        </div>
    </div >
)
};

export default Navbar;
