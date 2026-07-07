import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold">
              Gomes
              <span className="text-blue-500">Dev</span>
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Desenvolvedor Full Stack apaixonado por criar soluções Web e
              Mobile modernas utilizando Java, Spring Boot, React Native e
              TypeScript.
            </p>

          </div>

          {/* Navegação */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Navegação
            </h3>

            <div className="flex flex-col gap-3">

              <a href="#about" className="hover:text-blue-500 transition">
                Sobre
              </a>

              <a href="#skills" className="hover:text-blue-500 transition">
                Tecnologias
              </a>

              <a href="#projects" className="hover:text-blue-500 transition">
                Projetos
              </a>

              <a href="#contact" className="hover:text-blue-500 transition">
                Contato
              </a>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Redes Sociais
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/gabrielgomes2171-web"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-zinc-500">
            © 2026 Gabriel Gomes. Todos os direitos reservados.
          </p>

          <a
            href="#"
            className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 transition p-4 rounded-full"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}