import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between mx-20 p-5 text-white rounded-b-xl z-50 bg-slate-800/50 backdrop-blur-xl font-bold shadow-xl">
      <div className="text-2xl">TT</div>
      <ul className="flex items-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
