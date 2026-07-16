import { Link, useParams } from "react-router-dom";
import {
  FaGithub,
  FaFigma,
  FaArrowLeft,
  FaCheck,
} from "react-icons/fa";

import { projects } from "../data/projects";
import { ImageGallery } from "../components/ImageGallery";

export function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Projeto não encontrado
          </h1>

          <Link
            to="/"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl"
          >
            Voltar ao Portfólio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-zinc-950 py-24 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Botão Voltar */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-10"
        >
          <FaArrowLeft />
          Voltar
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Lado Esquerdo */}

          <div>

            {/* Logo */}

            <img
              src={project.image}
              alt={project.title}
              className="
                w-60
                mx-auto
                object-contain
                mb-10
              "
            />

            {/* Galeria */}

            <ImageGallery
              images={project.screenshots}
              title={project.title}
            />

          </div>

          {/* Lado Direito */}

          <div>

            <h1 className="text-5xl font-bold">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {project.longDescription}
            </p>

            {/* Tecnologias */}

            <h2 className="text-2xl font-bold mt-10">
              Tecnologias
            </h2>

            <div className="flex flex-wrap gap-3 mt-5">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Funcionalidades */}

            <h2 className="text-2xl font-bold mt-12">
              Funcionalidades
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-5">

              {project.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <FaCheck className="text-green-500" />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            {/* Botões */}

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  bg-zinc-900
                  hover:bg-zinc-800
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  transition
                "
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  border
                  border-blue-500
                  px-6
                  py-3
                  rounded-xl
                  hover:bg-blue-500
                  hover:text-white
                  transition
                "
              >
                <FaFigma />
                Figma
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}