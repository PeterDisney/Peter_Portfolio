import React from "react";
import Navbar from "../components/GenericComponents/Navbar";
import About from "./About";
import "../index.css";

const Main = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <div className="bg-gray-100 py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6">

                <h2 className="text-6xl font-bold text-gray-800">Peter Disney</h2>
                <p className="mt-1 text-2xl text-gray-600">
                  Full-Stack Software Developer
                </p>
              </div>
              <div className="px-4 py-5 sm:p-6"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center">
        <About />
      </section>
    </div>
  );
};

export default Main;
