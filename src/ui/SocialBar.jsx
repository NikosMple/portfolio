import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function SocialBar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socials = [
    {
      icon: FiGithub,
      href: "https://github.com/NikosMple",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/nikos-bletsas/",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      href: "mailto:nbletsas98@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="
        fixed left-8 bottom-0
        flex-col items-center gap-6
        text-slate-500
        hidden md:flex
        z-40
        pb-8
      "
    >
      {/* Upper line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-px bg-slate-700"
      />

      {socials.map((social, index) => {
        const Icon = social.icon;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{
                y: -4,
                scale: 1.1,
                rotate: [0, -10, 10, 0],
              }}
              whileTap={{ scale: 0.95 }}
              whileFocus={{
                scale: 1.1,
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                rotate: { duration: 0.5 }
              }}
              className="
                block
                transition-all duration-300
                hover:text-emerald-400
                focus:text-emerald-400
                hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]
                focus:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-900
                rounded-sm
              "
            >
              <Icon size={24} strokeWidth={1.5} />
            </motion.a>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
              className="
                absolute left-12 top-1/2 -translate-y-1/2
                px-3 py-1.5 rounded-md
                bg-slate-800/95 backdrop-blur-sm
                border border-emerald-400/40
                text-emerald-400 text-xs font-mono
                whitespace-nowrap
                pointer-events-none
                shadow-lg shadow-emerald-500/20
              "
            >
              {social.label}
              {/* Tooltip arrow */}
              <div className="
                absolute right-full top-1/2 -translate-y-1/2
                border-4 border-transparent border-r-slate-800/95
              " />
            </motion.div>

            {/* Expanding circle on hover */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isHovered ? 1.5 : 0,
                opacity: isHovered ? 0.2 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="
                absolute inset-0 -z-10
                bg-emerald-400 rounded-full blur-md
                pointer-events-none
              "
            />
          </motion.div>
        );
      })}

      {/* Bottom line with gradient animation */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-px bg-linear-to-b from-slate-700 via-slate-700 to-transparent relative overflow-hidden"
      >
        {/* Animated glow that travels up */}
        <motion.div
          animate={{
            y: [-96, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-8 bg-linear-to-t from-emerald-400/50 to-transparent blur-sm"
        />
      </motion.div>
    </motion.div>
  );
}

export default SocialBar;
