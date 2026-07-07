import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Gabriel <span className="text-blue-500">Gomes</span>
        </a>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}