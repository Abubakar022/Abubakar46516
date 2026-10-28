import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { Card } from "@/components/Card";
import electionRms from "@/assets/images/election-rms.jpg";
import tezPos from "@/assets/images/tez-pos.jpg";
import aiVoterChatbot from "@/assets/images/ai-voter-chatbot.jpg";
import agriVision from "@/assets/images/agri-vision.jpg";
import globalDefenseInsight from "@/assets/images/global-defense-insight.jpg";
import study from "@/assets/images/study.png";

const portfolioProjects = [
  {
    company: "Enterprise & GovTech",
    year: "2024",
    title: "General Elections Result Management System (RMS)",
    description: "High-performance election result management and secure compilation engine.",
    tags: ["Go", "PostgreSQL", "High-concurrency result compilation"],
    results: [
      { title: "Architected high-throughput result ingestion and compilation engine in Go" },
      { title: "Designed resilient PostgreSQL schema optimized for concurrent aggregation" },
      { title: "Ensured end-to-end data integrity, audit trails, and secure verification" },
    ],
    image: electionRms,
  },
  {
    company: "Desktop POS",
    year: "2024",
    title: "TezPOS – High-Performance Desktop POS",
    description: "Lightweight offline-first desktop POS designed for zero-config thermal printing.",
    tags: ["Flutter", "Go", "SQLite", "Thermal Printing"],
    results: [
      { title: "Engineered zero-configuration driver layer for ESC/POS thermal printers" },
      { title: "Implemented local-first SQLite persistence for uninterrupted offline sales" },
      { title: "High-speed desktop UI with sub-second checkout and inventory tracking" },
    ],
    image: tezPos,
  },
  {
    company: "AI & Knowledge Systems",
    year: "2024",
    title: "AI Voter Assistant & Knowledge Retrieval System",
    description: "AI-driven voter assistance and localized query retrieval platform.",
    tags: ["Python", "AI/LLM", "REST APIs"],
    results: [
      { title: "Developed context-aware RAG pipeline for localized civic and voter queries" },
      { title: "Integrated large language models with low-latency RESTful APIs" },
      { title: "Delivered accurate, multi-lingual guidance for voter education and polling" },
    ],
    image: aiVoterChatbot,
  },
  {
    company: "Computer Vision & AI",
    year: "2024",
    title: "Agri Vision",
    description: "Vision Transformer-based crop health monitoring system.",
    tags: ["Flutter", "Computer Vision", "AI"],
    results: [
      { title: "Implemented Vision Transformer (ViT) model for precise crop disease detection" },
      { title: "Real-time leaf pathology classification with confidence score diagnostics" },
      { title: "Cross-platform mobile UI providing actionable recommendations to farmers" },
    ],
    image: agriVision,
  },
  {
    company: "Mobile Application",
    year: "2024",
    title: "Global Defense Insight",
    description: "Production-ready mobile application for defense news and insights.",
    tags: ["Flutter", "Firebase"],
    results: [
      { title: "Architected scalable Flutter mobile app for real-time defense news and analysis" },
      { title: "Integrated Firebase Cloud Messaging, authentication, and live database sync" },
      { title: "Designed responsive reader UX with bookmarking and categorized intelligence feeds" },
    ],
    image: globalDefenseInsight,
  },
  {
    company: "Productivity & Mobile",
    year: "2024",
    title: "StudyBuddy App",
    description: "Personal study tracking and task management mobile application built with Material 3.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Material 3"],
    results: [
      { title: "Integrated task management and study tracking" },
      { title: "Implemented Material 3 for a modern UI" },
      { title: "Boosted user productivity with smart notifications" },
    ],
    image: study,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-40 overflow-hidden w-full max-w-full relative">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center md:mt-14 md:font-bold md:text-[17px]">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-xl mx-auto">
          See how I transformed complex concepts into high-performance systems, intelligent AI platforms, and seamless applications
        </p>
        <div className="flex flex-col md:mt-20 mt-10 gap-16 md:gap-20 relative">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="md:px-10 md:pt-12 px-6 pt-8 pb-8 md:pb-12 lg:pt-14 lg:pb-14 lg:px-14 sticky top-20 md:top-24"
              style={{ top: `calc(70px + ${index * 26}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-14 items-center">
                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs md:text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-4 md:text-4xl">{project.title}</h3>
                  <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs md:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300 font-medium tracking-wide shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <hr className="border-t-2 border-white/5 mt-5 md:mt-6" />

                  {/* Results / Highlights */}
                  <ul className="flex flex-col gap-3 mt-5 md:mt-6">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-white/60">
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0 text-emerald-400 mt-0.5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-8 lg:mt-0 flex items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-gray-900/60 shadow-2xl backdrop-blur-sm group">
                    {/* Window Frame Bar */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/5">
                      <div className="size-2.5 rounded-full bg-red-400/80"></div>
                      <div className="size-2.5 rounded-full bg-amber-400/80"></div>
                      <div className="size-2.5 rounded-full bg-emerald-400/80"></div>
                      <span className="text-[11px] text-white/40 font-mono ml-2 truncate">{project.title}</span>
                    </div>
                    {/* Project Screenshot Display */}
                    <div className="relative overflow-hidden aspect-video w-full bg-gray-950 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
