import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function move(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 150,
      }}
      className="
      fixed
      top-0
      left-0
      w-[400px]
      h-[400px]
      rounded-full
      pointer-events-none
      z-0
      blur-[120px]
      bg-blue-500/20
      "
    />
  );
}