import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({
  name,
  projectDescription,
  appLink,
  appImage,
  appRepo,
  skills,
}) => {
  return (
    <div className="shadow-lg bg-white shadow-xl p-6 rounded-xl mb-8">
      <p className="text-4xl font-bold mb-4">{name}</p>
      <p className="text-lg mb-2">{projectDescription}</p>
      <img className="shadow-xl rounded-lg mx-auto" src={appImage} alt={name} />
      <p className="text-lg rounded-lg text-center mt-4 p-1 sm:text-base md:text-2xl lg:text-2xl xl:text-3xl">
        {skills}
      </p>
      <div className="flex space-x-4 mt-4 flex items-center justify-center">
        <div className="flex-grow" href={appLink} target="_blank">
          <a
            className="text-black hover:text-l transition-all duration-200 "
            target="_blank"
            href={appLink}
          >
            <FontAwesomeIcon size="2x" icon={faChrome} />
          </a>
        </div>
        <div className="flex-grow" href={appRepo} target="_blank">
          <a
            className="text-black hover:text-l transition-all duration-200 "
            target="_blank"
            href="https://github.com/PeterDisney?tab=repositories"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
