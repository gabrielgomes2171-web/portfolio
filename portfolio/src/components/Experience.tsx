import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaStore,
  FaRocket,
} from "react-icons/fa";


const experiences = [

{
icon:FaLaptopCode,
title:"StockMoto",
period:"2025 - Atual",
description:
"Desenvolvimento de um sistema completo para gerenciamento de estoque de oficinas e lojas de motopeças utilizando React Native, Firebase, TypeScript e Spring Boot.",
technologies:[
"React Native",
"Firebase",
"Spring Boot",
"TypeScript",
],
},


{
icon:FaMobileAlt,
title:"NexCraft",
period:"2025 - Atual",
description:
"Aplicativo voltado para educação financeira com dashboard, investimentos, metas, patrimônio e organização financeira.",
technologies:[
"React Native",
"Firebase",
"TypeScript",
"Figma",
],
},


{
icon:FaStore,
title:"Infinity Gomes",
period:"2025 - Atual",
description:
"Criação e gerenciamento de loja virtual, identidade visual, anúncios e vendas em marketplaces como Shopee e Mercado Livre.",
technologies:[
"Shopee",
"Mercado Livre",
"Canva",
"Marketing Digital",
],
},


{
icon:FaRocket,
title:"Portfólio Profissional",
period:"2026",
description:
"Desenvolvimento de um portfólio moderno utilizando React, TypeScript, Tailwind CSS e Framer Motion com foco em performance e experiência do usuário.",
technologies:[
"React",
"TypeScript",
"Tailwind CSS",
"Framer Motion",
],
},

];



export function Experience(){

return(

<section

id="experience"

className="
relative
py-24
overflow-hidden
"

>


{/* Aurora */}

<div

className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[800px]
h-[800px]
bg-purple-600/20
rounded-full
blur-[180px]
"

/>




<div

className="
relative
max-w-7xl
mx-auto
px-6
"

>




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

className="text-center"

>


<h2

className="
text-5xl
font-bold
"

>

Minha

<span className="text-blue-500">
 Experiência
</span>


</h2>




<p

className="
mt-5
text-zinc-400
"

>

Projetos práticos que representam minha evolução como desenvolvedor.

</p>


</motion.div>






<div

className="
grid
lg:grid-cols-2
gap-10
mt-16
"

>



{
experiences.map((experience,index)=>{


const Icon = experience.icon;



return(


<motion.div


key={experience.title}



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
duration:.6,
delay:index*.15
}}



whileHover={{
y:-12,
scale:1.03
}}



className="

relative
overflow-hidden

rounded-3xl

bg-zinc-900/60

border
border-zinc-700

backdrop-blur-xl

p-8

shadow-2xl

hover:border-blue-500/50

transition

"

>



{/* brilho interno */}

<div

className="
absolute
-top-20
-right-20
w-48
h-48
bg-blue-500/20
rounded-full
blur-3xl
"

/>





<div

className="
relative
flex
items-center
gap-5
"

>



<div

className="
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

shadow-[0_0_25px_rgba(59,130,246,.5)]

"

>


<Icon/>


</div>





<div>


<h3

className="
text-2xl
font-bold
"

>

{experience.title}

</h3>




<span

className="
text-blue-400
font-medium
"

>

{experience.period}

</span>



</div>



</div>







<p

className="
relative
mt-6
leading-8
text-zinc-400
"

>

{experience.description}

</p>







<div

className="
relative
flex
flex-wrap
gap-3
mt-7
"

>


{
experience.technologies.map((tech)=>(


<span

key={tech}

className="

px-4
py-2

rounded-full

bg-blue-600/10

text-blue-400

text-sm

font-medium

border
border-blue-500/20

"

>


{tech}


</span>


))

}


</div>





</motion.div>



)


})


}




</div>




</div>



</section>


);

}