export function GithubStats() {
  return (
    <section
      id="github"
      className="py-24 bg-white dark:bg-zinc-950 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          GitHub <span className="text-blue-500">Stats</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Stats */}

          <img
            className="rounded-xl shadow-xl w-full"
            src="https://github-readme-stats.vercel.app/api?username=gabrielgomes2171-web&show_icons=true&theme=tokyonight&hide_border=true"
            alt="Github Stats"
          />

          {/* Linguagens */}

          <img
            className="rounded-xl shadow-xl w-full"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabrielgomes2171-web&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top Languages"
          />

        </div>

        <div className="mt-8">

          <img
            className="rounded-xl shadow-xl w-full"
            src="https://streak-stats.demolab.com?user=gabrielgomes2171-web&theme=tokyonight&hide_border=true"
            alt="Github Streak"
          />

        </div>

      </div>
    </section>
  );
}