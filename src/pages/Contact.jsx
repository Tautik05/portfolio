// src/pages/Contact.jsx
import React from "react";
import Button from "../components/ui/button";
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-screen mt-[20vh] flex flex-col justify-between px-20 text-white">
      <div className="flex items-center gap-4 ">
        <div className="flex-grow flex flex-col justify-center w-full text-center">
          <span className="text-7xl font-bold drop-shadow-md">Let's talk</span>
          <span className="text-4xl font-bold text-blue-400 drop-shadow-md">
            time to connect with me!
          </span>
        </div>
      </div>
      <div className="mt-5 font-bold flex items-center gap-3 justify-center w-full">
        <Button
          className="hover:outline-white hover:outline-4 transition-all duration-100 m-0 p-0 rounded-full"
          link="mailto:tautiksinharoy2004@gmail.com"
        >
          <FaAt />
        </Button>

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
  );
};

export default Contact;
