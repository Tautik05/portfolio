import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter, FaArrowUpRightFromSquare } from "react-icons/fa6";

const Contact = () => {
  const links = [
    {
      name: "Email",
      value: "tautiksinharoy@gmail.com",
      href: "mailto:tautiksinharoy@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "GitHub",
      value: "github.com/Tautik05",
      href: "https://github.com/Tautik05",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/tautik-sinha-roy-88908128a",
      href: "https://www.linkedin.com/in/tautik-sinha-roy-88908128a/",
      icon: <FaLinkedin />,
    },
    {
      name: "X",
      value: "x.com/roy_tautik",
      href: "https://x.com/roy_tautik",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-24 pt-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-6xl flex-col justify-center">

        {/* Header */}
        <section className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Get in touch
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              useful.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I'm always open to conversations about AI/ML engineering,
            interesting technical problems, internships, full-time
            opportunities, and collaborations.
          </p>
        </section>

        {/* Contact Links */}
        <section className="mt-14 max-w-3xl">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={
                  link.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between gap-6 py-6 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors duration-200 group-hover:border-blue-400/30 group-hover:text-blue-300">
                    {link.icon}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {link.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500 transition-colors duration-200 group-hover:text-slate-400">
                      {link.value}
                    </p>
                  </div>
                </div>

                <FaArrowUpRightFromSquare className="shrink-0 text-xs text-slate-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
              </a>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <section className="mt-20">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-blue-400/50" />

            <p className="text-sm text-slate-500">
              Based in India · Open to opportunities
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Contact;

