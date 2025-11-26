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
  SiSolidity,
  SiGit,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

function About() {
  const tech = [
    { icon: SiReact, label: "React" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiTailwindcss, label: "TailwindCSS" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiNestjs, label: "NestJS" },
    { icon: SiExpress, label: "Express" },
    { icon: SiGit, label: "Git" },
    { icon: SiPrisma, label: "Prisma" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiFirebase, label: "Firebase" },
    { icon: SiSolidity, label: "Solidity" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 py-24 max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
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
            My name is Nikos Bletsas, a developer based in Athens, Greece. I
            hold a bachelor’s degree in Computer Engineering and work primarily
            with <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
            <strong>Node.js</strong>. I focus on performance, clarity, and
            engineering that stays clean as the project grows.
          </p>

          <p>
            I currently work as a{" "}
            <span className="text-emerald-400 font-semibold">
              Frontend Engineer
            </span>
            , focusing on crafting reliable interfaces, scalable features, and
            maintainable codebases. I enjoy working across the stack, from UI
            decisions to API design, backend structure, and database workflows.
          </p>

          <p>
            I’m also exploring the{" "}
            <span className="text-emerald-400">Web3</span> ecosystem, studying{" "}
            <strong>Solidity</strong>, smart-contract development, and
            blockchain fundamentals through the University of Nicosia’s
            blockchain program.
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
            Some of the tech I work with
            <span className="absolute -bottom-1 left-0 w-30 h-0.5 bg-emerald-400/70"></span>
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
            Bachelor’s Degree in Computer Engineering
          </h4>
          <p className="text-slate-300/90 text-sm mb-2">
            University of Thessaly · 2016 – 2024
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
            University of Nicosia
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
