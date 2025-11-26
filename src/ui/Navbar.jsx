import { useState, useEffect, useCallback, memo } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

/**
 * Determines which section is currently active based on scroll position
 * Uses viewport middle point to decide which section the user is viewing
 * Iterates from bottom to top to prioritize lower sections when boundaries overlap
 */
const getActiveSection = (sections) => {
  const scrollY = window.scrollY;
  const viewportMiddle = scrollY + window.innerHeight / 2;

  for (let i = sections.length - 1; i >= 0; i--) {
    const sec = sections[i];
    const el = document.getElementById(sec);
    if (!el) continue;

    const top = el.offsetTop;
    const height = el.offsetHeight;
    const bottom = top + height;

    if (viewportMiddle >= top && viewportMiddle < bottom) {
      return sec;
    }
  }

  if (scrollY < 100) return "home";

  return sections[0] || "home";
};

const NavLink = ({ href, label, index, active, onClick, mobile }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative font-hero transition-colors tracking-wide
      ${mobile ? "text-2xl" : "text-sm"}
      ${active ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"}
    `}
    >
      <span className="text-emerald-400 text-xs">
        {String(index).padStart(2, "0")}.
      </span>{" "}
      {label}
      {!mobile && (
        <span
          className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-400 transition-all duration-300
            ${active ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      )}
    </a>
  );
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSec, setActiveSec] = useState("home");

  const handleScroll = useCallback(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    setScrolled(window.scrollY > 20);
    setActiveSec(getActiveSection(sections));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  /**
   * Handles smooth scrolling to sections and updates URL history
   * Also closes mobile menu and updates active section state
   */
  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    setActiveSec(id);
    window.history.pushState(null, "", href);

    el?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-slate-900/40 backdrop-blur-md" // smooth, semi-transparent
            : "bg-transparent"
        }
      `}
    >
      {/* FULL WIDTH BAR */}
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* LOGO LEFT */}
        <motion.a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer"
        >
          {/* Compact border box */}
          <div className="relative flex items-center justify-center w-9 h-9">
            {/* Subtle background glow */}
            <motion.div
              className="absolute inset-0 bg-emerald-400/10 rounded blur-sm"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Border frame */}
            <div className="absolute inset-0 border border-emerald-400/50 rounded group-hover:border-emerald-400 transition-all duration-300" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-emerald-400 -translate-x-px -translate-y-px" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-emerald-400 translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-emerald-400 -translate-x-px translate-y-px" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-emerald-400 translate-x-px translate-y-px" />

            {/* Text */}
            <span className="relative z-10 font-hero text-emerald-400 text-sm font-bold tracking-tight group-hover:text-white transition-colors duration-300">
              NB
            </span>
          </div>
        </motion.a>

        {/* DESKTOP LINKS RIGHT */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l, i) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              index={i + 1}
              active={activeSec === l.href.replace("#", "")}
              onClick={(e) => scrollTo(e, l.href)}
            />
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-emerald-400"
        >
          {open ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col 
                    items-center justify-center gap-10 transition-all duration-300
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {links.map((l, i) => (
          <NavLink
            key={l.href}
            href={l.href}
            label={l.label}
            index={i + 1}
            mobile
            active={activeSec === l.href.replace("#", "")}
            onClick={(e) => scrollTo(e, l.href)}
          />
        ))}
      </div>
    </nav>
  );
}

export default memo(Navbar);
