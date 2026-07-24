import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";


const certificates = [

{
title:"Análise e Desenvolvimento de Sistemas",
institution:"UNINASSAU",
period:"2025 - Atualmente",
icon:<FaGraduationCap/>,
},


{
title:"Java",
institution:"Estudos Acadêmicos",
period:"Concluído",
icon:<FaCertificate/>,
},


{
title:"React Native",
institution:"Projetos Pessoais",
period:"Em desenvolvimento",
icon:<FaCertificate/>,
},


{
title:"Spring Boot",
institution:"Projetos Pessoais",
period:"Em desenvolvimento",
icon:<FaCertificate/>,
},


{
title:"MySQL",
institution:"Faculdade",
period:"Concluído",
icon:<FaCertificate/>,
},


{
title:"Git & GitHub",
institution:"Projetos Pessoais",
period:"Concluído",
icon:<FaCertificate/>,
},

];



export function Education(){

return (

<section

id="education"

className="
relative
py-24
overflow-hidden
"

>


{/* Aurora interna */}

<div

className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[700px]
h-[700px]
bg-blue-600/20
rounded-full
blur-[180px]
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


Formação

<span className="text-blue-500">
 & Certificações
</span>


</motion.h2>





<p

className="
text-center
text-zinc-400
mt-5
mb-16
"

>

Minha evolução acadêmica e conhecimentos adquiridos
durante minha jornada como desenvolvedor.

</p>






<div

className="
grid
md:grid-cols-2
gap-8
"

>


{

certificates.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:50
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
delay:index*.1
}}


whileHover={{
y:-10,
scale:1.03
}}



className="

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



<div

className="
w-16
h-16
rounded-2xl
bg-blue-600/20
flex
items-center
justify-center
text-blue-500
text-4xl
mb-6
"

>

{item.icon}

</div>





<h3

className="
text-2xl
font-bold
"

>

{item.title}

</h3>





<p

className="
mt-3
text-zinc-400
"

>

{item.institution}

</p>





<span

className="
inline-block
mt-5
px-5
py-2
rounded-full
bg-blue-600
text-white
text-sm
font-medium
"

>

{item.period}

</span>





</motion.div>


))


}



</div>




</div>



</section>


);

}