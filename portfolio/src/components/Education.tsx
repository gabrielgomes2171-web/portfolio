import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export function Education() {
  return (
    <section
      id="education"
      className="bg-zinc-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Formação & Certificações
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Formação */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-zinc-950 rounded-3xl border border-zinc-800 p-8"
          >
            <FaGraduationCap
              className="text-blue-500 mb-6"
              size={50}
            />

            <h3 className="text-2xl font-bold">
              Análise e Desenvolvimento de Sistemas
            </h3>

            <p className="text-blue-400 mt-2">
              UNINASSAU - Caruaru
            </p>

            <p className="text-zinc-400 mt-6 leading-8">
              Atualmente cursando o 4º período, com foco em
              desenvolvimento Web, Mobile, Banco de Dados,
              Engenharia de Software e APIs REST.
            </p>
          </motion.div>

          {/* Certificações */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-zinc-950 rounded-3xl border border-zinc-800 p-8"
          >
            <FaCertificate
              className="text-yellow-500 mb-6"
              size={50}
            />

            <h3 className="text-2xl font-bold">
              Tecnologias estudadas
            </h3>

            <div className="mt-6 space-y-4 text-zinc-300">

              <p>✔ Java</p>

              <p>✔ Spring Boot</p>

              <p>✔ React Native</p>

              <p>✔ TypeScript</p>

              <p>✔ Firebase</p>

              <p>✔ MySQL</p>

              <p>✔ Git & GitHub</p>

              <p>✔ Figma</p>

              <p>✔ APIs REST</p>

              <p>✔ Postman & Swagger</p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}