import React from "react";
import Navbar from "../components/GenericComponents/Navbar";
import "../index.css";

const Main = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <div class="bg-gray-100 py-24">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div class="px-4 py-5 sm:px-6">
                <h2 class="text-6xl font-bold text-gray-800">Peter Disney</h2>
                <p class="mt-1 text-2xl text-gray-600">
                  Full-Stack Software Developer
                </p>
              </div>
              <div class="px-4 py-5 sm:p-6"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-center">
        <div>
          <div>
            <p>About</p>
            <div className="">
              <p>
                My name is Peter Disney, an aspiring software developer on a
                journey to become a skilled developer in Full-Stack React,
                Python, and Java. Peter's passion for technology and programming
                started at a young age, where he spent most of his free time
                tinkering with various software applications and exploring how
                they worked. This led him to pursue a coding bootcamp where i
                gained a solid foundation in programming principles and
                concepts.
              </p>
              <p>
                As an ambitious and driven individual, Peter constantly seeks to
                improve his skills and stay up-to-date with the latest trends
                and advancements in software development. He is currently
                focusing on mastering Full-Stack React, Python, and Java, which
                are widely used in developing various types of software
                applications. Peter's development journey is characterized by
                his strong work ethic, attention to detail, and dedication to
                delivering quality work. He has a keen eye for problem-solving
                and is always eager to tackle complex challenges, which has
                enabled him to develop a deep understanding of software
                development.
              </p>
              <p>
                Apart from his technical abilities, Peter is an excellent
                communicator who works well in teams. He understands the
                importance of collaboration in software development and is
                always willing to share his knowledge with others to foster a
                positive learning environment. Peter's ultimate goal is to
                become a skilled developer who can deliver innovative and
                reliable software solutions that meet the needs of users. He
                believes that with hard work, dedication, and a willingness to
                learn, anything is possible in the world of software
                development. Thank you for taking the time to learn about Peter
                Disney. He looks forward to connecting with others in the
                software development community and learning from their
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
