import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiExpo,
  SiSpringboot,
  SiFirebase,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

const skillCategories = [
  {
    title: "💻 Linguagens",
    skills: [
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "SQL",
        icon: <FaDatabase />,
      },
    ],
  },

  {
    title: "📱 Mobile",
    skills: [
      {
        name: "React Native",
        icon: <FaReact />,
      },
      {
        name: "Expo",
        icon: <SiExpo />,
      },
      {
        name: "Android Studio",
        icon: <FaMobileAlt />,
      },
    ],
  },

  {
    title: "🌐 Back-end",
    skills: [
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "REST API",
        icon: <FaDatabase />,
      },
      {
        name: "Swagger",
        icon: <SiSwagger />,
      },
      {
        name: "Postman",
        icon: <SiPostman />,
      },
    ],
  },

  {
    title: "🗄 Banco de Dados",
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
    ],
  },

  {
    title: "🛠 Ferramentas",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "VS Code",
        icon: <FaCode />,
      },
      {
        name: "Figma",
        icon: <FaFigma />,
      },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 py-24 px-6"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4"
          >
            Tecnologias
          </motion.h2>

          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            Tecnologias utilizadas durante minha graduação e no desenvolvimento
            de aplicações Web, Mobile e Back-end.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.25 }}
                className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">

                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08 }}
                      className="flex items-center gap-3 bg-zinc-800 rounded-xl px-4 py-3 hover:bg-blue-600 transition-all duration-300 cursor-default"
                    >
                      <span className="text-2xl">
                        {skill.icon}
                      </span>

                      <span className="font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}