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
    <div className="shadow-lg bg-white p-6 rounded-xl mb-8">
      <p className="text-2xl font-bold mb-4">{name}</p>
      <p className="text-lg mb-2">{projectDescription}</p>
      <img className="shadow-xl rounded-lg mx-auto" src={appImage} alt={name} />
      <p className=" text-lg rounded-lg text-center mt-4 p-1">{skills}</p>
      <div className="flex space-x-4 mt-4 flex items-center justify-center">
        <div className="flex-grow" href={appLink} target="_blank">
          <a
            className="text-black hover:text-l transition-all duration-200 "
            target="_blank"
            href={appLink} 
          >
            <FontAwesomeIcon size="3x" icon={faChrome} />
          </a>
        </div>
        <div className="flex-grow" href={appRepo} target="_blank">
          <a
            className="text-black hover:text-l transition-all duration-200 "
            target="_blank"
            href="https://github.com/PeterDisney"
          >
            <FontAwesomeIcon size="3x" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
