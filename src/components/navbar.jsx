import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between mx-20 p-5 text-white rounded-b-xl z-50 bg-slate-800/50 backdrop-blur-xl font-bold shadow-xl">
      <a href="\" className="cursor-pointer">
        <div className="text-2xl">TT</div>
      </a>
      <ul className="flex items-center gap-4">
        <a
          href="\"
          className="cursor-pointer hover:bg-white/20 px-2 py-1 rounded transition-all duration-200"
        >
          <li>Home</li>
        </a>
        <a
          href="\about"
          className="cursor-pointer hover:bg-white/20 px-2 py-1 rounded transition-all duration-200"
        >
          <li>About</li>
        </a>
        <a
          href="\projects"
          className="cursor-pointer hover:bg-white/20 px-2 py-1 rounded transition-all duration-200"
        >
          <li>Projects</li>
        </a>
        <a
          href="\contact"
          className="cursor-pointer hover:bg-white/20 px-2 py-1 rounded transition-all duration-200"
        >
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
