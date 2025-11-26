import { HiOutlineArrowUp } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: FiGithub, href: "https://github.com/NikosMple", label: "GitHub" },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/nikos-bletsas/",
      label: "LinkedIn",
    },
    { icon: FiMail, href: "mailto:nbletsas98@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/40 backdrop-blur-xl mt-24">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <p className="text-slate-500 text-xs font-mono">
            © {year} Nikos Bletsas
          </p>

          {/* Center - Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-500 hover:text-emerald-400 transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </div>

          {/* Right - Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-7 h-7 rounded-md flex items-center justify-center
              border border-slate-700 bg-slate-900/50
              text-slate-400 hover:text-emerald-400 hover:border-emerald-400
              transition-all
            "
            aria-label="Scroll to top"
          >
            <HiOutlineArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
