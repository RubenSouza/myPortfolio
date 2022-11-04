import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Teste({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen text-center items-center max-w-7xl px-10 mx-auto
      justify-evenly md:text-left md:flex-row relative"
    >
      <h3 className="absolute top-20 sm:pt-0 md:top-16 uppercase tracking-[18px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://i.pinimg.com/originals/42/67/0f/42670f47a82f50606c432a4ec18c6369.jpg"
        className="md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover
           md:rounded-lg md:w-56 md:h-[300px] lg:w-[300px] lg:h-[400px] relative top-14"
      />
      <div className="space-y-6 px-0 md:px-10">
        <h4 className="text-3xl font-semibold xl:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-[14px] xl:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minima
          assumenda ratione veritatis saepe, ex nemo aut labore eligendi
          inventore quae distinctio recusandae unde minus nulla. Dicta odio
          explicabo, beatae suscipit deserunt quibusdam excepturi laboriosam
          incidunt voluptatem. Rerum consectetur odio sit dolore perferendis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          hic? Nihil laboriosam aspernatur maxime illo ipsa. Quibusdam facilis
          soluta, quasi quo aliquid sed? Beatae numquam aut quisquam laboriosam
          adipisci ipsam?
        </p>
      </div>
    </motion.div>
  );
}
