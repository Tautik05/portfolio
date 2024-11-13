import React from "react";
import ProjectRenderer from "../components/projectsrenderer";

const Projects = () => {
  return (
    <div className="w-screen mt-5 flex flex-col justify-between px-20 text-white">
      <div className="flex items-center gap-4 ">
        <div className="flex-grow flex flex-col justify-center w-full text-center">
          <span className="text-7xl font-bold drop-shadow-md">My Projects</span>
          <span className="text-4xl font-bold text-blue-400 drop-shadow-md">
            Here are some of my projects
          </span>
        </div>
      </div>
      <ProjectRenderer />
    </div>
  );
};

export default Projects;
