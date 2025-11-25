import { HiOutlineArrowUp } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      href: "mailto:nikosbletsas00@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer
      className="
        border-t border-slate-800/60
        bg-slate-950/40
        backdrop-blur-xl
        mt-32
        relative z-30
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* LEFT - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold text-slate-200">
              Nikos Bletsas
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              Full Stack Developer
            </p>
          </div>

          {/* CENTER - Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="
                  text-slate-500 text-sm
                  hover:text-emerald-400
                  transition-colors duration-300
                "
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* RIGHT - Social Links (mobile only) */}
          <div className="flex items-center gap-4 md:hidden">
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
                  className="
                    text-slate-500
                    hover:text-emerald-400
                    transition-colors duration-300
                  "
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-slate-800/60 mb-6"></div>

        {/* BOTTOM - Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © {year} Nikos Bletsas — All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-9 h-9
              rounded-md
              flex items-center justify-center
              border border-slate-700
              bg-slate-900/50
              text-slate-400
              hover:text-emerald-400
              hover:border-emerald-400
              hover:bg-slate-900/80
              transition-all duration-300
            "
            aria-label="Scroll to top"
          >
            <HiOutlineArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
