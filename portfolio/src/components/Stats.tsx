import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

const stats = [
  {
    icon: FaGraduationCap,
    number: "4º",
    title: "Período de ADS",
  },
  {
    icon: FaProjectDiagram,
    number: "2",
    title: "Projetos Principais",
  },
  {
    icon: FaLaptopCode,
    number: "15+",
    title: "Tecnologias",
  },
  {
    icon: FaCode,
    number: "100%",
    title: "Dedicação aos Estudos",
  },
];

export function Stats() {
  return (
    <section className="bg-zinc-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Estatísticas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 text-center"
              >
                <Icon
                  className="mx-auto text-blue-500 mb-6"
                  size={50}
                />

                <h3 className="text-5xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="text-zinc-400 mt-4">
                  {item.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}