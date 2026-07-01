export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-white">
          Gomes<span className="text-blue-500">Dev</span>
        </h1>

        <ul className="flex gap-8 text-zinc-300 font-medium">

          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              Sobre
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-500 transition">
              Tecnologias
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projetos
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contato
            </a>
          </li>

        </ul>

      </nav>

    </header>
  );
}