import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function SocialBar() {
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

  return (
    <div
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
      <div className="w-px h-20 bg-slate-700"></div>

      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="
              transition-all duration-300
              hover:text-emerald-400
              hover:-translate-y-1
              hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]
            "
          >
            <Icon size={24} strokeWidth={1.5} />
          </a>
        );
      })}

      {/* Bottom line */}
      <div className="w-px h-24 bg-slate-700"></div>
    </div>
  );
}

export default SocialBar;
