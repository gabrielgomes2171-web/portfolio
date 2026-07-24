import { motion } from "framer-motion";

import { Link, useParams } from "react-router-dom";

import {
  FaGithub,
  FaFigma,
  FaArrowLeft,
  FaCheck,
} from "react-icons/fa";


import { projects } from "../data/projects";

import { ImageGallery } from "../components/ImageGallery";



export function ProjectDetails() {


const { slug } = useParams();



const project = projects.find(
(project)=>project.slug === slug
);



if(!project){

return (

<div
className="
min-h-screen
flex
items-center
justify-center
text-white
"
>

<div className="text-center">


<h1 className="
text-5xl
font-bold
">

Projeto não encontrado

</h1>



<Link

to="/"

className="
inline-block
mt-8
bg-blue-600
hover:bg-blue-700
px-6
py-3
rounded-xl
transition
"

>

Voltar ao Portfólio

</Link>


</div>


</div>

);

}



return (

<section

className="
relative
overflow-hidden
min-h-screen
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



{/* VOLTAR */}


<Link

to="/"

className="
inline-flex
items-center
gap-3
text-blue-500
hover:text-blue-400
mb-10
"

>

<FaArrowLeft/>

Voltar

</Link>







<div

className="
grid
lg:grid-cols-2
gap-16
items-start
"

>





{/* ESQUERDA */}



<motion.div

initial={{

opacity:0,
x:-50

}}

animate={{

opacity:1,
x:0

}}

transition={{

duration:.7

}}

>




<div

className="
relative
flex
justify-center
"

>


{/* brilho */}


<div

className="
absolute
w-72
h-72
bg-blue-600/40
rounded-full
blur-[120px]
"

/>



<img

src={project.image}

alt={project.title}

className="
relative
w-60
object-contain
mb-10
drop-shadow-2xl
"

/>



</div>







<div

className="
rounded-3xl
bg-zinc-900/60
backdrop-blur-xl
border
border-white/10
p-6
shadow-2xl
"

>


<ImageGallery

images={project.screenshots}

title={project.title}

/>


</div>



</motion.div>








{/* DIREITA */}



<motion.div


initial={{

opacity:0,
x:50

}}


animate={{

opacity:1,
x:0

}}


transition={{

duration:.7

}}



className="
rounded-3xl
bg-zinc-900/60
backdrop-blur-xl
border
border-white/10
p-10
shadow-2xl
"


>





<h1

className="
text-5xl
font-bold
"

>

{project.title}

</h1>





<p

className="
mt-6
text-lg
leading-8
text-zinc-400
"

>

{project.longDescription}

</p>







{/* TECNOLOGIAS */}



<h2

className="
text-2xl
font-bold
mt-10
"

>

Tecnologias

</h2>



<div

className="
flex
flex-wrap
gap-3
mt-5
"

>


{project.technologies.map((tech)=>(


<span

key={tech}

className="
px-4
py-2
rounded-full
bg-blue-600/20
border
border-blue-500/30
text-blue-400
text-sm
font-medium
"

>

{tech}

</span>


))}


</div>








{/* FUNCIONALIDADES */}



<h2

className="
text-2xl
font-bold
mt-12
"

>

Funcionalidades

</h2>



<div

className="
grid
sm:grid-cols-2
gap-4
mt-5
"

>


{project.features.map((feature)=>(


<motion.div

key={feature}

whileHover={{

x:5

}}

className="
flex
items-center
gap-3
text-zinc-300
"

>


<FaCheck

className="
text-green-500
"

/>


<span>

{feature}

</span>


</motion.div>


))}



</div>







{/* BOTÕES */}



<div

className="
flex
flex-wrap
gap-5
mt-12
"

>


<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-3
bg-white/10
border
border-white/10
hover:bg-white/20
px-6
py-3
rounded-xl
transition
"

>

<FaGithub/>

GitHub

</a>






<a

href={project.figma}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-3
border
border-blue-500
text-blue-400
hover:bg-blue-500
hover:text-white
px-6
py-3
rounded-xl
transition
"

>

<FaFigma/>

Figma

</a>




</div>





</motion.div>




</div>


</div>


</section>


);


}