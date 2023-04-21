import React from "react";

const About = () => {
  return (
    <div className="shadow-lg bg-white p-6 sm:px-6 lg:px-8 rounded-xl">
      <div className="flex justify-center text-4xl font-bold mb-4">
        <p>About</p>
      </div>
      <div className="flex flex-col md:flex-row max-w-2xl mx-auto">
        <div className="w-full md:w-3/4 mx-auto md:mx-0 md:mr-4">
          <div className="mx-2">
            <p className="my-4 p-2">
              My name is Peter Disney, an enthusiastic full stack web developer
              from the greater Seattle area. A recent graduate from Coding Dojo,
              I have a strong foundational understanding of dynamic full stack
              web development.
            </p>
            <p className="my-4 p-2">
              Currently I specalize in Full-Stack React, Python and Java. I
              began my journey a little more than 6 months, and in that time I
              have gone from no code to deploying my projects on AWS.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="\Static\peter_headshot_1.jpg"
            className="mx-auto my-4 md:my-0"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
