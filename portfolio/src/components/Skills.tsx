const categorias = [
  {
    titulo: "💻 Linguagens",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    titulo: "📱 Mobile",
    skills: ["React Native", "Expo", "Android Studio"],
  },
  {
    titulo: "🌐 Back-end",
    skills: ["Spring Boot", "REST API", "Swagger", "Postman"],
  },
  {
    titulo: "🗄 Banco de Dados",
    skills: ["MySQL", "Firebase"],
  },
  {
    titulo: "🛠 Ferramentas",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-28 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Tecnologias
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {categorias.map((categoria) => (

          <div
            key={categoria.titulo}
            className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-blue-500 hover:scale-105 transition"
          >

            <h3 className="text-2xl font-bold mb-6">
              {categoria.titulo}
            </h3>

            <div className="flex flex-wrap gap-3">

              {categoria.skills.map((skill) => (

                <span
                  key={skill}
                  className="bg-zinc-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}