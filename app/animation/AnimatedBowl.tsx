'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface AnimatedBowlProps {
  libraries: string[];
}

const AnimatedBowl: React.FC<AnimatedBowlProps> = ({ libraries }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateBowl = async () => {
      await controls.start({
        y: 0,
        transition: { duration: 2 },
      });
    };

    animateBowl();
  }, [controls]);

  return (
    <div style={{ position: "relative", width: "200px", height: "200px" }}>
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "brown",
          overflow: "hidden",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={controls}
        initial={{ y: "-100%" }}
      />
      {libraries.map((library, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            background: "blue",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{
            opacity: 1,
            y: "50%",
            transition: { delay: index * 0.1, duration: 0.5 },
          }}
        >
          {library}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBowl;
