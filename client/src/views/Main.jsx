import React from "react";
// import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skill from "../components/skill";
import Navbar2 from "../components/Navbar2";
import MotoMarket from "../Assets/MotoMarket_1.jpg";
import Hiker_project from "../Assets/map.jpg";
import PNWAir from "../Assets/PNWAirlines.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faBootstrap,
  faEnvira,
  faGithub,
  faJava,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

import "../index.css";
import { faFlask, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Main = () => {
  const languages = ["JavaScript", "Java", "Python", "HTML5", "CSS", "SQL"];
  const frontEnd = ["React", "JSX", "Jinja2", "Bootstrap", "Tailwind"];
  const backEnd = ["Flask", "Spring Boot", "Django", "Express"];
  const databases = ["Mongo", "MySQL", "Mongoose"];
  const aws = [
    "AWS",
    "EC2",
    "S3 Bucket",
    "Cloud Front",
    "Route 53",
    "SSL",
    "Deployment",
  ];
  const tools = ["Git", "GitHub", "VS Code", "STS"];

  return (
    <main className="bg-cover bg-center bg-min-h-screen">
      <header className="mb-4">
        <Navbar2 />
      </header>
      <div>
        {/* JUMBOTRON */}
        <section>
          <div className="mt-16 bg-gray-100 py-24 rounded-xl max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl mx-auto px-6">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col items-center justify-center px-4 py-5 sm:px-6">
                  <h2 className="text-6xl font-bold text-gray-800">
                    Peter Disney
                  </h2>
                  <p className="mt-1 text-2xl text-gray-600">
                    Full-Stack Software Developer
                  </p>
                </div>
                {/* <div className="flex items-center justify-center px-4 py-5 sm:p-6"></div> */}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="mt-16 bg-gray-100 text-left shadow-xl p-6 rounded-xl max-w-screen-xl mx-auto"
        >
          <About />
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="mt-16 bg-gray-100 shadow-lg p-6 rounded-xl max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl bg-white mx-auto px-4 py-4 sm:px-6 lg:px-8 rounded-xl shadow-xl">
              <p className="text-4xl font-bold mb-4">Skills and Technologies</p>
              <p className="text-xl mb-2">
                The following is a list of my current skills and utilized
                technologies.
              </p>
              {/* Skills */}
              <div>
                {languages
                  .concat(frontEnd, backEnd, databases, aws, tools)
                  .map((skill, i) => {
                    return <Skill skill={skill} />;
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="work">
          <div className="mt-16 mb-16 bg-gray-100 shadow-xl p-6 rounded-xl max-w-screen-xl mx-auto gap-8">
            <Projects
              name={"Ecommerce App"}
              projectDescription={
                "Effortlessly shop for motorcycles and components with this REACT app. Featuring AWS deployment, login/reg, Stripe, and Multer"
              }
              appLink={"https://motomarket.shop/"}
              appImage={MotoMarket}
              appRepo={"https://github.com/PeterDisney/Ecommerce"}
              skills={[
                <FontAwesomeIcon icon={faJs} />,
                "     ",
                <FontAwesomeIcon icon={faReact} />,
                "   ",
                <FontAwesomeIcon icon={faAws} />,
                "   ",
                <FontAwesomeIcon icon={faGithub} />,
                "   ",
                <FontAwesomeIcon icon={faNodeJs} />,
                "   ",
                <FontAwesomeIcon icon={faEnvira} />,
                "   ",
                <FontAwesomeIcon icon={faStripe} />,
                "   ",
                // <FontAwesomeIcon size="2x" icon={faBootstrap} />,
              ]}
            />
            <Projects
              name={"Airline Ecommerce App"}
              projectDescription={
                "Fly with ease using this AWS-deployed JAVA flight reservation site. Featuring Admin, user login/reg, and Stripe."
              }
              appLink={"https://www.pnwairlines.flights/"}
              appImage={PNWAir}
              appRepo={"https://github.com/PeterDisney/"}
              skills={[
                <FontAwesomeIcon icon={faJava} />,
                " ",
                <FontAwesomeIcon icon={faBootstrap} />,
                " ",
                <FontAwesomeIcon icon={faAws} />,
                " ",
                <FontAwesomeIcon icon={faGithub} />,
                " ",
                <FontAwesomeIcon icon={faLeaf} />,
                " ",
                <FontAwesomeIcon icon={faStripe} />,
              ]}
            />
            <div className="relative">
              <div className="blur-sm">
                <Projects
                  name={"Hiker Project"}
                  projectDescription={
                    "Discover new trails with our cutting-edge Python hiker app, powered by Google Maps API."
                  }
                  appLink={"https://motomarket.shop/"}
                  appImage={Hiker_project}
                  appRepo={"https://github.com/PeterDisney/Ecommerce"}
                  skills={[
                    <FontAwesomeIcon icon={faPython} />,
                    " ",
                    <FontAwesomeIcon icon={faFlask} />,
                    " ",
                    <FontAwesomeIcon icon={faGithub} />,
                    " ",
                    <FontAwesomeIcon icon={faNodeJs} />,
                    " ",
                    <FontAwesomeIcon icon={faEnvira} />,
                    " ",
                    <FontAwesomeIcon icon={faStripe} />,
                    " ",
                    <FontAwesomeIcon icon={faBootstrap} />,
                  ]}
                />
              </div>
              <div className="absolute inset-0 flex justify-center items-center">
                <h2 className="text-4xl text-black font-bold skew-y-[-24deg]">
                  Coming Soon!
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
