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
              At Certainty Contracting, LLC, we take pride in delivering
              top-quality craftsmanship and exceptional service to our valued
              clients. With years of experience in the industry, we have built a
              reputation for excellence in bathroom remodels, baseboard
              installation, crown molding installation, custom cabinetry, siding
              repair, fence repair, general building maintenance, and a wide
              range of handyman services.
            </p>
            <p className="my-4 p-2">
              What sets us apart is our unwavering commitment to quality. We
              believe that your home or commercial space deserves nothing less
              than the best. That's why we work closely with our clients,
              offering personalized solutions tailored to their specific needs
              and preferences. Whether it's a bathroom renovation that adds
              functionality and elegance or a custom cabinetry project that
              enhances your space's aesthetic appeal, we bring expertise and
              creativity to every endeavor.
            </p>
            <p className="my-4 p-2">
              We value our clients and prioritize clear communication,
              transparency, and reliability throughout the entire process. We
              believe in building long-lasting relationships based on trust,
              professionalism, and exceptional customer service. Our goal is not
              just to complete a project, but to exceed your expectations and
              leave you completely satisfied.
            </p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 lg:w-full">
          <img
            src=""
            className="mx-auto md:my-0 w-full max-w-full xs:max-w-xxs sm:max-w-xs h-auto"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
