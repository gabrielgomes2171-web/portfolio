import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-950" />

      {/* Luz Azul */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6 max-w-5xl"
      >
        {/* Foto */}
        <motion.img
          whileHover={{ scale: 1.08 }}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Gabriel Gomes"
          className="w-44 h-44 rounded-full border-4 border-blue-500 mx-auto shadow-2xl"
        />

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mt-8 text-white"
        >
          Gabriel Gomes
        </motion.h1>

        {/* Cargo */}
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
          className="text-3xl text-blue-500 font-semibold mt-5"
        />

        {/* Descrição */}
        <p className="mt-8 text-zinc-300 text-lg leading-8 max-w-2xl mx-auto">
          Estudante de Análise e Desenvolvimento de Sistemas apaixonado por
          tecnologia. Desenvolvendo aplicações Web e Mobile utilizando React,
          React Native, TypeScript, Spring Boot e Firebase para resolver
          problemas reais.
        </p>

        {/* Botões */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://github.com/gabrielgomes2171-web"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 hover:bg-blue-500 transition duration-300 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="#projects"
            className="bg-white text-zinc-900 hover:bg-zinc-200 transition duration-300 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
          >
            <FaArrowDown />
            Ver Projetos
          </a>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="text-4xl font-bold text-blue-500">4+</h3>
            <p className="text-zinc-400 mt-2">Semestres de ADS</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="text-4xl font-bold text-blue-500">15+</h3>
            <p className="text-zinc-400 mt-2">Tecnologias</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="text-4xl font-bold text-blue-500">2</h3>
            <p className="text-zinc-400 mt-2">Projetos Principais</p>
          </motion.div>
        </div>

        {/* Frase */}
        <p className="mt-12 text-zinc-500 italic text-lg">
          Sempre aprendendo, construindo projetos e buscando minha primeira
          oportunidade como Desenvolvedor Full Stack.
        </p>
      </motion.div>
    </section>
  );
}