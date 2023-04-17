import React from "react";

const About = () => {
  return (
    <div className="shadow-lg p-6 rounded-xl">
      <div className="text-4xl font-bold mb-4">
        <p>About</p>
      </div>
      <div className="flex max-w-2xl mx-auto">
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-3/4">
            <div className="mx-2">
              <p className="my-4 p-2">
                My name is Peter Disney, an enthusiastic full stack web
                developer from the greater Seattle area. A recent graduate from
                Coding Dojo, i have a strong foundational understanding of
                dynamic full stack web development.
              </p>
              <p className="my-4 p-2">
                Currently i specalize in Full-Stack React, Python and Java. I
                began my journey a little more than 6 months, and in that time i
                have gone from no code to deploying my projects on AWS
              </p>
              <p className="my-4"></p>
            </div>
          </div>
        </div>
        <div>
          <img src="\Static\peter_headshot_1.jpg" className="" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default About;
