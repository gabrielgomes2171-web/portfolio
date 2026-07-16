import { motion } from "framer-motion";
import { FaGithub, FaFigma, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-zinc-100 dark:bg-zinc-950 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Meus <span className="text-blue-500">Projetos</span>
        </motion.h2>

        <p className="text-center mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Alguns dos principais projetos que desenvolvi utilizando React Native,
          TypeScript, Spring Boot, Firebase e MySQL.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl"
            >
              {/* Imagem */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-800 px-5 py-3 text-white hover:bg-zinc-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-blue-500 px-5 py-3 hover:bg-blue-500 hover:text-white transition"
                  >
                    <FaFigma />
                    Figma
                  </a>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
                  >
                    Ver Projeto
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}