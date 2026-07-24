import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="
        py-24
        px-6
        bg-transparent
      "
    >

      <Reveal>

        <div className="max-w-7xl mx-auto">


          {/* Título */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              text-5xl
              font-bold
              text-center
              mb-16
            "
          >
            Sobre Mim
          </motion.h2>



          <div className="
            grid
            lg:grid-cols-2
            gap-14
            items-center
          ">


            {/* Texto */}

            <motion.div
              initial={{
                opacity:0,
                x:-50,
              }}
              whileInView={{
                opacity:1,
                x:0,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                duration:.6,
              }}
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  mb-6
                  text-blue-500
                "
              >
                Desenvolvedor Full Stack em formação
              </h3>


              <p
                className="
                  text-zinc-300
                  leading-8
                  mb-6
                "
              >
                Sou estudante do{" "}
                <strong>
                  4º período de Análise e Desenvolvimento de Sistemas
                </strong>,
                apaixonado por tecnologia, programação e desenvolvimento
                de soluções que resolvem problemas reais.
              </p>


              <p
                className="
                  text-zinc-300
                  leading-8
                  mb-6
                "
              >
                Atualmente desenvolvo projetos próprios como o{" "}
                <strong>
                  StockMoto
                </strong>
                , um sistema de gerenciamento de estoque para
                oficinas e lojas de motopeças, e o{" "}
                <strong>
                  NexCraft
                </strong>
                , um aplicativo voltado para educação financeira
                e investimentos.
              </p>


              <p
                className="
                  text-zinc-300
                  leading-8
                "
              >
                Meu objetivo é conquistar uma oportunidade como{" "}
                <strong>
                  Desenvolvedor Full Stack ou Estagiário em Desenvolvimento
                </strong>
                , aplicando conhecimentos em Java, Spring Boot,
                React Native, TypeScript, Firebase e MySQL.
              </p>


            </motion.div>



            {/* Cards */}

            <div className="grid gap-6">


              {/* Formação */}

              <motion.div
                whileHover={{
                  y:-8,
                  scale:1.03,
                }}
                transition={{
                  duration:.3,
                }}
                className="
                  glass
                  rounded-3xl
                  p-6
                  flex
                  gap-5
                  items-start
                "
              >

                <FaUserGraduate
                  size={42}
                  className="text-blue-500"
                />


                <div>

                  <h4
                    className="
                      text-xl
                      font-semibold
                      mb-2
                    "
                  >
                    Formação
                  </h4>


                  <p
                    className="
                      text-zinc-400
                      leading-7
                    "
                  >
                    Estudante de ADS na UNINASSAU Caruaru,
                    focado em desenvolvimento Web, Mobile e APIs.
                  </p>


                </div>

              </motion.div>




              {/* Tecnologias */}

              <motion.div
                whileHover={{
                  y:-8,
                  scale:1.03,
                }}
                transition={{
                  duration:.3,
                }}
                className="
                  glass
                  rounded-3xl
                  p-6
                  flex
                  gap-5
                  items-start
                "
              >

                <FaLaptopCode
                  size={42}
                  className="text-green-500"
                />


                <div>

                  <h4
                    className="
                      text-xl
                      font-semibold
                      mb-2
                    "
                  >
                    Tecnologias
                  </h4>


                  <p
                    className="
                      text-zinc-400
                      leading-7
                    "
                  >
                    Java, Spring Boot, React Native,
                    TypeScript, Firebase, MySQL,
                    Git, GitHub e Figma.
                  </p>


                </div>


              </motion.div>




              {/* Objetivo */}

              <motion.div
                whileHover={{
                  y:-8,
                  scale:1.03,
                }}
                transition={{
                  duration:.3,
                }}
                className="
                  glass
                  rounded-3xl
                  p-6
                  flex
                  gap-5
                  items-start
                "
              >

                <FaRocket
                  size={42}
                  className="text-yellow-500"
                />


                <div>

                  <h4
                    className="
                      text-xl
                      font-semibold
                      mb-2
                    "
                  >
                    Objetivo
                  </h4>


                  <p
                    className="
                      text-zinc-400
                      leading-7
                    "
                  >
                    Conquistar minha primeira oportunidade
                    na área de desenvolvimento de software
                    e evoluir constantemente como
                    desenvolvedor Full Stack.
                  </p>


                </div>


              </motion.div>



            </div>


          </div>


        </div>


      </Reveal>


    </section>
  );
}