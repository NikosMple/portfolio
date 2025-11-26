import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import { LuFolderOpen, LuExternalLink, LuGithub, LuLock } from "react-icons/lu";

function Projects() {
  const projects = [
    {
      title: "Geography Master",
      description:
        "Full-stack geography platform with a custom quiz engine, secure authentication, global state architecture, and a clean responsive UI. Includes an interactive world map, persistent score tracking, and structured geo-data workflows.",
      tags: ["React", "Firebase", "Node.js", "Express.js", "Tailwind"],
      type: "Personal",
      status: "Live",
      icon: LuFolderOpen,
      github: "https://github.com/NikosMple/Geo-App.git",
      demo: "https://geo-app-muig.onrender.com/",
    },
    {
      title: "Python Blockchain Demo",
      description:
        "A full-stack demo blockchain built with Python and a React frontend, showcasing the core principles behind blockchain and cryptocurrency systems.",
      tags: ["Python", "React", "Flask", "Pytest"],
      type: "Personal",
      status: "Complete",
      icon: LuFolderOpen,
      github: "https://github.com/NikosMple/blockchain-python.git",
    },
  ];

  const statusStyles = {
    Live: "text-emerald-400 border border-emerald-400/40 bg-emerald-400/10",
    Complete: "text-slate-300 border border-slate-600 bg-slate-700/20",
    Building: "text-yellow-400 border border-yellow-400/40 bg-yellow-400/10",
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-6 py-24 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <SectionHeader number="03" title="Projects" />
      </motion.div>

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
  flex flex-col
"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Icon size={28} className="text-emerald-400" />
                  <span className="text-xs font-mono text-slate-400 border border-slate-600 px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
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

              {/* Tags */}
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

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 px-4 py-2
                      bg-slate-800/60 hover:bg-slate-700/60
                      border border-slate-600 hover:border-emerald-400/60
                      text-slate-300 hover:text-emerald-400
                      rounded-lg text-sm font-mono
                      transition-all duration-200
                    "
                  >
                    <LuGithub size={18} />
                    <span>Code</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 px-4 py-2
                      bg-emerald-500/10 hover:bg-emerald-500/20
                      border border-emerald-500/30 hover:border-emerald-400
                      text-emerald-300 hover:text-emerald-200
                      rounded-lg text-sm font-mono
                      transition-all duration-200
                    "
                  >
                    <LuExternalLink size={18} />
                    <span>Live</span>
                  </a>
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
