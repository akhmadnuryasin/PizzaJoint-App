import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
        repeatType: "reverse",
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate="animateOne"
        className="loader"
      ></motion.div>
    </>
  );
};

export default Loader;
