import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-300 dark:border-zinc-800 transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-bold text-center">
          Gabriel <span className="text-blue-500">Gomes</span>
        </h2>

        <p className="text-center mt-3 text-zinc-600 dark:text-zinc-400">
          Desenvolvedor Full Stack
        </p>

        <div className="flex justify-center gap-8 mt-8 text-3xl">

          <a
            href="https://github.com/gabrielgomes2171-web"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:gabrielgomes2171@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="border-t border-zinc-300 dark:border-zinc-800 mt-10 pt-8 text-center">

          <p className="text-zinc-600 dark:text-zinc-400">
            © 2026 Gabriel Gomes
          </p>

          <p className="mt-2 flex justify-center items-center gap-2 text-sm text-zinc-500">
            Feito com
            <FaHeart className="text-red-500" />
            React • TypeScript • Vite • Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}