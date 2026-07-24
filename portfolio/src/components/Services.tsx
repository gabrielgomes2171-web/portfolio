import { motion } from "framer-motion";

import {
  FaMobileAlt,
  FaCode,
  FaDatabase,
  FaServer,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: FaMobileAlt,
    title: "Desenvolvimento Mobile",
    description:
      "Criação de aplicativos Android modernos utilizando React Native, Expo e TypeScript, com foco em performance e experiência do usuário.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
    ],
  },

  {
    icon: FaCode,
    title: "Desenvolvimento Front-end",
    description:
      "Desenvolvimento de interfaces modernas, responsivas e interativas utilizando React, Tailwind CSS e animações.",
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],
  },

  {
    icon: FaServer,
    title: "Back-end & APIs",
    description:
      "Construção de APIs REST completas utilizando Java, Spring Boot e integração com sistemas.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
    ],
  },

  {
    icon: FaDatabase,
    title: "Banco de Dados",
    description:
      "Modelagem, integração e gerenciamento de dados utilizando bancos SQL e NoSQL.",
    technologies: [
      "MySQL",
      "Firebase",
      "Firestore",
    ],
  },

  {
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Criação de interfaces e protótipos modernos pensando em usabilidade e experiência do usuário.",
    technologies: [
      "Figma",
      "Design System",
      "Protótipos",
    ],
  },

  {
    icon: FaRocket,
    title: "Projetos Digitais",
    description:
      "Desenvolvimento de soluções completas desde a ideia inicial até a aplicação final.",
    technologies: [
      "Git",
      "GitHub",
      "Deploy",
    ],
  },
];


export function Services() {

  return (

    <section
      id="services"
      className="
      relative
      py-24
      bg-transparent
      "
    >


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        {/* TÍTULO */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.6
          }}

          className="text-center"

        >


          <h2 className="
          text-5xl
          font-bold
          text-white
          ">

            O que eu{" "}

            <span className="
            text-blue-500
            ">
              desenvolvo
            </span>


          </h2>



          <p className="
          mt-5
          text-zinc-400
          max-w-2xl
          mx-auto
          text-lg
          ">

            Tecnologias e soluções que utilizo para criar
            aplicações modernas, escaláveis e eficientes.

          </p>


        </motion.div>




        {/* CARDS */}

        <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-16
        "
        >


        {services.map((service,index)=>{


          const Icon = service.icon;


          return (

            <motion.div


            key={service.title}


            initial={{
              opacity:0,
              y:60
            }}


            whileInView={{
              opacity:1,
              y:0
            }}


            viewport={{
              once:true
            }}


            transition={{
              duration:.6,
              delay:index * .1
            }}


            whileHover={{
              y:-12,
              scale:1.03
            }}


            className="

            relative
            overflow-hidden

            rounded-3xl

            bg-zinc-900/60

            backdrop-blur-xl

            border

            border-white/10

            p-8

            shadow-2xl

            "

            >



            {/* BRILHO INTERNO */}

            <div
            className="
            absolute
            -top-20
            -right-20
            w-40
            h-40
            bg-blue-500/20
            rounded-full
            blur-3xl
            "
            />




            {/* ÍCONE */}

            <div
            className="
            relative
            w-16
            h-16
            rounded-2xl

            bg-gradient-to-br
            from-blue-500
            to-purple-600

            flex
            items-center
            justify-center

            text-white
            text-3xl

            mb-6

            shadow-lg

            group-hover:rotate-6

            "
            >

              <Icon />

            </div>




            <h3
            className="
            relative
            text-2xl
            font-bold
            text-white
            "
            >

              {service.title}

            </h3>




            <p
            className="
            relative
            mt-4
            text-zinc-400
            leading-8
            "
            >

              {service.description}

            </p>




            {/* TECNOLOGIAS */}

            <div
            className="
            relative
            flex
            flex-wrap
            gap-3
            mt-6
            "
            >

              {service.technologies.map((tech)=>(

                <span

                key={tech}

                className="
                px-3
                py-1
                rounded-full

                bg-blue-500/10

                border
                border-blue-500/20

                text-blue-400

                text-sm

                "

                >

                  {tech}

                </span>

              ))}


            </div>



            </motion.div>


          );


        })}


        </div>



      </div>


    </section>


  );

}