import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = { skills: SkillType[] };

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center items-center max-w-7xl xl:px-10 
        min-h-screen px-10 mx-auto relative justify-center"
    >
      <h3
        className="absolute top-20 sm:pt-0 md:top-16 uppercase tracking-[18px]
             text-gray-500 text-2xl"
      >
        Skills
      </h3>
      <h3 className="absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 mt-20 md:pt-24">
        {skills.map(skill => {
          return <Skill key={skill._id} skill={skill} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
