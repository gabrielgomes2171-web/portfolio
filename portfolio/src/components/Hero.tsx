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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 transition-all duration-500 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white"
    >
      {/* Fundo */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-slate-100
          via-white
          to-blue-100
          dark:from-zinc-950
          dark:via-zinc-900
          dark:to-blue-950
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          w-[600px]
          h-[600px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
        "
      />

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        {/* Foto */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: .3 }}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Gabriel Gomes"
          className="w-44 h-44 rounded-full border-4 border-blue-500 shadow-2xl bg-white mx-auto"
        />

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="text-6xl md:text-7xl font-bold mt-8"
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

        {/* Texto */}
        <p className="mt-8 text-lg leading-8 max-w-3xl mx-auto text-zinc-700 dark:text-zinc-300">
          Estudante de Análise e Desenvolvimento de Sistemas apaixonado por
          tecnologia. Desenvolvendo aplicações Web e Mobile utilizando React,
          React Native, TypeScript, Spring Boot e Firebase para resolver
          problemas reais.
        </p>

        {/* Botões */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <a
            href="https://github.com/gabrielgomes2171-web"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold text-white"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-xl font-semibold"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <FaArrowDown />
            Ver Projetos
          </a>

        </div>

        {/* Estatísticas */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 backdrop-blur-sm p-6 shadow-lg"
          >
            <h3 className="text-4xl font-bold text-blue-500">
              4+
            </h3>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Semestres de ADS
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 backdrop-blur-sm p-6 shadow-lg"
          >
            <h3 className="text-4xl font-bold text-blue-500">
              15+
            </h3>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Tecnologias
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 backdrop-blur-sm p-6 shadow-lg"
          >
            <h3 className="text-4xl font-bold text-blue-500">
              2
            </h3>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Projetos Principais
            </p>

          </motion.div>

        </div>

        {/* Frase */}

        <p className="mt-12 text-lg italic text-zinc-500 dark:text-zinc-400">
          Sempre aprendendo, construindo projetos e buscando minha primeira
          oportunidade como Desenvolvedor Full Stack.
        </p>

      </motion.div>

    </section>
  );
}