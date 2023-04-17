import React from "react";
// import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import Navbar2 from "../components/Navbar2";
import "../index.css";


const Main = () => {
  const languages = ["JavaScript", "Java", "Python", "HTML5", "CSS", "SQL"];
  const frontEnd = ["React", "JSX", "Jinja2", "Bootstrap", "Tailwind"];
  const backEnd = ["Flask", "Spring Boot", "Django", "Express"];
  const databases = ["Mongo", "MySQL", "Mongoose"];
  const aws = ["AWS", "EC2", "S3 Bucket", "Cloud Front", "Route 53", "SSL", "Deployment"];
  const tools = ["Git", "GitHub"];

  return (
    <main className="bg-cover bg-center min-h-screen">
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
          <div className="mt-16 bg-gray-100 shadow-lg p-6 rounded-xl">
            <p className="text-5xl font-bold mb-4">Skills and Technologies</p>
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
            <Projects />
          </div>
        </section>
      </body>
    </main>
  );
};

export default Main;
