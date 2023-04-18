import React from "react";
// import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skill from "../components/skill";
import Navbar2 from "../components/Navbar2";
import MotoMarket from "../Assets/MotoMarket_1.jpg";
import PNWAir from "../Assets/PNWAirlines.jpg";

import "../index.css";

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
  const tools = ["Git", "GitHub"];

  return (
    <main className="bg-cover bg-center bg- min-h-screen">
      <header>
        <Navbar2 />
      </header>
      <body>
        {/* JUMBOTRON */}
        <section>
          <div className="bg-gray-100 py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-6xl font-bold text-gray-800">
                    Peter Disney
                  </h2>
                  <p className="mt-1 text-2xl text-gray-600">
                    Full-Stack Software Developer
                  </p>
                </div>
                <div className="px-4 py-5 sm:p-6"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="text-left shadow-xl p-6 rounded-xl">
          <About />
        </section>

        {/* SKILLS */}
        <section>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl">
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
        </section>

        {/* RESUME */}
        <section>
          <div className="mt-16 bg-gray-100 shadow-lg p-6 rounded-xl">
            <Projects
              name={"Ecommerce App"}
              projectDescription={"A REACT"}
              appLink={"https://motomarket.shop/"}
              appImage={MotoMarket}
              appRepo={"https://github.com/PeterDisney/Ecommerce"}
              skills={
                "JavaScript | React | AWS | Mongo | GitHub | Node | Stripe | Multer | JSX | Tailwind | Express"
              }
            />
            <Projects
              name={"Airline Ecommerce App"}
              projectDescription={"A JAVA application, ."}
              appLink={"https://www.pnwairlines.flights/"}
              appImage={PNWAir}
              appRepo={"https://github.com/PeterDisney/"}
              skills={
                "JavaScript | React | AWS | Mongo | GitHub | Node | Stripe | Multer | JSX | Tailwind | Express"
              }
            />

            <Projects
              name={"Ecommerce App"}
              projectDescription={
                "An AWS deployed fullstack MERN Drumming Ecommerce App featuring admin login/reg, multer, and Stripe."
              }
              appLink={"https://motomarket.shop/"}
              // appImage={UnderDevelopment}
              appRepo={"https://github.com/PeterDisney/Ecommerce"}
              skills={
                "JavaScript | React | AWS | Mongo | GitHub | Node | Stripe | Multer | JSX | Tailwind | Express"
              }
            />
          </div>
        </section>
      </body>
    </main>
  );
};

export default Main;
