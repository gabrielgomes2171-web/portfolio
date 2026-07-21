import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaStore,
  FaRocket,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    title: "StockMoto",
    period: "2025 - Atual",
    description:
      "Desenvolvimento de um sistema completo para gerenciamento de estoque de oficinas e lojas de motopeças utilizando React Native, Firebase, TypeScript e Spring Boot.",
    technologies: [
      "React Native",
      "Firebase",
      "Spring Boot",
      "TypeScript",
    ],
  },

  {
    icon: <FaMobileAlt />,
    title: "NexCraft",
    period: "2025 - Atual",
    description:
      "Aplicativo voltado para educação financeira com dashboard, investimentos, metas, patrimônio e organização financeira.",
    technologies: [
      "React Native",
      "Firebase",
      "TypeScript",
      "Figma",
    ],
  },

  {
    icon: <FaStore />,
    title: "Infinity Gomes",
    period: "2025 - Atual",
    description:
      "Criação da identidade visual, anúncios, organização da loja virtual e gerenciamento de vendas em marketplaces como Shopee e Mercado Livre.",
    technologies: [
      "Shopee",
      "Mercado Livre",
      "Canva",
      "Marketing",
    ],
  },

  {
    icon: <FaRocket />,
    title: "Portfólio",
    period: "2026",
    description:
      "Desenvolvimento de um portfólio moderno utilizando React, TypeScript, Tailwind CSS e Framer Motion com foco em performance e design.",
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "TypeScript",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-zinc-950 transition-all"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Experiência
        </motion.h2>

        <p className="text-center mt-4 text-zinc-600 dark:text-zinc-400">
          Projetos que demonstram minha experiência prática.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {experiences.map((exp) => (

            <motion.div
              key={exp.title}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl bg-zinc-100 dark:bg-zinc-900 p-8 shadow-xl"
            >

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl">
                  {exp.icon}
                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {exp.title}
                  </h3>

                  <span className="text-blue-500">
                    {exp.period}
                  </span>

                </div>

              </div>

              <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {exp.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}