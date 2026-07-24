import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";


const contacts = [

  {
    title: "Email",
    value: "gabrielgomes2171@gmail.com",
    icon: FaEnvelope,
    link: "mailto:gabrielgomes2171@gmail.com",
    color: "text-blue-500",
    hover: "hover:border-blue-500",
  },


  {
    title: "WhatsApp",
    value: "(81) 98289-2353",
    icon: FaWhatsapp,
    link: "https://wa.me/5581982892353",
    color: "text-green-500",
    hover: "hover:border-green-500",
  },


  {
    title: "GitHub",
    value: "github.com/gabrielgomes2171-web",
    icon: FaGithub,
    link: "https://github.com/gabrielgomes2171-web",
    color: "text-white",
    hover: "hover:border-white",
  },


  {
    title: "LinkedIn",
    value: "Gabriel Gomes",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/",
    color: "text-blue-500",
    hover: "hover:border-blue-500",
  },

];



export function Contact() {


return (

<section

id="contact"

className="
relative
overflow-hidden
py-24
px-6
"

>


<Reveal>

<div
className="
max-w-5xl
mx-auto
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

Entre em{" "}

<span className="text-blue-500">
Contato
</span>

</h2>



<p

className="
mt-5
mb-16
text-zinc-400
max-w-2xl
mx-auto
leading-8
"

>

Estou em busca da minha primeira oportunidade como Desenvolvedor.
Caso queira conhecer meus projetos ou conversar sobre tecnologia,
fique à vontade para entrar em contato.

</p>


</motion.div>







{/* CARDS */}


<div

className="
grid
md:grid-cols-2
gap-8
"

>


{contacts.map((item,index)=>{


const Icon = item.icon;


return (


<motion.a


key={item.title}


href={item.link}

target={
item.title === "Email"
?
undefined
:
"_blank"
}

rel="noopener noreferrer"


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

scale:1.03,
y:-8

}}



className={`
group
relative
overflow-hidden
flex
items-center
gap-5
rounded-3xl
bg-zinc-900/60
backdrop-blur-xl
border
border-white/10
p-6
shadow-2xl
transition
${item.hover}
`}

>


{/* brilho */}


<div

className="
absolute
-top-16
-right-16
w-40
h-40
bg-blue-500/20
rounded-full
blur-3xl
opacity-0
group-hover:opacity-100
transition
"

/>





<div

className={`
relative
text-4xl
${item.color}
`}

>

<Icon />

</div>





<div className="relative">

<h3

className="
text-xl
font-bold
"

>

{item.title}

</h3>



<p

className="
text-zinc-400
mt-1
"

>

{item.value}

</p>


</div>



</motion.a>


);


})}



</div>








{/* LOCALIZAÇÃO */}



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



whileHover={{

scale:1.02

}}



className="
mt-10
flex
items-center
justify-center
gap-4
rounded-3xl
bg-zinc-900/60
backdrop-blur-xl
border
border-white/10
p-6
shadow-2xl
"

>


<FaMapMarkerAlt

className="
text-red-500
text-3xl
"

/>


<div>


<h3

className="
text-xl
font-bold
"

>

Localização

</h3>



<p

className="
text-zinc-400
"

>

Caruaru • Pernambuco • Brasil

</p>


</div>


</motion.div>




</div>


</Reveal>


</section>


);


}