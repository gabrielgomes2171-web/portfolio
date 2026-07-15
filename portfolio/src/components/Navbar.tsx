import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Contato",
    href: "#contact",
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { dark, toggleTheme } = useTheme();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-lg border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold text-zinc-900 dark:text-white"
        >
          Gomes
          <span className="text-blue-500">Dev</span>
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="text-xl text-yellow-500 hover:scale-110 transition"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

        </nav>

        {/* Mobile */}

        <div className="md:hidden flex items-center gap-5">

          <button
            onClick={toggleTheme}
            className="text-xl text-yellow-500"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-zinc-900 dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
          >

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 px-6 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                {link.name}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>
    </header>
  );
}