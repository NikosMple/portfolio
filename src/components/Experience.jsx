import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";

function Experience() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "TMA — Telematic Medical Applications",
      duration: "May 2025 — Present",
      location: "Athens, Greece",
      icon: HiOutlineBriefcase,
      description: [
        "Building responsive medical monitoring dashboards with React & TypeScript.",
        "Delivering real-time patient data visualizations through SignalR.",
        "Collaborating with .NET teams to integrate APIs and streaming endpoints.",
        "Designing scalable UI modules with reusable components and clean architecture.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "SignalR",
        ".NET",
        "Tailwind",
        "Swagger",
      ],
      active: true,
    },
    {
      title: "IT Internship",
      company: "Thessaly Cooperative Bank",
      duration: "2023 — 2024",
      location: "Trikala, Greece",
      icon: AiOutlineBank,
      description: [
        "Performed on-site hardware installation, repair, and system diagnostics at bank branches.",
        "Resolved network issues to ensure stable banking system operation.",
        "Managed sensitive financial data while following strict security and compliance standards.",
      ],
      technologies: ["IT Support", "Hardware Maintenance", "Networking"],
      active: false,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center relative px-6 py-24 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <SectionHeader number="02" title="Experience" />
      </motion.div>

      <div className="relative space-y-16">
        {/* Vertical Line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-slate-800/60 rounded-full"></div>

        {jobs.map((job, index) => {
          const Icon = job.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16"
            >
              {/* Node */}
              <div className="absolute left-0 top-1">
                <div
                  className={`
                    flex items-center justify-center w-11 h-11 rounded-full border-4
                    ${
                      job.active
                        ? "border-emerald-500 bg-slate-900 shadow-[0_0_18px_rgba(16,185,129,0.45)]"
                        : "border-slate-700 bg-slate-900"
                    }
                  `}
                >
                  <Icon
                    size={20}
                    className={
                      job.active ? "text-emerald-400" : "text-slate-500"
                    }
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`
                  group relative p-7 md:p-9 rounded-xl border backdrop-blur 
                  transition-all duration-300
                  ${
                    job.active
                      ? "bg-slate-900/60 border-emerald-500/30 shadow-lg shadow-emerald-900/20"
                      : "bg-slate-900/40 border-slate-700/50 hover:border-slate-600/60"
                  }
                `}
              >
                {/* Hover Overlay */}
                {!job.active && (
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                )}

                {/* Header */}
                <div className="mb-5 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3
                      className={`text-xl md:text-2xl font-heading font-bold ${
                        job.active
                          ? "text-emerald-400"
                          : "text-white group-hover:text-emerald-300"
                      } transition-colors`}
                    >
                      {job.title}
                    </h3>
                    <p className="text-emerald-400/90 font-medium text-sm md:text-base mt-1">
                      {job.company}
                    </p>
                  </div>

                  <div className="bg-slate-950/40 border border-slate-800 px-3 py-1.5 rounded-md text-xs md:text-sm text-slate-400 font-mono flex gap-2 items-center">
                    <span>{job.duration}</span>
                    <span className="text-slate-600">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2.5 mb-6 text-slate-300 text-sm md:text-[15px] leading-relaxed">
                  {job.description.map((line, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-xs rounded-md font-mono
                        bg-emerald-500/10 text-emerald-300 border border-emerald-500/20
                        hover:bg-emerald-500/20 transition-all
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
