import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import final_bw1 from "../images/final_bw1.png";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -left-40 top-[45%] h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Hero content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />

              <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                AI / ML Engineer
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Building AI systems
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                that solve real problems.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build production-oriented AI systems across{" "}
              <span className="text-slate-200">Deep Learning</span>,{" "}
              <span className="text-slate-200">RAG</span>, and{" "}
              <span className="text-slate-200">Agentic AI</span> — combining
              machine learning with reliable backend infrastructure,
              evaluation, and deployment.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">

              {/* Projects */}
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
              >
                Explore my work

                <FaArrowUpRightFromSquare className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* GitHub */}
              <a
                href="https://github.com/Tautik05"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <FaGithub />
                GitHub
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-5 text-slate-500">

              <a
                href="https://www.linkedin.com/in/tautik-sinha-roy-88908128a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-200 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/roy_tautik"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="transition-colors duration-200 hover:text-white"
              >
                <FaXTwitter size={19} />
              </a>

              <span className="h-px w-12 bg-white/10" />

              <span className="text-xs uppercase tracking-[0.2em] text-slate-600">
                India
              </span>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">

              {/* Decorative rings */}
              <div className="absolute -inset-5 rounded-full border border-blue-400/10" />
              <div className="absolute -inset-10 rounded-full border border-white/[0.04]" />

              <div className="absolute -right-4 top-8 h-20 w-20 rounded-full bg-blue-500/20 blur-2xl" />

              {/* Portrait */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-slate-900 shadow-[0_0_80px_rgba(59,130,246,0.12)] sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]">
                <img
                  src={final_bw1}
                  alt="Tautik Sinha Roy"
                  className="h-full w-full object-cover grayscale"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#what-i-build"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-slate-600 transition-colors hover:text-slate-300 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <FaArrowDown className="animate-bounce text-xs" />
        </a>
      </section>

      {/* What I Build */}
      <section
        id="what-i-build"
        className="relative border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
              What I build
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              From models to complete AI systems.
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              My work sits at the intersection of machine learning and
              software engineering — turning models into usable, evaluated,
              and reliable applications.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">

            {/* Deep Learning */}
            <div className="group bg-[#080c1a] p-8 transition-colors duration-300 hover:bg-[#0b1020]">
              <span className="font-mono text-sm text-blue-400">
                01
              </span>

              <h3 className="mt-12 text-xl font-semibold">
                Deep Learning
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Building and training neural networks with PyTorch, including
                computer vision and audio classification pipelines.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["PyTorch", "CNNs", "LibROSA"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RAG */}
            <div className="group bg-[#080c1a] p-8 transition-colors duration-300 hover:bg-[#0b1020]">
              <span className="font-mono text-sm text-violet-400">
                02
              </span>

              <h3 className="mt-12 text-xl font-semibold">
                Retrieval Systems
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Designing RAG pipelines with document parsing, hierarchical
                chunking, embeddings, vector search, grounding, and evaluation.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["RAG", "BGE", "Pinecone"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Agentic AI */}
            <div className="group bg-[#080c1a] p-8 transition-colors duration-300 hover:bg-[#0b1020]">
              <span className="font-mono text-sm text-cyan-400">
                03
              </span>

              <h3 className="mt-12 text-xl font-semibold">
                Agentic AI
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Building stateful AI workflows with tool use, deterministic
                policies, validation, Human-in-the-Loop controls, and reliable
                execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["LangGraph", "MCP", "HITL"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                Selected work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Projects I've built.
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              View all projects

              <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* NovaDesk */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080c1a]">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[100px] transition-opacity duration-500 group-hover:bg-blue-500/[0.12]" />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">

              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-blue-400">
                    01 / FEATURED
                  </span>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-400">
                    Agentic AI
                  </span>
                </div>

                <h3 className="mt-14 text-3xl font-semibold tracking-tight sm:text-4xl">
                  NovaDesk AI
                </h3>

                <p className="mt-2 text-lg text-slate-400">
                  Agentic Customer Support & Resolution Engine
                </p>

                <p className="mt-6 max-w-xl leading-7 text-slate-500">
                  An enterprise-oriented agentic AI system that understands
                  customer issues, retrieves contextual information, applies
                  deterministic policies, and executes low-risk resolutions
                  while routing consequential actions through Human-in-the-Loop
                  controls.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "LangGraph",
                    "MCP",
                    "FastAPI",
                    "PostgreSQL",
                    "Groq",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-6">
                  <a
                    href="https://github.com/Tautik05/customer-support-agent"
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    View source

                    <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-white"
                  >
                    Case study
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Architecture visual */}
              <div className="flex min-h-[360px] items-center justify-center border-t border-white/[0.06] bg-white/[0.015] p-8 lg:border-l lg:border-t-0">
                <div className="w-full max-w-sm">
                  <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                    System flow
                  </p>

                  <div className="space-y-2">
                    {[
                      ["01", "Ticket Understanding"],
                      ["02", "Context Retrieval"],
                      ["03", "Policy Evaluation"],
                      ["04", "Resolution / HITL"],
                      ["05", "Action Execution"],
                    ].map(([number, label], index) => (
                      <React.Fragment key={number}>
                        <div className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">
                          <span className="font-mono text-[10px] text-blue-400">
                            {number}
                          </span>

                          <span className="text-sm text-slate-300">
                            {label}
                          </span>
                        </div>

                        {index < 4 && (
                          <div className="ml-6 h-2 w-px bg-white/10" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Other projects */}
          <div className="mt-4 grid gap-4 lg:grid-cols-2">

            {/* Financial */}
            <article className="group rounded-3xl border border-white/[0.08] bg-[#080c1a] p-8 transition-colors duration-300 hover:bg-[#0b1020] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-violet-400">
                  02
                </span>

                <span className="text-xs text-slate-600">
                  RAG / DOCUMENT AI
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                Financial Report Analyzer
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Structure-aware RAG system for grounded financial report
                analysis with hierarchical chunking, BGE embeddings,
                Pinecone retrieval, and page-level citations.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-lg border border-violet-400/20 bg-violet-400/5 px-3 py-2 font-mono text-sm text-violet-300">
                  93.3% Hit@5
                </span>

                <span className="text-xs text-slate-600">
                  30-query benchmark
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["FastAPI", "BGE", "Pinecone", "Gemini"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Tautik05/financial-document-intelligence"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                View source →
              </a>
            </article>

            {/* Bird */}
            <article className="group rounded-3xl border border-white/[0.08] bg-[#080c1a] p-8 transition-colors duration-300 hover:bg-[#0b1020] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400">
                  03
                </span>

                <span className="text-xs text-slate-600">
                  DEEP LEARNING / AUDIO
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                Bird Sound Classifier
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                End-to-end CNN-based audio classification system using
                log-mel spectrograms to identify 30 bird species with a
                complete PyTorch training and inference pipeline.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 font-mono text-sm text-cyan-300">
                  69.8% Accuracy
                </span>

                <span className="rounded-lg border border-white/[0.08] px-3 py-2 font-mono text-sm text-slate-400">
                  64.1% Macro F1
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["PyTorch", "CNN", "LibROSA", "Gradio"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Tautik05/bird-sound-classifier"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                View source →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Technical Focus */}
      <section className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                Technical focus
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Engineering beyond the model.
              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                I care about what happens around the model — data pipelines,
                retrieval quality, backend architecture, evaluation, and
                reliability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Machine Learning",
                  items:
                    "PyTorch · Scikit-Learn · CNNs · Model Evaluation",
                },
                {
                  title: "Generative AI",
                  items:
                    "RAG · LangChain · LangGraph · MCP · BGE",
                },
                {
                  title: "Backend",
                  items:
                    "FastAPI · REST APIs · Async Processing",
                },
                {
                  title: "Data & Infrastructure",
                  items:
                    "PostgreSQL · Pinecone · Supabase · Git",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >
                  <h3 className="text-sm font-semibold text-slate-200">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA */}
      <section className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center sm:px-10 lg:px-16">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
            Career opportunities
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Open to AI/ML opportunities.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-500">
            I'm currently seeking AI/ML engineering internships and
            full-time opportunities where I can contribute to building
            practical, production-oriented AI systems.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tautiksinharoy@gmail.com"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
            >
              Get in touch
            </a>

            <Link
              to="/contact"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              Contact me
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;

