import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";



export function Hero(){

return (

<section
id="home"
className="
min-h-screen
flex
items-center
pt-32
relative
overflow-hidden
"
>


<div
className="
max-w-7xl
mx-auto
px-6
grid
lg:grid-cols-2
gap-16
items-center
w-full
"
>



{/* TEXTO */}

<motion.div

initial={{
opacity:0,
x:-80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>


<p className="
text-blue-500
font-semibold
mb-4
text-lg
">

Olá, eu sou

</p>



<h1
className="
text-5xl
md:text-7xl
font-bold
leading-tight
"
>

Gabriel Gomes


<br/>


<span className="
text-blue-500
">

Desenvolvedor

</span>


</h1>



<div
className="
mt-6
text-2xl
md:text-3xl
font-semibold
text-zinc-400
"
>


<TypeAnimation

sequence={[

"Full Stack Developer",
2000,

"React Native Developer",
2000,

"Java Spring Boot Developer",
2000,

"ADS Student",
2000,

]}

speed={50}

repeat={Infinity}

/>


</div>




<p
className="
mt-8
text-lg
leading-8
text-zinc-400
max-w-xl
"
>

Estudante de Análise e Desenvolvimento de Sistemas,
desenvolvendo aplicações Mobile, Web e APIs utilizando
React Native, TypeScript, Java, Spring Boot,
Firebase e MySQL.

</p>





{/* BOTÕES */}

<div
className="
flex
flex-wrap
gap-5
mt-10
"
>


<a

href="/curriculo.pdf"

download

className="
flex
items-center
gap-3
bg-blue-600
hover:bg-blue-700
px-7
py-4
rounded-xl
text-white
transition
"

>

<FaDownload/>

Baixar Currículo

</a>



<a

href="#projects"

className="
flex
items-center
gap-3
border
border-blue-500
px-7
py-4
rounded-xl
hover:bg-blue-500
hover:text-white
transition
"

>

Ver Projetos

<FaArrowRight/>

</a>


</div>




{/* GitHub */}

<div
className="
mt-8
"
>


<a

href="https://github.com/gabrielgomes2171-web"

target="_blank"

className="
inline-flex
items-center
gap-3
text-zinc-400
hover:text-blue-500
transition
"

>

<FaGithub/>

github.com/gabrielgomes2171-web

</a>


</div>



</motion.div>





{/* FOTO */}


<motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}

className="
relative
flex
justify-center
"

>



{/* BRILHO */}

<div
className="
absolute
w-[350px]
h-[350px]
bg-blue-600/40
rounded-full
blur-[120px]
"
/>





{/* CARD 3D */}


<motion.div

whileHover={{
rotateY:10,
rotateX:10,
}}

transition={{
type:"spring",
stiffness:200
}}

style={{
transformStyle:"preserve-3d"
}}

className="
relative
z-10
w-[320px]
h-[420px]
rounded-3xl
border
border-zinc-700
bg-zinc-900/70
backdrop-blur-xl
shadow-2xl
flex
items-end
justify-center
overflow-hidden
"

>


<img

src="/images/perfil.png"

alt="Gabriel Gomes"

className="
w-full
h-full
object-cover
"

 />


</motion.div>




{/* TECNOLOGIAS FLUTUANTES */}


<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
absolute
top-10
right-0
bg-zinc-900
border
border-zinc-700
px-5
py-3
rounded-xl
shadow-xl
"

>

React Native

</motion.div>



<motion.div

animate={{
y:[0,15,0]
}}

transition={{
duration:4,
repeat:Infinity,
delay:1
}}

className="
absolute
bottom-20
left-0
bg-zinc-900
border
border-zinc-700
px-5
py-3
rounded-xl
shadow-xl
"

>

Spring Boot

</motion.div>



</motion.div>



</div>


</section>

);

}