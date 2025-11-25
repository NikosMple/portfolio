import React, { useState, useEffect, useCallback, memo } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const getActiveSection = (sections) => {
  const scrollY = window.scrollY + 120;

  for (const sec of sections) {
    const el = document.getElementById(sec);
    if (!el) continue;

    const top = el.offsetTop;
    const height = el.offsetHeight;

    if (scrollY >= top && scrollY < top + height) return sec;
  }
  return "home";
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
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="font-hero text-emerald-400 text-xl tracking-wider"
        >
          NB
        </a>

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
