import React from "react";
import Navbar from "../components/GenericComponents/Navbar";
import "../index.css";

const Main = () => {
  return (
    <div >
    <Navbar />
      <div className="fadeInUp">
        <div>
          <div>
          <h1>Peter Disney</h1>
          </div>
          <div>
            <h2>Full-Stack Software Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
