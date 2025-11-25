import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import {
  LuFolderOpen,
  LuBriefcase,
  LuExternalLink,
  LuGithub,
  LuLock,
} from "react-icons/lu";

function Projects() {
  const projects = [
    {
      title: "NoAH Telemedicine Platform",
      description:
        "Real-time medical dashboard with SignalR channels, vital-sign streams, device integration and emergency patient workflows. Fully responsive UI built with React & TypeScript.",
      tags: ["React", "TypeScript", "SignalR", ".NET", "Medical Devices"],
      type: "Professional",
      icon: LuBriefcase,
      private: true,
    },
    {
      title: "Geography Master",
      description:
        "Interactive geography quiz with Firebase authentication, cloud storage, and live scoring. Includes difficulty modes and a full CRUD admin dashboard.",
      tags: ["React", "Firebase", "Node.js", "JavaScript"],
      type: "Personal",
      icon: LuFolderOpen,
      github: "https://github.com/example",
      demo: "https://google.com",
    },
    {
      title: "Full-Stack Task Manager",
      description:
        "Task management platform using a Next.js frontend and a NestJS API. Features JWT auth, role-based permissions, PostgreSQL schema, and real-time updates.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
      type: "Personal",
      icon: LuFolderOpen,
      github: "https://github.com/example",
      demo: "https://google.com",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <SectionHeader number="03" title="Projects" />
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
              relative p-8 rounded-xl border
              bg-slate-900/40 backdrop-blur-xl
              border-slate-700/50
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]
              transition-all duration-300 group
            "
            >
              {/* Icon + Type */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Icon size={28} className="text-emerald-400" />
                  <span className="text-xs font-mono text-slate-400 border border-slate-600 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>

                {project.private && (
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-mono bg-slate-800/60 px-3 py-1.5 rounded border border-slate-700">
                    <LuLock size={13} />
                    Private
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-heading text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                    px-3 py-1 bg-emerald-500/10 text-emerald-300
                    border border-emerald-500/20 rounded-md
                    text-xs font-mono
                    hover:bg-emerald-500/20 hover:border-emerald-500/40
                    transition-all
                  "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons with hover labels */}
              <div className="flex items-center gap-5 mt-auto">
                {/* GitHub */}
                {project.github && (
                  <div className="relative group/icon">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <LuGithub size={22} />
                    </a>

                    {/* Tooltip */}
                    <span
                      className="
                      absolute -top-8 left-1/2 -translate-x-1/2
                      bg-slate-800 text-white text-xs font-mono px-2 py-1
                      rounded opacity-0 group-hover/icon:opacity-100
                      transition-opacity pointer-events-none
                    "
                    >
                      Code
                    </span>
                  </div>
                )}

                {/* Live Demo */}
                {project.demo && (
                  <div className="relative group/icon">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <LuExternalLink size={22} />
                    </a>

                    {/* Tooltip */}
                    <span
                      className="
                      absolute -top-8 left-1/2 -translate-x-1/2
                      bg-slate-800 text-white text-xs font-mono px-2 py-1
                      rounded opacity-0 group-hover/icon:opacity-100
                      transition-opacity pointer-events-none
                    "
                    >
                      Live
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
