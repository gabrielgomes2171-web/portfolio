import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 border-t border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Logo */}

        <div className="flex justify-center mb-5">

          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl shadow-xl">

            <FaCode />

          </div>

        </div>

        {/* Nome */}

        <h2 className="text-3xl font-bold">
          Gabriel Gomes
        </h2>

        <p className="text-zinc-400 mt-3">
          Desenvolvedor Full Stack
        </p>

        {/* Redes */}

        <div className="flex justify-center gap-6 mt-8">

          <a
            href="https://github.com/gabrielgomes2171-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:gabrielgomes2171@gmail.com"
            className="text-3xl hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Localização */}

        <p className="mt-10 text-zinc-500">
          📍 Caruaru • Pernambuco • Brasil
        </p>

        {/* Linha */}

        <div className="border-t border-zinc-800 my-10" />

        {/* Copyright */}

        <p className="text-zinc-500">
          © 2026 Gabriel Gomes.
        </p>

        <p className="text-zinc-600 mt-2">
          Todos os direitos reservados.
        </p>

        {/* Voltar ao topo */}

        <a
          href="#home"
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
        >
          <FaArrowUp />

          Voltar ao topo
        </a>

      </div>

    </footer>
  );
}