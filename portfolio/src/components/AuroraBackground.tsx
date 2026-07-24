import { motion } from "framer-motion";

const stars = Array.from({ length: 120 }).map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 3,
}));

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-zinc-950">

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-blue-950/30 to-zinc-950" />

      {/* Aurora Azul */}
      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-60, 40, -60],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute w-[800px] h-[800px] rounded-full blur-[220px] bg-blue-500/25 top-[-250px] left-[-200px]"
      />

      {/* Aurora Roxa */}
      <motion.div
        animate={{
          x: [150, -80, 150],
          y: [60, -80, 60],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute w-[700px] h-[700px] rounded-full blur-[220px] bg-purple-500/20 bottom-[-250px] right-[-150px]"
      />

      {/* Aurora Ciano */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
        }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[200px] bg-cyan-400/15 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Estrelas */}
      {stars.map((star, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
          style={{
            position: "absolute",
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
          }}
          className="rounded-full bg-white shadow-[0_0_8px_white]"
        />
      ))}

    </div>
  );
}