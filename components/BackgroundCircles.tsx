import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center mt-28"
    >
      <div className="absolute border border-[#333333]  rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px] mt-60 animate-ping " />
      <div className="absolute border border-[#333333] opacity-20 rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] mt-60 " />
      <div className="absolute border border-[#333333] opacity-20 rounded-full h-[400px] w-[400px] md:h-[400px] md:w-[400px] mt-60 " />
      <div className="rounded-full border border-[#F7AB0A] opacity-30 mt-60 h-[500px] w-[500px] md:h-[600px] md:w-[600px] animate-pulse absolute" />
      <div className="rounded-full border border-[#333333] h-[550px] w-[550px] md:h-[650px] md:w-[650px] absolute mt-60 opacity-20" />
    </motion.div>
  );
}
