import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='pt-4 lg:pt-0 h-24 flex items-center md:flex-row justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black' id='navBackground'>
      <div className='w-32 space-x-4 text-center'>
      <a
            className="text-blue-600 hover:text-xl transition-all duration-10 "
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
  )
}

export default Footer