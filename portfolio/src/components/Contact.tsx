import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-24 px-6"
    >
      <Reveal>
        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center"
          >
            Contato
          </motion.h2>

          <p className="text-zinc-400 text-center mt-4 mb-16 max-w-2xl mx-auto">
            Estou em busca da minha primeira oportunidade como Desenvolvedor.
            Caso tenha interesse em conversar ou conhecer meus projetos,
            entre em contato.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Email */}

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="mailto:gabrielgomes2171@gmail.com"
              className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <FaEnvelope className="text-4xl text-blue-500" />

              <div>
                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-zinc-400">
                  em breve...
                </p>
              </div>

            </motion.a>

            {/* WhatsApp */}

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://wa.me/5581982892353"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-500 transition"
            >
              <FaWhatsapp className="text-4xl text-green-500" />

              <div>
                <h3 className="font-bold text-xl">
                  WhatsApp
                </h3>

                <p className="text-zinc-400">
                  (81) 98289-2353
                </p>
              </div>

            </motion.a>

            {/* GitHub */}

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://github.com/gabrielgomes2171-web"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-white transition"
            >
              <FaGithub className="text-4xl" />

              <div>
                <h3 className="font-bold text-xl">
                  GitHub
                </h3>

                <p className="text-zinc-400">
                  github.com/gabrielgomes2171-web
                </p>
              </div>

            </motion.a>

            {/* LinkedIn */}

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://www.linkedin.com/in/gabriel-gomes-da-silva-5a5182200/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <FaLinkedin className="text-4xl text-blue-500" />

              <div>
                <h3 className="font-bold text-xl">
                  LinkedIn
                </h3>

                <p className="text-zinc-400">
                  Gabriel Gomes
                </p>
              </div>

            </motion.a>

          </div>

          {/* Localização */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center justify-center gap-4"
          >
            <FaMapMarkerAlt className="text-red-500 text-3xl" />

            <div>
              <h3 className="text-xl font-bold">
                Localização
              </h3>

              <p className="text-zinc-400">
                Caruaru • Pernambuco • Brasil
              </p>
            </div>

          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}