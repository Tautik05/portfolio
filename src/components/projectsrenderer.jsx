import React from "react";
import Button from "../components/ui/button";

const projects = {
  projects: [
    {
      title: "Movie Recommendation System",
      description: "A movie recommendation system made with Python and Streamlit and Scikit-learn",
      link: "https://github.com/Tautik05/Movie_recommendation_system",
    },
    {
      title: "Book Recommendation System",
      description: "Developed a Flask-based book recommendation engine using user-rating similarity matrices and popularity-based filtering. ",
      link: "https://github.com/Tautik05/Book_recommendation_system",
    },
    {
      title: "Food Delivery App",
      description:
        "A clone of popular food delivery apps like zomato or swiggy made with Django",
      link: "https://github.com/Tautik05/food",
    },

  ],
};

const projectsrenderer = () => {
  return (
    <div>
      {projects.projects.map((project) => (
        <div className="flex flex-col gap-2 items-center justify-center border-4 rounded-xl border-white text-center font-bold mx-4 sm:mx-32 mt-8 px-2">
          <span className="text-2xl sm:text-4xl font-bold">{project.title}</span>
          <span className="text-base sm:text-lg">{project.description}</span>
          <Button link={project.link} className="w-full ">
            Visit
          </Button>
        </div>
      ))}
    </div>
  );
};

export default projectsrenderer;
