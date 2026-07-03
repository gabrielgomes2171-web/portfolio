import { motion } from "framer-motion";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Tecnologias
        </h2>

        {skills.map((group) => (

          <div key={group.category} className="mb-16">

            <h3 className="text-3xl font-semibold mb-8 text-blue-500">
              {group.category}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {group.items.map((skill) => {

                const Icon = skill.icon;

                return (

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.03
                    }}
                    key={skill.name}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center shadow-lg"
                  >

                    <Icon
                      size={55}
                      className="mx-auto mb-5 text-blue-500"
                    />

                    <h4 className="text-xl font-semibold">
                      {skill.name}
                    </h4>

                  </motion.div>

                );

              })}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}