import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Início da Graduação",
    description:
      "Comecei o curso de Análise e Desenvolvimento de Sistemas, desenvolvendo a base em lógica de programação, algoritmos e banco de dados.",
  },

  {
    year: "2026",
    title: "Primeiros Projetos",
    description:
      "Aprendi Java, JavaScript, SQL e iniciei projetos acadêmicos utilizando boas práticas de desenvolvimento.",
  },

  {
    year: "2026",
    title: "Desenvolvimento Mobile",
    description:
      "Passei a desenvolver aplicações com React Native, Firebase, TypeScript e Spring Boot.",
  },

  {
    year: "2026",
    title: "Projetos Próprios",
    description:
      "Desenvolvimento dos aplicativos StockMoto e NexCraft, criando interfaces modernas e APIs para aplicações reais.",
  },

  {
    year: "Hoje",
    title: "Buscando Estágio",
    description:
      "Em busca da primeira oportunidade como Desenvolvedor Full Stack para aplicar meus conhecimentos e continuar evoluindo.",
  },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      className="max-w-6xl mx-auto px-6 py-28"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        Minha Jornada
      </h2>

      <div className="relative border-l-2 border-blue-600 ml-5">

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="mb-14 ml-8"
          >

            <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-[11px]" />

            <span className="text-blue-400 font-bold">
              {item.year}
            </span>

            <h3 className="text-2xl font-bold mt-2">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-3 leading-7">
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}