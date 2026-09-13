import React from "react";
import { FaPython, FaDatabase } from "react-icons/fa";
import {
  SiPytorch,
  SiHuggingface,
  SiLangchain,
  SiPostgresql,
  SiJavascript,
  SiFastapi,
} from "react-icons/si";

const About = () => {
  const technicalAreas = [
    {
      number: "01",
      title: "Machine Learning",
      description:
        "Strong foundation in supervised learning, classification, model evaluation, error analysis, and core machine learning algorithms.",
      technologies: ["Scikit-Learn", "Model Evaluation", "Error Analysis"],
    },
    {
      number: "02",
      title: "Deep Learning",
      description:
        "Building neural network systems with PyTorch, with hands-on experience in CNNs, computer vision, and audio classification.",
      technologies: ["PyTorch", "CNNs", "Computer Vision", "LibROSA"],
    },
    {
      number: "03",
      title: "Generative AI",
      description:
        "Developing LLM-powered applications with retrieval, structured workflows, tool use, grounding, and production-oriented system design.",
      technologies: ["LLMs", "RAG", "Embeddings", "Vector Search"],
    },
    {
      number: "04",
      title: "Agentic AI",
      description:
        "Designing stateful AI workflows that combine LLM reasoning with deterministic tools, policies, validation, and human oversight.",
      technologies: ["LangGraph", "MCP", "HITL", "Tool Calling"],
    },
  ];

  const technologies = [
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />,
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface />,
    },
    {
      name: "LangChain",
      icon: <SiLangchain />,
    },
    {
      name: "LangGraph",
      icon: (
        <span className="text-[11px] font-bold tracking-tight text-blue-300">
          LG
        </span>
      ),
    },
    {
      name: "MCP",
      icon: (
        <span className="text-[11px] font-bold tracking-tight text-violet-300">
          MCP
        </span>
      ),
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Vector Databases",
      icon: <FaDatabase />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-24 pt-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="mb-20 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            About
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Building AI systems with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              engineering in mind.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            I'm Tautik, a Computer Science Engineering student focused on
            building practical AI/ML systems that go beyond model demos. My
            work spans machine learning, deep learning, retrieval systems,
            generative AI, and agentic workflows.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            I enjoy working across the full lifecycle of an AI system —
            understanding the problem, designing the architecture, building
            models and pipelines, evaluating their behaviour, and integrating
            them into reliable applications.
          </p>
        </section>

        {/* What I Work On */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
              What I work on
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              From models to AI systems.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {technicalAreas.map((area) => (
              <div
                key={area.number}
                className="group bg-[#080b1c] p-7 transition-all duration-300 hover:bg-[#0b1024] sm:p-9"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-400">
                    {area.number}
                  </span>

                  <span className="h-px w-12 bg-white/10 transition-all duration-300 group-hover:w-20 group-hover:bg-blue-400/50" />
                </div>

                <h3 className="text-xl font-semibold sm:text-2xl">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {area.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 transition-colors duration-200 group-hover:border-white/15"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Philosophy */}
        <section className="mb-24 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
              Engineering approach
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              I care about what happens after the model works.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-400">
            <p>
              A strong AI system is more than an accurate model or a capable
              language model. It needs reliable data pipelines, meaningful
              evaluation, sensible architecture, and clear failure handling.
            </p>

            <p>
              That's why my projects increasingly focus on retrieval
              evaluation, structured agent workflows, deterministic policies,
              human-in-the-loop controls, observability, and
              production-oriented backend integration.
            </p>

            <p>
              My goal is to become an AI/ML engineer who can understand the
              underlying research while also turning those ideas into systems
              that people can actually use.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
              Technical foundation
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Tools I build with.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.04]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center text-lg text-slate-300 transition-colors duration-300 group-hover:text-blue-300">
                  {technology.icon}
                </span>

                <span className="text-sm text-slate-300">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Current Direction */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/[0.08] to-violet-500/[0.06] p-8 sm:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Current direction
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Building toward production AI engineering.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              I'm currently focused on improving my ability to design,
              evaluate, and deploy production-oriented AI systems — especially
              RAG pipelines, agentic applications, multimodal systems, and
              reliable LLM-powered workflows.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;

