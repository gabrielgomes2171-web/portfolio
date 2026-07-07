import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaMobileAlt,
    title: "React Native",
    description:
      "Desenvolvimento de aplicativos Android utilizando React Native e Expo.",
  },

  {
    icon: FaJava,
    title: "Java & Spring Boot",
    description:
      "Criação de APIs REST modernas utilizando Spring Boot.",
  },

  {
    icon: FaDatabase,
    title: "MySQL & Firebase",
    description:
      "Integração com bancos de dados SQL e NoSQL.",
  },
];

export function Highlights() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {highlights.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800"
              >

                <Icon
                  size={50}
                  className="text-blue-500 mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}