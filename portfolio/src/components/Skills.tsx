import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiExpo,
  SiSpringboot,
  SiFirebase,
  SiPostman,
  SiSwagger,
} from "react-icons/si";


const skillCategories = [

{
title:"💻 Linguagens",

skills:[
{
name:"Java",
icon:<FaJava/>
},
{
name:"JavaScript",
icon:<SiJavascript/>
},
{
name:"TypeScript",
icon:<SiTypescript/>
},
{
name:"SQL",
icon:<FaDatabase/>
},
]

},


{
title:"📱 Mobile",

skills:[
{
name:"React Native",
icon:<FaReact/>
},
{
name:"Expo",
icon:<SiExpo/>
},
{
name:"Android Studio",
icon:<FaMobileAlt/>
},
]

},


{
title:"🌐 Back-end",

skills:[
{
name:"Spring Boot",
icon:<SiSpringboot/>
},
{
name:"REST API",
icon:<FaDatabase/>
},
{
name:"Swagger",
icon:<SiSwagger/>
},
{
name:"Postman",
icon:<SiPostman/>
},
]

},


{
title:"🗄 Banco de Dados",

skills:[
{
name:"MySQL",
icon:<SiMysql/>
},
{
name:"Firebase",
icon:<SiFirebase/>
},
]

},


{
title:"🛠 Ferramentas",

skills:[
{
name:"Git",
icon:<FaGitAlt/>
},
{
name:"GitHub",
icon:<FaGithub/>
},
{
name:"VS Code",
icon:<FaCode/>
},
{
name:"Figma",
icon:<FaFigma/>
},
]

},


];



export function Skills(){

return(

<section
id="skills"
className="
relative
py-24
overflow-hidden
"
>


{/* Brilho da Aurora */}

<div
className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[700px]
h-[700px]
bg-purple-600/20
rounded-full
blur-[180px]
"
/>



<Reveal>

<div
className="
relative
max-w-7xl
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

Tecnologias

</motion.h2>




<p
className="
text-zinc-400
text-center
mt-5
mb-16
max-w-2xl
mx-auto
"
>

Tecnologias utilizadas durante minha graduação e no desenvolvimento
de aplicações Web, Mobile e Back-end.

</p>






<div
className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
"
>


{
skillCategories.map((category,index)=>(


<motion.div

key={category.title}


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
bg-zinc-900/60
border
border-zinc-700
backdrop-blur-xl
rounded-3xl
p-8
shadow-2xl
"

>


<h3
className="
text-2xl
font-bold
text-blue-400
mb-8
"
>

{category.title}

</h3>




<div
className="
grid
grid-cols-2
gap-4
"
>


{
category.skills.map((skill)=>(


<motion.div

key={skill.name}


whileHover={{
scale:1.08
}}


className="
flex
items-center
gap-3
bg-zinc-800/80
border
border-zinc-700
rounded-xl
px-4
py-3
hover:bg-blue-600
transition
cursor-default
"

>


<span
className="
text-2xl
text-blue-400
"

>

{skill.icon}

</span>



<span
className="
font-medium
"
>

{skill.name}

</span>


</motion.div>


))

}



</div>



</motion.div>


))

}


</div>



</div>

</Reveal>


</section>


);

}