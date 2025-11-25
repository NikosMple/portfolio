function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <h2 className="flex items-center text-3xl md:text-4xl font-heading font-bold text-white whitespace-nowrap">
        <span className="text-emerald-400 font-mono text-xl mr-2">
          {number}.
        </span>
        {title}
      </h2>

      <div className="h-px bg-linear-to-r from-emerald-500/40 to-transparent grow"></div>
    </div>
  );
}

export default SectionHeader;
