// src/pages/Home.jsx
import React from "react";
import Button from "../components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import face2 from "../images/face2.jpg";

const Home = () => {
  return (
    <div className="w-screen mt-[20vh] flex flex-col justify-between px-20 text-white">
      <div className="flex items-center gap-4 ">
        <div className="text-left flex-grow flex flex-col justify-center">
          <span className="text-7xl font-bold drop-shadow-md">
            Hi, I am Tautik!
          </span>
          <span className="text-4xl font-bold text-blue-400 drop-shadow-md">
            Backend Developer
          </span>

          <div className="mt-5 font-bold max-w-[40vw]">
            I'm a passionate full stack developer with a knack for building
            dynamic, robust web applications. With expertise in both frontend
            and backend technologies, I thrive in creating seamless, end-to-end
            solutions.
          </div>

          <div className="mt-5 font-bold max-w-[40vw] flex items-center gap-3">
            <Button
              emphasise
              className="hover:outline-white hover:outline-4 transition-all duration-100"
              link="/contact"
            >
              Let's talk
            </Button>
          </div>
          <div className="mt-5 font-bold max-w-[40vw] flex items-center gap-3">
            <Button
              className="hover:outline-white hover:outline-4 transition-all duration-100 m-0 p-0 rounded-full"
              link="https://github.com/Tautik05"
              newPage
            >
              <FaGithub />
            </Button>
            <Button
              className="hover:outline-white hover:outline-4 transition-all duration-100 m-0 p-0 rounded-full"
              link="https://www.linkedin.com/in/tautik-sinha-roy-88908128a/"
              newPage
            >
              <FaLinkedin />
            </Button>
            <Button
              className="hover:outline-white hover:outline-4 transition-all duration-100 m-0 p-0 rounded-full"
              link="https://x.com/roy_tautik"
              newPage
            >
              <FaXTwitter />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img
            className="rounded-full shadow-[46px_50px_0px_-29px_rgba(0,_0,_0,_0.1)] shadow-black/50"
            src={face2}
            alt="me!"
            width="400vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
