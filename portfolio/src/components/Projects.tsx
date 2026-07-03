import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Meus Projetos
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project) => (

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: .3 }}
            key={project.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-contain bg-zinc-950 p-6"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="bg-zinc-800 px-3 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

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
                  className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 transition px-5 py-3 rounded-xl"
                >
                  <FaExternalLinkAlt />

                  Demo
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}