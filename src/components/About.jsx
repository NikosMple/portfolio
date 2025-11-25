import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
  SiSolidity,
  SiGit,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

function About() {
  const tech = [
    { icon: SiReact, label: "React" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiNestjs, label: "NestJS" },
    { icon: SiPrisma, label: "Prisma" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiDocker, label: "Docker" },
    { icon: SiSolidity, label: "Solidity" },
    { icon: SiGit, label: "Git" },
    { icon: SiTailwindcss, label: "TailwindCSS" },
    { icon: SiFigma, label: "Figma" },
  ];

  return (
    <section id="about" className="px-6 py-24 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <SectionHeader number="01" title="About Me" />
      </motion.div>

      {/* Bio + Tech */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-300 space-y-7 leading-relaxed font-body"
        >
          <p>
            I&apos;m a{" "}
            <span className="text-emerald-400 font-semibold">
              full-stack developer
            </span>{" "}
            who loves building clean, fast and thoughtful digital experiences.
            My main stack revolves around <strong>React, TypeScript</strong> and{" "}
            <strong>modern Node.js architecture</strong>, with a strong focus on
            engineering quality.
          </p>

          <p>
            I enjoy working across the whole spectrum — from UI decisions and
            product experience, to API architecture, backend structure and
            database design. My goal is to write code that feels{" "}
            <span className="text-emerald-400">maintainable, scalable</span> and
            genuinely pleasant to read.
          </p>

          <p>
            I&apos;m also exploring the Web3 ecosystem, studying{" "}
            <strong>Solidity</strong>, smart contracts and blockchain
            fundamentals through the University of Nicosia.
          </p>
        </motion.div>

        {/* Tech Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            p-10 rounded-2xl 
            bg-slate-900/50 backdrop-blur-xl
            border border-slate-700/50
            shadow-[0_0_25px_rgba(0,0,0,0.35)]
          "
        >
          <h3 className="font-hero text-xl text-white mb-8 tracking-wide relative inline-block">
            Technologies I Use
            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-400/70"></span>
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 text-center">
            {tech.map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-center gap-2 group"
              >
                <t.icon
                  className="
                    text-[32px] text-slate-300
                    transition-all duration-300
                    group-hover:text-emerald-400
                    group-hover:scale-110
                  "
                />
                <span className="text-xs text-slate-400">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Education */}
      <p className="text-sm font-mono tracking-widest text-emerald-400/90 mt-20 mb-6">
        {"// Education"}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div
          className="
            p-6 rounded-xl 
            bg-slate-900/50 backdrop-blur-xl
            border border-slate-600/60
            shadow-[0_0_25px_rgba(0,0,0,0.35)]
            hover:border-emerald-400/60 
            hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]
            hover:-translate-y-0.5
            transition-all duration-300
          "
        >
          <h4 className="font-hero text-xl text-white mb-1 tracking-wide">
            B.Sc. Computer Engineering
          </h4>
          <p className="text-slate-300/90 text-sm mb-2">
            University of Thessaly · 2018–2023
          </p>
          <p className="text-slate-400/80 text-sm leading-relaxed">
            Focused on software engineering, algorithms, distributed systems and
            applied computer architecture.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="
            p-6 rounded-xl 
            bg-slate-900/50 backdrop-blur-xl
            border border-slate-600/60
            shadow-[0_0_25px_rgba(0,0,0,0.35)]
            hover:border-emerald-400/60 
            hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]
            hover:-translate-y-0.5
            transition-all duration-300
          "
        >
          <h4 className="font-hero text-xl text-white mb-1 tracking-wide">
            Web3 MOOC — Blockchain, Cryptography & Decentralization
          </h4>
          <p className="text-slate-300/90 text-sm mb-2">
            University of Nicosia · 2024
          </p>
          <p className="text-slate-400/80 text-sm leading-relaxed">
            Studying smart contracts, Solidity fundamentals, and the
            cryptographic primitives behind decentralized systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
