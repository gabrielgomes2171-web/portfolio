import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";


const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Experiência",
    href: "#experience",
  },
  {
    name: "Contato",
    href: "#contact",
  },
];


export function Navbar(){

  const [scrolled,setScrolled] = useState(false);

  const [active,setActive] = useState("#home");

  const [open,setOpen] = useState(false);



  useEffect(()=>{


    const handleScroll = ()=>{

      setScrolled(window.scrollY > 40);


      links.forEach((link)=>{

        const section = document.querySelector(
          link.href
        );


        if(section){

          const top =
          section.getBoundingClientRect().top;


          if(top <= 150){

            setActive(link.href);

          }

        }

      });

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);



  return (

    <motion.nav

      initial={{
        y:-100,
        opacity:0,
      }}

      animate={{
        y:0,
        opacity:1,
      }}

      transition={{
        duration:.6,
      }}


      className={`
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50

        w-[90%]
        max-w-6xl

        rounded-2xl

        border

        transition-all
        duration-500

        ${
          scrolled
          ?
          "bg-zinc-950/80 border-zinc-800 shadow-xl"
          :
          "bg-white/10 border-white/20"
        }

        backdrop-blur-xl

      `}

    >


      <div className="
        flex
        items-center
        justify-between
        px-6
        py-4
      ">



        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          "
        >

          <span className="text-blue-500">
            G
          </span>
          Gomes

        </a>




        {/* Desktop */}


        <div className="
          hidden
          md:flex
          items-center
          gap-8
        ">


          {links.map((link)=>(


            <a

              key={link.href}

              href={link.href}

              className="
              relative
              text-sm
              text-zinc-300
              hover:text-white
              transition
              "

            >

              {link.name}


              {
                active === link.href &&
                (

                  <motion.span

                    layoutId="active"

                    className="
                    absolute
                    left-0
                    -bottom-2

                    h-[2px]
                    w-full

                    bg-blue-500
                    "

                  />

                )

              }


            </a>


          ))}



          <a
            href="https://github.com/gabrielgomes2171-web"
            target="_blank"
            className="
            text-xl
            hover:text-blue-500
            transition
            "
          >
            <FaGithub/>
          </a>



          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="
            text-xl
            hover:text-blue-500
            transition
            "
          >
            <FaLinkedin/>
          </a>


        </div>




        {/* Mobile Button */}


        <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          text-2xl
          "

        >

          {
            open
            ?
            <FaTimes/>
            :
            <FaBars/>
          }


        </button>



      </div>





      {/* Mobile Menu */}


      {

      open && (

        <motion.div

          initial={{
            opacity:0,
            height:0,
          }}

          animate={{
            opacity:1,
            height:"auto",
          }}

          className="
          md:hidden
          px-6
          pb-6
          "

        >


          <div className="
          flex
          flex-col
          gap-5
          ">


          {links.map((link)=>(

            <a

              key={link.href}

              href={link.href}

              onClick={()=>setOpen(false)}

              className="
              text-zinc-300
              hover:text-blue-500
              "

            >

              {link.name}

            </a>

          ))}


          </div>


        </motion.div>

      )

      }


    </motion.nav>


  );

}