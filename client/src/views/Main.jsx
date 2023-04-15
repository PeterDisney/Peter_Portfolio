import React from "react";
import Navbar from "../components/GenericComponents/Navbar";
import About from "./About";
import CodingResume from "./CodingResume";
import "../index.css";

const Main = () => {
  
  const languages = ['JavaScript', 'Java', 'Python', 'HTML5', 'CSS', 'SQL'];
  const frontEnd = ['React', 'JSX', 'Jinja2', 'Bootstrap', 'Tailwind'];
  const backEnd = ['Flask', 'Spring Boot', 'Django', 'Express'];
  const databases = ['Mongo', 'MySQL', 'Mongoose'];
  const aws = ['AWS', 'EC2', 'S3 Bucket', 'Cloud Front', 'Route 53', 'SSL', 'Deployment'];
  const tools = ['Git', 'GitHub'];


  return (
    <main className="bg-cover bg-center min-h-screen">
      <header>
        <Navbar />
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
        <section className="text-left">
          <About />
        </section>
        {/* SKILLS */}
        <section>

        </section>
        {/* RESUME */}
        <section>
          <CodingResume />
        </section>
      </body>
    </main>
  );
};

export default Main;
