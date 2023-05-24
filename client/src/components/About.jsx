import React from "react";

const About = () => {
  return (
    <div className="shadow-xl bg-white p-6 sm:px-6 lg:px-8 rounded-xl">
      <div className="flex justify-center text-4xl font-bold mb-4">
        <p>About</p>
      </div>
      <div className="flex flex-col md:flex-row max-w-2xl mx-auto">
        <div className="w-full md:w-3/4 mx-auto md:mx-0 md:mr-4">
          <div className="mx-2">
            <p className="my-4 p-2">
              Hello, my name is Peter Disney, and I'm a Seattle-based aspiring
              developer with a passion for creating exceptional software. I
              recently graduated from Coding Dojo, where I gained expertise in
              React, Java, and Python. While I may be new to the industry, I'm
              not new to hard work and dedication. I'm always eager to learn and
              tackle new challenges to improve my craft. I believe that teamwork
              and collaboration are the keys to success, and I'm ready to work
              together with a team to create something amazing that will make a
              real impact. Let's build something amazing together!
            </p>
            <p className="my-4 p-2">
              Previously, I held manufacturing planning positions in aerospace
              and residential electric industries. I utilized Excel functions
              and custom VB scripts to automate tasks. While using MySQL with
              Excel to generate automated reports, I found my passion for
              software development. I automated work order delivery to
              manufacturing personnel using testing tools. Now, I seek to solve
              workplace bottlenecks through software development!
            </p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 lg:w-full">
          <img
            src="\Static\peter_headshot_1.jpg"
            className="mx-auto md:my-0 w-full max-w-full xs:max-w-xxs sm:max-w-xs h-auto"
            alt="Peter_Headshot"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
