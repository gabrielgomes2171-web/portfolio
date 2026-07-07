import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-900 py-24 px-6"
    >
      <Reveal>

        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4"
          >
            Meus Projetos
          </motion.h2>

          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            Alguns projetos desenvolvidos durante minha graduação e estudos
            para aprimorar minhas habilidades em Desenvolvimento Web,
            Mobile e Back-end.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project) => (

              <motion.div
                key={project.id}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl"
              >

                {/* Imagem */}

                <div className="h-72 flex items-center justify-center bg-zinc-900">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-56 object-contain transition duration-300 hover:scale-110"
                  />

                </div>

                {/* Conteúdo */}

                <div className="p-8">

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mt-4 leading-7">
                    {project.description}
                  </p>

                  {/* Tecnologias */}

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Botões */}

                  <div className="flex gap-4 mt-8">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl"
                    >
                      <FaExternalLinkAlt />
                      Ver Projeto
                    </a>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Reveal>
    </section>
  );
}