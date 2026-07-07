import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    icon: FaMobileAlt,
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativos Android utilizando React Native, Expo e TypeScript.",
  },
  {
    icon: FaCode,
    title: "Desenvolvimento Back-end",
    description:
      "Criação de APIs REST utilizando Java, Spring Boot e integração com bancos de dados.",
  },
  {
    icon: FaDatabase,
    title: "Banco de Dados",
    description:
      "Modelagem e integração com MySQL e Firebase para aplicações Web e Mobile.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          O que eu desenvolvo
        </h2>

        <p className="text-zinc-400 text-center mb-16">
          Tecnologias e soluções nas quais venho me especializando.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8"
              >
                <Icon
                  size={55}
                  className="text-blue-500 mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}