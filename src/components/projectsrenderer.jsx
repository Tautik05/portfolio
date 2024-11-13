import React from "react";
import Button from "../components/ui/button";

const projects = {
  projects: [
    {
      title: "Food Delivery App",
      description:
        "A clone of popular food delivery apps like zomato or swiggy made with Django",
      link: "https://github.com/Tautik05/food",
    },
    {
      title: "Shoe Store",
      description: "Demo shoe app store made with Django",
      link: "https://github.com/Tautik05/skoe",
    },
    {
      title: "Recipe Maker",
      description: "Recipe maker app made with Django",
      link: "https://github.com/Tautik05/django-project",
    },
  ],
};

const projectsrenderer = () => {
  return (
    <div>
      {projects.projects.map((project) => (
        <div className="flex flex-col gap-2 items-center justify-center border-4 rounded-xl border-white text-center font-bold mx-32 mt-8 px-2">
          <span className="text-4xl font-bold">{project.title}</span>
          <span className="text-lg">{project.description}</span>
          <Button link={project.link} className="w-full ">
            Visit
          </Button>
        </div>
      ))}
    </div>
  );
};

export default projectsrenderer;
