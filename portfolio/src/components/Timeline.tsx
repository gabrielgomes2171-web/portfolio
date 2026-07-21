import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaMoneyCheckAlt,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    icon: <FaGraduationCap />,
    title: "Início da Graduação",
    description:
      "Ingresso no curso de Análise e Desenvolvimento de Sistemas.",
    color: "bg-blue-500",
  },
  {
    year: "2025",
    icon: <FaLaptopCode />,
    title: "StockMoto",
    description:
      "Desenvolvimento do aplicativo para gerenciamento de estoque de motopeças.",
    color: "bg-green-500",
  },
  {
    year: "2025",
    icon: <FaMoneyCheckAlt />,
    title: "NexCraft",
    description:
      "Aplicativo voltado para educação financeira e investimentos.",
    color: "bg-yellow-500",
  },
  {
    year: "2026",
    icon: <FaRocket />,
    title: "Portfólio Profissional",
    description:
      "Criação de um portfólio moderno utilizando React, TypeScript e Framer Motion.",
    color: "bg-purple-500",
  },
  {
    year: "Objetivo",
    icon: <FaBriefcase />,
    title: "Primeira Oportunidade",
    description:
      "Conquistar uma vaga como Desenvolvedor Full Stack.",
    color: "bg-red-500",
  },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 bg-white dark:bg-zinc-950 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Minha Jornada
        </motion.h2>

        <p className="text-center mt-4 text-zinc-600 dark:text-zinc-400">
          Evolução acadêmica e profissional.
        </p>

        <div className="relative mt-20">

          {/* Linha */}

          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 -translate-x-1/2 hidden md:block" />

          {timeline.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
              }}
              className={`mb-16 flex ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex-col items-center`}
            >

              <div className="md:w-1/2 px-6">

                <div className="rounded-3xl shadow-xl bg-zinc-100 dark:bg-zinc-900 p-8 hover:scale-105 transition">

                  <span className="text-blue-500 font-bold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>

                </div>

              </div>

              {/* Ícone */}

              <div
                className={`w-16 h-16 rounded-full ${item.color}
                text-white flex items-center justify-center text-2xl
                border-4 border-white dark:border-zinc-950 shadow-xl z-10`}
              >
                {item.icon}
              </div>

              <div className="md:w-1/2" />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}