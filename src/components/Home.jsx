import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { useEffect, useState } from "react";

function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer";

  /**
   * Creates a typing animation effect for the tagline
   * Types one character every 100ms and cleans up on unmount
   */
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Main Glow Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
               bg-emerald-500/20 rounded-full blur-[140px]"
        />

        {/* Secondary Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-[300px] h-[300px]
               bg-emerald-400/10 rounded-full blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-20 w-[400px] h-[400px]
               bg-emerald-300/10 rounded-full blur-[120px]"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-emerald-400 font-hero text-xs md:text-sm tracking-widest mb-3"
        >
          Hi, my name is
        </motion.p>

        {/* Name with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-hero leading-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-slate-100 to-slate-300">
            Nikos Bletsas
          </span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-emerald-400"
          >
            .
          </motion.span>
        </motion.h1>

        {/* Tagline with Typing Effect */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-hero text-emerald-400 mb-8"
        >
          <span className="text-slate-500">&lt;</span>
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block w-0.5 h-8 md:h-12 bg-emerald-400 ml-1"
          />
          <span className="text-slate-500">/&gt;</span>

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
          Frontend-first developer working with React and TypeScript, with
          hands-on experience in Node.js and modern databases.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center gap-5 flex-wrap"
        >
          {/* Projects - Primary CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              group relative overflow-hidden
              px-10 py-3
              font-hero font-semibold text-sm tracking-wider uppercase
              border-2 border-emerald-400 text-emerald-400
              rounded-sm
              transition-all duration-300
              hover:shadow-lg hover:shadow-emerald-500/30
              flex items-center gap-2
              before:absolute before:inset-0
              before:bg-emerald-400
              before:-translate-x-full
              before:transition-transform before:duration-500
              hover:before:translate-x-0
              before:z-0
            "
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              View Projects
            </span>

            <motion.span
              className="relative z-10 transition-all duration-300 group-hover:text-black inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Download CV */}
          <motion.a
            href="https://drive.google.com/file/d/1u9LGDG8yEitcSBko0wr6mgDUJoqsWSlQ/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              group relative overflow-hidden
              px-9 py-3
              font-hero font-medium text-sm tracking-wider uppercase
              text-emerald-400 border border-emerald-400
              rounded-sm
              transition-all duration-300
              flex items-center gap-2
              hover:border-emerald-300
              hover:text-black
              hover:bg-emerald-400/90
            "
          >
            <AiOutlineDownload className="text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
            <span className="relative z-10">Download CV</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-slate-500 tracking-wider">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-emerald-400/40 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-emerald-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
