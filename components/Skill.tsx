import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        src={urlFor(skill?.image).url()}
        alt="skills"
        className="rounded-full border border-gray-500 object-contain 
                w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] filter group-hover:grayscale
                    transition duration-300 ease-in-out p-2"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 
                transition duration-300 ease-in-out rounded-full z-0
                  group-hover:bg-white w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] "
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-bold text-black opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
