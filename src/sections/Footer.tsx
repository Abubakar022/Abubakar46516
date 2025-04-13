import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerlink = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/abu-bakar-384aa1264/",
  },
  {
    title: "GitHub",
    link: "https://github.com/Abubakar022",
  }
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      {/* Background glow effect - moved z-index lower to prevent blocking clicks */}
      <div 
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 z-0 pointer-events-none"
        style={{ maskImage: "radial-gradient(50% 50% at bottom center, black, transparent)" }}>
      </div>

      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerlink.map((link) => (
              <a 
                href={link.link} 
                key={link.title} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
