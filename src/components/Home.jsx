import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-emerald-400 font-hero text-xs md:text-sm tracking-widest mb-3"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-hero text-white leading-tight"
        >
          Nikos Bletsas.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-hero text-emerald-400 mt-4 mb-8"
        >
          Frontend Developer
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
            className="absolute left-0 right-0 -bottom-1 h-0.5 bg-linear-to-r from-transparent via-emerald-400 to-transparent"
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-body mb-14"
        >
          I build fast, accessible, and thoughtfully engineered digital
          experiences using{" "}
          <span className="text-slate-200 font-medium">React & TypeScript</span>
          . I’m also diving deeper into backend architecture with{" "}
          <span className="text-slate-200 font-medium">Node.js</span> and modern
          full-stack patterns.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center gap-5"
        >
          {/* Projects */}
          <a
            href="#projects"
            className="
              group relative px-10 py-3
              font-hero font-semibold text-sm tracking-wider uppercase
              border border-emerald-400 text-emerald-400
              rounded-sm
              transition-all duration-200
              hover:bg-emerald-400 hover:text-black
              hover:-translate-y-0.5
              hover:shadow-md hover:shadow-emerald-500/20
              flex items-center gap-2
            "
          >
            <span>Projects</span>

            {/* Arrow appears ONLY on hover */}
            <span
              className="
                opacity-0 group-hover:opacity-100
                transition-all duration-200
                -translate-y-1 group-hover:translate-y-0.5
              "
            >
              ↓
            </span>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-10 py-3
              font-hero font-semibold text-sm tracking-wider uppercase
              border border-slate-500 text-slate-300
              rounded-sm
              transition-all duration-200
              hover:bg-slate-300 hover:text-black
              hover:-translate-y-0.5
              hover:shadow-md hover:shadow-slate-500/20
              bg-[#1e1e1e]
              flex items-center gap-2
            "
          >
            <AiOutlineDownload className="text-lg" />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
