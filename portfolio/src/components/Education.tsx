import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

const certificates = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UNINASSAU",
    period: "2025 - Atualmente",
    icon: <FaGraduationCap />,
  },

  {
    title: "Java",
    institution: "Estudos Acadêmicos",
    period: "Concluído",
    icon: <FaCertificate />,
  },

  {
    title: "React Native",
    institution: "Projetos Pessoais",
    period: "Em desenvolvimento",
    icon: <FaCertificate />,
  },

  {
    title: "Spring Boot",
    institution: "Projetos Pessoais",
    period: "Em desenvolvimento",
    icon: <FaCertificate />,
  },

  {
    title: "MySQL",
    institution: "Faculdade",
    period: "Concluído",
    icon: <FaCertificate />,
  },

  {
    title: "Git & GitHub",
    institution: "Projetos Pessoais",
    period: "Concluído",
    icon: <FaCertificate />,
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-all"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Formação <span className="text-blue-500">& Certificações</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              rounded-2xl
              border
              border-zinc-200
              dark:border-zinc-800
              bg-white
              dark:bg-zinc-900
              p-8
              shadow-lg
              "
            >
              <div className="text-4xl text-blue-500 mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {item.institution}
              </p>

              <span className="inline-block mt-4 px-4 py-2 rounded-full bg-blue-600 text-white text-sm">
                {item.period}
              </span>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}