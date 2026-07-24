import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaMoneyCheckAlt,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";


const timeline = [

{
year:"2024",
icon:<FaGraduationCap/>,
title:"Início da Graduação",
description:
"Ingresso no curso de Análise e Desenvolvimento de Sistemas.",
color:"from-blue-500 to-cyan-400",
},


{
year:"2025",
icon:<FaLaptopCode/>,
title:"StockMoto",
description:
"Desenvolvimento do aplicativo para gerenciamento de estoque de motopeças.",
color:"from-green-500 to-emerald-400",
},


{
year:"2025",
icon:<FaMoneyCheckAlt/>,
title:"NexCraft",
description:
"Aplicativo voltado para educação financeira e investimentos.",
color:"from-yellow-500 to-orange-400",
},


{
year:"2026",
icon:<FaRocket/>,
title:"Portfólio Profissional",
description:
"Criação de um portfólio moderno utilizando React, TypeScript e Framer Motion.",
color:"from-purple-500 to-pink-500",
},


{
year:"Objetivo",
icon:<FaBriefcase/>,
title:"Primeira Oportunidade",
description:
"Conquistar uma vaga como Desenvolvedor Full Stack.",
color:"from-red-500 to-rose-400",
},

];



export function Timeline(){

return(

<section
id="timeline"
className="
relative
py-24
overflow-hidden
"
>


{/* brilho de fundo */}

<div
className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[600px]
h-[600px]
bg-blue-600/20
rounded-full
blur-[150px]
"
/>



<div
className="
relative
max-w-6xl
mx-auto
px-6
"
>


<motion.h2

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

className="
text-5xl
font-bold
text-center
"

>

Minha Jornada

</motion.h2>



<p
className="
text-center
mt-4
text-zinc-400
"
>

Evolução acadêmica e profissional.

</p>




<div
className="
relative
mt-20
"
>



{/* Linha Neon */}

<div

className="
hidden
md:block
absolute
left-1/2
top-0
h-full
w-[3px]
bg-gradient-to-b
from-blue-500
via-purple-500
to-cyan-400
shadow-[0_0_20px_#3b82f6]
-translate-x-1/2
"

/>





{
timeline.map((item,index)=>(


<motion.div

key={item.title}


initial={{
opacity:0,
x:index%2===0?-100:100
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:.7
}}


className={`
relative
mb-20
flex
items-center
flex-col
md:flex-row

${

index%2===0
?
"md:flex-row"
:
"md:flex-row-reverse"

}

`}


>



{/* CARD */}


<div
className="
md:w-1/2
px-6
"
>


<div

className="
rounded-3xl
p-8
bg-zinc-900/60
border
border-zinc-700
backdrop-blur-xl
shadow-2xl
hover:-translate-y-2
transition
"

>


<span
className="
text-blue-400
font-bold
"
>

{item.year}

</span>



<h3
className="
text-2xl
font-bold
mt-3
"
>

{item.title}

</h3>



<p
className="
mt-4
text-zinc-400
leading-7
"
>

{item.description}

</p>



</div>


</div>






{/* ÍCONE */}


<motion.div

whileHover={{
scale:1.15,
rotate:10
}}

className={`
w-16
h-16
rounded-full
bg-gradient-to-br
${item.color}
text-white
flex
items-center
justify-center
text-2xl
border-4
border-zinc-950
shadow-[0_0_25px_rgba(59,130,246,.6)]
z-10
`}
>


{item.icon}


</motion.div>






<div className="md:w-1/2"/>


</motion.div>


))

}



</div>



</div>



</section>

);

}