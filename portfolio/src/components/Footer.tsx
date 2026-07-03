import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Gabriel <span className="text-blue-500">Gomes</span>
            </h2>

            <p className="text-zinc-400 mt-2">
              Desenvolvedor Full Stack • React Native • Spring Boot
            </p>
          </div>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/gabrielgomes2171-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">

          © 2026 Gabriel Gomes • Desenvolvido com React, TypeScript e Tailwind CSS.

        </div>

      </div>
    </footer>
  );
}