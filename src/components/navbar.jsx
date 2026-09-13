import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark, FaArrowUpRightFromSquare } from "react-icons/fa6";

const RESUME_URL =
  "https://drive.google.com/file/d/1n7BlZ6wiX31uXGyoMt_Ur4MlXSdUhhvi/view?usp=sharing";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          Tautik<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${isActive
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
                  }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-400" />
                )}
              </Link>
            );
          })}

          {/* Resume */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-blue-400/40 hover:bg-white/10"
          >
            Resume
            <FaArrowUpRightFromSquare
              className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#050816] transition-opacity hover:opacity-90"
            >
              Resume
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

