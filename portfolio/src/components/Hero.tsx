import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-950" />

      {/* Efeito de luz */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full" />

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Foto */}
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Foto de perfil"
          className="w-44 h-44 rounded-full border-4 border-blue-500 mx-auto shadow-2xl"
        />

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mt-8 text-white"
        >
          Gabriel Gomes
        </motion.h1>

        {/* Cargo animado */}
        <TypeAnimation
          sequence={[
            "Desenvolvedor Full Stack",
            2000,
            "Java Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "React Native Developer",
            2000,
          ]}
          wrapper="h2"
          speed={45}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-blue-500 font-semibold mt-5"
        />

        {/* Descrição */}
        <p className="mt-8 text-zinc-300 text-lg leading-8 max-w-2xl mx-auto">
          Estudante de Análise e Desenvolvimento de Sistemas apaixonado por
          tecnologia. Desenvolvendo aplicações Web e Mobile para resolver
          problemas reais e buscando minha primeira oportunidade como
          Desenvolvedor Full Stack.
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            "Java",
            "Spring Boot",
            "React Native",
            "TypeScript",
            "Firebase",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-blue-500 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://github.com/gabrielgomes2171-web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-medium text-white"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-xl font-medium"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition px-6 py-3 rounded-xl font-medium text-white"
          >
            Ver Projetos
          </a>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="mt-16 text-zinc-500"
        >
          <p className="text-sm mb-2">Role para conhecer meu trabalho</p>
          <span className="text-3xl">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}