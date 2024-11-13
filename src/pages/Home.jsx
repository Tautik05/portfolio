// src/pages/Home.jsx
import React from "react";
import Button from "../components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import face from "../images/face.jpg";

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
            I do backed in Django which i don't even like. Coding has ruined my
            life, and i know it will ruin my love life too. I want to earn money
            because i can't live in my parent basement anymore, because it
            stinks dure to the rotten smell of my dead sister
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
            className="rounded-3xl rotate-12 shadow-[46px_50px_0px_-29px_rgba(0,_0,_0,_0.1)] shadow-black/50"
            src={face}
            alt="me!"
            width="400vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
