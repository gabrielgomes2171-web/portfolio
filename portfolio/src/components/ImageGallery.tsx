import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({
  images,
  title,
}: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((old) => (old + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const changeImage = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full">

      {/* Celular */}

      <div className="flex justify-center">

        <motion.div
          whileHover={{
            rotateX: 6,
            rotateY: -6,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="relative"
        >

          {/* Glow */}

          <div className="absolute -inset-10 bg-blue-500/20 blur-[90px] rounded-full" />

          {/* Corpo */}

          <div
            className="
              relative
              w-[330px]
              h-[680px]
              rounded-[55px]
              bg-gradient-to-b
              from-zinc-700
              via-zinc-900
              to-black
              p-2
              shadow-[0_30px_80px_rgba(0,0,0,.5)]
            "
          >

            {/* Tela */}

            <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-black">

              {/* Dynamic Island */}

              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-full z-20 border border-zinc-700" />

              {/* Reflexo */}

              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent z-10 pointer-events-none" />

              <AnimatePresence mode="wait">

                <motion.img
                  key={images[current]}
                  src={images[current]}
                  alt={title}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -50,
                  }}
                  transition={{
                    duration: .45,
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </AnimatePresence>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Indicadores */}

      <div className="flex justify-center gap-2 mt-6">

        {images.map((_, index) => (

          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-blue-500 w-10"
                : "bg-zinc-500 w-2"
            }`}
          />

        ))}

      </div>

      {/* Miniaturas */}

      <div className="flex justify-center flex-wrap gap-4 mt-8">

        {images.map((image, index) => (

          <motion.button
            key={image}
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            whileTap={{
              scale: .95,
            }}
            onClick={() => changeImage(index)}
            className={`overflow-hidden rounded-2xl border-4 transition-all duration-300 ${
              current === index
                ? "border-blue-500 shadow-[0_0_20px_#3b82f6]"
                : "border-zinc-700"
            }`}
          >

            <img
              src={image}
              alt={title}
              className="w-20 h-40 object-cover"
            />

          </motion.button>

        ))}

      </div>

    </div>
  );
}