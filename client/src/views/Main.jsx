import React from "react";
import Navbar from "../components/GenericComponents/Navbar";
import "../index.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div class="bg-gray-100 py-24">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white shadow-xl rounded-lg overflow-hidden">
            <div class="px-4 py-5 sm:px-6">
              <h2 class="text-6xl font-bold text-gray-800">
                Peter Disney
              </h2>
              <p class="mt-1 text-2xl text-gray-600">
                Full-Stack Software Developer
              </p>
            </div>
            <div class="px-4 py-5 sm:p-6">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
