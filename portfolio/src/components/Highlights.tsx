import { motion } from "framer-motion";

import {
  FaMobileAlt,
  FaJava,
  FaDatabase,
  FaReact,
  FaGithub,
  FaCode,
} from "react-icons/fa";


const highlights = [

  {
    icon: FaMobileAlt,
    title: "Desenvolvimento Mobile",
    description:
      "Criação de aplicativos Android modernos utilizando React Native, Expo e TypeScript com foco em performance e experiência do usuário.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
    ],
  },


  {
    icon: FaJava,
    title: "Java & Spring Boot",
    description:
      "Desenvolvimento de APIs REST escaláveis utilizando Java, Spring Boot e boas práticas de arquitetura.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
    ],
  },


  {
    icon: FaDatabase,
    title: "Banco de Dados",
    description:
      "Integração e gerenciamento de dados utilizando bancos relacionais e NoSQL.",
    technologies: [
      "MySQL",
      "Firebase",
      "Firestore",
    ],
  },


  {
    icon: FaReact,
    title: "React & Front-end",
    description:
      "Construção de interfaces modernas, responsivas e interativas utilizando React, Tailwind CSS e animações.",
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],
  },


  {
    icon: FaGithub,
    title: "Versionamento",
    description:
      "Organização de projetos utilizando Git, GitHub e boas práticas de desenvolvimento colaborativo.",
    technologies: [
      "Git",
      "GitHub",
      "Branches",
    ],
  },


  {
    icon: FaCode,
    title: "Full Stack",
    description:
      "Desenvolvimento de soluções completas envolvendo Front-end, Back-end, Mobile e Banco de Dados.",
    technologies: [
      "Full Stack",
      "APIs",
      "Deploy",
    ],
  },

];



export function Highlights() {


return (

<section

id="highlights"

className="
relative
overflow-hidden
py-24
"

>


<div
className="
max-w-7xl
mx-auto
px-6
"
>



{/* TÍTULO */}


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="
text-center
"

>


<h2
className="
text-5xl
font-bold
"
>

Minhas{" "}

<span className="text-blue-500">
Especialidades
</span>

</h2>



<p
className="
mt-5
text-lg
text-zinc-400
max-w-2xl
mx-auto
"
>

Principais tecnologias e áreas onde desenvolvo soluções digitais.

</p>


</motion.div>





{/* CARDS */}


<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
"
>


{highlights.map((item,index)=>{


const Icon = item.icon;


return (


<motion.div


key={item.title}


initial={{

opacity:0,
y:60

}}


whileInView={{

opacity:1,
y:0

}}


viewport={{

once:true

}}


transition={{

duration:.5,
delay:index * .1

}}


whileHover={{

y:-12,
scale:1.03

}}



className="

group

relative

overflow-hidden

rounded-3xl

bg-zinc-900/60

backdrop-blur-xl

border

border-white/10

p-8

shadow-2xl

"

>



{/* Brilho Aurora no card */}


<div

className="

absolute

-top-20

-right-20

w-40

h-40

bg-blue-500/30

rounded-full

blur-3xl

opacity-0

group-hover:opacity-100

transition

"

/>





{/* Ícone */}


<div

className="

relative

w-16

h-16

rounded-2xl

bg-gradient-to-br

from-blue-500

to-purple-600

flex

items-center

justify-center

text-white

text-3xl

mb-6

shadow-lg

group-hover:rotate-6

transition

"

>


<Icon />


</div>





<h3

className="

text-2xl

font-bold

relative

"

>

{item.title}

</h3>





<p

className="

mt-4

text-zinc-400

leading-8

relative

"

>

{item.description}

</p>





{/* Tecnologias */}


<div

className="

flex

flex-wrap

gap-3

mt-6

relative

"

>


{item.technologies.map((tech)=>(


<span

key={tech}

className="

px-3

py-1

rounded-full

text-sm

bg-blue-600/10

text-blue-400

border

border-blue-500/20

"

>

{tech}


</span>


))}



</div>





</motion.div>


);


})}



</div>



</div>


</section>


);


}