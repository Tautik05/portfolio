import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    number: "01",
    category: "AGENTIC AI",
    title: "NovaDesk AI",
    subtitle: "Enterprise Customer Support & Resolution Engine",
    description:
      "An agentic customer support system that understands tickets, retrieves customer and transaction context, evaluates deterministic policies, and executes low-risk resolutions with Human-in-the-Loop controls for consequential actions.",
    technologies: [
      "Python",
      "LangGraph",
      "MCP",
      "FastAPI",
      "PostgreSQL",
      "Groq",
    ],
    architecture: [
      "Ticket Understanding",
      "Context Retrieval",
      "Policy Evaluation",
      "Resolution / HITL",
      "Action Execution",
    ],
    highlights: [
      "Stateful agent workflows",
      "Deterministic policy enforcement",
      "Human-in-the-Loop controls",
      "Action revalidation",
      "Audit logging",
    ],
    github:
      "https://github.com/Tautik05/customer-support-agent",
    featured: true,
  },
  {
    number: "02",
    category: "GENERATIVE AI · RAG",
    title: "Financial Report Analyzer",
    subtitle: "Production-Oriented Financial Document Intelligence",
    description:
      "A PDF-based RAG system designed for grounded financial report analysis using structure-aware parsing, hierarchy-aware chunking, BGE embeddings, and document-specific vector namespaces.",
    technologies: [
      "Python",
      "LangChain",
      "FastAPI",
      "BGE",
      "Pinecone",
      "Gemini",
      "PostgreSQL",
    ],
    highlights: [
      "Structure-aware document parsing",
      "Hierarchy-aware chunking",
      "Page-level source citations",
      "Document lifecycle management",
      "93.3% Hit@5 retrieval",
    ],
    github:
      "https://github.com/Tautik05/financial-document-intelligence",
    featured: false,
  },
  {
    number: "03",
    category: "DEEP LEARNING · AUDIO",
    title: "Bird Sound Classifier",
    subtitle: "AI-Powered Species Monitoring",
    description:
      "An end-to-end CNN-based audio classification system that transforms recordings into log-mel spectrograms and identifies 30 bird species through a complete training, evaluation, and inference pipeline.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "PyTorch",
      "LibROSA",
      "Scikit-Learn",
      "Gradio",
    ],
    highlights: [
      "30 bird species",
      "Log-mel spectrograms",
      "Mixed-precision training",
      "Experiment tracking",
      "69.8% test accuracy",
    ],
    github:
      "https://github.com/Tautik05/bird-sound-classifier",
    featured: false,
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-24 pt-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="mb-20 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Selected work
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            AI systems built around{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              real problems.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            A selection of projects spanning agentic AI, retrieval-augmented
            generation, and deep learning — with a focus on engineering,
            evaluation, and practical deployment.
          </p>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080b1c] transition-all duration-300 hover:border-blue-400/30 ${project.featured
                  ? "p-7 sm:p-10 lg:p-12"
                  : "p-7 sm:p-9"
                }`}
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-3xl transition-all duration-500 group-hover:bg-blue-500/[0.10]" />

              <div className="relative">

                {/* Project Header */}
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-sm font-medium text-blue-400">
                      {project.number}
                    </span>

                    <span className="h-px w-8 bg-white/15" />

                    <span className="text-xs font-medium tracking-[0.2em] text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h2
                    className={`font-semibold tracking-tight ${project.featured
                        ? "text-3xl sm:text-4xl"
                        : "text-2xl sm:text-3xl"
                      }`}
                  >
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-blue-300/80 sm:text-base">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-7 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {project.description}
                </p>

                {/* Featured Architecture */}
                {project.featured && (
                  <div className="mt-10 overflow-x-auto">
                    <div className="flex min-w-[700px] items-center gap-2">
                      {project.architecture.map((step, index) => (
                        <React.Fragment key={step}>
                          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-slate-300">
                            {step}
                          </div>

                          {index < project.architecture.length - 1 && (
                            <span className="text-slate-600">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lower Content */}
                <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                  {/* Technical Highlights */}
                  <div>
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      Technical highlights
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-white/[0.05] px-3 py-2 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    View project
                    <FaArrowUpRightFromSquare className="text-xs transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </section>

        {/* Closing CTA */}
        <section className="mt-24 border-t border-white/10 pt-12">
          <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Each project is built as an engineering system rather than a
            standalone model or API demo — with attention to architecture,
            evaluation, reliability, and deployment.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Projects;

