import { motion } from "framer-motion";
import {
  FaGithub,
  FaFigma,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { projects } from "../data/projects";


export function Projects() {

  return (

    <section
      id="projects"
      className="
        py-24
        px-6
        bg-transparent
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* Título */}

        <motion.h2
          initial={{
            opacity:0,
            y:-40,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:.6,
          }}
          viewport={{
            once:true,
          }}
          className="
            text-5xl
            font-bold
            text-center
          "
        >

          Meus{" "}
          <span className="text-blue-500">
            Projetos
          </span>

        </motion.h2>



        <p
          className="
            text-center
            mt-6
            text-zinc-400
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          Alguns dos principais projetos que desenvolvi utilizando
          React Native, TypeScript, Spring Boot, Firebase e MySQL.
        </p>



        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-10
            mt-16
          "
        >


          {projects.map((project,index)=>(


            <motion.div

              key={project.id}


              initial={{
                opacity:0,
                y:60,
              }}


              whileInView={{
                opacity:1,
                y:0,
              }}


              transition={{
                duration:.6,
                delay:index * .2,
              }}


              viewport={{
                once:true,
              }}


              whileHover={{
                y:-12,
                scale:1.02,
              }}


              className="
                glass
                overflow-hidden
                rounded-3xl
              "

            >



              {/* Imagem */}


              <div
                className="
                  relative
                  overflow-hidden
                "
              >

                <img

                  src={project.image}

                  alt={project.title}

                  className="
                    w-full
                    h-64
                    object-cover
                    transition
                    duration-700
                    hover:scale-110
                  "

                />


                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-blue-500/10
                    opacity-0
                    hover:opacity-100
                    transition
                  "
                />


              </div>





              <div
                className="
                  p-8
                "
              >


                <h3
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  {project.title}
                </h3>



                <p
                  className="
                    mt-4
                    text-zinc-400
                    leading-8
                  "
                >
                  {project.description}
                </p>





                {/* Tecnologias */}


                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                  "
                >

                  {project.technologies.map((tech)=>(

                    <span

                      key={tech}

                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        text-blue-400
                        text-sm
                        font-medium
                      "

                    >

                      {tech}

                    </span>

                  ))}


                </div>





                {/* Botões */}


                <div
                  className="
                    flex
                    flex-wrap
                    gap-4
                    mt-8
                  "
                >



                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-zinc-900
                      px-5
                      py-3
                      text-white
                      hover:bg-blue-600
                      transition
                    "

                  >

                    <FaGithub />

                    GitHub

                  </a>





                  <a

                    href={project.figma}

                    target="_blank"

                    rel="noreferrer"

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-blue-500
                      px-5
                      py-3
                      hover:bg-blue-500
                      hover:text-white
                      transition
                    "

                  >

                    <FaFigma />

                    Figma

                  </a>






                  <Link

                    to={`/projects/${project.slug}`}

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-5
                      py-3
                      text-white
                      hover:bg-blue-700
                      transition
                    "

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